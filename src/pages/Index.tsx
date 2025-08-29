import { useState } from "react";
import ResponsibleGamingModal from "@/components/ResponsibleGamingModal";
import LoginCard from "@/components/LoginCard";
import gamingBackground from "@/assets/gaming-background.jpg";
import playtimeLogo from "@/assets/playtime-logo.png";

const Index = () => {
  const [showModal, setShowModal] = useState(true);

  const handleAgree = () => {
    setShowModal(false);
  };

  const handleExit = () => {
    // In a real app, this would redirect away from the site
    window.close();
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${gamingBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-blue/20 via-gaming-purple/20 to-gaming-green/20"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-6">
          <div className="flex items-center">
            <img 
              src={playtimeLogo} 
              alt="Playtime" 
              className="h-12 w-auto"
            />
            <span className="ml-2 text-white text-2xl font-bold">playtime</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-end pr-12">
          <div className="w-full max-w-md">
            <LoginCard />
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6">
          <div className="flex justify-center gap-8 text-gaming-orange text-sm">
            <button className="hover:text-gaming-yellow transition-colors">
              Unable to login?
            </button>
            <span className="text-white/50">|</span>
            <button className="hover:text-gaming-yellow transition-colors">
              Privacy Policy
            </button>
            <span className="text-white/50">|</span>
            <button className="hover:text-gaming-yellow transition-colors">
              Terms of Use
            </button>
          </div>
          
          {/* Version info */}
          <div className="text-center mt-4">
            <span className="text-white/50 text-xs">v10000.h5:21:51 2024-8-29</span>
          </div>
        </footer>

        {/* Responsible Gaming Icons - Bottom Left */}
        <div className="absolute bottom-6 left-6 flex gap-2">
          <div className="w-12 h-12 bg-gaming-blue rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">PAGCOR</span>
          </div>
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">21</span>
          </div>
        </div>
      </div>

      {/* Responsible Gaming Modal */}
      <ResponsibleGamingModal 
        open={showModal}
        onAgree={handleAgree}
        onExit={handleExit}
      />
    </div>
  );
};

export default Index;