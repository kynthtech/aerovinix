import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

// === PAGES ===
import Home from './pages/Home';
// import HomeImage from './pages/HomeImage';
// import HomeVideo from './pages/HomeVideo';
import About from './pages/About';
import Services from './pages/Service';
import ServiceSingle from './pages/ServiceSingle';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Projects from './pages/Projects';
import ProjectSingle from './pages/ProjectSingle';
import Team from './pages/Team';
import TeamSingle from './pages/TeamSingle';
import Testimonials from './pages/Testimonials';
import ImageGallery from './pages/ImageGallery';
import VideoGallery from './pages/VideoGallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import FAQ from './pages/FAQs';
import '../src/Custom.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            {/* Home Variants */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/home-image" element={<HomeImage />} />
            <Route path="/home-video" element={<HomeVideo />} /> */}

            {/* Main Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-single" element={<ServiceSingle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-single" element={<BlogSingle />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-single" element={<ProjectSingle />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team-single" element={<TeamSingle />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/image-gallery" element={<ImageGallery />} />
            <Route path="/video-gallery" element={<VideoGallery />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}