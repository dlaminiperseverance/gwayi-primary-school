
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  FaGraduationCap,
  FaChevronRight,
  FaChevronDown,
  FaUpload,
  FaCheckCircle,
} from "react-icons/fa";

const LOGO_SRC = "/Logo_1.png";

const navItems = [
  { name: "Home", path: "/", end: true },
  {
    name: "About Us",
    path: "/about",
    children: [
      { name: "Our Story", path: "/about/our-story" },
      { name: "Mission & Vision", path: "/about/mission-vision" },
      { name: "Our Staff", path: "/about/staff" },
    ],
  },
  {
    name: "Academics",
    path: "/academics",
    children: [
      { name: "Curriculum", path: "/academics/curriculum" },
      { name: "ECD to Grade 7", path: "/academics/grades" },
      { name: "Results", path: "/academics/results" },
    ],
  },
  {
    name: "School Life",
    path: "/school-life",
    children: [
      { name: "Sports", path: "/school-life/sports" },
      { name: "Clubs & Activities", path: "/school-life/clubs" },
      { name: "School Events", path: "/school-life/events" },
      { name: "Gallery", path: "/school-life/gallery" },
    ],
  },
  {
    name: "Parents & Learners",
    path: "/parents-learners",
    children: [
      { name: "Parent & Learner Portal", path: "/parents-learners" },
      { name: "Notices", path: "/parents-learners#notices" },
      { name: "School Calendar", path: "/parents-learners#calendar" },
      { name: "Downloads", path: "/parents-learners#downloads" },
      { name: "Learner Resources", path: "/parents-learners#resources" },
      { name: "FAQs", path: "/parents-learners#faqs" },
      { name: "School Uniforms", path: "/school-uniforms" },
    ],
  },
  {
    name: "Student Dashboard",
    path: "/student-dashboard",
  },
  { name: "Contact", path: "/contact" },
];

const grades = [
  "ECD A",
  "ECD B",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    grade: "",
    previousResults: null,
  });

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setApplicationOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const linkStyle = ({ isActive }) =>
    `relative flex shrink-0 items-center gap-1 whitespace-nowrap py-3 text-[12px] font-bold transition-colors duration-300 ${
      isActive
        ? "text-[#0EA5E9] after:w-full"
        : "text-black after:w-0 hover:text-[#0EA5E9] hover:after:w-full"
    } after:absolute after:bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-[#0EA5E9] after:transition-all after:duration-300`;

  const openApplication = () => {
    setApplicationOpen(true);
    setSubmitted(false);
  };

  const closeApplication = () => {
    setApplicationOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const file = formData.previousResults;

    if (!file) {
      alert("Please upload the learner's previous results.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Please upload a results file smaller than 5 MB.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white">
        <div className="h-2 w-full bg-[#0EA5E9]" />

        <nav
          aria-label="Main navigation"
          className={`relative border-b border-gray-100 bg-white transition-all duration-300 ${
            scrolled ? "shadow-lg" : "shadow-sm"
          }`}
        >
          <div
            className={`mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 transition-all duration-300 lg:px-7 xl:px-9 ${
              scrolled ? "min-h-[68px]" : "min-h-[76px]"
            }`}
          >
            <Link
              to="/"
              aria-label="Gwayi Primary School Home"
              className="group flex shrink-0 items-center gap-2"
            >
              <div
                className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#EBBD4E] bg-[#0EA5E9] transition-all duration-300 group-hover:scale-105 ${
                  scrolled ? "h-11 w-11" : "h-12 w-12"
                }`}
              >
                {logoOk ? (
                  <img
                    src={LOGO_SRC}
                    alt="Gwayi Primary School crest"
                    onError={() => setLogoOk(false)}
                    className="h-full w-full rounded-full object-contain p-1"
                  />
                ) : (
                  <FaGraduationCap className="text-2xl text-black" />
                )}
              </div>

              <div className="whitespace-nowrap leading-tight">
                <span className="block text-base font-extrabold tracking-wide text-black">
                  GWAYI PRIMARY
                </span>

                <span className="block text-[10px] font-bold tracking-[0.35em] text-black">
                  SCHOOL
                </span>
              </div>
            </Link>

            <div className="flex min-w-0 flex-1 items-center justify-center gap-x-3 overflow-x-auto whitespace-nowrap px-2 scrollbar-hide xl:gap-x-4">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.path}
                    className="group relative shrink-0"
                  >
                    <NavLink
                      to={item.path}
                      className={linkStyle}
                    >
                      {item.name}

                      <FaChevronDown className="ml-1 text-[9px] transition-transform duration-300 group-hover:rotate-180" />
                    </NavLink>

                    <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                        <div className="border-b border-gray-100 px-4 py-3">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#C8982A]">
                            Explore
                          </p>

                          <p className="mt-1 text-sm font-bold text-black">
                            {item.name}
                          </p>
                        </div>

                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={({ isActive }) =>
                              `flex items-center justify-between rounded-lg px-4 py-2.5 text-xs transition-all duration-200 ${
                                isActive
                                  ? "bg-sky-50 font-bold text-[#0EA5E9]"
                                  : "text-black hover:translate-x-1 hover:bg-sky-50 hover:text-[#0EA5E9]"
                              }`
                            }
                          >
                            {child.name}

                            <FaChevronRight className="text-[9px] text-[#C8982A]" />
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.end}
                    className={linkStyle}
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </div>

            <button
              type="button"
              onClick={openApplication}
              className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#EBBD4E] px-4 py-2.5 text-xs font-extrabold text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0EA5E9] hover:text-black"
            >
              Apply Now
            </button>
          </div>

          <span
            key={pathname}
            aria-hidden="true"
            className="route-bar pointer-events-none absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#0EA5E9]"
          />
        </nav>
      </header>

      {applicationOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-8 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeApplication();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-title"
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="relative bg-[#0EA5E9] px-7 py-8 text-black md:px-10">
              <button
                type="button"
                onClick={closeApplication}
                aria-label="Close application form"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/40 text-black transition hover:bg-white"
              >
                <span className="text-xl">×</span>
              </button>

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-black">
                <FaGraduationCap />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black">
                Gwayi Primary School
              </p>

              <h2
                id="application-title"
                className="mt-2 text-3xl font-extrabold md:text-4xl"
              >
                Student Application
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-black">
                Complete the application details below to begin the
                student registration process.
              </p>
            </div>

            {submitted ? (
              <div className="px-7 py-14 text-center md:px-10">
                <FaCheckCircle className="mx-auto text-6xl text-green-600" />

                <h3 className="mt-6 text-2xl font-bold text-black">
                  Application Submitted!
                </h3>

                <p className="mx-auto mt-3 max-w-md leading-7 text-black">
                  Thank you, {formData.firstName}. Your details have been
                  captured in this form.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      firstName: "",
                      surname: "",
                      grade: "",
                      previousResults: null,
                    });

                    setSubmitted(false);
                    setApplicationOpen(false);
                  }}
                  className="mt-8 rounded-full bg-[#0EA5E9] px-8 py-3 font-bold text-black transition hover:bg-sky-200"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 px-7 py-8 md:px-10"
              >
                <div>
                  <h3 className="text-lg font-bold text-black">
                    Learner Information
                  </h3>

                  <p className="mt-1 text-sm text-black">
                    Enter the learner's personal details.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-bold text-black"
                    >
                      First Name *
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-black outline-none transition focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="surname"
                      className="mb-2 block text-sm font-bold text-black"
                    >
                      Surname *
                    </label>

                    <input
                      id="surname"
                      name="surname"
                      type="text"
                      value={formData.surname}
                      onChange={handleChange}
                      placeholder="Enter surname"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-black outline-none transition focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="grade"
                    className="mb-2 block text-sm font-bold text-black"
                  >
                    Grade Applying For *
                  </label>

                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-black outline-none transition focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20"
                  >
                    <option value="">Select a grade</option>

                    {grades.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="previousResults"
                    className="mb-2 block text-sm font-bold text-black"
                  >
                    Previous School Results *
                  </label>

                  <div className="rounded-xl border-2 border-dashed border-gray-300 p-5 transition hover:border-[#0EA5E9]">
                    <div className="flex items-center gap-3">
                      <FaUpload className="text-2xl text-[#0EA5E9]" />

                      <div>
                        <p className="font-semibold text-black">
                          Upload Previous Results
                        </p>

                        <p className="text-xs text-black">
                          PDF, JPG or PNG (maximum 5 MB)
                        </p>
                      </div>
                    </div>

                    <input
                      id="previousResults"
                      name="previousResults"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      onChange={(event) =>
                        setFormData((previous) => ({
                          ...previous,
                          previousResults:
                            event.target.files[0] || null,
                        }))
                      }
                      className="mt-4 w-full text-sm text-black file:mr-4 file:rounded-full file:border-0 file:bg-sky-100 file:px-4 file:py-2 file:font-semibold file:text-black hover:file:bg-[#0EA5E9]"
                    />
                  </div>
                </div>

                <div className="rounded-xl bg-gray-100 p-4 text-sm leading-6 text-black">
                  Please make sure the learner's details and uploaded
                  results are correct before submitting.
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#0EA5E9] px-6 py-4 font-extrabold text-black shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-200"
                >
                  Submit Application

                  <FaChevronRight />
                </button>

                <p className="text-center text-xs text-gray-500">
                  Gwayi Primary School • Student Registration
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
