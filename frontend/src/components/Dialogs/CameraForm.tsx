import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { CameraInterface } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CameraFormValidation } from "@/lib/validation";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const INITIAL_CAMERA: CameraInterface = {
  ipAddress: "",
  cameraType: "",
  name: "",
  description: "",
  port: "",
  protocol: "",
  credentials: "",
  streamPath: "",
  connectionURL: "",
  videoData: "",
  videoFormat: "",
  networkConf: "",
  alertId: ""
};

const CameraForm: React.FC<{ isEdit?: boolean; cameraDetails?: CameraInterface }> = ({ cameraDetails = INITIAL_CAMERA }) => {
  const form = useForm<CameraInterface>({
    resolver: zodResolver(CameraFormValidation),
    defaultValues: cameraDetails,
  });
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Dialog onOpenChange={(open) => !open && form.reset(cameraDetails)}>
      <DialogTrigger asChild>
        <Button variant={"default"} className={"font-bold text-white"}>
          Add New Camera
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[60%]">
        <DialogHeader>
          <DialogTitle className="mb-8 text-center">Add New Camera</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex-center flex-col gap-4 w-full p-12 max-h-[700px] overflow-y-scroll">
              <Avatar className="w-32 h-32 mb-20 border-2 border-black dark:border-white rounded-full flex-center overflow-clip mt-48" >
                <AvatarImage src="src/assets/camera.png" className="min-w-32 h-auto" />
                <AvatarFallback>Camera</AvatarFallback>
              </Avatar>
              <div className="flex-center gap-4 w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full mb-4">
                      <FormLabel className="font-semibold text-base">Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Buliding A, Floor 1, Room 101..."
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
                  name="ipAddress"
                  render={({ field }) => (
                    <FormItem className="w-full mb-4">
                      <FormLabel className="font-semibold text-base">IP Address</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="123.456.789.000"
                          className="w-full px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-center gap-4 w-full">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="font-semibold text-base">Description</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Kitchen camera, Main entrance camera..."
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
                  name="cameraType"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="font-semibold text-base">Camera Type</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Hikvision, Dahua..."
                          className="w-full px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-center gap-4 w-full">
                <FormField
                  control={form.control}
                  name="port"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="font-semibold text-base">Port</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="8080"
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
                  name="protocol"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="font-semibold text-base">Protocol</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="RTSP, HTTP..."
                          className="w-full px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-center gap-4 w-full">
                <FormField
                  control={form.control}
                  name="credentials"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="font-semibold text-base">Credentials</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="username:password"
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
                  name="streamPath"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="font-semibold text-base">Stream Path</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="/live/stream"
                          className="w-full px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-center gap-4 w-full">
                <FormField
                  control={form.control}
                  name="videoFormat"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="font-semibold text-base">Video Format</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="MP4, AVI..."
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
                  name="networkConf"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="font-semibold text-base">Network Configuration</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Network configuration details"
                          className="w-full px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-center gap-4 w-full">
                <FormField
                  control={form.control}
                  name="alertId"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="font-semibold text-base">Alert ID</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Alert ID"
                          className="w-full px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogClose asChild>
                <Button type="submit" className="font-bold text-white w-1/2">
                  Save
                </Button>
              </DialogClose>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CameraForm;
