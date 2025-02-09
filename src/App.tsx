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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#0f151a] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1/2 h-[120%] top-[-32%] right-0 gradient-pink opacity-10 rounded-bl-[200px]" />
        <div className="absolute w-48 h-48 top-0 left-0 bg-blue-500 rounded-full blur-[180px] opacity-20" />
        <div className="absolute w-48 h-48 bottom-0 right-0 bg-[#8aa2d0] rounded-full blur-[180px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Navigation */}
        <nav className="py-6">
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            <div className="flex flex-col space-y-4">
              <NavLink>Join the team</NavLink>
              <NavLink>Contact us</NavLink>
              <NavLink>Previous Campaign</NavLink>
              <NavLink>All Games List</NavLink>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-between">
            <div className="flex gap-8">
              <NavLink>Join the team</NavLink>
              <NavLink>Contact us</NavLink>
            </div>
            <div className="flex gap-8">
              <NavLink>Previous Campaign</NavLink>
              <NavLink>All Games List</NavLink>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mt-12 lg:mt-24 flex flex-col lg:flex-row justify-between items-center  -inset-y-8">
          <div className="max-w-xl w-full lg:w-1/2 -inset-y-8">
            <div className="inline-block px-4 py-2 bg-[#f53fa10d] rounded-xl mb-6">
              <span className="tag-text text-[#d87330]">faster website</span>
            </div>

            <h1 className="hero-title mb-8 text-3xl lg:text-4xl xl:text-5xl font-bold">
              Have you ever tried Bunny?
            </h1>

            {/* Feature Grid */}
            <div className="bg-[#f53fa10d] backdrop-blur-sm rounded-3xl p-4 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                <FeatureCard icon={Database} title="Storage" />
                <FeatureCard icon={Globe} title="Bunny DNS" />
                <FeatureCard icon={CloudLightning} title="CDN" />
                <FeatureCard icon={Zap} title="Permanent cache" />
              </div>
            </div>

            <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#d87330] text-white rounded-full hover:bg-[#c56628] transition-colors">
                <span className="button-text">Try this example</span>
              </button>

              <span className="button-text text-[#d87330]">More faster</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full lg:w-[832px] h-[400px] lg:h-[1248px] mt-8 lg:mt-0 mx-auto bg-cover">
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover mix-blend-color-dodge rounded-b-[200px]"
              style={{
                backgroundImage: "url(https://bunny-cdn.luam.tech/bunny/bunny.webp)"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
