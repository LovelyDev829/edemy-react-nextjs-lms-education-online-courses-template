import Cors from 'cors'
import jwt from 'jsonwebtoken'
import initMiddleware from '@/lib/init-middleware'
import { users as User } from '@/models/index'

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    })
)

export default async (req, res) => {
    if(!("authorization" in req.headers)){
        return res.status(401).send("No autorization token");
    }
    await cors(req, res)
    let { as_teacher_apply, as_teacher_req_desc, number } = req.body
    try {
        const {userId} = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        await User.update(
            {
                as_teacher_apply,
                as_teacher_req_desc,
                phone: number
            },
            {
                where: {
                    id: userId
                }
            }
        )
        res.send("Your request sent successfully! You will get confirmation soon.")
        
    } catch (error) {
        console.log(error.message)
        res.send("Error on apply! Try again.")
    }
}