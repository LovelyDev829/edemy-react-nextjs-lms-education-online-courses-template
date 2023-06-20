import React from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { Alert } from 'reactstrap'
import baseUrl from '@/utils/baseUrl'
import { Spinner } from 'reactstrap'
import toast from 'react-hot-toast'
import catchErrors from '@/utils/catchErrors'
import PageBanner from '@/components/Common/PageBanner'
import Link from '@/utils/ActiveLink'

const INIT_VIDEO = {
    video_url: '',
    order: 0,
    name: '',
    description: '',
    courseId: ''
}

const UploadCourseVideo = ({ courses }) => {
    // console.log(courses)
    const { token } = parseCookies()

    const [video, setVideo] = React.useState(INIT_VIDEO)
    const [loading, setLoading] = React.useState(false)
    const [disabled, setDisabled] = React.useState(true)

    React.useEffect(() => {
        const {order, video_url, name} = video
        const isVideo = Object.values({
            video_url,
            name,
            order
        }).every(el => Boolean(el));
        isVideo ? setDisabled(false) : setDisabled(true);
    }, [video])

    const handleVideoUpload = async () => {
        // console.log(post.file_url)
        const data = new FormData()
        data.append('file', video.video_url)
        data.append('upload_preset', 'vikingsvideo')
        data.append('cloud_name', 'dev-empty')
        const response = await axios.post(process.env.CLOUDINARY_VIDEO_URL, data);
        const mediaUrl = response.data.url
        return mediaUrl
    }

    const handleChange = e => {
        // console.log(d.value)
        const { name, value, files } = e.target
        if(name === 'video_url'){
            const videoSize = files[0].size / 1024 / 1024
            if(videoSize > 20){
                addToast('The video size greater than 20 MB. Make sure less than 20 MB.', { 
                    appearance: 'error'
                })
                e.target.value = null
                return
            }
            setVideo(prevState => ({ ...prevState, video_url: files[0]}))
        } else {
            setVideo(prevState => ({ ...prevState, [name]: value }))
        }
        // console.log(video);
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        try {
            let videoUrl = ''
            if(video.video_url){
                const videoUpload = await handleVideoUpload()
                videoUrl = videoUpload.replace(/^http:\/\//i, 'https://');
            }

            // console.log(videoUrl)

            const url = `${baseUrl}/api/v1/courses/course/video-upload`
            const { order, name, description, courseId } = video
            const payload = { 
                order,
                name,
                description, 
                courseId, 
                videoUrl
            }

            const response = await axios.post(url, payload, {
                headers: {Authorization: token}
            })

            console.log(response.data)

            setLoading(false);
            toast.success(response.data);
            setVideo(INIT_VIDEO)
        } catch (err) {
            catchErrors(err, setError)
            toast.error(error);
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <PageBanner 
                pageTitle="Upload Course Video" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Upload Course Video" 
            /> 
 
            <div className="ptb-100">
                <div className="container">
                    {courses.length == 0 && (
                        <Alert color="danger" className="text-center">
                            You have to create course first here <Link href="/teacher/course/create"><a>Create Course</a></Link>
                        </Alert>
                    )}

                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <div className="td-sidebar">
                                <ul>
                                    <li>
                                        <Link href="/teacher/courses" activeClassName="active">
                                            <a>My Courses</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/course/create" activeClassName="active">
                                            <a>Create A Course</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/courses/course-edit" activeClassName="active">
                                            <a>Edit My Course</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/course/upload-course-video" activeClassName="active">
                                            <a>Upload Course Video</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-8">
                            <div className="border-box">
                                <form onSubmit={handleSubmit}>
                                    {loading && (
                                        <h3 className="loading-spinner">
                                            <div className="d-table">
                                                <div className="d-table-cell"> 
                                                    <Spinner color="danger" /> Vide uploading...
                                                </div>
                                            </div>
                                        </h3>
                                    )}

                                    <div className="form-group">
                                        <label>Select Course</label>
                                        <select onChange={handleChange} name="courseId" className="form-control">
                                            <option>Select Course</option>
                                            {courses.map(course => (
                                                <option value={course.id} key={course.id}>
                                                    {course.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Video Order (1 or 2...)</label>
                                        <input 
                                            type="number" 
                                            placeholder="Order Number" 
                                            className="form-control" 
                                            name="order"
                                            value={video.order}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="Enter course title" 
                                            className="form-control" 
                                            name="name"
                                            value={video.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Deescription</label>
                                        <input 
                                            type="text" 
                                            placeholder="Enter course title" 
                                            className="form-control" 
                                            name="description"
                                            value={video.description}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Video</label>

                                        <br />

                                        <input 
                                            type="file" 
                                            name="video_url" 
                                            accept="video/*"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <br />

                                    <button 
                                        className="default-btn" 
                                        disabled={disabled || loading}
                                    >
                                        <i className='flaticon-right-chevron'></i>
                                        Upload
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

UploadCourseVideo.getInitialProps = async ctx => {
    const { token } = parseCookies(ctx)
    if(!token){
        return {courses: []}
    }

    const payload = {
        headers: {Authorization: token}
    }

    const url = `${baseUrl}/api/v1/courses/my-courses`
    const response = await axios.get(url, payload)
    // console.log(response.data)
    return response.data
}

export default UploadCourseVideo
