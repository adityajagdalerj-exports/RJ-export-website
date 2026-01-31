
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { CategoryType } from '../types';
import { LayoutGrid, Leaf, Beef, Sparkles, ShoppingBag } from 'lucide-react';

const Products: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  const filteredProducts = useMemo(() => {
    if (!category || category === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === category);
  }, [category]);

  const categories = [
    { id: 'all', label: 'All Products', icon: <LayoutGrid size={18}/> },
    { id: 'agro', label: 'Animal Feeds', icon: <Beef size={18}/> },
    { id: 'fresh', label: 'Fresh Produce', icon: <Leaf size={18}/> },
    { id: 'processed', label: 'Processed Foods', icon: <Sparkles size={18}/> },
  ];

  const currentCategoryLabel = categories.find(c => c.id === (category || 'all'))?.label;

  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-sm font-bold text-orangepulp uppercase tracking-[0.3em]">Our Product Catalog</h1>
          <h2 className="text-5xl font-bold font-serif text-redvelvet">World-Class Agro Solutions</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.id === 'all' ? '/products' : `/products/${cat.id}`}
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all ${
                (category || 'all') === cat.id 
                ? 'bg-redvelvet text-white shadow-xl shadow-red-100 scale-105' 
                : 'bg-white text-gray-600 hover:bg-lemongrass border border-gray-100'
              }`}
            >
              {cat.icon}
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-lg group border border-gray-100 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-redvelvet shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-redvelvet mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                <Link 
                  to="/enquiry"
                  className="w-full bg-lemongrass hover:bg-orangepulp text-redvelvet hover:text-white py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18}/>
                  Get Best Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
             <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
             <p className="text-xl text-gray-500 font-medium">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
