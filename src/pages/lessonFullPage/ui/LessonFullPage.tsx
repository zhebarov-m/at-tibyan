import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {ILesson} from "@/widgets/LessonList/model/types/types.ts";

const API_URL_LESSON = 'https://54405e419e25a05c.mokky.dev/lessons'

const LessonFullPage = () => {
    const {id} = useParams()
    const [lesson, setLesson] = useState<ILesson>()

    async function fetchLessonById() {
        const {data} = await axios.get(`${API_URL_LESSON}/${id}`)
        setLesson(data)
    }

    useEffect(() => {
        fetchLessonById()
    }, []);

    return (
        <div>
            <h1>{lesson?.title}</h1>
            <p>{lesson?.description}</p>
        </div>
    );
};

export default LessonFullPage;
