import {Header} from "@/widgets/Header";
import {Outlet} from "react-router-dom";
import {Sidebar} from "@/widgets/Sidebar";

const MainLayout = () => {

    return (
        <div className="dark:bg-gray-700">
            <Header/>
            <div className="flex">
                <Sidebar/>
                <div className="flex justify-center w-full">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
