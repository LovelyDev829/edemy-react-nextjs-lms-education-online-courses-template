import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import jwt from 'jsonwebtoken'
import { 
    courses as Course,
    users as User,
    enroled_courses as Enroled_courses
} from '@/models/index'

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
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        const enrolled = await Enroled_courses.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                userId: userId
            },
            include: [{
                model: User, as: 'user',
                attributes: ['id', 'name', 'profilePhoto']
            },{
                model: Course, as: 'course',
                // separate: true,
                // include: [{
                //     model: Enroled_courses, as: 'enroled_courses',
                //     attributes: ['id']
                // }]
            }]
        })

        res.send({enrolled})
    } catch (error) {
        console.log(error)
    }

}