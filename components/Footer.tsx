import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ExternalLink, Linkedin, Facebook, Twitter } from 'lucide-react';
import { COUNTRIES_SERVED } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-8 border-orangepulp">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <Link to="/" className="inline-block w-fit mb-2">
                <img 
                  src="https://lh3.googleusercontent.com/d/1rOO3CjuxyLnQjAux8sw_erSK0_AYleQP=w1000?auto=format&fit=crop&q=80&w=800" 
                  alt="R J Exports and Agro Services" 
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </Link>
              <div className="mt-1">
                <h2 className="text-2xl font-bold font-serif text-orangepulp tracking-tight">R J EXPORTS</h2>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">And Agro Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Established in 2023, we are a global leader in premium agricultural exports, bridging the gap between local quality and international markets with integrity.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-redvelvet transition-colors"><Linkedin size={18}/></a>
              <a className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-redvelvet transition-colors"><Facebook size={18}/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b border-gray-800 pb-2">Global Trade</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/products/agro" className="hover:text-orangepulp flex items-center gap-2"><ExternalLink size={12}/> Animal Feeds</Link></li>
              <li><Link to="/products/millets-pulses" className="hover:text-orangepulp flex items-center gap-2"><ExternalLink size={12}/> Millets & Pulses</Link></li>
              <li><Link to="/products/fresh" className="hover:text-orangepulp flex items-center gap-2"><ExternalLink size={12}/> Fresh Produce</Link></li>
              <li><Link to="/products/processed" className="hover:text-orangepulp flex items-center gap-2"><ExternalLink size={12}/> Processed Foods</Link></li>
              <li><Link to="/logistics" className="hover:text-orangepulp flex items-center gap-2"><ExternalLink size={12}/> Logistics Network</Link></li>
              <li><Link to="/enquiry" className="hover:text-orangepulp flex items-center gap-2"><ExternalLink size={12}/> Global Enquiry</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b border-gray-800 pb-2">Export Destinations</h3>
            <div className="flex flex-wrap gap-2">
              {COUNTRIES_SERVED.map(country => (
                <span key={country} className="px-3 py-1 bg-gray-800 text-xs rounded-full text-gray-300 border border-gray-700">
                  {country}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b border-gray-800 pb-2">Contact HQ</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="text-orangepulp shrink-0" size={18}/>
                <span>Barshi, Solapur, Maharashtra, India - 413401</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-orangepulp shrink-0" size={18}/>
                <span>+91 8421889930 / 9970009930</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-orangepulp shrink-0" size={18}/>
                <span>aditya.jagdale.rj@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} R J EXPORTS AND AGRO SERVICES. All rights reserved.</p>
          <p className="mt-2">ISO 22000 Certified | APEDA Registered | FSSAI Licensed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;