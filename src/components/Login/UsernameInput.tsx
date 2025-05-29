import React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface UsernameInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const UsernameInput: React.FC<UsernameInputProps> = React.forwardRef<
  HTMLInputElement,
  UsernameInputProps
>(({ className, ...props }, ref) => {
  return (
    <Input
      type="text"
      placeholder="Username"
      ref={ref}
      className={cn(
        // Overrides to ensure white background and black text when on a white card (bg-surface)
        // Shadcn Input defaults to bg-background (page background) which might be dark.
        "bg-card text-card-foreground placeholder:text-muted-foreground",
        // Standard input styles for focus, border, etc., are inherited from Shadcn's Input component
        className
      )}
      {...props}
    />
  );
});
UsernameInput.displayName = "UsernameInput";

export default UsernameInput;
