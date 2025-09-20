const PersonalizedItineraries = () => {
  const itineraryTypes = [
    {
      title: 'Cultural Heritage Trail',
      description: 'Immerse yourself in local traditions, crafts, and authentic cultural experiences.',
      duration: '3-5 days',
      difficulty: 'Easy',
      highlights: ['Traditional workshops', 'Local festivals', 'Community meals', 'Artisan visits'],
      color: 'from-purple-500 to-purple-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: 'Eco-Adventure Path',
      description: 'Explore pristine natural landscapes while supporting conservation efforts.',
      duration: '4-7 days',
      difficulty: 'Moderate',
      highlights: ['Wildlife spotting', 'Sustainable camping', 'Conservation projects', 'Nature photography'],
      color: 'from-green-500 to-green-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Community Impact Journey',
      description: 'Participate in meaningful volunteer work while discovering hidden gems.',
      duration: '5-10 days',
      difficulty: 'Moderate',
      highlights: ['Volunteer projects', 'Community workshops', 'Local homestays', 'Skill sharing'],
      color: 'from-orange-500 to-orange-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="itineraries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Personalized Itineraries
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Our AI-powered system creates custom travel plans based on your interests, 
            time availability, and impact preferences.
          </p>
          
          {/* Interactive Form Preview */}
          <div className="bg-primary-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-800 mb-6">Create Your Perfect Trip</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Travel Dates</label>
                <input type="date" className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Duration</label>
                <select className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>3-5 days</option>
                  <option>1 week</option>
                  <option>2 weeks</option>
                  <option>1 month+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Interests</label>
                <select className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Cultural Heritage</option>
                  <option>Nature & Wildlife</option>
                  <option>Adventure Sports</option>
                  <option>Community Service</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Group Size</label>
                <select className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Solo</option>
                  <option>Couple</option>
                  <option>Small Group (3-8)</option>
                  <option>Large Group (9+)</option>
                </select>
              </div>
            </div>
            <button className="mt-6 w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Generate My Itinerary
            </button>
          </div>
        </div>

        {/* Itinerary Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {itineraryTypes.map((type, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white border border-secondary-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${type.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      {type.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-sm opacity-90">{type.duration}</span>
                      <div className="text-xs mt-1 bg-white/20 px-2 py-1 rounded">
                        {type.difficulty}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-sm opacity-90">{type.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-semibold text-secondary-800 mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {type.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-secondary-600">
                        <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 w-full bg-secondary-100 text-secondary-700 py-2 rounded-lg font-medium hover:bg-secondary-200 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    Explore This Trail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-secondary-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center text-secondary-900 mb-8">
            Why Choose Our Smart Itineraries?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold text-secondary-800 mb-2">AI-Powered</h4>
              <p className="text-sm text-secondary-600">Smart recommendations based on your preferences</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-secondary-800 mb-2">Community-First</h4>
              <p className="text-sm text-secondary-600">Every trip supports local communities</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-secondary-800 mb-2">Real-Time Updates</h4>
              <p className="text-sm text-secondary-600">Dynamic adjustments based on conditions</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-secondary-800 mb-2">Verified Safe</h4>
              <p className="text-sm text-secondary-600">All attractions are safety-verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedItineraries;