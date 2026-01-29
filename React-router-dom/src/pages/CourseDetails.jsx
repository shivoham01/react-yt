import { useParams } from "react-router-dom"

const CourseDetails = () => {
    const params = useParams();

    return (
            <h1>{params.id} Course</h1>
    )
}

export default CourseDetails