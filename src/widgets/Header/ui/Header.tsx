import {Navbar} from "@/widgets/Navbar/ui/Navbar.tsx";
import {Link} from "react-router-dom";
import {AppRoutes} from "@/shared/config/routeConfig/routeConfig.tsx";
import {useAppDispatch, useAppSelector} from "@/app/providers/StoreProvider/config/hooks.ts";
import {BurgerIcon, CrossIcon} from "@/widgets/Header";
import {selectCollapse, setCollapsed} from "@/widgets/Sidebar";

export const Header = () => {
    const collapsed = useAppSelector(selectCollapse)
    const dispatch = useAppDispatch()

    console.log(collapsed)
    const onToggleMenu = () => {
        dispatch(setCollapsed(!collapsed))
    }

    return (
        <header className="shadow-md dark:bg-gray-800 dark:text-white fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-around p-2.5 2xl:container mx-auto">
                <div className="logo">
                    <Link to={AppRoutes.HOME} className="flex-col justify-center font-bold">
                    <span className="flex items-center gap-0.5 text-3xl">
                        AT <img src="/src/shared/assets/icons/logo.png" alt="" width={12}/> TIBYAN
                    </span>
                        <p className="lg: text-[#009c9c]">ЦЕНТР ИЗУЧЕНИЯ КОРАНА</p>
                    </Link>
                </div>
                <Navbar className="hidden"/>
                <div className="">
                    <button onClick={onToggleMenu}>
                        {collapsed ? CrossIcon : BurgerIcon}
                    </button>
                </div>
            </div>
        </header>
    );
};

