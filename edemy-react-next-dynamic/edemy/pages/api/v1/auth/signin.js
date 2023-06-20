import Cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
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
    await cors(req, res)
    const { email, password } = req.body
    try {
        if (!isEmail(email)){
            return res.status(422).send("Email should be a valid email address")
        }

        const user = await User.findOne({
            where: { email: email }
        })

        if(!user) {
            return res.status(404).send("User account does not exist");
        }

        if(!user.active){
            return res.status(404).send("This account is temporarily disabled, please contact the support email");
        }

        const passwordsMatch = await bcrypt.compare(password, user.password)
        if (passwordsMatch){
            const token = jwt.sign({ userId: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'});
            res.status(200).send(token);
        } else {
            res.status(401).send("Password is not correct");
        }
    } catch (error) {
        // console.error(error)
        res.status(500).send("Error logging in user")
    }
}