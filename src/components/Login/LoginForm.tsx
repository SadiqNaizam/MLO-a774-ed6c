import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import SignUpLink from './SignUpLink';

const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Password is required." })
    // Example: .min(8, { message: "Password must be at least 8 characters." }),
});

type LoginFormValues = z.infer<typeof formSchema>;

interface LoginFormProps {
  className?: string;
  onLoginSuccess?: (data: LoginFormValues) => void;
  // onLoginError?: (error: Error) => void; // Optional: for more specific error handling
}

const LoginForm: React.FC<LoginFormProps> = ({ className, onLoginSuccess }) => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setIsSubmitting(true);
    form.clearErrors("root.serverError"); // Clear previous server errors
    console.log("Form submitted:", values);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Example login logic (replace with actual authentication)
    if (values.username === "user@example.com" && values.password === "password123") {
      console.log("Login successful");
      if (onLoginSuccess) {
        onLoginSuccess(values);
      }
    } else {
      console.error("Login failed: Invalid credentials");
      form.setError("root.serverError", {
        type: "manual",
        message: "Invalid username or password. Please try again.",
      });
      // if (onLoginError) {
      //   onLoginError(new Error("Invalid username or password"));
      // }
    }
    setIsSubmitting(false);
  };

  return (
    <div className={cn("w-full flex flex-col gap-6", className)}> {/* Overall gap for sections: Heading, Form, SignUpLink */}
      <h2 className="text-3xl font-bold text-center text-card-foreground">
        Log in
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4"> {/* Gap for elements within the form */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Username</FormLabel> {/* Visually hidden for a11y, placeholder is visible */}
                <FormControl>
                  <UsernameInput {...field} disabled={isSubmitting} aria-label="Username" />
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
                <FormLabel className="sr-only">Password</FormLabel> {/* Visually hidden for a11y, placeholder is visible */}
                <FormControl>
                  <PasswordInput {...field} disabled={isSubmitting} aria-label="Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {form.formState.errors.root?.serverError && (
            <p className="text-sm font-medium text-destructive text-center">
              {form.formState.errors.root.serverError.message}
            </p>
          )}

          <LoginButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Log in"}
          </LoginButton>
        </form>
      </Form>
      <SignUpLink 
        onSignUp={() => console.log("Navigate to Sign Up page or open Sign Up modal")}
      />
    </div>
  );
};

export default LoginForm;
