import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UnlockPage from './pages/UnlockPage';
import ImageSelectionPage from './pages/ImageSelectionPage';
import FinalPage from './src/pages/unlockedPhone';

function App() {
    const [remainingTries, setRemainingTries] = useState(3);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<UnlockPage />} />
                <Route
                    path="/image-selection"
                    element={<ImageSelectionPage remainingTries={remainingTries} setRemainingTries={setRemainingTries} />}
                />
                <Route path="/final" element={<FinalPage />} />
            </Routes>
        </Router>
    );
}

export default App;
