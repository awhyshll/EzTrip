const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-800">EzTrip</h1>
              <p className="text-sm text-secondary-600">Eco Cultural Tourism Hub</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#attractions" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Attractions
            </a>
            <a href="#itineraries" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Itineraries
            </a>
            <a href="#trails" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Theme Trails
            </a>
            <a href="#analytics" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Analytics
            </a>
            <a href="#community" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Community
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Get Started
            </button>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-secondary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;