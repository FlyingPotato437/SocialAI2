const MediaFeatureSection = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="lg:w-1/2 px-4 lg:order-2">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              As Seen In
            </h2>
            <div className="mt-8">
              {/* Logos or mentions of media features */}
              {/* Use grayscale filter for logos to match color palette */}
            </div>
          </div>
          <div className="lg:w-1/2 px-4 lg:order-1">
            <img src="/media-feature.jpg" alt="Media Coverage" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaFeatureSection;
