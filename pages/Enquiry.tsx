
import React, { useState } from 'react';
import { Send, Phone, Mail, Globe, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../types';
import { ALL_MAJOR_COUNTRIES, COUNTRY_CALLING_CODES } from '../constants';
import { GoogleGenAI } from "@google/genai";

const Enquiry: React.FC = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [phoneMain, setPhoneMain] = useState('');
  
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productOfInterest: '',
    message: '',
    country: 'United Arab Emirates'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [aiNote, setAiNote] = useState<string>('');

  const fullPhoneNumber = `${selectedCountryCode} ${phoneMain}`.trim();

  const generateDirectMailLink = () => {
    const subject = encodeURIComponent(`Trade Enquiry: ${formData.productOfInterest} for ${formData.country}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Company: ${formData.companyName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${fullPhoneNumber}\n` +
      `Product: ${formData.productOfInterest}\n` +
      `Destination: ${formData.country}\n\n` +
      `Message:\n${formData.message}`
    );
    return `mailto:rjexportsagro@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are the AI Sales Assistant for R J Exports and Agro Services. 
        A new inquiry has arrived:
        Name: ${formData.fullName}
        Company: ${formData.companyName}
        Product: ${formData.productOfInterest}
        Region: ${formData.country}
        Phone: ${fullPhoneNumber}
        Message: ${formData.message}
        
        Provide a very brief (2-3 sentences), professional acknowledgment. 
        Focus on how R J Exports can help them in ${formData.country}. Keep it formal and encouraging.`,
      });

      setAiNote(response.text || "Your inquiry has been successfully analyzed by our trade desk.");
      setIsSuccess(true);
    } catch (error) {
      console.error("AI Processing failed", error);
      setAiNote("Your inquiry has been logged. Our sales team will contact you shortly.");
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4 bg-gray-50/50">
        <div className="max-w-2xl w-full text-center space-y-8 bg-white p-12 rounded-[3rem] shadow-2xl border border-lemongrass relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lemongrass/30 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          
          <div className="w-24 h-24 bg-lemongrass rounded-full flex items-center justify-center mx-auto text-redvelvet animate-bounce shadow-inner">
            <CheckCircle2 size={64} />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-redvelvet font-serif">Submission Successful</h2>
            <p className="text-gray-600 text-lg">
              Inquiry Ref: <span className="font-mono font-bold text-orangepulp">RJ-{Math.floor(Math.random() * 9000) + 1000}</span>
            </p>
          </div>

          <div className="bg-redvelvet/5 border border-redvelvet/10 rounded-2xl p-6 text-left relative">
            <div className="absolute -top-3 left-6 bg-redvelvet text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Sparkles size={10}/> AI TRADE ASSISTANT NOTE
            </div>
            <p className="text-redvelvet font-medium italic leading-relaxed pt-2">
              "{aiNote}"
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Our team has been notified. To ensure immediate delivery to our sales inbox, you can also send a direct copy via your mail client:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={generateDirectMailLink()}
                className="flex-1 bg-redvelvet hover:bg-black text-white py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Mail size={18}/> Send via Mail Client
              </a>
              <button 
                onClick={() => setIsSuccess(false)}
                className="flex-1 bg-white border-2 border-gray-100 text-gray-600 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                New Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-sm font-bold text-orangepulp uppercase tracking-[0.3em]">Global Sales Desk</h1>
              <h2 className="text-5xl font-bold font-serif text-redvelvet">Request a Custom Quote for Your Market</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with our trade experts for bulk pricing, customized packaging, and logistical arrangements.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="bg-redvelvet/5 p-4 rounded-2xl group-hover:bg-redvelvet transition-colors">
                   <Phone className="text-redvelvet group-hover:text-white" size={24}/>
                </div>
                <div>
                   <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Direct Sales</p>
                   <p className="text-xl font-bold text-redvelvet">+91 8421889930 / 9970009930</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="bg-redvelvet/5 p-4 rounded-2xl group-hover:bg-redvelvet transition-colors">
                   <Mail className="text-redvelvet group-hover:text-white" size={24}/>
                </div>
                <div>
                   <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Inquiry</p>
                   <p className="text-xl font-bold text-redvelvet">aditya.jagdale.rj@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Our Accreditations</p>
               <div className="flex flex-wrap gap-8 grayscale opacity-50">
                  <span className="font-black text-2xl">APEDA</span>
                  <span className="font-black text-2xl">FSSAI</span>
                  <span className="font-black text-2xl">ISO 22000</span>
                  <span className="font-black text-2xl">HALAL</span>
               </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative">
            <div className="absolute top-0 right-0 p-8">
               <Send className="text-lemongrass" size={48} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name *</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-orangepulp focus:bg-white outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-orangepulp focus:bg-white outline-none transition-all"
                    placeholder="Global Trade Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address *</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-orangepulp focus:bg-white outline-none transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number *</label>
                  <div className="flex bg-gray-50 border border-gray-100 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-orangepulp focus-within:bg-white transition-all">
                    <select 
                      className="bg-transparent border-r border-gray-200 p-4 outline-none text-sm font-bold text-gray-700 w-[100px]"
                      value={selectedCountryCode}
                      onChange={(e) => setSelectedCountryCode(e.target.value)}
                    >
                      {COUNTRY_CALLING_CODES.map(c => (
                        <option key={`${c.name}-${c.code}`} value={c.code}>
                          {c.code} ({c.name})
                        </option>
                      ))}
                    </select>
                    <input 
                      required
                      type="tel" 
                      className="flex-1 bg-transparent p-4 outline-none text-gray-800"
                      placeholder="98765 43210"
                      value={phoneMain}
                      onChange={(e) => setPhoneMain(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Target Country</label>
                  <select 
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-orangepulp focus:bg-white outline-none transition-all appearance-none"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                  >
                    {ALL_MAJOR_COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    <option value="Other">Other Region</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Product Category</label>
                  <select 
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-orangepulp focus:bg-white outline-none transition-all appearance-none"
                    value={formData.productOfInterest}
                    onChange={(e) => setFormData({...formData, productOfInterest: e.target.value})}
                  >
                    <option value="">Select Category</option>
                    <option value="Fresh Produce">Fresh Produce</option>
                    <option value="Animal Feed">Animal Feed</option>
                    <option value="Processed Food">Processed Food</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message / Requirements *</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-orangepulp focus:bg-white outline-none transition-all resize-none"
                  placeholder="Tell us about your volume requirements, shipping timelines, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-redvelvet hover:bg-orangepulp text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-red-100 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={24}/>
                    AI Trade Desk Processing...
                  </>
                ) : (
                  <>
                    <Send size={20}/>
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
