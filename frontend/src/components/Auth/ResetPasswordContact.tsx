import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import Loader from "@/components/ui/loader";
import { ResetPasswordContactValidation } from "@/lib/validation";
import { ResetPasswordContactInterface } from "@/lib/types";

const ResetPasswordContact: React.FC = () => {
  const navigate = useNavigate();
  const isLoading = false;

  const form = useForm<ResetPasswordContactInterface>({
    resolver: zodResolver(ResetPasswordContactValidation),
    defaultValues: {
      contact: "",
    },
  });

  const handleContact: SubmitHandler<ResetPasswordContactInterface> = async () => {
    navigate("/reset-password");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-0 m-0">
      <Form {...form}>
        <div className="loginCard w-96 p-8 bg-white dark:bg-gray-900 rounded-md shadow-2xl">
          <div className="flex justify-center mb-6">
            <img src="src/assets/logo_name_vertical.png" alt="ZenithEye Logo" className="h-48 mb-10" />
          </div>
          <form onSubmit={form.handleSubmit(handleContact)} className="space-y-4">
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Email or Phone Number"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full py-2 text-white bg-primary rounded-md hover:ring-primary-400 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isLoading ? <Loader /> : "Send Verification Code"}
            </Button>
          </form>
          <Button variant="link" className="text-primary underline-offset-4 hover:underline w-full mt-2 mx-auto">
            <Link to="/login">Back to Login</Link>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ResetPasswordContact;
