import {useAppSelector} from "@/app/providers/StoreProvider/config/hooks.ts";
import {selectCollapse} from "@/widgets/Sidebar/model/slices/sidebarSlice.ts";
import {IoHome} from "react-icons/io5";
import {FaBookQuran} from "react-icons/fa6";
import {NavLink} from "react-router-dom";
import {MdPlayLesson} from "react-icons/md";
import {RiFolderVideoFill} from "react-icons/ri";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig.tsx";
import styles from './Sidebar.module.css'

export const Sidebar = () => {
    const collapsed = useAppSelector(selectCollapse)

    return (
        <div
            className={collapsed
                ? `w-full bg-[#fff] shadow-2xl
                border-2 border-[#009c9c60]
                h-[100vh] absolute transition-all
                left-0 z-10 xl:w-80 flex
                 md:w-[50%]`
                :
                `w-0 xl:w-20 bg-[#fff] border-2
                border-[#009c9c60] transition-all
                z-10 flex justify-center absolute
                h-[100vh] left-[-274px]
                xl:left-0`}
        >
            <div className={`${styles.navLinks} flex flex-col ${collapsed ? 'text-[16px]' : 'text-[13px]'}`}
                 style={{fontFamily: 'Montserrat'}}>
                <NavLink to={RoutePath.home}
                         className={collapsed ? `flex items-center gap-1 p-2.5` : `flex flex-col items-center gap-1 p-2.5`}>
                    <span><IoHome className={`text-[24px]`}/></span> Главная
                </NavLink>
                <NavLink to={RoutePath.quran}
                         className={collapsed ? `flex items-center gap-1 p-2.5` : `flex flex-col items-center gap-1 p-2.5`}>
                    <span><FaBookQuran className={`text-[24px]`}/></span> Коран
                </NavLink>
                <NavLink to={RoutePath.lessons}
                         className={collapsed ? `flex items-center gap-1 p-2.5` : `flex flex-col items-center gap-1 p-2.5`}>
                    <span><MdPlayLesson className={`text-[24px]`}/></span> Уроки
                </NavLink>
                <NavLink to={RoutePath.video}
                         className={collapsed ? `flex items-center gap-1 p-2.5` : `flex flex-col items-center gap-1 p-2.5`}>
                    <span><RiFolderVideoFill className={`text-[24px]`}/></span> Видео
                </NavLink>
            </div>
        </div>
    );
};

