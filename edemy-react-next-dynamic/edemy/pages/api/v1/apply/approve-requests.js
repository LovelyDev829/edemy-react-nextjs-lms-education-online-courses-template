import Cors from 'cors'
import initMiddleware from '../../../../lib/init-middleware'
import { users as User } from '../../../../models'

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
    const { userId } = req.body
    try {
        await User.update(
            {
                as_teacher_confirmed: true,
                as_teacher_confirmed_at: Date.now(),
                role: 'teacher'
            },
            {
                where: {
                    id: userId
                }
            }
        )
    
        // console.log(pendingRequests)
        res.send("Approved")
    } catch (error) {
        console.log(error)
        res.send("Error! Try again")
    }
}