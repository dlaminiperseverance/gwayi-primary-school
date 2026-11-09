
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    label: "WELCOME TO OUR SCHOOL",
    title: "Building Bright",
    highlight: "Futures Together",
    description:
      "Welcome to Gwayi Primary School, where education, discipline and excellence inspire learners to grow, discover their potential and build a brighter future.",
    image: "/Background_1.jpg",
    button: "Discover Our School",
    link: "/about",
    secondButton: "Admissions",
    secondLink: "/admissions",
    motto: true,
  },
  {
    id: 2,
    label: "WELCOME TO GWAYI",
    title: "A Place Where",
    highlight: "Young Minds Grow",
    description:
      "Every learner deserves an opportunity to learn, develop confidence and discover their abilities. We encourage learning, positive relationships and personal development.",
    image: "/About_1.jpg",
    button: "Learn More About Us",
    link: "/about",
    secondButton: "Our Story",
    secondLink: "/about/our-story",
  },
  {
    id: 3,
    label: "WHAT GUIDES US",
    title: "Our Core",
    highlight: "Values",
    description:
      "Education builds knowledge. Discipline encourages responsibility and respect. Excellence motivates every learner to discover their potential and do their best.",
    image: "/About_2.jpg",
    button: "Our Mission & Vision",
    link: "/about/mission-vision",
    secondButton: "Meet Our Staff",
    secondLink: "/about/staff",
    values: true,
  },
  {
    id: 4,
    label: "EXPLORE GWAYI",
    title: "Discover",
    highlight: "Our School",
    description:
      "Explore our academic programmes, school activities and learning environment. Discover the opportunities that contribute to the growth and development of our learners.",
    image: "/Schoollife_1.jpg",
    button: "Explore Academics",
    link: "/academics",
    secondButton: "School Life",
    secondLink: "/school-life",
  },
];

const values = [
  {
    number: "01",
    title: "Education",
    description: "Building knowledge and inspiring lifelong learning.",
  },
  {
    number: "02",
    title: "Discipline",
    description: "Encouraging responsibility, respect and good behaviour.",
  },
  {
    number: "03",
    title: "Excellence",
    description: "Motivating every learner to achieve their potential.",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((previous) => (previous + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (previous) => (previous - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <main
      className="w-full overflow-hidden bg-[#102F50]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <section className="relative min-h-[700px] overflow-hidden md:min-h-[750px]">

        {/* SLIDES */}
        <div
          className="flex min-h-[700px] transition-transform duration-1000 ease-in-out md:min-h-[750px]"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex min-h-[700px] min-w-full items-center md:min-h-[750px]"
            >
              {/* BACKGROUND IMAGE */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#102F50]/95 via-[#102F50]/75 to-[#102F50]/30" />

              {/* CONTENT */}
              <div
                key={`${slide.id}-${currentSlide}`}
                className={`relative z-10 mx-auto w-full max-w-7xl px-6 py-28 md:px-12 lg:px-16 ${
                  currentSlide === index ? "slide-content" : "opacity-0"
                }`}
              >
                <div className="max-w-3xl">

                  <span className="inline-block rounded-full border border-[#E3C99B]/60 bg-[#C3A574]/20 px-5 py-3 text-xs font-bold tracking-[0.2em] text-[#E3C99B] md:text-sm">
                    {slide.label}
                  </span>

                  <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
                    {slide.title}
                    <span className="block text-[#E3C99B]">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-xl">
                    {slide.description}
                  </p>

                  {/* VALUES */}
                  {slide.values && (
                    <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                      {values.map((value) => (
                        <div
                          key={value.number}
                          className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                        >
                          <span className="text-2xl font-black text-[#E3C99B]">
                            {value.number}
                          </span>

                          <h3 className="mt-2 font-bold text-white">
                            {value.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-blue-100">
                            {value.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* BUTTONS */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      to={slide.link}
                      className="rounded-lg bg-[#C3A574] px-7 py-4 font-bold text-[#102F50] transition duration-300 hover:-translate-y-1 hover:bg-[#E3C99B]"
                    >
                      {slide.button}
                    </Link>

                    <Link
                      to={slide.secondLink}
                      className="rounded-lg border-2 border-white px-7 py-4 font-bold text-white transition duration-300 hover:bg-white hover:text-[#102F50]"
                    >
                      {slide.secondButton}
                    </Link>
                  </div>

                  {/* SCHOOL MOTTO */}
                  {slide.motto && (
                    <div className="mt-12 border-l-4 border-[#C3A574] pl-5">
                      <p className="text-sm font-semibold uppercase tracking-widest text-[#E3C99B]">
                        Our School Motto
                      </p>

                      <p className="mt-2 text-xl font-bold text-white">
                        Education • Discipline • Excellence
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PREVIOUS */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[#102F50]/60 text-2xl text-white backdrop-blur-md transition hover:bg-[#C3A574] hover:text-[#102F50] md:left-8"
        >
          &#10094;
        </button>

        {/* NEXT */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[#102F50]/60 text-2xl text-white backdrop-blur-md transition hover:bg-[#C3A574] hover:text-[#102F50] md:right-8"
        >
          &#10095;
        </button>

        {/* DOTS */}
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "w-12 bg-[#E3C99B]"
                  : "w-3 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* COUNTER */}
        <div className="absolute bottom-9 right-6 z-20 hidden text-sm font-bold tracking-widest text-white md:right-12 md:block">
          <span className="text-[#E3C99B]">
            0{currentSlide + 1}
          </span>
          <span className="mx-2 text-white/50">/</span>
          04
        </div>

        {/* PROGRESS BAR */}
        <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-white/20">
          <div
            key={currentSlide}
            className="slide-progress h-full origin-left bg-[#E3C99B]"
          />
        </div>

      </section>
    </main>
  );
}

export default Home;
