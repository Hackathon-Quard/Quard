import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Severity = {
  severity: string;
  accidents: number;
  color: string;
};

const severityData: Severity[] = [
  { color: "primary", severity: "Total", accidents: 637 },
  { color: "low", severity: "Low", accidents: 214 },
  { color: "medium", severity: "Medium", accidents: 186 },
  { color: "dangerous", severity: "Dangerous", accidents: 237 },
];

const colorClasses: { [key: string]: string } = {
  primary: "bg-severity-primary",
  low: "bg-severity-low",
  medium: "bg-severity-medium",
  high: "bg-severity-high",
  dangerous: "bg-severity-dangerous",
};

const SeverityPerCamera = () => {
  const randomCameraNumber = Math.floor(Math.random() * 100) + 1;
  return (
    <div className="min-w-76">
      <h1 className="font-extrabold text-2xl p-4">Camera {randomCameraNumber}</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-24">Severity</TableHead>
            <TableHead className="text-right min-w-48">Number of Accidents</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {severityData.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="min-w-20">{data.severity}</TableCell>
              <TableCell className="flex justify-end content-end min-w-48">
                <div className={`rounded-2xl text-white ${colorClasses[data.color]} w-fit py-1 px-4 font-bold`}>{data.accidents}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SeverityPerCamera;
