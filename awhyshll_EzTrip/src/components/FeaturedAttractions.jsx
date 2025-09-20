const FeaturedAttractions = () => {
  // Mock data for featured attractions
  const featuredAttractions = [
    {
      id: '1',
      name: 'Sacred Grove Cultural Center',
      description: 'Experience traditional crafts and ceremonies in this community-led cultural preservation site.',
      location: 'Mountain Valley Region',
      category: 'cultural',
      images: ['/api/placeholder/400/300'],
      rating: 4.8,
      reviews: 127,
      sustainable: true,
      communityInvolved: true,
      tags: ['Traditional Crafts', 'Cultural Heritage', 'Community-Led']
    },
    {
      id: '2',
      name: 'Emerald Lake Trail',
      description: 'A pristine hiking trail leading to crystal-clear mountain lakes with guided eco-tours.',
      location: 'Highland National Park',
      category: 'natural',
      images: ['/api/placeholder/400/300'],
      rating: 4.9,
      reviews: 89,
      sustainable: true,
      communityInvolved: true,
      tags: ['Hiking', 'Natural Beauty', 'Eco-Tours']
    },
    {
      id: '3',
      name: 'Historic Heritage Village',
      description: 'Step back in time and learn about local history through immersive storytelling.',
      location: 'Riverside District',
      category: 'historical',
      images: ['/api/placeholder/400/300'],
      rating: 4.7,
      reviews: 156,
      sustainable: true,
      communityInvolved: true,
      tags: ['History', 'Heritage', 'Storytelling']
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'cultural':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        );
      case 'natural':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'historical':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
    }
  };

  return (
    <section id="attractions" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Featured Attractions
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover carefully curated eco-cultural destinations that prioritize sustainability 
            and meaningful community engagement.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredAttractions.map((attraction) => (
            <div key={attraction.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-200 to-primary-300">
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 text-primary-600">
                    {getCategoryIcon(attraction.category)}
                  </div>
                  {attraction.sustainable && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Eco-Friendly
                    </div>
                  )}
                  {attraction.communityInvolved && (
                    <div className="bg-accent-500 text-accent-900 px-2 py-1 rounded-full text-xs font-medium">
                      Community-Led
                    </div>
                  )}
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium text-secondary-700">{attraction.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {attraction.name}
                </h3>
                <p className="text-secondary-600 mb-4 line-clamp-2">
                  {attraction.description}
                </p>
                
                {/* Location */}
                <div className="flex items-center text-secondary-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{attraction.location}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {attraction.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-500">
                    {attraction.reviews} reviews
                  </span>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            View All Attractions
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAttractions;