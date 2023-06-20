import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import jwt from 'jsonwebtoken'
import { videos as Video } from '@/models/index'

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

    const {order, name, description, courseId, videoUrl} = req.body

    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        await Video.create({
            order,
            name,
            description,
            video_url: videoUrl,
            courseId,
            userId
        })

        res.send("Uploaded this video")
    } catch (error) {
        console.log(error)
        res.send("Error!")
    }
}