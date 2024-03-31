import {useEffect, useState} from "react";
import {ILesson} from "@/widgets/LessonList/model/types/types.ts";
import axios from "axios";
import LessonCard from "@/entities/Lesson/ui/LessonCard.tsx";

const API_URL_LESSONS = 'https://54405e419e25a05c.mokky.dev/lessons'

const LessonList = () => {
    const [lessons, setLesson] = useState<ILesson[]>([])

    async function fetchLesson() {
        const {data} = await axios.get(API_URL_LESSONS)
        setLesson(data)
    }

    useEffect(() => {
        fetchLesson()
    }, []);

    return (
        <div className="xr:grid-cols-3 xr:w-[1000px] grid grid-cols-1 w-[600px]">
            {lessons?.map((lesson) => <LessonCard key={lesson.id} lesson={lesson}/>)}
        </div>
    );
};

export default LessonList;
