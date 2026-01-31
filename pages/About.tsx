
import React from 'react';
import { Target, Lightbulb, Users2, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h1 className="text-sm font-bold text-orangepulp uppercase tracking-widest">Our Heritage & Vision</h1>
            <h2 className="text-5xl font-bold font-serif text-redvelvet">Empowering Local Farmers, Serving Global Markets.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Established in November 2023 and headquartered in the agricultural heartland of Barshi, Solapur (Maharashtra), <strong>R J Exports and Agro Services</strong> was founded with a singular vision: to bring the freshness of Indian agriculture to the global stage.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in the high-end import-export of fresh produce, animal feeds, and processed food products. Our strategic location allows us direct access to the most fertile orchards and farms of Western India, ensuring unparalleled quality control from farm gate to port.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="border-l-4 border-orangepulp pl-6">
                <p className="text-3xl font-bold text-redvelvet">2023</p>
                <p className="text-gray-500 font-medium">Established</p>
              </div>
              <div className="border-l-4 border-orangepulp pl-6">
                <p className="text-3xl font-bold text-redvelvet">Barshi</p>
                <p className="text-gray-500 font-medium">Global HQ</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://lh3.googleusercontent.com/d/1On6mz1lBGo9Z_s3QnESdnSpIhM_iU16n=w1000?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-3xl shadow-2xl z-10 relative w-full h-[600px] object-cover" 
              alt="Team Meeting" 
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-lemongrass rounded-3xl -z-10"></div>
          </div>
        </div>

        {/* Mission/Values */}
        <div className="bg-redvelvet rounded-[3rem] p-12 md:p-20 text-white mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold font-serif mb-4">The Pillars of Our Success</h3>
              <p className="text-red-200">At R J Exports, our commitment drives our excellence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { icon: <Target className="text-orangepulp" size={40}/>, title: 'Innovation', desc: 'Modernizing supply chains with advanced cold storage and tracking.' },
                { icon: <ShieldCheck className="text-orangepulp" size={40}/>, title: 'Quality', desc: 'Rigorous grading and testing to meet EU & Gulf standards.' },
                { icon: <Users2 className="text-orangepulp" size={40}/>, title: 'Satisfaction', desc: 'Customer-centric approach with flexible order requirements.' },
                { icon: <Lightbulb className="text-orangepulp" size={40}/>, title: 'Sustainability', desc: 'Ethical sourcing that benefits both local farmers and consumers.' }
              ].map((value, idx) => (
                <div key={idx} className="space-y-4 text-center">
                  <div className="flex justify-center mb-6">{value.icon}</div>
                  <h4 className="text-xl font-bold">{value.title}</h4>
                  <p className="text-red-100/70 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="text-center max-w-4xl mx-auto py-12 mb-24 border-y border-gray-100">
           <p className="text-4xl md:text-6xl font-damion text-redvelvet/60 leading-tight mb-8">
            Connecting Worlds, Delivering Value
           </p>
           <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-px bg-gray-300"></div>
             <p className="font-bold text-redvelvet tracking-[0.2em] uppercase">Founding Principle</p>
             <div className="w-12 h-px bg-gray-300"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;