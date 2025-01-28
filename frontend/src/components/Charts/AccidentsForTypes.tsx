import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Separator } from "../ui/separator";

const getRandomAccidents = () => Math.floor(Math.random() * 500) + 1;

const chartData = [
  { month: "January", weightInjury: getRandomAccidents(), forkliftAccident: getRandomAccidents(), walkingAccident: getRandomAccidents() },
  { month: "February", weightInjury: getRandomAccidents(), forkliftAccident: getRandomAccidents(), walkingAccident: getRandomAccidents() },
  { month: "March", weightInjury: getRandomAccidents(), forkliftAccident: getRandomAccidents(), walkingAccident: getRandomAccidents() },
  { month: "April", weightInjury: getRandomAccidents(), forkliftAccident: getRandomAccidents(), walkingAccident: getRandomAccidents() },
  { month: "May", weightInjury: getRandomAccidents(), forkliftAccident: getRandomAccidents(), walkingAccident: getRandomAccidents() },
  { month: "June", weightInjury: getRandomAccidents(), forkliftAccident: getRandomAccidents(), walkingAccident: getRandomAccidents() },
];

const chartConfig = {
  weightInjury: {
    label: "Weight Injury",
    color: "#1E90FF",
  },
  forkliftAccident: {
    label: "Forklift Accident",
    color: "#FF8D1E",
  },
  walkingAccident: {
    label: "Walking Accident",
    color: "#00FF75",
  },
} satisfies ChartConfig;

const AccidentsForTypes = () => {
  return (
    <div className="w-full pb-10 bg-white dark:bg-black h-fit rounded-md shadow-lg mt-8 mb-20">
      <div className="w-full">
        <h1 className="font-extrabold text-2xl p-4">Monthly Accidents Per Type</h1>
        <Separator className="mb-10"/>
      </div>
      <ChartContainer config={chartConfig} className="min-h-[180px] w-[70%] mx-auto">
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={true} />
          <XAxis dataKey="month" tickLine={true} tickMargin={10} axisLine={true} tickFormatter={(value) => value.slice(0, 3)} />
          <YAxis tickMargin={10} tickLine={true} axisLine={true} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line type={"monotone"} strokeWidth={3} dataKey="weightInjury" stroke="#1E90FF" fill="#1E90FF" radius={4} />
          <Line type={"monotone"} strokeWidth={3} dataKey="forkliftAccident" stroke="#FF8D1E" fill="#FF8D1E" radius={4} />
          <Line type={"monotone"} strokeWidth={3} dataKey="walkingAccident" stroke="#00FF75" fill="#00FF75" radius={4} />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default AccidentsForTypes;