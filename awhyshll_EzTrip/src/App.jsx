import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import DestinationPage from './pages/DestinationPage';
import Featured from './components/Featured';
import PopularDestinations from './components/PopularDestinations';
import TripPlanner from './components/TripPlanner';
import CallToAction from './components/CallToAction';
import './App.css';

function HomePage() {
  return (
    <div className="min-h-screen bg-white m-0 p-0">
      <Landing />
      <Featured />
      <PopularDestinations />
      <TripPlanner />
      <CallToAction />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations/:state" element={<DestinationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
