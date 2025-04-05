import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import GalleryPage from "./pages/GalleryPage";
import GalleryDetailPage from "./pages/GalleryDetailPage";
import UpcomingEventsPage from "./pages/UpcomingEventsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:eventName" element={<GalleryDetailPage />} />
        <Route path="/upcoming" element={<UpcomingEventsPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
