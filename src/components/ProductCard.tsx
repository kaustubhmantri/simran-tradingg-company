import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Leaf, MessageCircle } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  benefits: string;
  ingredients: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          <Leaf className="h-3 w-3 inline mr-1" />
          100% Natural
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.benefits}</p>
        
        <div className="space-y-2">
          <button
            onClick={() => onViewDetails(product)}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Eye className="h-4 w-4" />
            <span>Know More</span>
          </button>
          
          <a
            href={`https://wa.me/919730076826?text=Hi! I'm interested in ${encodeURIComponent(product.name)}. Can you provide more information?`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Order Via WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;