import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import ScanQR from "./pages/ScanQR";
// import FetchQR from "./pages/FetchQR";
import Leaderboard from "./pages/Leaderboard";

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/scan">Scan QR</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                {/* <Link to="/fetch-qr">My QR</Link> */}
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/scan" element={<ScanQR />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                {/* <Route path="/fetch-qr" element={<FetchQR  />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
