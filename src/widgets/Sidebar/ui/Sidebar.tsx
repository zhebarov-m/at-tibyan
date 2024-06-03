import { useAppSelector } from "@/app/providers/StoreProvider/config/hooks.ts";
import { selectCollapse } from "@/widgets/Sidebar/model/slices/sidebarSlice.ts";
import styles from "./Sidebar.module.css";
import DarkMode from "@/shared/ui/DarkMode/DarkMode.tsx";
import AppLink from "@/shared/ui/AppLink/AppLink.tsx";
import { NAV_LINKS } from "@/widgets/Sidebar";
import { customClasses } from "@/shared/lib/customClasses/customClasses.tsx";

const openSidebarStyles: string = `w-full xl:w-[20%] md:w-[50%] shadow-2xl left-0 dark:bg-gray-800`;

const closeSidebarStyles: string = `w-0 xl:w-20 items-center left-[-274px] xl:left-0 dark:bg-gray-800`;

export const Sidebar = () => {
  const collapsed = useAppSelector(selectCollapse);

  return (
    <div
      className={customClasses(styles.sidebarContainer, {
        [openSidebarStyles]: collapsed,
        [closeSidebarStyles]: !collapsed,
      })}
    >
      <div
        className={customClasses(styles.navLinks, {
          ["text-[16px]"]: collapsed,
          ["text-[13px]"]: !collapsed,
        })}
        style={{ fontFamily: "Montserrat" }}
      >
        {NAV_LINKS.map((link) => (
          <AppLink icon={link.icon} to={link.path}>
            {link.title}
          </AppLink>
        ))}
      </div>
      <div className="mb-36 flex justify-center">
        <DarkMode />
      </div>
    </div>
  );
};
