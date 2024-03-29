import {RouteProps} from "react-router-dom";
import {HomePage} from "@/pages/home";
import {LessonPage} from "@/pages/lessons";

export enum AppRoutes {
    HOME = 'home',
    QURAN = 'quran',
    LESSONS = 'lessons',
    VIDEO = 'video'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.QURAN]: 'quran',
    [AppRoutes.LESSONS]: '/lessons',
    [AppRoutes.VIDEO]: 'video',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage/>
    },
    [AppRoutes.QURAN]: {
        path: RoutePath.quran,
        element: <LessonPage/>
    },
    [AppRoutes.LESSONS]: {
        path: RoutePath.lessons,
        element: <LessonPage/>
    },
    [AppRoutes.VIDEO]: {
        path: RoutePath.video,
        element: <LessonPage/>
    }
}
