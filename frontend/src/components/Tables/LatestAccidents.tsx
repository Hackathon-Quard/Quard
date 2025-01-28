import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "../ui/separator";
import AccidentConfiguration from "../Utils/AccidentConfiguration";
import AccidentDetails from "../Dialogs/AccidentDetails";

const LatestAccidents = () => {
  return (
    <div className="mr-auto mx-10 w-full bg-white dark:bg-black rounded-md shadow-lg mt-8 mb-20 max-h-[480px] overflow-y-scroll">
      <div className="bg-white w-full sticky top-0 z-10 dark:bg-black dark:text-white flex-between">
        <h1 className="font-extrabold text-2xl p-4">Latest Accidents</h1>
        <AccidentConfiguration />
      </div>
      <Separator />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Camera</TableHead>
            <TableHead>Accident Type</TableHead>
            <TableHead className="pl-7">Severity</TableHead>
            <TableHead>Date-Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 30 }, (_, i) => (
            <AccidentDetails key={i} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestAccidents;
