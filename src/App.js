import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Landing from "./pages/landing";
import Join from "./pages/join";
import RoomPage from "./pages/room";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/join" element={<Join />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
