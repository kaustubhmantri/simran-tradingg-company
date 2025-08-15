import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Leaf, Phone, MessageCircle } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  benefits: string;
  ingredients: string;
  image: string;
  category: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in ${product.name}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/919730076826?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-green-600 font-medium text-sm">100% Ayurvedic</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Benefits:</h3>
                <p className="text-gray-600 leading-relaxed">{product.benefits}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Ingredients:</h3>
                <p className="text-gray-600 leading-relaxed">{product.ingredients}</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Interested in this product?</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:9730076826"
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </a>
                  <button
                    onClick={handleWhatsApp}
                    className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Order Via WhatsApp</span>
                  </button>
                </div>
                <p className="text-center text-gray-500 text-sm mt-3">
                  Contact us to place your order and get expert guidance
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;