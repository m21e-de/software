import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LicensePlateCheck from './pages/LicensePlateCheck';
import OrderDonuts from './pages/OrderDonuts';
import UnlockStep1 from './pages/UnlockStep1';
import UnlockStep2 from './pages/UnlockStep2';
import UnlockStep3 from './pages/UnlockStep3';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />
        {/* License plate check */}
        <Route path="/license-plates" element={<LicensePlateCheck />} />
        {/* Order donuts */}
        <Route path="/order-donuts" element={<OrderDonuts />} />
        {/* Unlock phone steps */}
        <Route path="/unlock-phone" element={<UnlockStep1 />} />
        <Route path="/step2" element={<UnlockStep2 />} />
        <Route path="/step3" element={<UnlockStep3 />} />
      </Routes>
    </Router>
  );
}

export default App;
