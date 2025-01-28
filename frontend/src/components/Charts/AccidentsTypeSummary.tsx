import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Separator } from "../ui/separator";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const getRandomAccidents = () => Math.floor(Math.random() * 500) + 1;

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

const AccidentsTypeSummary:React.FC<{num?: number}> = ({num = 10}) => {
  return (
    <div className="mr-auto mx-10 w-full bg-white dark:bg-black rounded-md shadow-lg mt-8 mb-20 overflow-y-scroll h-fit">
      <div className="bg-white w-full sticky top-0 z-10 dark:bg-black dark:text-white">
        <h1 className="font-extrabold text-2xl p-4">Accidents Per Camera</h1>
        <Separator />
      </div>
      <div className="flex-between w-full overflow-x-scroll">
        {Array.from({ length: num }, (_, i) => (
          <div key={i}>
            <h1 className="font-bold text-xl p-4">Camera {i + 1}</h1>
            <ChartContainer key={i} config={chartConfig} className="min-h-[400px] w-[70%] mx-auto">
              <RadarChart accessibilityLayer data={generateChartData()}>
                <PolarGrid />
                <PolarAngleAxis dataKey="type" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Radar strokeWidth={3} dataKey="accidents" stroke="#1E90FF" fill="#1E90FF" fillOpacity={0.3} radius={4} />
              </RadarChart>
            </ChartContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccidentsTypeSummary;