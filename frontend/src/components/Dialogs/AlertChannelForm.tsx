import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "../ui/button";
import Combobox from "../ui/combobox";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { AlertChannelValidation } from "@/lib/validation";
import { AlertChannelInterface } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";

const typeOptions = [
  {
    value: "phone",
    label: "Phone Number",
  },
  {
    value: "alarm",
    label: "Alarm",
  },
  {
    value: "email",
    label: "Email",
  },
];

const INITIAL_ALERT_CHANNEL: AlertChannelInterface = {
  owner: "",
  channelType: "",
  alertDestination: "",
  message: "",
};
const AlertChannelForm: React.FC<{ channelDetails?: AlertChannelInterface }> = ({ channelDetails = INITIAL_ALERT_CHANNEL }) => {
  const [typeValue, setTypeValue] = useState<string | number>("");
  const form = useForm({
    resolver: zodResolver(AlertChannelValidation),
    defaultValues: channelDetails,
  });
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"default"} className="font-bold text-white">
          Add New Channel
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="mb-8">Add New Channel</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 w-full max-w-6xl">
                <FormField
                  control={form.control}
                  name="owner"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="font-semibold text-base">Owner</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Abd Salman, Ehab Maali..."
                          className="w-full px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="channelType"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="font-semibold text-base">Channel Type</FormLabel>
                      <FormControl>
                        <Combobox
                          options={typeOptions}
                          value={typeValue}
                          onChange={(value) => {
                            setTypeValue(value);
                            field.onChange(value);
                          }}
                          formType={"Channel Type"}
                          triggerClassName="px-6"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="alertDestination"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="font-semibold text-base">Alert Destination</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="m@example.com, +970 7xx..."
                          className="w-full px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="font-semibold text-base">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="$employee has violated the rule $accident_type in the camera $camera..."
                          className="w-full px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogClose asChild>
                  <Button type="submit" className="font-bold text-white">
                    Add Channel
                  </Button>
                </DialogClose>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AlertChannelForm;
