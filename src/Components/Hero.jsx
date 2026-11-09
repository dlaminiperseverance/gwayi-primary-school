
import { Link } from "react-router-dom";
import { FaChevronRight, FaBookOpen } from "react-icons/fa";

const HERO_IMAGE = "/Background_1.jpg";

function Hero() {
  return (
    <section className="relative isolate min-h-[650px] w-full overflow-hidden bg-[#0A2F66] text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-[-2] bg-cover bg-center"
        style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#0A2F66]/85 via-[#0A2F66]/55 to-[#0A2F66]/20" />

      {/* Gold Decoration */}
      <svg
        className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-28 w-[70%] md:block"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 200 C300 120 650 160 1000 20 L1000 200 Z"
          fill="#0EA5E9"
        />
        <path
          d="M0 200 C300 120 650 160 1000 42 C650 182 300 142 0 200 Z"
          fill="#EBBD4E"
        />
      </svg>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1400px] items-center px-5 py-20 md:px-10">

        <div className="max-w-3xl">

          <h1>
            <span
              className="hero-rise block text-4xl font-extrabold leading-tight md:text-6xl"
              style={{ "--d": "100ms" }}
            >
              Welcome to
            </span>

            <span
              className="hero-rise block text-5xl font-extrabold leading-tight md:text-7xl"
              style={{ "--d": "250ms" }}
            >
              Gwayi <span className="text-[#EBBD4E]">Primary School</span>
            </span>
          </h1>

          {/* Tagline */}
          <div
            className="hero-rise mt-5 inline-block"
            style={{ "--d": "450ms" }}
          >
            <p className="text-3xl font-bold italic md:text-4xl">
              Building Bright Futures Together
            </p>

            <svg
              viewBox="0 0 320 14"
              className="mt-2 h-3 w-full"
              aria-hidden="true"
            >
              <path
                d="M2 9 C80 2 200 2 318 7"
                fill="none"
                stroke="#EBBD4E"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Description */}
          <p
            className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-white"
            style={{ "--d": "650ms" }}
          >
            Welcome to Gwayi Primary School, where young minds are nurtured,
            talents are discovered, and every learner is encouraged to reach
            their full potential.
          </p>

          {/* Buttons */}
          <div
            className="hero-rise mt-8 flex flex-wrap gap-4"
            style={{ "--d": "850ms" }}
          >
            <Link
              to="/about"
              className="group flex items-center gap-3 rounded-full bg-[#EBBD4E] px-8 py-4 font-bold text-[#0A2F66] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Discover Our School
              <FaChevronRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/academics"
              className="flex items-center gap-3 rounded-full border-2 border-[#EBBD4E] px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0A2F66]"
            >
              <FaBookOpen />
              Explore Academics
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
