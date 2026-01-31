
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Phone } from 'lucide-react';
import { NAVIGATION } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-redvelvet">
      {/* Top Bar */}
      <div className="bg-redvelvet text-white py-1.5 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium"><Phone size={14}/> +91 8421889930 / 9970009930</span>
            <span className="flex items-center gap-1 font-medium"><Globe size={14}/> Headquartered in Barshi, Solapur</span>
          </div>
          <div className="font-damion text-lg tracking-wide">Connecting Worlds, Delivering Value</div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-14 md:h-16 w-auto overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img 
                src="https://lh3.googleusercontent.com/d/1rOO3CjuxyLnQjAux8sw_erSK0_AYleQP=w1000?auto=format&fit=crop&q=80&w=800" 
                alt="R J Exports and Agro Services" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="leading-tight hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-redvelvet font-serif uppercase tracking-tight">R J EXPORTS</h1>
              <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">And Agro Services</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {NAVIGATION.map((item) => (
              <div 
                key={item.href} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={item.href}
                  className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors py-4 ${
                    isActive(item.href) ? 'text-orangepulp' : 'text-gray-700 hover:text-redvelvet'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`}/>}
                </Link>

                {item.children && (
                  <div 
                    className={`absolute top-full left-0 w-64 pt-2 transform origin-top transition-all duration-300 ease-out z-50 ${
                      activeDropdown === item.label 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-xl py-2 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-6 py-3.5 text-sm text-gray-600 hover:bg-lemongrass hover:text-redvelvet transition-colors font-semibold border-b border-gray-50 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/enquiry"
              className="bg-orangepulp hover:bg-redvelvet text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-orange-200 hover:shadow-red-200 transition-all transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-redvelvet"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-t mt-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-4 py-6">
            {NAVIGATION.map((item) => (
              <div key={item.href} className="flex flex-col gap-2">
                <Link 
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold ${isActive(item.href) ? 'text-orangepulp' : 'text-gray-800'}`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="flex flex-col gap-2 pl-4 border-l-2 border-lemongrass">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 font-medium py-1.5 hover:text-redvelvet"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/enquiry"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-redvelvet text-white text-center py-4 rounded-xl font-bold shadow-lg"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
