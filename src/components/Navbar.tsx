import Logo from "./Logo";
import { Button } from "./ui/button";
const Navbar = () => {
  return <nav className="bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">Subscribe to TIT$</Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">Pump.fun</Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">Community</Button>
            <Button className="bg-white/90 text-black hover:bg-white">Buy Token</Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;