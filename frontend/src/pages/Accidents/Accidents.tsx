import DailyAccidents from "@/components/Charts/DailyAccidents";
import AccidentsTypeSummary from "@/components/Charts/AccidentsTypeSummary";
import AccidentsTrend from "@/components/Charts/AccidentsTrend";
import Heading from "@/components/Utils/Heading";
import LatestAccidents from "@/components/Tables/LatestAccidents";
import SeverityPerCamera from "@/components/Tables/SeverityPerCamera";
import { ShieldAlert } from "lucide-react";

const Accidents = () => {
  return (
    <>
      <div className="flex-between w-full px-10 mt-6">
        <Heading icon={<ShieldAlert className="page-icon" />} label="Accidents" />
      </div>
      <div className="w-[80%] ml-20 mr-auto">
        <div className="bg-white rounded-lg shadow-md w-full p-6 ml-8 mt-6 flex-row dark:bg-black">
          <div className="flex-between gap-10 w-full overflow-x-scroll">
            {Array.from({ length: 10 }, (_, i) => (
              <SeverityPerCamera key={i} />
            ))}
          </div>
          <div className="p-6 ml-10 mt-6 flex-between">
            <DailyAccidents />
            <AccidentsTrend />
          </div>
        </div>
        <LatestAccidents />
        <AccidentsTypeSummary />
      </div>
    </>
  );
};

export default Accidents;
