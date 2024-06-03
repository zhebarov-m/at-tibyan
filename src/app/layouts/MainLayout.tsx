import { Header } from "@/widgets/Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/widgets/Sidebar";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div style={{ paddingTop: '80px' }}>
                <div className="flex">
                    <Sidebar/>
                    <div className="flex justify-center w-full">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
