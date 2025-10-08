import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/HumanPractice";
import Outreach from "./pages/Outreach";


function AppLayout() {
  const location = useLocation();

  // ✅ Determine sidebar visibility based on route
  const showOutreachSidebar = location.pathname === "/outreach";

  return (
    

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/outreach" element={<Outreach />} />

 </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
