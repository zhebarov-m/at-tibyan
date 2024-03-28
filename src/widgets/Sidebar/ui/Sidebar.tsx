import {useAppSelector} from "@/app/providers/StoreProvider/config/hooks.ts";
import {selectCollapse} from "@/widgets/Sidebar/model/slices/sidebarSlice.ts";

export const Sidebar = () => {
    const collapsed = useAppSelector(selectCollapse)

    return (
        <div
            className={collapsed
                ? `w-full
                bg-[#fff]
                shadow-2xl
                border-2
                border-[#009c9c60]
                h-[100vh]
                absolute
                transition-all
                left-0
                z-10 
                xl:w-80
                flex
                justify-center
                md:w-[50%]`
                :
                `w-0
                xl:w-20
                bg-[#fff]
                border-2
                border-[#009c9c60]
                transition-all
                z-10
                flex
                justify-center
                absolute
                h-[100vh]
                left-[-274px]
                xl:left-0`}
        >
            <h1>Sidebar</h1>
        </div>
    );
};

