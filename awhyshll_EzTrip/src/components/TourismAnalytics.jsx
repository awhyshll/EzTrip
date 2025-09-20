const TourismAnalytics = () => {
  // Mock analytics data
  const analyticsData = {
    totalVisitors: 125847,
    economicImpact: 2.8,
    communityBenefits: 95,
    sustainabilityScore: 87,
    growthRate: 23,
    jobsCreated: 342
  };

  const impactMetrics = [
    {
      title: 'Carbon Footprint Reduction',
      value: '34%',
      change: '+12%',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Local Employment',
      value: '342',
      change: '+28%',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Waste Reduction',
      value: '67%',
      change: '+15%',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: 'Community Revenue',
      value: '$2.8M',
      change: '+31%',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    }
  ];

  const chartData = [
    { month: 'Jan', visitors: 8500, revenue: 185000 },
    { month: 'Feb', visitors: 9200, revenue: 203000 },
    { month: 'Mar', visitors: 11800, revenue: 267000 },
    { month: 'Apr', visitors: 13400, revenue: 298000 },
    { month: 'May', visitors: 15600, revenue: 342000 },
    { month: 'Jun', visitors: 17200, revenue: 389000 }
  ];

  return (
    <section id="analytics" className="py-20 bg-secondary-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tourism Impact Analytics
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Comprehensive data insights for tourism officials to monitor economic benefits, 
            environmental impact, and community development.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Total Visitors */}
          <div className="bg-primary-600 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-primary-100">Total Visitors</h3>
                <p className="text-3xl font-bold">{analyticsData.totalVisitors.toLocaleString()}</p>
              </div>
              <div className="bg-primary-700 rounded-full p-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center text-primary-200">
              <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm">+{analyticsData.growthRate}% this year</span>
            </div>
          </div>

          {/* Economic Impact */}
          <div className="bg-green-600 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-green-100">Economic Impact</h3>
                <p className="text-3xl font-bold">${analyticsData.economicImpact}M</p>
              </div>
              <div className="bg-green-700 rounded-full p-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <div className="flex items-center text-green-200">
              <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm">Annual revenue</span>
            </div>
          </div>

          {/* Sustainability Score */}
          <div className="bg-accent-600 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-accent-100">Sustainability Score</h3>
                <p className="text-3xl font-bold">{analyticsData.sustainabilityScore}/100</p>
              </div>
              <div className="bg-accent-700 rounded-full p-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center text-accent-200">
              <div className="bg-accent-500 rounded-full h-2 flex-1 mr-2">
                <div className="bg-accent-300 h-2 rounded-full" style={{ width: `${analyticsData.sustainabilityScore}%` }}></div>
              </div>
              <span className="text-sm">Excellent</span>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="bg-secondary-800 rounded-xl p-6 border border-secondary-700">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-secondary-700 rounded-lg p-2 text-accent-400">
                  {metric.icon}
                </div>
                <span className="text-green-400 text-sm font-medium">{metric.change}</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary-200 mb-2">{metric.title}</h3>
              <p className="text-2xl font-bold">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Visitor Trends */}
          <div className="bg-secondary-800 rounded-xl p-6 border border-secondary-700">
            <h3 className="text-xl font-bold mb-6">Visitor Trends</h3>
            <div className="space-y-4">
              {chartData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-secondary-300 w-12">{data.month}</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-secondary-700 rounded-full h-3">
                      <div 
                        className="bg-primary-500 h-3 rounded-full transition-all duration-1000" 
                        style={{ width: `${(data.visitors / 18000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-white font-medium w-16 text-right">{data.visitors.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Distribution */}
          <div className="bg-secondary-800 rounded-xl p-6 border border-secondary-700">
            <h3 className="text-xl font-bold mb-6">Revenue Distribution</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-secondary-300">Community Share</span>
                <div className="flex items-center">
                  <div className="bg-secondary-700 rounded-full h-3 w-32 mr-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-white font-medium">65%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-secondary-300">Infrastructure</span>
                <div className="flex items-center">
                  <div className="bg-secondary-700 rounded-full h-3 w-32 mr-3">
                    <div className="bg-primary-500 h-3 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <span className="text-white font-medium">25%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-secondary-300">Conservation</span>
                <div className="flex items-center">
                  <div className="bg-secondary-700 rounded-full h-3 w-32 mr-3">
                    <div className="bg-accent-500 h-3 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <span className="text-white font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action for Officials */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Tourism Officials Dashboard</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Access detailed analytics, generate reports, and monitor real-time tourism impact 
            with our comprehensive dashboard designed for policy makers and tourism boards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-800 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Access Dashboard
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors">
              Download Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismAnalytics;