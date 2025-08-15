import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, MapPin, Leaf, Star, Heart, Phone } from 'lucide-react';

const HomePage: React.FC = () => {
  const trustIndicators = [
    { icon: Shield, text: '100% Ayurvedic Products', subtext: 'No harmful chemicals' },
    { icon: Users, text: 'Trusted by Thousands', subtext: '20+ years of service' },
    { icon: MapPin, text: 'Local Availability', subtext: 'Based in Nashik' },
  ];

  const featuredProducts = [
    {
      name: 'Adivasi Oil',
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Chemical Free Herbal'
    },
    {
      name: 'Veda Body Lotion',
      image: 'https://images.pexels.com/photos/7640743/pexels-photo-7640743.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Body Care'
    },
    {
      name: 'Kumkumadi Tailam',
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Skin Care'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-yellow-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-300 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-400 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Trusted Ayurvedic & Herbal Products
              <span className="block text-green-700 text-3xl md:text-4xl mt-2">
                Since 20+ Years
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the power of nature with our authentic Ayurvedic products. 
              From skincare to wellness, we bring you traditional remedies backed by decades of trust.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              to="/products"
              className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2 text-lg font-semibold"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:9730076826"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-200 text-lg font-semibold"
            >
              Call Now: 9730076826
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <indicator.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{indicator.text}</h3>
                <p className="text-gray-600">{indicator.subtext}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular Ayurvedic solutions trusted by families across Nashik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-green-600 font-medium text-sm">{product.category}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mt-1">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 text-lg font-semibold"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Simran Trading Company?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: '100% Ayurvedic', desc: 'Pure herbal ingredients with no harmful chemicals' },
              { icon: Heart, title: 'No Side Effects', desc: 'Safe for all skin types and age groups' },
              { icon: Star, title: '20+ Years Trust', desc: 'Serving Nashik families for over two decades' },
              { icon: MapPin, title: 'Local Business', desc: 'Easy access and personalized service' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Natural Wellness?
            </h2>
            <p className="text-xl text-green-200 mb-8">
              Visit our store in Nashik or call us to discuss your health and beauty needs with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9730076826"
                className="bg-white text-green-800 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 font-semibold"
              >
                <Phone className="h-5 w-5" />
                <span>Call: 9730076826</span>
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-800 transition-colors duration-200 font-semibold"
              >
                Visit Our Store
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;