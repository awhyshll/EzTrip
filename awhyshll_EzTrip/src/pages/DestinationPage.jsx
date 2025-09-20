import { useParams, Link } from 'react-router-dom';
import { destinations, states } from '../data/destinations';

export default function DestinationPage() {
  const { state } = useParams();
  const stateDestinations = destinations[state] || [];
  const stateName = states.find(s => s.value === state)?.label || 'Unknown State';

  if (stateDestinations.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center m-0 p-0">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">State Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 m-0 p-0">
      <nav className="bg-white shadow-sm border-b m-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-light text-gray-900">
              EzTrip
            </Link>
            <Link
              to="/"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </nav>
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
            Discover {stateName}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the magnificent destinations that {stateName} has to offer
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stateDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                {destination.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gray-900 text-white text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-light text-gray-900 mb-4">
                  {destination.name}
                </h2>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Plan Your Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">
            Want to Explore More States?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover other incredible destinations across India
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore All Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}