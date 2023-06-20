import Cors from 'cors'
import { Op } from "sequelize"
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
    if(!("authorization" in req.headers)){
        return res.status(401).json({message: "No autorization token"});
    }
    
    try {
        const pendingRequests = await User.findAll({
            where: {
                [Op.and]: [
                    { as_teacher_apply: true},
                    { as_teacher_confirmed: null}
                ]
            }
        })
    
        // console.log(pendingRequests)
        res.send({pendingRequests: pendingRequests})
    } catch (error) {
        console.log(error)
        res.send("Error! Try again")
    }
}