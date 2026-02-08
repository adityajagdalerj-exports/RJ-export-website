
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, BarChart3, ArrowRight, Star, Wheat } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[750px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1Z0fE0NAwRhUS08uGXsblcvjvWWolW28m=w1000?fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Agro Fields" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-redvelvet/90 via-redvelvet/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 bg-lemongrass/20 backdrop-blur-md px-4 py-2 rounded-full border border-lemongrass/30 text-lemongrass text-sm font-bold uppercase tracking-widest">
              <Star size={16} fill="currentColor"/> Established Nov 2023
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight">
              Premium Quality <br/>
              <span className="text-orangepulp">Agricultural Exports</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
              From the fertile lands of Maharashtra to the global market. Delivering excellence in Millets, Pulses, Fresh Produce, and Animal Feeds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/products" className="bg-orangepulp hover:bg-white hover:text-redvelvet text-white px-8 py-5 rounded-xl font-bold text-lg transition-all text-center flex items-center justify-center gap-2 shadow-xl">
                Explore Products <ArrowRight size={20}/>
              </Link>
              <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all text-center">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Global Reach', value: '6+ Countries' },
              { label: 'Export Quality', value: 'ISO 22000' },
              { label: 'Product Range', value: '15+ Verticals' },
              { label: 'Client Trust', value: '100% Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-3xl md:text-4xl font-black text-redvelvet mb-1 font-serif group-hover:text-orangepulp transition-colors">{stat.value}</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Trust Features */}
      <section className="py-24 bg-lemongrass/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-orangepulp uppercase tracking-widest mb-4">Why Partner With Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-serif text-redvelvet mb-6">Our Commitment to Global Excellence</h3>
            <div className="w-24 h-1.5 bg-redvelvet mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-b-8 border-lemongrass group">
              <div className="bg-lemongrass w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orangepulp transition-colors">
                <ShieldCheck className="text-redvelvet group-hover:text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-redvelvet">Uncompromising Quality</h4>
              <p className="text-gray-600 leading-relaxed">
                We implement rigorous quality checks at every stage, from sourcing to final packaging, ensuring only the finest reaches you.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-b-8 border-orangepulp group transform translate-y-4 md:translate-y-8">
              <div className="bg-orangepulp w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Truck className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-redvelvet">Seamless Logistics</h4>
              <p className="text-gray-600 leading-relaxed">
                Strategic network in Solapur and proximity to ports allows us to maintain an efficient supply chain for time-sensitive exports.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-b-8 border-redvelvet group">
              <div className="bg-redvelvet w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orangepulp transition-colors">
                <BarChart3 className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-redvelvet">Market Expertise</h4>
              <p className="text-gray-600 leading-relaxed">
                Deep understanding of international trade norms and regulations in regions like the UAE, Kenya, and Southeast Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-bold font-serif text-redvelvet mb-4">Signature Product Range</h3>
              <p className="text-gray-600 text-lg">Hand-selected produce and agro-supplies meeting international safety standards.</p>
            </div>
            <Link to="/products" className="text-redvelvet font-bold flex items-center gap-2 hover:text-orangepulp transition-colors text-lg">
              View All Products <ArrowRight size={20}/>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link to={`/products/${product.category}`} key={product.id} className="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/5]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-redvelvet via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-orangepulp px-2 py-1 rounded mb-2 inline-block">
                    {product.category.replace('-', ' & ')}
                  </span>
                  <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                  <p className="text-sm text-gray-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA */}
      <section className="bg-redvelvet py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orangepulp/10 rounded-full -ml-24 -mb-24 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h3 className="text-4xl md:text-5xl font-bold font-serif mb-8">Ready to grow your global presence?</h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Partner with R J Exports and Agro Services for reliable, ethical, and high-quality agro-trade solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enquiry" className="bg-orangepulp hover:bg-white hover:text-redvelvet text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-black/20 transition-all">
              Start Global Inquiry
            </Link>
            <a href="tel:+918421889930" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg backdrop-blur-md transition-all">
              Call Direct Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
