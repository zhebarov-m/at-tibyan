import {useAppSelector} from "@/app/providers/StoreProvider/config/hooks.ts";
import {selectCollapse} from "@/widgets/Sidebar/model/slices/sidebarSlice.ts";
import styles from './Sidebar.module.css'
import DarkMode from "@/shared/ui/DarkMode/DarkMode.tsx";
import AppLink from "@/shared/ui/AppLink/AppLink.tsx";
import {NAV_LINKS} from "@/widgets/Sidebar";



export const Sidebar = () => {
    const collapsed = useAppSelector(selectCollapse)

    return (
        <div
            className={collapsed
                ? `w-full bg-[#fff] shadow-2xl dark:bg-gray-800
                border-2 border-[#009c9c60] 
                h-[100vh] absolute transition-all
                left-0 z-10 xl:w-[20%] xl:relative flex flex-col
                 md:w-[50%] justify-between`
                :
                `w-0 xl:w-20 bg-[#fff] border-2 dark:bg-gray-800
                border-[#009c9c60] transition-all
                z-10 flex flex-col items-center justify-between absolute
                h-[100vh] left-[-274px]
                xl:left-0`}
        >
            <div className={`${styles.navLinks} flex flex-col ${collapsed ? 'text-[16px]' : 'text-[13px]'}`}
                 style={{fontFamily: 'Montserrat'}}>
                {NAV_LINKS.map(link => (
                    <AppLink icon={link.icon} to={link.path}>{link.title}</AppLink>
                ))}
            </div>
            <div className="mb-36 flex justify-center">
                <DarkMode />
            </div>
        </div>
    );
};

