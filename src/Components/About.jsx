
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaArrowRight,
  FaBookOpen,
  FaUsers,
  FaTrophy,
  FaBullseye,
  FaEye,
  FaGraduationCap,
  FaUserTie,
  FaHeart,
  FaLightbulb,
  FaUserGraduate,
  FaCamera,
} from "react-icons/fa";

const PRIMARY = "#0EA5E9";

const aboutLinks = [
  { name: "Our Story", path: "/about/our-story" },
  { name: "Mission & Vision", path: "/about/mission-vision" },
  { name: "Our Staff", path: "/about/staff" },
];

const teachers = [
  { id: 1, name: "Ms Khumalo", role: "Headmistress", image: "" },
  { id: 2, name: "N. Ndiweni", role: "Deputy Headmistress", image: "" },
  { id: 3, name: "M. Mkhwebu", role: "Sports Coordinator", image: "" },
  { id: 4, name: "L. Ndlovu", role: "Senior Woman", image: "" },
  { id: 5, name: "B. Ncube", role: "Senior Master", image: "" },
  { id: 6, name: "Mrs N. Dube", role: "Educational Assistant", image: "" },
  { id: 7, name: "S. Ncube", role: "Arts & Crafts Teacher", image: "" },
];

const studentLeaders = [
  {
    id: 1,
    name: "Head Boy",
    role: "Grade 7",
    category: "School Leadership",
    image: "/Head_2.jpg",
  },
  {
    id: 2,
    name: "Head Girl",
    role: "Grade 7",
    category: "School Leadership",
    image: "/Head_1.jpg",
  },
  {
    id: 3,
    name: "Vice Head Boy",
    role: "Grade 6",
    category: "School Leadership",
    image: "/Vice_2.jpg",
  },
  {
    id: 4,
    name: "Vice Head Girl",
    role: "Grade 6",
    category: "School Leadership",
    image: "/Vice_1.jpg",
  },
];

const prefectImages = [
  "/Grade_1.jpg",
  "/Grade_2a.jpg",
  "/Grade_3.jpg",
  "/Grade_4.jpg",
  "/Grade_5.jpg",
  "/Grade_6c.jpg",
  "/Grade_4A.jpg",
  "/Grade_5A.jpg",
  "/Grade_6A.jpg",
  "/Grade_3A.jpg",
  "/Grade_2C.jpg",
  "/Grade_1A.jpg",
];

const prefects = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  name: `Prefect ${index + 1}`,
  role: "School Prefect",
  category: "Student Leadership",
  image: prefectImages[index],
}));

const values = [
  {
    title: "Quality Learning",
    description:
      "Encouraging curiosity, creativity and building knowledge through meaningful learning experiences.",
    icon: FaBookOpen,
  },
  {
    title: "Community",
    description:
      "Working together with parents, teachers, learners and the wider community.",
    icon: FaUsers,
  },
  {
    title: "Character",
    description:
      "Promoting discipline, respect, responsibility and kindness.",
    icon: FaTrophy,
  },
];

const goals = [
  {
    title: "Academic Development",
    description:
      "Encouraging learners to build knowledge, skills and a strong foundation for lifelong learning.",
  },
  {
    title: "Good Character",
    description:
      "Developing responsible learners who demonstrate respect, discipline and kindness.",
  },
  {
    title: "Personal Growth",
    description:
      "Helping children discover their strengths, talents and confidence.",
  },
];

const highlights = [
  { title: "Learning", icon: FaGraduationCap },
  { title: "Community", icon: FaUsers },
  { title: "Care", icon: FaHeart },
  { title: "Growth", icon: FaLightbulb },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-extrabold text-black md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-black">{description}</p>
      )}
    </div>
  );
}

function ProfileCard({ person, student = false }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#EAF1F8]">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#0EA5E9]/40 bg-white text-[#0EA5E9] transition duration-500 group-hover:scale-105 group-hover:bg-[#0EA5E9] group-hover:text-white">
            {student ? (
              <FaUserGraduate className="text-5xl" />
            ) : (
              <FaUserTie className="text-5xl" />
            )}

            <span className="mt-3 flex items-center gap-2 text-xs font-semibold">
              <FaCamera />
              Add Photo
            </span>
          </div>
        )}
      </div>

      <div className="p-6 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C8982A]">
          {person.category || (student ? "Student Leadership" : "Teaching Staff")}
        </p>

        <h3 className="text-xl font-bold text-black">{person.name}</h3>

        <p className="mt-3 border-t border-gray-100 pt-4 text-sm font-medium text-black">
          {person.role}
        </p>
      </div>
    </article>
  );
}

function About() {
  const location = useLocation();

  useEffect(() => {
    const sectionMap = {
      "/about": "our-story",
      "/about/our-story": "our-story",
      "/about/mission-vision": "mission-vision",
      "/about/staff": "our-staff",
    };

    const sectionId = sectionMap[location.pathname];

    if (sectionId) {
      const timer = setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);

      return () => clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <main className="overflow-hidden bg-white text-black">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0EA5E9] px-6 py-20 text-black md:px-12 lg:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[45px] border-[#E3C99B]/20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-bold uppercase tracking-[0.25em] text-black">
              About Gwayi Primary School
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Helping Every Learner Build a{" "}
              <span className="text-white">Bright Future.</span>
            </h1>

            <p className="mt-6 max-w-xl leading-8 text-black">
              Gwayi Primary School is committed to supporting learners
              through quality education, discipline and a caring school
              community. We believe every child deserves an opportunity
              to learn, grow and succeed.
            </p>

            <Link
              to="/about/our-story"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-black shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#E3C99B]"
            >
              Discover Our School
              <FaArrowRight />
            </Link>
          </div>

          <div className="group h-[280px] overflow-hidden rounded-2xl shadow-xl md:h-[400px]">
            <img
              src="/About_1.jpg"
              alt="Gwayi Primary School"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ABOUT NAVIGATION */}
      <nav
        aria-label="About page navigation"
        className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-4 md:justify-center">
          {aboutLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition duration-300 ${
                location.pathname === item.path
                  ? "bg-[#0EA5E9] text-black"
                  : "text-black hover:bg-[#0EA5E9]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <a
            href="#our-values"
            className="shrink-0 rounded-full px-5 py-3 text-sm font-bold text-black transition duration-300 hover:bg-[#0EA5E9]"
          >
            Our Values
          </a>
        </div>
      </nav>

      {/* OUR STORY */}
      <section
        id="our-story"
        className="scroll-mt-24 px-6 py-20 md:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
              Discover Our Journey
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-black md:text-5xl">
              The Story of Gwayi Primary School
              <span className="mt-3 block h-1.5 w-20 rounded-full bg-[#E3C99B]" />
            </h2>

            <p className="mt-7 leading-8 text-black">
              Gwayi Primary School is a place where education brings
              together learners, teachers, parents and the wider
              community. It is a learning environment built around
              the belief that every child deserves an opportunity
              to gain knowledge, discover their abilities and work
              towards a brighter future.
            </p>

            <p className="mt-5 leading-8 text-black">
              Through classroom learning, guidance from teachers
              and participation in school activities, learners are
              encouraged to develop academically, socially and
              personally. The school aims to nurture curiosity,
              confidence, responsibility and respect in every learner.
            </p>

            <p className="mt-5 leading-8 text-black">
              The journey of Gwayi Primary School is also a journey
              of partnership. Teachers provide guidance, parents
              support learning, and the community contributes to
              creating opportunities for children to grow and succeed.
            </p>

            <p className="mt-5 leading-8 text-black">
              Guided by the motto{" "}
              <strong className="text-black">
                Education, Discipline and Excellence
              </strong>
              , Gwayi Primary School continues to value quality
              education, good character and the development of
              responsible future citizens.
            </p>

            <Link
              to="/academics"
              className="mt-8 inline-flex items-center gap-3 font-bold text-[#0EA5E9] transition hover:gap-5 hover:text-[#C8982A]"
            >
              Explore Our Academics
              <FaArrowRight />
            </Link>
          </div>

          <div className="group h-[350px] overflow-hidden rounded-2xl shadow-lg md:h-[480px]">
            <img
              src="/About_1.jpg"
              alt="Learning at Gwayi Primary School"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* STORY HIGHLIGHTS */}
      <section className="bg-[#EAF1F8] px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <FaGraduationCap className="text-4xl text-[#0EA5E9]" />

            <h3 className="mt-5 text-2xl font-bold text-black">
              A Place to Grow
            </h3>

            <p className="mt-4 leading-7 text-black">
              We encourage learners to develop their talents,
              build confidence and prepare for the next stage
              of their education.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <FaBookOpen className="text-4xl text-[#0EA5E9]" />

            <h3 className="mt-5 text-2xl font-bold text-black">
              A Love for Learning
            </h3>

            <p className="mt-4 leading-7 text-black">
              We value curiosity, knowledge and positive learning
              experiences that help every child reach their potential.
            </p>
          </article>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section
        id="mission-vision"
        className="scroll-mt-24 bg-white px-6 py-20 md:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Purpose and Direction"
            title="Mission & Vision"
            description="Our mission and vision express our commitment to providing meaningful education and creating better opportunities for every learner."
          />

          <div className="grid gap-8 md:grid-cols-2">
            <article className="group rounded-3xl bg-[#0EA5E9] p-8 text-black shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-black transition duration-500 group-hover:rotate-6">
                <FaBullseye />
              </div>

              <h3 className="mt-7 text-2xl font-extrabold text-black md:text-3xl">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-black">
                To provide quality and inclusive primary education
                that nurtures learners' knowledge, skills, discipline
                and positive values, enabling every child to develop
                their potential and become a responsible member
                of society.
              </p>
            </article>

            <article className="group rounded-3xl bg-[#EAF1F8] p-8 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0EA5E9] text-3xl text-black transition duration-500 group-hover:rotate-6">
                <FaEye />
              </div>

              <h3 className="mt-7 text-2xl font-extrabold text-black md:text-3xl">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-black">
                To be a supportive and inspiring school community
                recognised for quality education, disciplined learners,
                academic growth and the development of confident
                individuals prepared for future opportunities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL GOALS */}
      <section className="bg-[#EAF1F8] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Believe In"
            title="Our Educational Goals"
            description="We encourage every learner to develop knowledge, character and confidence."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {goals.map((goal) => (
              <article
                key={goal.title}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <FaGraduationCap className="text-4xl text-[#0EA5E9]" />

                <h3 className="mt-5 text-xl font-bold text-black">
                  {goal.title}
                </h3>

                <p className="mt-4 leading-7 text-black">
                  {goal.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STAFF */}
      <section
        id="our-staff"
        className="scroll-mt-24 px-6 py-20 md:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The People Behind Our School"
            title="Meet Our Teaching Staff"
            description="Our teachers play an important role in developing learners' knowledge, skills, confidence and character."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <ProfileCard key={teacher.id} person={teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT LEADERSHIP */}
      <section className="bg-[#EAF1F8] px-6 py-20 md:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Leading By Example"
            title="School Leadership"
            description="Our student leaders represent responsibility, discipline, teamwork and positive behaviour within the school community."
          />

          <div className="mb-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {studentLeaders.map((leader) => (
              <ProfileCard key={leader.id} person={leader} student />
            ))}
          </div>

          <div className="mb-10 text-center">
            <h3 className="text-2xl font-extrabold text-black md:text-3xl">
              Our School Prefects
            </h3>

            <p className="mt-3 text-black">
              Meet the 12 prefects who help promote good conduct,
              discipline and teamwork.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {prefects.map((prefect) => (
              <ProfileCard
                key={prefect.id}
                person={prefect}
                student
              />
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[#0EA5E9] p-8 text-center text-black">
            <FaUsers className="mx-auto text-4xl text-black" />

            <h3 className="mt-4 text-2xl font-bold text-black">
              Leadership Through Responsibility
            </h3>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-black">
              Our head boy, head girl, vice leaders and prefects
              work together to encourage discipline, respect,
              cooperation and a positive school environment.
            </p>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section
        id="our-values"
        className="scroll-mt-24 bg-white px-6 py-20 md:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What Guides Us"
            title="Our Core Values"
            description="These values shape the way we learn, work together and contribute to our school community."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-2xl bg-[#EAF1F8] p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0EA5E9] text-2xl text-black transition duration-500 group-hover:rotate-6 group-hover:bg-[#E3C99B]">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-black">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-3xl bg-[#0EA5E9] p-8 text-black md:grid-cols-2 md:p-12">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-black">
              Growing Together
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-black md:text-4xl">
              Every Learner Matters. Every Opportunity Counts.
            </h2>

            <p className="mt-5 leading-8 text-black">
              We believe that strong partnerships between the school,
              families and the community help create better opportunities
              for learners.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#E3C99B]"
            >
              Contact Our School
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white/30 p-6 text-center transition duration-300 hover:bg-white/50"
                >
                  <Icon className="mx-auto text-4xl text-black" />

                  <h3 className="mt-4 font-bold text-black">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
