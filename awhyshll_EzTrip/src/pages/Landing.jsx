import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { states } from '../data/destinations';

export default function Landing() {
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  const handleExplore = () => {
    if (selectedState) {
      navigate(`/destinations/${selectedState}`);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black my-0">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
          <div className="text-white text-center opacity-20">
            <div className="text-8xl mb-4">🌍</div>
            <p className="text-xl">Explore the World</p>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-30">
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 leading-tight">
            "Travel is the only thing you buy
            <br />
            <span className="italic">that makes you richer"</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 font-light">
            Discover India's hidden gems and create memories that last forever
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full sm:w-64 px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <option value="" className="text-gray-800">Choose your destination</option>
              {states.map((state) => (
                <option key={state.value} value={state.value} className="text-gray-800">
                  {state.label}
                </option>
              ))}
            </select>
            
            <button
              onClick={handleExplore}
              disabled={!selectedState}
              className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Explore
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center items-center">
            <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}