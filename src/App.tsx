import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import HowToOrderPage from './pages/HowToOrderPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/how-to-order" element={<HowToOrderPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingCallButton />
      </div>
    </Router>
  );
}

export default App;