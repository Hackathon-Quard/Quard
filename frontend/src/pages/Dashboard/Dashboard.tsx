import AccidentsForTypes from "@/components/Charts/AccidentsForTypes";
import EmployeesSummary from "@/components/Tables/EmployeesSummary";
import Heading from "@/components/Utils/Heading";
import { LayoutDashboard } from "lucide-react";

const Dashboard = () => {
  return (
    <>
      <div className="flex-between w-full px-10 mt-6">
        <Heading icon={<LayoutDashboard className="page-icon" />} label="Dashboard" />
      </div>
      <div className="w-[80%] ml-28 mr-auto">
        <AccidentsForTypes />
        <EmployeesSummary />
      </div>
    </>
  );
};

export default Dashboard;
