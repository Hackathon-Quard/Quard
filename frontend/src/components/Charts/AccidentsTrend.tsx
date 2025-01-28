import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Separator } from "../ui/separator";

const chartData = [
  { week: "1", accidents: 2140 },
  { week: "2", accidents: 1860 },
  { week: "3", accidents: 1900 },
  { week: "4", accidents: 1370 },
  { week: "5", accidents: 1000 },
];

const chartConfig = {
  accidents: {
    label: "Accidents",
    color: "#1E90FF",
  },
} satisfies ChartConfig;

const AccidentsTrend = () => {
  return (
    <div className="w-full bg-white dark:bg-black h-fit rounded-md">
      <div className="w-full">
        <h1 className="font-extrabold text-2xl p-4">Accidents Trend</h1>
        <Separator className="mb-10" />
      </div>
      <ChartContainer config={chartConfig} className="min-h-[180px] w-[70%] mx-auto">
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={true} />
          <XAxis dataKey="week" tickLine={true} label={"previous weeks"} tickMargin={10} axisLine={true} tickFormatter={(value) => value.slice(0, 3)} />
          <YAxis tickMargin={10} tickLine={true} axisLine={true} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line strokeWidth={3} dataKey="accidents" stroke="#1E90FF" fill="#1E90FF" radius={4} />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default AccidentsTrend;
