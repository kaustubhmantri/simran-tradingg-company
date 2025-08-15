import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Award, Leaf, MapPin, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const milestones = [
    { year: '2000', event: 'Founded Simran Trading Company in Nashik' },
    { year: '2005', event: 'Expanded product range to include complete skincare line' },
    { year: '2010', event: 'Introduced specialized hair care products' },
    { year: '2015', event: 'Achieved recognition as trusted local Ayurvedic supplier' },
    { year: '2020', event: 'Serving thousands of satisfied customers across Maharashtra' },
    { year: '2025', event: 'Continuing our legacy of natural wellness solutions' },
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Pure & Natural',
      description: 'We believe in the power of nature and ensure all our products are made with pure, authentic Ayurvedic ingredients.'
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Your health and satisfaction are our priority. We provide personalized recommendations for your specific needs.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product undergoes strict quality checks to ensure you receive only the best Ayurvedic solutions.'
    },
    {
      icon: Users,
      title: 'Community Trust',
      description: 'Built on relationships and trust, we have been serving the Nashik community for over two decades.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Simran Trading Company
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over 20 years, we have been Nashik's trusted source for authentic Ayurvedic and herbal products, 
              helping families embrace natural wellness solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="https://images.pexels.com/photos/7640856/pexels-photo-7640856.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ayurvedic products"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-800">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                Established in the heart of Nashik, Simran Trading Company began with a simple mission: 
                to make authentic Ayurvedic products accessible to everyone. What started as a small shop 
                near Shani Mandir has grown into a trusted name that families rely on for their health and beauty needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to quality and authenticity has remained unchanged. We carefully select 
                products that follow traditional Ayurvedic principles while meeting modern quality standards. 
                Every item in our store is tested for purity and effectiveness.
              </p>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-gray-800">20+ Years</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-gray-800">1000+ Customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-gray-800">Nashik Based</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Simran Trading Company
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6 text-center"
              >
                <value.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones in our 20+ year legacy</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`bg-white rounded-xl p-6 shadow-lg max-w-md ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-green-100 leading-relaxed">
                To provide authentic, high-quality Ayurvedic and herbal products that promote natural health and wellness. 
                We are committed to preserving traditional knowledge while making it accessible to modern families in Nashik and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-yellow-100 leading-relaxed">
                To become the most trusted name in Ayurvedic products across Maharashtra, empowering people to choose 
                natural alternatives for their health and beauty needs while preserving the ancient wisdom of Ayurveda.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;