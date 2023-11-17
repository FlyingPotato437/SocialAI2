import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'AI Bot', description: 'Your personal AI assistant.', price: '$49.99', imageUrl: '/ai-bot.jpg' },
  { id: 2, name: 'Data Analyzer', description: 'Deep insights into your data.', price: '$29.99', imageUrl: '/data-analyzer.jpg' },
  // Add more products as needed
];

const FeaturedProductsSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Shop Foli Faves
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsSection;
