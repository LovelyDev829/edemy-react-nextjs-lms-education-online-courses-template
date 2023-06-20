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
        id,
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
        await Course.update(
            {
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
                course_preview_video
            },
            {
                where: {id: id}
            }
        )

        res.send("Congratulations! Successfully updated the course.")
    } catch (error) {
        console.log(error)
    }
}