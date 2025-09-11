import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ResponsibleGamingModalProps {
  open: boolean;
  onAgree: () => void;
  onExit: () => void;
}

const ResponsibleGamingModal = ({ open, onAgree, onExit }: ResponsibleGamingModalProps) => {
  return (
    <Dialog open={open}>
      <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-md border-2 border-white/30 rounded-3xl p-8">
        <div className="text-center space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-gaming-blue to-gaming-purple text-white rounded-2xl py-3">
            <h2 className="text-2xl font-bold">Responsible Gaming</h2>
          </div>

          {/* Logos */}
          <div className="flex justify-center items-center gap-8 my-6">
            
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center relative">
              <span className="text-white font-bold text-lg">21+</span>
            </div>
            <div className="text-gaming-blue font-bold text-sm">
              GAMBLING CAN BE ADDICTIVE<br/>
              KNOW WHEN TO STOP
            </div>
          </div>

          {/* Content */}
          <div className="text-left space-y-4">
            <p className="text-gray-700 font-semibold text-lg">
              By clicking "I agree all", you confirm that you are:
            </p>
            
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Over 21 years old.</li>
              <li>• Not a government official.</li>
              <li>• Not a Gaming Employment License (GEL) holder.</li>
              <li>• Not a member of the Philippine Armed Forces or National Police.</li>
              <li>• Not on PAGCOR's National Database of Restricted Persons (NDRP).</li>
              <li>• Not playing in open and public places.</li>
              <li>• Ineligible player funds will be forfeited to the Government.</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <Button 
              variant="outline" 
              onClick={onExit}
              className="px-8 py-3 rounded-full border-2 border-gray-400 text-gray-600 hover:bg-gray-100"
            >
              Exit
            </Button>
            <Button 
              onClick={onAgree}
              className="px-8 py-3 rounded-full gaming-button text-white font-bold"
              style={{ background: 'linear-gradient(135deg, #FFB800, #FF8C00)' }}
            >
              I Agree All
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResponsibleGamingModal;