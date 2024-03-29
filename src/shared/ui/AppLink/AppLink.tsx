import {NavLink, NavLinkProps} from "react-router-dom";
import {useAppSelector} from "@/app/providers/StoreProvider/config/hooks.ts";
import {selectCollapse} from "@/widgets/Sidebar";
import {ReactNode} from "react";

interface AppLinkProps extends NavLinkProps {
    children: ReactNode,
    icon: ReactNode,
}

const AppLink = (props: AppLinkProps) => {
    const {
        to,
        children, icon

    } = props
    const collapsed = useAppSelector(selectCollapse)

    return (
        <NavLink
            to={to}
            className={
                collapsed ?
                    `flex items-center gap-1 p-2.5 dark:text-white`
                    :
                    `flex flex-col items-center gap-1 p-2.5 dark:text-white`
            }>
            <span>{icon}</span>
            {children}
        </NavLink>
    );
};

export default AppLink;
