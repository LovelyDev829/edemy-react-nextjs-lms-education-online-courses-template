import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import { 
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
    const { id } = req.query

    // console.log(id)
    try {
        const enrolled = await Enroled_courses.findAndCountAll({
            where: { courseId: id },
        })

        // console.log(course)

        res.send(enrolled.count)
    } catch (error) {
        // console.log(error)
        res.send(error.message)
    }
}