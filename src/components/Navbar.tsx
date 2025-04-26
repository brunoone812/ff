import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">Subscribe to TIT$</Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10"
              onClick={() => window.open('https://pump.fun/coin/BK31h8nJDrkL1kihppm8LcX8JAc8VCShMv7kX3Fp5Gt1', '_blank')}
            >
              Pump.fun
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10"
              onClick={() => window.open('https://t.me/boobstitsclub', '_blank')}
            >
              Community
            </Button>
            <Button 
              className="bg-white/90 text-black hover:bg-white"
              onClick={() => window.open('https://pump.fun/coin/BK31h8nJDrkL1kihppm8LcX8JAc8VCShMv7kX3Fp5Gt1', '_blank')}
            >
              Buy Token
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;