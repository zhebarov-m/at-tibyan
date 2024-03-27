import {NavLink} from "react-router-dom";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig.tsx";
import {customClasses} from "@/shared/lib/customClasses/customClasses.tsx";

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const {className} = props

    return (
        <nav className={customClasses('', {}, [className!])}>
            <div className="flex gap-4">
                <NavLink to={RoutePath.home}>Главная</NavLink>
                <NavLink to={RoutePath.lessons}>Уроки</NavLink>
            </div>
        </nav>
    );
};

