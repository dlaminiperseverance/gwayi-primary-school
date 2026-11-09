
import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Link,
} from "react-router-dom";

import AnnouncementBanner from "./Components/AnnouncementBanner";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home/index.jsx";
import About from "./Components/About.jsx";
import Academics from "./Components/Academics.jsx";
import SchoolEvents from "./Components/SchoolEvents.jsx";
import ParentsLearners from "./Components/ParentsLearners.jsx";
import StudentDashboard from "./Components/StudentDashboard.jsx";
import Contact from "./Components/Contact.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-7xl font-extrabold text-[#0A2F66]">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-[#102F50]">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md leading-7 text-slate-600">
        Sorry, the page you are looking for does not exist.
        Please return to the homepage.
      </p>

      <Link
        to="/"
        className="mt-7 rounded-full bg-[#0A2F66] px-8 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#174B83]"
      >
        Back to Home
      </Link>
    </section>
  );
}

function App() {
  const { pathname } = useLocation();

  const isStudentDashboard = pathname.startsWith(
    "/student-dashboard"
  );

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />

      {!isStudentDashboard && <AnnouncementBanner />}

      <Navbar />

      <main
        key={pathname}
        className="page-enter flex-1"
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={<Navigate to="/about/our-story" replace />}
          />

          <Route path="/about/*" element={<About />} />

          <Route path="/academics" element={<Academics />} />

          <Route path="/academics/*" element={<Academics />} />

          <Route path="/school-life" element={<SchoolEvents />} />

          <Route
            path="/school-life/events"
            element={<SchoolEvents />}
          />

          <Route
            path="/school-events"
            element={<SchoolEvents />}
          />

          <Route
            path="/parents-learners"
            element={<ParentsLearners />}
          />

          <Route
            path="/parents-learners/*"
            element={<ParentsLearners />}
          />

          <Route
            path="/student-dashboard"
            element={<StudentDashboard />}
          />

          <Route
            path="/student-dashboard/*"
            element={<StudentDashboard />}
          />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!isStudentDashboard && <Footer />}
    </div>
  );
}

export default App;
