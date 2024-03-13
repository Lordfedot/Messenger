import useCurrentUser from "@/hooks/useCurrentUser";
import DesktopSidebar from "./desktop-sidebar";
import MobileFooter from "./mobile-footer";

const Sidebar = async ({ children }: { children: React.ReactNode }) => {

  const currentUser = await useCurrentUser()

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!}/>
      <MobileFooter/>
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

export default Sidebar;
