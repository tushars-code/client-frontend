import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Outreach from "./pages/Outreach";
// Import other pages as you create them
// import Education from "./pages/Education";
// import Media from "./pages/Media";

export default function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar is outside the Routes, so it stays on every page */}
        <Sidebar />

        {/* Main content area */}
        {/* CORRECTED: Changed ml-60 to ml-64 to perfectly match the sidebar's width (w-64) */}
        <main className="ml-64 w-full min-h-screen bg-gray-50">
          <Routes>
            {/* Make sure the Home component exists at ./pages/Home.js */}
            <Route path="/" element={<Home />} />
            <Route path="/outreach" element={<Outreach />} />
            
            {/* Add placeholder routes for other pages */}
            {/* <Route path="/education" element={<Education />} /> */}
            {/* <Route path="/media" element={<Media />} /> */}
            {/* ... etc. */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
