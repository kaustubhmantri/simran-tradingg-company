import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, User, ShoppingBag, CheckCircle } from 'lucide-react';

const HowToOrderPage: React.FC = () => {
  const orderSteps = [
    {
      icon: Phone,
      title: 'Call or WhatsApp',
      description: 'Contact us on 9730076826 or 9860617286 to discuss your requirements',
      details: 'Our experienced team will understand your needs and recommend the best products for you'
    },
    {
      icon: User,
      title: 'Consultation',
      description: 'Get personalized recommendations based on your specific health and beauty needs',
      details: 'We provide expert guidance to help you choose the most suitable Ayurvedic products'
    },
    {
      icon: ShoppingBag,
      title: 'Visit Our Store',
      description: 'Come to our store to see the products and make your purchase',
      details: 'Experience our products firsthand and get detailed information from our knowledgeable staff'
    },
    {
      icon: CheckCircle,
      title: 'Take Home & Enjoy',
      description: 'Take your natural wellness products home and start your Ayurvedic journey',
      details: 'Follow our usage instructions and feel free to contact us for any questions'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '9730076826 / 9860617286',
      action: 'tel:9730076826',
      buttonText: 'Call Now',
      description: 'Speak directly with our experts'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '9730076826',
      action: 'https://wa.me/919730076826',
      buttonText: 'Message Us',
      description: 'Quick and convenient messaging'
    },
    {
      icon: MapPin,
      title: 'Visit Store',
      info: 'Shop No. 3, Near Shani Mandir, Peth Road',
      action: '/contact',
      buttonText: 'Get Directions',
      description: 'See our complete location details'
    }
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
              How to Order Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get authentic Ayurvedic products from our trusted store in Nashik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-400 rounded-full p-2">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Store Visit Required</h3>
              <p className="text-gray-600">
                We currently accept orders only through direct store visits or phone calls. 
                This ensures you get personalized consultation and the right products for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Process Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Easy Ordering Process
            </h2>
            <p className="text-xl text-gray-600">Follow these simple steps to get your Ayurvedic products</p>
          </motion.div>

          <div className="space-y-12">
            {orderSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-green-600 text-white rounded-full p-3">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-lg text-gray-700 mb-4">{step.description}</p>
                    <p className="text-gray-600">{step.details}</p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <img
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? '4465124' : index === 1 ? '7640743' : index === 2 ? '4465831' : '7755448'
                    }/pexels-photo-${
                      index === 0 ? '4465124' : index === 1 ? '7640743' : index === 2 ? '4465831' : '7755448'
                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={step.title}
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Order?
            </h2>
            <p className="text-xl text-gray-600">Choose your preferred way to connect with us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <method.icon className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-2">{method.description}</p>
                <p className="text-lg font-semibold text-gray-800 mb-6">{method.info}</p>
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 inline-block font-semibold"
                >
                  {method.buttonText}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Hours & Location */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-green-800 text-white rounded-2xl p-8"
            >
              <Clock className="h-12 w-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold mb-6">Store Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <p className="text-green-200 mt-6">
                We recommend calling ahead to ensure product availability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-yellow-400 to-orange-400 text-white rounded-2xl p-8"
            >
              <MapPin className="h-12 w-12 text-yellow-100 mb-6" />
              <h3 className="text-2xl font-bold mb-6">Our Location</h3>
              <address className="not-italic space-y-2">
                <p className="font-semibold">Simran Trading Company</p>
                <p>Shop No. 3, Near Shani Mandir</p>
                <p>Peth Road, Nashik-03</p>
                <p>Maharashtra, India</p>
              </address>
              <p className="text-yellow-100 mt-6">
                Easy to find and accessible by all modes of transport in Nashik.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToOrderPage;