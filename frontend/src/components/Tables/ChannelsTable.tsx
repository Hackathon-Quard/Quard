import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ChannelsTable = () => {
  const names = ["Ehab Maali", "Abd Salman", "Building 1"];
  const typeOptions = ["Phone Number", "Alarm", "Email"];
  const typeDestination = ["+970597262036", "192.168.1.123", "example@gmail.com"];
  return (
    <div className="w-full bg-white dark:bg-black rounded-md shadow-lg mt-8 mb-20">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Channel ID</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Channel Type</TableHead>
            <TableHead>Alert Destination</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }, () => {
            const random = Math.floor(Math.random() * 20);
            return (
              <TableRow>
                <TableCell>C00{random}</TableCell>
                <TableCell>{names[random % 3]}</TableCell>
                <TableCell>{typeOptions[random % 3]}</TableCell>
                <TableCell>{typeDestination[random % 3]}</TableCell>
                <TableCell>$employee has violated the rule $accident_type in the camera $camera</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ChannelsTable;