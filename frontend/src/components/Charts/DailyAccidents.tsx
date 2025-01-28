import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
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

const chartConfig = {
  accidents: {
    label: "Accidents",
    color: "#1E90FF",
  },
} satisfies ChartConfig;

const DailyAccidents = () => {
  return (
    <div className="w-full bg-white dark:bg-black h-fit">
      <div className="w-full">
        <h1 className="font-extrabold text-2xl p-4">Daily Accidents</h1>
        <Separator className="mb-10" />
      </div>
      <ChartContainer config={chartConfig} className="min-h-[180px] w-[70%] mx-auto">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={true} />
          <XAxis dataKey="day" tickLine={true} tickMargin={10} axisLine={true} tickFormatter={(value) => value.slice(0, 3)} />
          <YAxis tickMargin={10} tickLine={true} axisLine={true} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar type={"monotone"} strokeWidth={3} dataKey="accidents" stroke="#1E90FF" fill="#1E90FF" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default DailyAccidents;
