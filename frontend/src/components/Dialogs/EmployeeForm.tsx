import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { Employee } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeFormValidation } from "@/lib/validation";
import UploadFileInput from "../Utils/UploadFileInput";

const INITIAL_EMPLOYEE: Employee = {
  _id: "",
  fullname: "",
  email: "",
  jobTitle: "",
};

const EmployeeForm: React.FC<{ isEdit?: boolean; employeeDetails?: Employee }> = ({
  isEdit = false,
  employeeDetails = INITIAL_EMPLOYEE,
}) => {
  if (isEdit) {
    employeeDetails = {
      _id: "1",
      fullname: "Ehab Maali",
      email: "ehab.maali@gmail.com",
      jobTitle: "Software Engineer",
    };
  }
  const form = useForm<Employee>({
    resolver: zodResolver(EmployeeFormValidation),
    defaultValues: employeeDetails,
  });
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Dialog onOpenChange={(open) => !open && form.reset(employeeDetails)}>
      <DialogTrigger asChild>
        <Button variant={isEdit ? "outline" : "default"} className={`font-bold ${isEdit ? "text-black bg-white" : "text-white"}`}>
          {isEdit ? "Edit" : "Add New Employee"}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[40%]">
        <DialogHeader>
          <DialogTitle className="mb-8 text-center">{isEdit ? "Edit Employee" : "Add New Employee"}</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex-center flex-col gap-4 w-full p-12">
              <FormField
                control={form.control}
                name="profileImage"
                render={({ field }) => (
                  <FormItem className="mb-20 flex-center flex-col">
                    <FormLabel className="font-semibold text-base">{field?.value?.toString().split("\\").pop()}</FormLabel>
                    <FormControl>
                      <UploadFileInput caption={!!!field.value?.length ? "Add Image" : "Edit Image"} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem className="w-full mb-4">
                      <FormLabel className="font-semibold text-base">Fullname in english</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Fullname"
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
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="font-semibold text-base">Job Title</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Inspector, Worker..."
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
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full mb-4">
                      <FormLabel className="font-semibold text-base">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@email.com"
                          className="w-full px-4 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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

export default EmployeeForm;
