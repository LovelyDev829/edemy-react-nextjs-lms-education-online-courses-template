import Stripe from 'stripe'
import { v4 as uuidv4 } from 'uuid'
import jwt from 'jsonwebtoken'
import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import { enroled_courses as Enroled_courses } from '@/models/index'

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    })
)

export default async (req, res) => {
    await cors(req, res)
    if(!("authorization" in req.headers)){
        return res.status(401).json({message: "No autorization token"});
    }
    const { paymentData } = req.body
    // console.log(req.body)

    try {
        const {userId} = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        const prevCustomer = await stripe.customers.list({
            email: paymentData.email,
            limit: 1
        })
        const isExistingCustomer = prevCustomer.data.length > 0
        let newCustomer
        if(!isExistingCustomer){
            newCustomer = await stripe.customers.create({
                email: paymentData.email,
                source: paymentData.id
            })
        }
        const customer = (isExistingCustomer && prevCustomer.data[0].id) || newCustomer.id
        await stripe.charges.create({
            currency: "usd",
            amount: paymentData.stripeTotal,
            receipt_email: paymentData.email,
            customer,
            description: `Checkout | ${paymentData.email} | ${paymentData.id} | CourseID ${paymentData.courseId}`
        },{
            idempotencyKey: uuidv4()
        })

        await Enroled_courses.create({
            payment_email: paymentData.email,
            cost: paymentData.stripeTotal,
            userId: userId,
            courseId: paymentData.courseId
        })
        res.send("Checkout successful!")
    } catch (error) {
        console.error(error)
        res.send("Error proccessing charge")
    }
}