import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

interface NewsletterFormProps {
  placeholder?: string;
  size?: "sm" | "default" | "lg";
}

const NewsletterForm = ({ placeholder = "Tu email", size = "default" }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor, introduce tu email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "¡Suscripción exitosa!",
        description: "Revisa tu email para confirmar la suscripción",
      });
      setEmail("");
      setIsLoading(false);
      
      // Redirect to thank you page
      window.location.href = "/gracias";
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={size === "sm" ? "text-sm" : ""}
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        variant="default" 
        size={size}
        disabled={isLoading}
      >
        <Mail className="h-4 w-4" />
        {size !== "sm" && <span className="ml-2">Suscribirme</span>}
      </Button>
    </form>
  );
};

export default NewsletterForm;