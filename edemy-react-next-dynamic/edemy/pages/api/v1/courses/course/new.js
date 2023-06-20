import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import jwt from 'jsonwebtoken'
import { courses as Course } from '@/models/index'

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
    
    const {
        title,
        overview,
        price,
        published,
        duration,
        lessons,
        category,
        profile,
        cover,
        preview,
        course_preview_video
    } = req.body

    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        await Course.create({
            title,
            overview,
            price,
            published,
            duration,
            lessons,
            category,
            profilePhoto: profile,
            coverPhoto: cover,
            course_preview_img: preview,
            course_preview_video,
            userId
        })

        res.send("Congratulations! Successfully created the course.")
    } catch (error) {
        console.log(error)
    }
}
