
import React from 'react';
import { Truck, Ship, Plane, Warehouse, Map as MapIcon, CalendarCheck } from 'lucide-react';

const Logistics: React.FC = () => {
  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4">
        {/* Banner */}
        <div className="relative rounded-[3rem] overflow-hidden mb-24 h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Global Logistics and Shipping" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-redvelvet/90 via-redvelvet/40 to-transparent flex items-center p-12 md:p-24">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">Fast, Reliable, & Traceable Shipping.</h1>
              <p className="text-xl text-gray-200">Our supply chain is built for speed and quality preservation across 6 nations, ensuring your cargo arrives exactly as intended.</p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="space-y-6">
            <div className="bg-lemongrass w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl text-redvelvet border-4 border-white shadow-lg">1</div>
            <h3 className="text-2xl font-bold text-redvelvet">Farm-Level Sourcing</h3>
            <p className="text-gray-600">Direct pickup from certified farms in Barshi and surrounding Solapur regions within hours of harvest.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-orangepulp w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl text-white border-4 border-white shadow-lg">2</div>
            <h3 className="text-2xl font-bold text-redvelvet">Cold Chain Storage</h3>
            <p className="text-gray-600">State-of-the-art climate-controlled facilities to maintain freshness and nutritional value.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-redvelvet w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl text-white border-4 border-white shadow-lg">3</div>
            <h3 className="text-2xl font-bold text-redvelvet">Global Transit</h3>
            <p className="text-gray-600">Integrated sea and air freight solutions for UAE, Bangladesh, Kenya, and beyond.</p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="shrink-0"><Warehouse className="text-orangepulp" size={36}/></div>
                <div>
                  <h4 className="text-xl font-bold text-redvelvet mb-2">Modern Warehousing</h4>
                  <p className="text-gray-600">Hygienic storage solutions designed specifically for dehydrated and processed food products.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0"><CalendarCheck className="text-orangepulp" size={36}/></div>
                <div>
                  <h4 className="text-xl font-bold text-redvelvet mb-2">Real-Time Scheduling</h4>
                  <p className="text-gray-600">Precise coordination with shipping lines to ensure zero delays in critical agro-cargo.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0"><MapIcon className="text-orangepulp" size={36}/></div>
                <div>
                  <h4 className="text-xl font-bold text-redvelvet mb-2">Export Documentation</h4>
                  <p className="text-gray-600">In-house experts handling Customs, Phytosanitary, and Certifications for smooth clearances.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-lemongrass/30 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
                  <Ship size={40} className="text-redvelvet mb-4" />
                  <p className="font-bold text-redvelvet">Ocean Freight</p>
               </div>
               <div className="bg-orangepulp/10 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
                  <Plane size={40} className="text-orangepulp mb-4" />
                  <p className="font-bold text-redvelvet">Air Freight</p>
               </div>
               <div className="bg-redvelvet/5 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
                  <Truck size={40} className="text-redvelvet mb-4" />
                  <p className="font-bold text-redvelvet">Road Logistics</p>
               </div>
               <div className="bg-gray-100 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
                  <Warehouse size={40} className="text-gray-400 mb-4" />
                  <p className="font-bold text-gray-500">Cross-Border Hubs</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
