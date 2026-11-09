
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaCalculator,
  FaFlask,
  FaGlobeAfrica,
  FaLanguage,
  FaPalette,
  FaRunning,
  FaLaptop,
  FaLeaf,
  FaMusic,
} from "react-icons/fa";

function Academics() {
  const academicsLinks = [
    { name: "Curriculum", path: "/academics/curriculum" },
    { name: "ECD to Grade 7", path: "/academics/grades" },
    { name: "Results", path: "/academics/results" },
  ];

  const learningStages = [
    {
      level: "ECD A",
      age: "Ages 3–4",
      title: "Play and Learn",
      description:
        "Children explore their environment through play, stories, songs, creative activities and interaction.",
      image: "/Ecd_A.jpg",
    },
    {
      level: "ECD B",
      age: "Ages 4–5",
      title: "School Readiness",
      description:
        "Learners develop communication, early literacy, numeracy and social skills.",
      image: "/Graduation_2.png",
    },
    {
      level: "Grade 1–2",
      age: "Foundation Stage",
      title: "Foundational Skills",
      description:
        "Learners develop reading, writing, number skills and confidence in learning.",
      image: "/Grade_2.jpg",
    },
    {
      level: "Grade 3–4",
      age: "Intermediate Stage",
      title: "Building Knowledge",
      description:
        "Learners strengthen their understanding, communication and problem-solving skills.",
      image: "/Career_2.png",
    },
    {
      level: "Grade 5–6",
      age: "Upper Primary",
      title: "Advanced Learning",
      description:
        "Learners develop deeper subject knowledge, independence and critical thinking.",
      image: "/Grade_6.jpg",
    },
    {
      level: "Grade 7",
      age: "Final Primary Stage",
      title: "Preparing for Secondary",
      description:
        "Learners consolidate their knowledge and prepare for the transition to secondary school.",
      image: "/Grade_7.jpg",
    },
  ];

  const subjects = [
    {
      title: "English Language",
      description:
        "Developing reading, writing, speaking, listening and communication skills.",
      icon: FaLanguage,
      color: "bg-blue-50 text-blue-700",
    },
    {
      title: "Mathematics",
      description:
        "Building numerical skills, logical thinking and problem-solving abilities.",
      icon: FaCalculator,
      color: "bg-amber-50 text-amber-700",
    },
    {
      title: "Indigenous Languages",
      description:
        "Learning local languages, communication and appreciation of our heritage.",
      icon: FaBookOpen,
      color: "bg-green-50 text-green-700",
    },
    {
      title: "Science and Technology",
      description:
        "Exploring scientific ideas, discoveries, technology and practical learning.",
      icon: FaFlask,
      color: "bg-purple-50 text-purple-700",
    },
    {
      title: "Social Studies",
      description:
        "Understanding our communities, history, geography and the world around us.",
      icon: FaGlobeAfrica,
      color: "bg-orange-50 text-orange-700",
    },
    {
      title: "Visual and Performing Arts",
      description:
        "Encouraging creativity through drawing, painting, music, dance and drama.",
      icon: FaPalette,
      color: "bg-pink-50 text-pink-700",
    },
    {
      title: "Physical Education",
      description:
        "Promoting fitness, coordination, teamwork and healthy lifestyles.",
      icon: FaRunning,
      color: "bg-red-50 text-red-700",
    },
    {
      title: "Information and Communication Technology",
      description:
        "Introducing learners to computers, digital skills and responsible technology use.",
      icon: FaLaptop,
      color: "bg-cyan-50 text-cyan-700",
    },
    {
      title: "Agriculture",
      description:
        "Learning about crops, animals, gardening and environmental responsibility.",
      icon: FaLeaf,
      color: "bg-lime-50 text-lime-700",
    },
    {
      title: "Ndebele Language",
      description:
        "Developing language skills and appreciation of Ndebele culture and heritage.",
      icon: FaMusic,
      color: "bg-violet-50 text-violet-700",
    },
  ];

  const passRates = [
    { year: "2023", rate: 85 },
    { year: "2024", rate: 90 },
    { year: "2025", rate: 95 },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveSlide((current) => (current + 1) % learningStages.length);
    }, 3000);

    return () => clearInterval(slider);
  }, [learningStages.length]);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % learningStages.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + learningStages.length) % learningStages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="bg-[#0EA5E9] px-6 py-20 text-white md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-[#E3C99B]">
            Learning at Gwayi
          </p>

          <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">
            Academics & Learning
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
            Discover our learning programmes, from Early Childhood
            Development to Grade 7, where every learner is encouraged
            to grow and achieve.
          </p>
        </div>
      </section>

      {/* ACADEMICS NAVIGATION */}
      <nav className="sticky top-0 z-20 border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-4 md:px-12">
          {academicsLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="rounded-full border border-[#0EA5E9] px-5 py-2 text-sm font-semibold text-[#0EA5E9] transition hover:bg-[#0EA5E9] hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* LEARNING JOURNEY */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-semibold uppercase tracking-widest text-[#C8982A]">
              Our Learning Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0EA5E9] md:text-4xl">
              From ECD to Grade 7
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Every stage builds important skills, knowledge and
              confidence for the next step in education.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#F2F5F9] shadow-lg">
            <div className="grid items-center md:grid-cols-2">
              <div className="p-8 md:p-12">
                <span className="rounded-full bg-[#E3C99B] px-4 py-2 text-sm font-bold text-[#0EA5E9]">
                  {learningStages[activeSlide].level}
                </span>

                <p className="mt-6 font-semibold text-[#C8982A]">
                  {learningStages[activeSlide].age}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-[#0EA5E9]">
                  {learningStages[activeSlide].title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {learningStages[activeSlide].description}
                </p>

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={previousSlide}
                    className="rounded-full bg-[#0EA5E9] px-6 py-3 font-semibold text-white hover:bg-[#0284C7]"
                  >
                    Previous
                  </button>

                  <button
                    onClick={nextSlide}
                    className="rounded-full bg-[#C8982A] px-6 py-3 font-semibold text-white hover:bg-[#A77B19]"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="h-80 overflow-hidden md:h-[450px]">
                <img
                  key={activeSlide}
                  src={learningStages[activeSlide].image}
                  alt={learningStages[activeSlide].level}
                  className="slide-image h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {learningStages.map((stage, index) => (
              <button
                key={stage.level}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${stage.level}`}
                className={`h-3 rounded-full transition-all ${
                  activeSlide === index
                    ? "w-9 bg-[#C8982A]"
                    : "w-3 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SUBJECTS WE OFFER */}
      <section className="bg-[#F2F5F9] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C8982A]">
              Knowledge for Every Learner
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#0EA5E9] md:text-5xl">
              Subjects We Offer
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our learning programme covers a range of subjects designed
              to develop knowledge, creativity, practical skills and
              confidence in every learner.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;

              return (
                <article
                  key={subject.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${subject.color}`}
                  >
                    <Icon />
                  </div>

                  <p className="mt-6 text-sm font-bold text-[#C8982A]">
                    SUBJECT {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-[#0EA5E9]">
                    {subject.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {subject.description}
                  </p>

                  <div className="mt-6 h-1 w-12 rounded-full bg-[#C8982A] transition-all duration-300 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACADEMIC PASS RATE */}
      <section className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C8982A]">
              Academic Excellence
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#0EA5E9] md:text-5xl">
              Our Academic Pass Rate
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We are committed to helping every learner achieve academic
              success through quality teaching, dedication and continuous
              support.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {passRates.map((result) => (
              <div
                key={result.year}
                className="rounded-2xl border border-gray-100 bg-[#F2F5F9] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-lg font-bold text-gray-500">
                  {result.year} Results
                </p>

                <h3 className="mt-4 text-5xl font-extrabold text-[#0EA5E9]">
                  {result.rate}%
                </h3>

                <p className="mt-3 font-semibold text-[#C8982A]">
                  Pass Rate
                </p>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-[#C8982A] transition-all duration-700"
                    style={{ width: `${result.rate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            These are sample figures. Replace them with the school's
            verified examination results before publishing.
          </p>
        </div>
      </section>

      {/* LEARNING MESSAGE */}
      <section className="bg-[#0EA5E9] px-6 py-20 text-white md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#E3C99B]">
            Growing Through Education
          </p>

          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
            Every Subject Opens a New Opportunity
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-blue-50">
            At Gwayi Primary School, we encourage learners to explore
            their interests, develop their abilities and build a strong
            foundation for lifelong learning.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Academics;
