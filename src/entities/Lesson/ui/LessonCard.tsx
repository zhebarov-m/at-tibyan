import {ILesson} from "@/widgets/LessonList/model/types/types.ts";

import styles from './LessonCard.module.css'
import {GoBookmark, GoBookmarkFill} from "react-icons/go";
import {useState} from "react";
import {Link} from "react-router-dom";
import {customClasses} from "@/shared/lib/customClasses/customClasses.tsx";

interface LessonCardProps {
    lesson: ILesson
}

const LessonCard = (props: LessonCardProps) => {
    const {lesson} = props
    const [isFavorites, setIsFavorites] = useState(false)

    const handleClickFavorites = () => {
        setIsFavorites(prevState => !prevState)
    }

    return (
        <div className={customClasses(styles.cardContainer, {}, ['dark:bg-gray-800 dark:text-white'])}>
            <h1>
                <Link to={`/lessons/${lesson.id}`}>
                    {lesson.title}
                </Link>
            </h1>
            <p className={styles.description}>{lesson.description}</p>
            <span className={styles.bookmark} onClick={handleClickFavorites}>
                {isFavorites ? <GoBookmarkFill style={{color: '#009c9c'}}/> : <GoBookmark style={{color: '#009c9c'}}/>}
            </span>
        </div>
    );
};

export default LessonCard;
