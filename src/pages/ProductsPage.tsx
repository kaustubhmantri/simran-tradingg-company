import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import productsData from '../data/products.json';

interface Product {
  id: string;
  name: string;
  benefits: string;
  ingredients: string;
  image: string;
  category: string;
}

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Flatten all products from all categories
  const allProducts: Product[] = [
    ...productsData.chemicalFreeHerbal,
    ...productsData.ayurvedicProducts,
    ...productsData.bodyCareProducts,
    ...productsData.skinCareProducts,
    ...productsData.weightLossProducts,
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: allProducts.length },
    { id: 'chemicalFreeHerbal', name: 'Chemical Free Herbal', count: productsData.chemicalFreeHerbal.length },
    { id: 'ayurvedicProducts', name: 'Ayurvedic Products', count: productsData.ayurvedicProducts.length },
    { id: 'bodyCareProducts', name: 'Body Care Products', count: productsData.bodyCareProducts.length },
    { id: 'skinCareProducts', name: 'Skin Care Products', count: productsData.skinCareProducts.length },
    { id: 'weightLossProducts', name: 'Weight Loss Products', count: productsData.weightLossProducts.length },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Ayurvedic Product Range
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive collection of authentic Ayurvedic and herbal products, 
              each carefully selected for their purity and effectiveness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="h-5 w-5 text-green-600" />
            <h2 className="text-lg font-semibold text-gray-800">Filter by Category</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={product}
                    onViewDetails={handleViewDetails}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-xl text-green-200 mb-8">
              Our experienced team can help you find the perfect Ayurvedic solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9730076826"
                className="bg-white text-green-800 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                Call for Consultation: 9730076826
              </a>
              <a
                href="https://wa.me/919730076826"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-800 transition-colors duration-200 font-semibold"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;