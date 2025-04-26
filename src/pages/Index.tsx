import { Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";

const SisiIcon = ({ className }: { className?: string }) => (
  <img src="/lovable-uploads/sisi.png" alt="Sisi" className={className} />
);

const CashIcon = ({ className }: { className?: string }) => (
  <img src="/lovable-uploads/cash.png" alt="Cash" className={className} />
);

const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{
        backgroundImage: 'url("/lovable-uploads/7367cfe6-ec8c-4d1c-9240-71dc09d311ea.png")',
        backgroundAttachment: 'fixed'
      }} />
        <div className="relative z-10">
          <Navbar />
          
          {/* Hero Section */}
          <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-32">
            <div className="backdrop-blur-sm p-8 rounded-lg max-w-3xl mx-auto bg-[#0a022b]/[0.57] relative">
              <img
                src="/lovable-uploads/telkabezfona.png"
                alt=""
                className="absolute"
                style={{ left: '-80px', top: '-40px', zIndex: 1, height: '500px', width: 'auto' }}
              />
              <div className="relative" style={{ zIndex: 2 }}>
                <h1 className="text-5xl md:text-6xl mb-6 text-slate-50 text-center font-extrabold">BOOB$ CLUB</h1>
                <p className="text-xl text-white/90 max-w-2xl mb-8 mx-auto">All about TIT$. Join BOOB$ CLUB community, buy club token, earn morning TIT$ everyday in your TG and make cash together.</p>
                <p className="text-xl text-white/90 max-w-2xl mb-8 mx-auto">Address: BK31h8nJDrkL1kihppm8LcX8JAc8VCShMv7kX3Fp5Gt1</p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white/90 text-black hover:bg-white"
                    onClick={() => window.open('https://pump.fun/coin/BK31h8nJDrkL1kihppm8LcX8JAc8VCShMv7kX3Fp5Gt1', '_blank')}
                  >
                    Buy Token
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/90 text-slate-50 bg-[#000a0e]/0">Get TIT$ NOW</Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/90 text-slate-50 bg-[#000a0e]/0"
                    onClick={() => window.open('https://t.me/boobstitsclub', '_blank')}
                  >
                    Community
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="backdrop-blur-sm p-8 rounded-lg mb-12 bg-[#0a022b]/[0.57]">
                <h2 className="text-3xl font-bold text-center text-white">WTF is BOOB$ CLUB?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={SisiIcon}
                  title="Get everyday TIT$" 
                  description="If you are holder of 100k BOOB$ get fresh TIT$ to your TG everyday." 
                  className="bg-black/40 backdrop-blur-sm text-white border-none" 
                />
                <FeatureCard 
                  icon={CashIcon}
                  title="MoneyMake" 
                  description="Make money with BOOB$ CLUB community" 
                  className="bg-black/40 backdrop-blur-sm text-white border-none" 
                />
                <FeatureCard icon={Users} title="Grow Community" description="Connect with like-minded BOOB$ CLUB holders and build lasting relationships." className="bg-black/40 backdrop-blur-sm text-white border-none" />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 text-center bg-black/60 backdrop-blur-sm text-white/90">
        <p>© {new Date().getFullYear()} MAGAS. All rights reserved.</p>
      </footer>
    </div>;
};
export default Index;