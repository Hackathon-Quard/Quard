import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Layouts/Sidebar";
import TopBar from "../components/Layouts/Topbar";

interface PageLayoutProps {}

const PageLayout: React.FC<PageLayoutProps> = () => {
  return (
    <div className="min-w-full flex bg-gray-100 dark:bg-[#101012]">
      <Sidebar />
      <div className="w-full justify-center h-full overflow-y-auto max-h-screen">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
