import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // No variant prop needed here, as styling is specific to the login button
}

const LoginButton: React.FC<LoginButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button
      type="submit" // Default to submit for use within a form
      className={cn(
        "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold",
        // Default Shadcn button size is h-10 (40px), which is usually fine.
        // If a larger button is desired: "py-3 text-base" or adjust h- class.
        className
      )}
      {...props}
    >
      {children || "Log in"} {/* Default text matches the image */}
    </Button>
  );
};

export default LoginButton;
