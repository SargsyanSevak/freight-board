import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { useToast } from "@/components/ui/use-toast";

import { SigninValidation } from "@/lib/validation";
import { useSignInAccount } from "@/lib/react-query/queries";
import { useUserContext } from "@/context/AuthContext";

const SigninForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  // Query
  const { mutateAsync: signInAccount, isLoading } = useSignInAccount();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
    const session = await signInAccount(user);

    if (!session) {
      toast({ title: "Login failed. Please try again." });

      return;
    }

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();

      navigate("/");
    } else {
      toast({ title: "Login failed. Please try again." });

      return;
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Մուտք | Freight Board</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col text-red">
          <img
            src="/assets/images/main-logo.png"
            alt="logo"
            className="w-[40px]"
          />

          <h2 className="h3-bold text-black md:h2-bold pt-5 sm:pt-12">Մուտք</h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            Բարի գալուստ: Խնդրում ենք մուտքագրել Ձեր տվյալները:
          </p>
          <form
            onSubmit={form.handleSubmit(handleSignin)}
            className="flex flex-col gap-5 w-full mt-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label text-black">
                    Էլ.հասցե
                  </FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Գաղտնաբառ</FormLabel>
                  <FormControl>
                    <Input type="password" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="shad-button_primary">
              {isLoading || isUserLoading ? (
                <div className="flex-center gap-2">
                  <Loader /> Սպասեք...
                </div>
              ) : (
                "Մուտք"
              )}
            </Button>

            <p className="text-small-regular text-black text-center mt-2">
              Դեռ չունեք հաշիվ ?
              <Link
                to="/sign-up"
                className="text-primary-500 text-small-semibold ml-1">
                Գրանցվել
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </>
  );
};

export default SigninForm;
