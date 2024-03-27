import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import MainLayout from "@/app/layouts/MainLayout.tsx";
import {routeConfig} from "@/shared/config/routeConfig/routeConfig.tsx";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    {Object.values(routeConfig).map(({path, element}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
