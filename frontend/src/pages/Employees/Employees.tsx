import EmployeeCard from "@/components/Cards/EmployeeCard";
import EmployeeForm from "@/components/Dialogs/EmployeeForm";
import Heading from "@/components/Utils/Heading";
import { UsersRound } from "lucide-react";

const Employees = () => {
  return (
    <div className="w-full">
      <div className="flex-between w-[80%] pl-10 mt-6">
        <Heading icon={<UsersRound className="page-icon" />} label="Employees" />
        <EmployeeForm />
      </div>
      <div className=" flex flex-wrap pr-40 gap-8 mt-8 pl-24">
        {Array.from({ length: 10 }, (_, i) => (
          <EmployeeCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Employees;
