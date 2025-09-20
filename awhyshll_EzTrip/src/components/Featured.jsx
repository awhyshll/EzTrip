import { destinations } from '../data/destinations';

export default function Featured() {
  const featuredDestinations = Object.values(destinations)
    .flat()
    .filter(dest => dest.featured)
    .slice(0, 6);

  return (
    <section className="w-full py-20 bg-white my-0 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked destinations that showcase India's incredible diversity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <div key={destination.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-light text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                {destination.name}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {destination.description}
              </p>
              
              <div className="flex flex-wrap gap-2 items-center justify-start">
                {destination.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}