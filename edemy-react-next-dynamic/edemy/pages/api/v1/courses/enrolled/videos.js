import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import { 
    videos as Video,
    courses as Course
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

    const {courseId} = req.query
    // console.log(courseId)

    try {
        const videos = await Video.findAll({
            order: [
                ['createdAt', 'ASC']
            ],
            where: {
                courseId: courseId
            },
            include: [{
                model: Course, as: 'course',
                attributes: ['id', 'title', 'profilePhoto']
            }]
        })

        res.send({videos})
    } catch (error) {
        console.log(error)
        res.send(error)
    }

}