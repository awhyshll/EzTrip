import { useState } from 'react';
import { destinations, states } from '../data/destinations';

export default function PopularDestinations() {
  const [selectedState, setSelectedState] = useState('all');
  
  const getFilteredDestinations = () => {
    if (selectedState === 'all') {
      return Object.values(destinations).flat();
    }
    return destinations[selectedState] || [];
  };

  const filteredDestinations = getFilteredDestinations();

  return (
    <section className="w-full py-20 bg-gray-50 my-0 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover the most loved destinations across India
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => setSelectedState('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedState === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All States
            </button>
            {states.map((state) => (
              <button
                key={state.value}
                onClick={() => setSelectedState(state.value)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedState === state.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {state.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {destination.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gray-900 text-white text-xs rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {destination.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {destination.highlights.slice(0, 2).map((highlight, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                  {destination.highlights.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{destination.highlights.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}