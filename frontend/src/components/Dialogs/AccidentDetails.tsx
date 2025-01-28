import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Heading from "../Utils/Heading";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
const AccidentDetails = () => {
  const names = ["Ehab Maali", "Abd Salman", "Anonymous"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const types = ["Weight Injury", "Forklift Accident", "Walking Accident"];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const severity = ["Dangerous", "Warning", "Low"];
  const randomSeverity: keyof typeof severityColors = severity[Math.floor(Math.random() * severity.length)] as keyof typeof severityColors;
  const severityColors: { [key: string]: string } = {
    "Dangerous": "bg-red-500",
    "Warning": "bg-yellow-500",
    "Low": "bg-green-500"
  }; const cameras = ["Camera 1", "Camera 2", "Camera 3"];
  const randomCamera = cameras[Math.floor(Math.random() * cameras.length)];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TableRow className="cursor-pointer">
          <TableCell>
            <div className="flex-start gap-3">
              <Avatar className="border-primary border-2">
                <AvatarImage src={"src/assets/avatar_blue.png"} />
                <AvatarFallback>{randomName[0]}</AvatarFallback>
              </Avatar>
              <div className="font-bold text-black dark:text-white">{randomName}</div>
            </div>
          </TableCell>
          <TableCell>{randomCamera}</TableCell>
          <TableCell>{randomType}</TableCell>
          <TableCell>
            <div className={`rounded-2xl text-white ${severityColors[randomSeverity]} w-fit py-1 px-4 font-bold`}>{randomSeverity}</div>
          </TableCell>
          <TableCell>16/Dec/2024-11:20</TableCell>
        </TableRow>
      </DialogTrigger>
      <DialogContent className="max-w-[70%]">
        <DialogHeader>
          <VisuallyHidden>
            <DialogTitle className="mb-4">Accident Details</DialogTitle>
          </VisuallyHidden>
          <div className="flex-start gap-96">
            <Heading label="Snapshot:" />
            <DialogClose asChild>
              <Button variant={"destructive"} className="font-bold">
                Mark as False Alarm
              </Button>
            </DialogClose>
          </div>
          <div>
            <img
              src="src/assets/snapshot.png"
              alt="snapshot"
              className="min-h-[500px] m-8 rounded-3xl border-4 shadow-md border-gray-300"
            />
          </div>
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
              <TableRow className="cursor-pointer">
                <TableCell>
                  <div className="flex-start gap-3">
                    <Avatar className="border-primary border-2">
                      <AvatarImage src={"src/assets/avatar_blue.png"} />
                      <AvatarFallback>{randomName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="font-bold text-black dark:text-white">{randomName}</div>
                  </div>
                </TableCell>
                <TableCell>{randomCamera}</TableCell>
                <TableCell>{randomType}</TableCell>
                <TableCell>
                  <div className={`rounded-2xl text-white ${severityColors[randomSeverity]} w-fit py-1 px-4 font-bold`}>{randomSeverity}</div>
                </TableCell>
                <TableCell>16/Dec/2024-11:20</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AccidentDetails;
