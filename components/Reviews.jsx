const reviews = [
  { id: 1, content: "This AI service has transformed our business! The customer service is exceptional.", author: "Jane Doe", rating: 5 },
  { id: 2, content: "Incredible results, easy to integrate with our existing systems.", author: "John Smith", rating: 4 },
  // More reviews...
];

const ReviewsSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-1 lg:gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Customer Reviews
            </h3>
            <div className="mt-6 space-y-8">
              {reviews.map(review => (
                <blockquote key={review.id} className="relative bg-gray-100 rounded-lg p-8">
                  <div className="text-lg leading-7 font-medium text-gray-900">
                    <p>{review.content}</p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base leading-6 font-medium text-gray-500">
                      {review.author}, {review.rating} Stars
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
