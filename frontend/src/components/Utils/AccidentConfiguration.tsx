import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { AccidentConfigurationInterface } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AccidentConfigurationValidation } from "@/lib/validation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Separator } from "@radix-ui/react-dropdown-menu";
import { useEffect } from "react";

const INITIAL_VIO_CONFIG: AccidentConfigurationInterface = {
  capacityType: "time",
  countThreshold: 1000,
  timeThreshold: 30,
  spaceThreshold: 100,
};

const AccidentConfiguration: React.FC<{ vio_config_data?: AccidentConfigurationInterface }> = ({
  vio_config_data = INITIAL_VIO_CONFIG,
}) => {
  const form = useForm<AccidentConfigurationInterface>({
    resolver: zodResolver(AccidentConfigurationValidation),
    defaultValues: vio_config_data,
  });
  const capacityType = form.watch("capacityType");
  const timeThreshold = form.watch("timeThreshold");
  const spaceThreshold = form.watch("spaceThreshold");
  const countThreshold = form.watch("countThreshold");
  console.log(capacityType, timeThreshold, spaceThreshold, countThreshold);

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (capacityType === "time" || capacityType === "space" || capacityType === "count") {
      form.handleSubmit(handleSubmit)();
    }
  }, [timeThreshold, spaceThreshold, countThreshold]);

  const handleNumberChange = (field: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    form.setValue(field, value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex-center gap-4 w-fit pr-4">
        <FormField
          control={form.control}
          name="capacityType"
          render={({ field }) => (
            <FormItem className="w-fit flex-start gap-3">
              <FormLabel className="font-semibold text-base w-[200px]">Capacity Limit Type</FormLabel>
              <FormControl>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="text-left w-fit pr-20">
                    <Button variant="outline" className="w-fit">
                      {field.value ? field.value : "Choose a Type"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="text-left w-fit bg-white p-2 border-gray-200 border-[1px] rounded-md hover: cursor-pointer"
                  >
                    <DropdownMenuItem className="rounded-sm p-1" onClick={() => field.onChange("time")}>
                      Time (in days)
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-sm p-1" onClick={() => field.onChange("count")}>
                      Count
                    </DropdownMenuItem>
                    <Separator />
                    <DropdownMenuItem className="rounded-sm p-1" onClick={() => field.onChange("space")}>
                      Space (in GB)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {capacityType === "time" && (
          <FormField
            control={form.control}
            name="timeThreshold"
            render={({ field }) => (
              <FormItem className="w-fit flex-start gap-3">
                <FormLabel className="font-semibold text-base">Time in Days</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="maximum days to keep the data"
                    className="w-24 px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                    {...field}
                    onChange={handleNumberChange("timeThreshold")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {capacityType === "space" && (
          <FormField
            control={form.control}
            name="spaceThreshold"
            render={({ field }) => (
              <FormItem className="w-fit flex-start gap-3">
                <FormLabel className="font-semibold text-base">Space in Gigabytes</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="maximum space to keep the data"
                    className="w-24 px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                    {...field}
                    onChange={handleNumberChange("spaceThreshold")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {capacityType === "count" && (
          <FormField
            control={form.control}
            name="countThreshold"
            render={({ field }) => (
              <FormItem className="w-fit flex-start gap-3">
                <FormLabel className="font-semibold text-base w-[200px]">Number of Accidents</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="maximum number of accidents to keep"
                    className="w-24 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                    {...field}
                    onChange={handleNumberChange("countThreshold")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </form>
    </Form>
  );
};

export default AccidentConfiguration;
