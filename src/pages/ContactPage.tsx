import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Mail, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to a backend
    const whatsappMessage = `Hi! I'm ${formData.name}. Phone: ${formData.phone}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919730076826?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['9730076826', '9860617286'],
      action: 'tel:9730076826'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['9730076826'],
      action: 'https://wa.me/919730076826'
    },
    {
      icon: MapPin,
      title: 'Store Address',
      details: ['Shop No. 3, Near Shani Mandir', 'Peth Road, Nashik-03, Maharashtra'],
      action: '#map'
    },
    {
      icon: Clock,
      title: 'Store Hours',
      details: ['Mon-Sat: 9:00 AM - 8:00 PM', 'Sunday: Closed'],
      action: null
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
              Contact Simran Trading Company
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for product inquiries, consultations, or to visit our store in Nashik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6 text-center"
              >
                <info.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>
                ))}
                {info.action && (
                  <a
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                  >
                    {info.title === 'Phone Numbers' ? 'Call Now' : 
                     info.title === 'WhatsApp' ? 'Message' : 'Get Directions'}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your requirements or questions"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-semibold"
                >
                  <Send className="h-5 w-5" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </motion.div>

            {/* Quick Contact Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-green-600 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Prefer to Call?</h3>
                <p className="text-green-200 mb-6">
                  Speak directly with our experts for immediate assistance and personalized recommendations.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:9730076826"
                    className="block bg-white text-green-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center font-semibold"
                  >
                    Call: 9730076826
                  </a>
                  <a
                    href="tel:9860617286"
                    className="block bg-white text-green-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center font-semibold"
                  >
                    Call: 9860617286
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Visit Our Store</h3>
                <p className="text-yellow-100 mb-6">
                  Experience our products firsthand and get expert guidance from our knowledgeable staff.
                </p>
                <address className="not-italic text-yellow-100 mb-6">
                  <p className="font-semibold">Shop No. 3, Near Shani Mandir</p>
                  <p>Peth Road, Nashik-03, Maharashtra</p>
                </address>
                <a
                  href="#map"
                  className="block bg-white text-orange-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center font-semibold"
                >
                  View on Map
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section id="map" className="py-16 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Find Our Store
            </h2>
            <p className="text-xl text-gray-600">Located conveniently in the heart of Nashik</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8234567890123!2d73.7894567890123!3d19.9876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzE1LjYiTiA3M8KwNDcnMjIuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Simran Trading Company Location"
            ></iframe>
            
            <div className="p-6 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">Simran Trading Company</h4>
                  <p className="text-gray-600 text-sm">Shop No. 3, Near Shani Mandir, Peth Road, Nashik-03</p>
                </div>
                <a
                  href="https://goo.gl/maps/example-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;