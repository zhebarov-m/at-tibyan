import {RoutePath} from "@/shared/config/routeConfig/routeConfig.tsx";
import {IoHome} from "react-icons/io5";
import {FaBookQuran} from "react-icons/fa6";
import {MdPlayLesson} from "react-icons/md";
import {RiFolderVideoFill} from "react-icons/ri";
import {ReactNode} from "react";

interface INavLink {
    path: string,
    title: string,
    icon: ReactNode
}

export const NAV_LINKS: INavLink[] = [
    {
        path: RoutePath.home,
        title: 'Главная',
        icon: <IoHome className={`text-[24px]`}/>
    },
    {
        path: RoutePath.quran,
        title: 'Коран',
        icon: <FaBookQuran className={`text-[24px]`}/>
    },
    {
        path: RoutePath.lessons,
        title: 'Уроки',
        icon: <MdPlayLesson className={`text-[24px]`}/>
    },
    {
        path: RoutePath.video,
        title: 'Видео',
        icon: <RiFolderVideoFill className={`text-[24px]`}/>
    },
]
