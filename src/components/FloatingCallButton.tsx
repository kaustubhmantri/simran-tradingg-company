import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCallButton: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-6 right-6 z-40 md:hidden"
    >
      <a
        href="tel:9730076826"
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
      >
        <Phone className="h-6 w-6" />
      </a>
    </motion.div>
  );
};

export default FloatingCallButton;