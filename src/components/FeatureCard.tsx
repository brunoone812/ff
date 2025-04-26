import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface FeatureCardProps {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className
}: FeatureCardProps) => {
  return (
    <Card className={`group hover:border-primary transition-colors ${className}`}>
      <CardContent className="pt-6 bg-[#0a022b]/[0.57]">
        <div className="flex flex-col items-center text-center space-y-4">
          <Icon className="w-8 h-8 text-white group-hover:animate-float" />
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;