import React from 'react';
import LoginForm from '../components/Login/LoginForm';

// Matches the structure of data submitted by LoginForm
// Based on LoginForm's internal z.infer<typeof formSchema>
interface LoginData {
  username: string;
  password: string;
  // Add other fields here if the form schema evolves
}

const LoginPage: React.FC = () => {
  const handleLoginSuccess = (data: LoginData) => {
    console.log("Login successful on page:", data);
    // In a real application, you would navigate the user or update global state:
    // e.g., using useNavigate from 'react-router-dom' if this component is within Router context:
    // import { useNavigate } from 'react-router-dom';
    // const navigate = useNavigate();
    // navigate('/dashboard');
    
    // For demonstration purposes, an alert can show success.
    // Avoid exposing sensitive data like passwords in real alerts.
    alert(`Login Successful!\nUsername: ${data.username}`);
  };

  // The onSignUp action is handled internally by LoginForm's SignUpLink component.
  // Based on the provided LoginForm.tsx, it logs to console.
  // If LoginPage needed to react to sign-up attempts (e.g., for navigation),
  // the LoginForm component would need to accept an onSignUp prop and propagate the event.

  return (
    // Overall page layout: centered content, full viewport height, background color.
    // Conforms to Layout Requirements: overall.definition
    <div className="flex justify-center items-center min-h-screen bg-background">
      {/* Card container for the login form */}
      {/* Conforms to Layout Requirements:
          - overall.sizing.card: "w-[400px] h-auto" (h-auto is default for block elements)
          - mainContent.layout: "flex flex-col gap-4 p-6 bg-surface rounded-md shadow"
            - Using 'bg-card' as 'bg-surface' (mapping from tailwind.config.ts colors)
            - Using 'rounded-lg' (maps to var(--radius), 0.5rem) as per tailwind.config.ts borderRadius
            - Using 'shadow-md' for a standard card shadow effect
            - 'text-card-foreground' ensures text color contrasts with card background
            - 'flex flex-col gap-4': Styles for direct children of the card. LoginForm is the only child.
      */}
      <div className="w-[400px] bg-card text-card-foreground rounded-lg shadow-md p-6 flex flex-col gap-4">
        <LoginForm 
          onLoginSuccess={handleLoginSuccess} 
          // No other props like className are needed for LoginForm from LoginPage in this context
        />
      </div>
    </div>
  );
};

export default LoginPage;
