import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Award, Users, Leaf, Star, Clock, MapPin, Phone } from 'lucide-react';

const WhyChooseUsPage: React.FC = () => {
  const mainFeatures = [
    {
      icon: Leaf,
      title: '100% Ayurvedic Products',
      description: 'All our products are made with authentic Ayurvedic ingredients, following traditional formulations that have been trusted for centuries.',
      benefits: ['No harmful chemicals', 'Natural ingredients only', 'Traditional formulations', 'Skin-friendly compositions']
    },
    {
      icon: Heart,
      title: 'No Side Effects',
      description: 'Our natural products are gentle on your skin and body, suitable for all age groups without any harmful side effects.',
      benefits: ['Safe for all skin types', 'Suitable for all ages', 'Gentle formulations', 'No harsh chemicals']
    },
    {
      icon: Star,
      title: '20+ Years of Trust',
      description: 'Over two decades of serving the Nashik community has built our reputation as a reliable source for quality Ayurvedic products.',
      benefits: ['Proven track record', 'Thousands of satisfied customers', 'Consistent quality', 'Trusted by families']
    },
    {
      icon: MapPin,
      title: 'Local Business Advantage',
      description: 'Being a local Nashik business, we understand your needs better and provide personalized service with easy accessibility.',
      benefits: ['Personal consultation', 'Easy store visits', 'Local understanding', 'Quick support']
    }
  ];

  const additionalBenefits = [
    { icon: Shield, title: 'Quality Assurance', desc: 'Every product undergoes strict quality checks' },
    { icon: Users, title: 'Expert Guidance', desc: 'Knowledgeable staff to help with product selection' },
    { icon: Award, title: 'Authentic Products', desc: 'Genuine Ayurvedic formulations from trusted sources' },
    { icon: Clock, title: 'Reliable Service', desc: 'Consistent availability and dependable service' },
  ];

  const testimonialStats = [
    { number: '20+', label: 'Years in Business' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '50+', label: 'Product Varieties' },
    { number: '100%', label: 'Natural Products' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Simran Trading Company?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us Nashik's most trusted source for authentic Ayurvedic and herbal products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <feature.icon className="h-16 w-16 text-green-600 mb-6" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                    
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? '7755448' : index === 1 ? '4465124' : index === 2 ? '7640743' : '4465831'
                    }/pexels-photo-${
                      index === 0 ? '7755448' : index === 1 ? '4465124' : index === 2 ? '7640743' : '4465831'
                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={feature.title}
                    className="rounded-2xl shadow-xl w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Additional Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <benefit.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-green-200 mb-8">
              Join thousands of satisfied customers who have made the natural choice for their health and beauty needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9730076826"
                className="bg-white text-green-800 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 font-semibold"
              >
                <Phone className="h-5 w-5" />
                <span>Call: 9730076826</span>
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-800 transition-colors duration-200 font-semibold"
              >
                Visit Our Store
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsPage;