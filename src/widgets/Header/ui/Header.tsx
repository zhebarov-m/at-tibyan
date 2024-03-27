import {Navbar} from "@/widgets/Navbar/ui/Navbar.tsx";
import {Link} from "react-router-dom";
import {AppRoutes} from "@/shared/config/routeConfig/routeConfig.tsx";
import {useState} from "react";

export const Header = () => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggleMenu = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <header className="flex items-center justify-around p-2.5 2xl:container mx-auto shadow-md">
            <div className="logo">
                <Link to={AppRoutes.HOME} className="flex-col justify-center font-bold">
                    <span className="flex items-center gap-0.5 text-3xl">
                        AT <img src="/logo/logo.png" alt="" width={12}/> TIBYAN
                    </span>
                    <p className="lg: text-[#009c9c]">ЦЕНТР ИЗУЧЕНИЯ КОРАНА</p>
                </Link>
            </div>
            <Navbar className="hidden md:flex"/>
            <div className="flex md:hidden">
                <button onClick={onToggleMenu}>
                    {
                        collapsed
                            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                   stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                   stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                            </svg>
                    }

                </button>
            </div>
        </header>
    );
};

