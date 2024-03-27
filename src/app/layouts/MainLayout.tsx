import {Header} from "@/widgets/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;
