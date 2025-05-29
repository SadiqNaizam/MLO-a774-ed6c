import React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput: React.FC<PasswordInputProps> = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ className, ...props }, ref) => {
  return (
    <Input
      type="password"
      placeholder="Password"
      ref={ref}
      className={cn(
        // Overrides to ensure white background and black text when on a white card (bg-surface)
        "bg-card text-card-foreground placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});
PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
