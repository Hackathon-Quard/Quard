import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";

const EmployeesSummary = () => {
  const names = ["Ehab Maali", "Abd Salman", "Anonymous"];
  const emails = ["ehab1.maali@gmail.com", "abd.salman@example.com", "anonymous@example.com"];
  const contacts = ["+970597262036", "+970597262037", "+970597262038"];
  const jobTitles = ["Software Engineer", "Project Manager", "Designer"];

  return (
    <div className="w-full bg-white dark:bg-black rounded-md shadow-lg mt-8 mb-20 max-h-[680px] overflow-y-scroll">
      <div className="bg-white w-full sticky top-0 z-10 dark:bg-black dark:text-white">
        <h1 className="font-extrabold text-2xl p-4">Employees Summary</h1>
      </div>
      <Separator />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="w-72 pr-10">Compliance</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Job Title</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 30 }, (_, i) => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomEmail = emails[Math.floor(Math.random() * emails.length)];
            const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
            const randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
            const progress = Math.floor(Math.random() * 101);

            return (
              <TableRow key={i} className="cursor-pointer">
                <TableCell>
                  <div className="flex-start gap-3">
                    <Avatar className="border-primary border-2">
                      <AvatarImage src={"src/assets/avatar_blue.png"} />
                      <AvatarFallback>{randomName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="font-bold text-black dark:text-white">{randomName}</div>
                  </div>
                </TableCell>
                <TableCell>{randomEmail}</TableCell>
                <TableCell className="w-72 pr-10">
                  <div className="flex-start gap-3">
                    <Progress value={progress} className="bg-gray-200 dark:bg-gray-700 h-2 w-48" />
                    {progress + "%"}
                  </div>
                </TableCell>
                <TableCell>{randomContact}</TableCell>
                <TableCell>{randomJobTitle}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployeesSummary;
