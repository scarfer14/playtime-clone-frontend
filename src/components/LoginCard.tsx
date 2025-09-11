import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smartphone, Mail } from "lucide-react";

const LoginCard = () => {
  return (
    <Card className="gaming-card w-full max-w-md p-8 space-y-6">
      <div className="text-center space-y-4">
        {/* Newcomer Bonus Banner */}
        <div 
          className="rounded-2xl p-4 text-white font-bold text-lg"
          style={{ background: 'linear-gradient(135deg, #FFB800, #FF8C00)' }}
        >
          Welcome Newcomers!
        </div>

        {/* Mobile Number Input */}
        <div className="space-y-3">
          <div className="relative">
            <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Mobile Number"
              className="pl-12 rounded-full bg-white/80 border-2 border-white/30 py-3 text-center"
            />
          </div>
          
          <Button 
            className="w-full rounded-full py-3 gaming-button text-white font-bold"
            style={{ background: 'linear-gradient(135deg, #00C851, #007E33)' }}
            onClick={() => window.location.href = "https://www.pots888.vip"}
          >
            Continue
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="text-white/70 text-sm">or</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <Button 
            variant="outline"
            className="w-full rounded-full py-3 bg-gaming-blue border-gaming-blue text-white font-bold hover:bg-gaming-blue/90"
            onClick={() => window.location.href = "https://www.pots888.vip"}
          >
            <Mail className="w-5 h-5 mr-2" />
            Google
          </Button>
          
          <Button 
            variant="outline"
            className="w-full rounded-full py-3 bg-[#1877F2] border-[#1877F2] text-white font-bold hover:bg-[#1877F2]/90"
            onClick={() => window.location.href = "https://www.pots888.vip"}
          >
            <span className="mr-2 text-lg font-bold">f</span>
            Facebook
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LoginCard;