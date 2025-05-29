import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SignUpLinkProps {
  onSignUp?: () => void;
  className?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ onSignUp, className }) => {
  return (
    // The link is centered as per the image. This div ensures it.
    <div className={cn("text-center", className)}>
      <Button
        variant="link"
        onClick={onSignUp}
        className={cn(
          "text-sm text-muted-foreground font-normal", // Styled as plain text using muted foreground color
          "p-0 h-auto", // Resets default button padding and height to make it look like a simple link
          "hover:text-primary hover:no-underline focus-visible:ring-offset-0 focus-visible:ring-0", // Subtle hover, remove default focus ring if desired for plain link
          // Note: Removing focus ring might impact a11y. Consider custom focus style if needed.
        )}
      >
        or, sign up
      </Button>
    </div>
  );
};

export default SignUpLink;
