import {RouteProps} from "react-router-dom";
import {HomePage} from "@/pages/home";
import {LessonPage} from "@/pages/lessons";

export enum AppRoutes {
    HOME = 'home',
    LESSONS = 'lessons'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.LESSONS]: '/lessons'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage/>
    },
    [AppRoutes.LESSONS]: {
        path: RoutePath.lessons,
        element: <LessonPage/>
    }
}
