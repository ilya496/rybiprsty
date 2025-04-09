import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import GalleryPage from "./pages/GalleryPage";
import GalleryDetailPage from "./pages/GalleryDetailPage";
import UpcomingEventsPage from "./pages/UpcomingEventsPage";
import NotFoundPage from "./pages/NotFoundPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:eventName" element={<GalleryDetailPage />} />
        <Route path="/upcoming" element={<UpcomingEventsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
