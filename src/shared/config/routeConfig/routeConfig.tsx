import {RouteProps} from "react-router-dom";
import {HomePage} from "@/pages/home";
import {LessonPage} from "@/pages/lessons";
import {SurahPage} from "@/pages/surah";
import {LessonFullPage} from "@/pages/lessonFullPage";


export enum AppRoutes {
    HOME = 'home',
    QURAN = 'quran',
    LESSONS = 'lessons',
    VIDEO = 'video',
    SURAH = 'surah',
    LESSON = 'lesson',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.QURAN]: '/quran',
    [AppRoutes.LESSONS]: '/lessons',
    [AppRoutes.VIDEO]: '/video',
    [AppRoutes.SURAH]: '/surahes/:id',
    [AppRoutes.LESSON]: '/lessons/:id'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath[AppRoutes.HOME],
        element: <HomePage/>
    },
    [AppRoutes.QURAN]: {
        path: RoutePath[AppRoutes.QURAN],
        element: <LessonPage/>
    },
    [AppRoutes.LESSONS]: {
        path: RoutePath[AppRoutes.LESSONS],
        element: <LessonPage/>
    },
    [AppRoutes.VIDEO]: {
        path: RoutePath[AppRoutes.VIDEO],
        element: <LessonPage/>
    },
    [AppRoutes.SURAH]: {
        path: RoutePath[AppRoutes.SURAH],
        element: <SurahPage/>
    },
    [AppRoutes.LESSON]: {
        path: RoutePath[AppRoutes.LESSON],
        element: <LessonFullPage />
    }
}
