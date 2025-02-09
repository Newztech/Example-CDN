import React from 'react';
import { CloudLightning, Database, Globe, Zap } from 'lucide-react';

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <a href="#" className="nav-link text-gray-300 hover:text-white transition-colors">
    {children}
  </a>
);

const FeatureCard = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-3">
    <div className="p-3 bg-white rounded-2xl">
      <Icon className="w-6 h-6 text-gray-900" />
    </div>
    <span className="feature-text text-gray-200">{title}</span>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0f151a] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1/2 h-[120%] top-[-32%] right-0 gradient-pink opacity-10 rounded-bl-[200px]" />
        <div className="absolute w-48 h-48 top-0 left-0 bg-blue-500 rounded-full blur-[180px] opacity-20" />
        <div className="absolute w-48 h-48 bottom-0 right-0 bg-[#8aa2d0] rounded-full blur-[180px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex justify-between py-6">
          <div className="flex gap-8">
            <NavLink>Join the team</NavLink>
            <NavLink>Contact us</NavLink>
          </div>
          <div className="flex gap-8">
            <NavLink>Previous Campaign</NavLink>
            <NavLink>All Games List</NavLink>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mt-24 flex justify-between items-center">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-2 bg-[#f53fa10d] rounded-xl mb-6">
              <span className="tag-text text-[#f53fa1]">faster website</span>
            </div>
            
            <h1 className="hero-title mb-8">
              Have you ever tried Bunny?
            </h1>

            {/* Feature Grid */}
            <div className="bg-[#f53fa10d] backdrop-blur-sm rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <FeatureCard icon={Database} title="Storage" />
                <FeatureCard icon={Globe} title="Bunny DNS" />
                <FeatureCard icon={CloudLightning} title="CDN" />
                <FeatureCard icon={Zap} title="Permanent cache" />
              </div>
            </div>

            <button className="mt-12 px-8 py-4 bg-[#d87330] text-white rounded-full hover:bg-[#c56628] transition-colors">
              <span className="button-text">Try this example</span>
            </button>
            
            <span className="ml-4 button-text text-[#d87330]">More faster</span>
          </div>

          {/* Hero Image */}
          <div className="relative w-[600px] h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80"
              alt="3D Abstract Visualization"
              className="absolute inset-0 w-full h-full object-cover rounded-bl-[140px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;