const HeroSection = () => {
    return (
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-wrap items-center">
          <div className="lg:w-1/2 pr-4">
            {/* Image or illustration goes here */}
            <img src="/hero-image.jpg" alt="AI Solutions" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
            <h1 className="text-3xl leading-9 font-bold tracking-tight sm:text-4xl sm:leading-10">
              Healthy, vibrant AI solutions right to your doorstep
            </h1>
            <p className="mt-4 text-lg leading-6 sm:text-xl sm:leading-7">
              Discover the joy of innovation with our curated selection of artificial intelligence solutions.
            </p>
            <div className="mt-6 sm:flex sm:flex-row">
              <a href="#" className="w-full sm:w-auto px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Shop All
              </a>
              <a href="#" className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:border-gray-400 focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Starter AI
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  