import { Button } from "../ui/button";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Separator } from "../ui/separator";

const chartData = [
    { day: "Saturday", accidents: 214 },
    { day: "Sunday", accidents: 160 },
    { day: "Monday", accidents: 130 },
    { day: "Tuesday", accidents: 100 },
    { day: "Wednesday", accidents: 70 },
    { day: "Thursday", accidents: 97 },
    { day: "Friday", accidents: 89 },
];

const chartConfig1 = {
    accidents: {
        label: "Accidents",
        color: "#1E90FF",
    },
} satisfies ChartConfig;


const generateChartData = () => [
    { type: "Forklift Accident", accidents: getRandomAccidents() },
    { type: "Weight Injury", accidents: getRandomAccidents() },
    { type: "Walking Accident", accidents: getRandomAccidents() },
    { type: "Slip and Fall", accidents: getRandomAccidents() },
    { type: "Chemical Spill", accidents: getRandomAccidents() },
    { type: "Electrical Shock", accidents: getRandomAccidents() },
    { type: "Fire Hazard", accidents: getRandomAccidents() },
];

const chartConfig = {
    accidents: {
        label: "Accidents",
        color: "#1E90FF",
    },
} satisfies ChartConfig;


const getRandomAccidents = () => Math.floor(Math.random() * 500) + 1;


interface EmployeeDetailsProps {
    name: string;
    jobTitle: string;
    email: string;
}

const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({ name, jobTitle, email }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-28 text-white font-bold">View Profile</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[60%]">
                <DialogTitle>Profile Details</DialogTitle>
                <DialogDescription className="h-[800px] overflow-y-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Photo</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Job Title</TableHead>
                                <TableHead>Email</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Avatar className="border-primary border-2 min-w-32 min-h-32">
                                        <AvatarImage src={"src/assets/avatar_blue.png"} className=" min-w-32 min-h-32" />
                                        <AvatarFallback>{name}</AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell className="text-xl font-bold">{name}</TableCell>
                                <TableCell className="text-xl font-bold">{jobTitle}</TableCell>
                                <TableCell className="text-xl font-bold">{email}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <h2 className="font-bold text-2xl mb-8 text-center">Accidents Summary</h2>
                    <ChartContainer config={chartConfig1} className="min-h-[180px] w-[70%] mx-auto">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={true} />
                            <XAxis dataKey="day" tickLine={true} tickMargin={10} axisLine={true} tickFormatter={(value) => value.slice(0, 3)} />
                            <YAxis tickMargin={10} tickLine={true} axisLine={true} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar type={"monotone"} strokeWidth={3} dataKey="accidents" stroke="#1E90FF" fill="#1E90FF" radius={4} />
                        </BarChart>
                    </ChartContainer>
                    <Separator className="my-4" />
                    <h2 className="font-bold text-2xl mb-8 text-center"> Accidents Per Type</h2>
                    <ChartContainer config={chartConfig} className="min-h-[180px] w-[70%] mx-auto">
                        <RadarChart accessibilityLayer data={generateChartData()}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="type" />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Radar strokeWidth={3} dataKey="accidents" stroke="#1E90FF" fill="#1E90FF" fillOpacity={0.3} radius={4} />
                        </RadarChart>
                    </ChartContainer>
                </DialogDescription>
                <DialogClose asChild>
                    <Button variant="destructive" className="min-w-[10%] mx-auto">Close</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default EmployeeDetails