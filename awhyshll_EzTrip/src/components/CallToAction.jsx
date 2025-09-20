import { useState, useEffect } from 'react';

export default function CallToAction() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="w-full py-20 bg-gray-900 text-white my-0 overflow-hidden">
        <div className="w-full px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Start Your Journey?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered India's magic through our curated experiences
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Plan Your Trip
            </button>
            <button className="px-8 py-4 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Contact Us
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl font-light mb-2">50+</div>
              <div className="text-gray-300">Destinations</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl font-light mb-2">10,000+</div>
              <div className="text-gray-300">Happy Travelers</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl font-light mb-2">500+</div>
              <div className="text-gray-300">Custom Itineraries</div>
            </div>
          </div>
        </div>
      </section>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors z-50 flex items-center justify-center"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
}