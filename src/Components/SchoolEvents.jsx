
import { useState } from "react";

import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
  FaTrophy,
  FaBriefcase,
  FaMusic,
  FaGraduationCap,
  FaUsers,
  FaBullhorn,
  FaStar,
  FaImages,
  FaCheckCircle,
  FaTshirt,
  FaUserTie,
  FaRunning,
  FaSun,
  FaCampground,
  FaLeaf,
  FaQuestionCircle,
  FaSeedling,
  FaPaintBrush,
  FaRecycle,
  FaBookOpen,
  FaBus,
  FaHandsHelping,
  FaTree,
  FaLightbulb,
} from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Annual Sports Day",
    category: "Sports",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "School Sports Grounds",
    description:
      "A day of sporting activities where learners demonstrate their talents, teamwork and sportsmanship.",
    icon: FaTrophy,
    featured: true,
    image: "/Athletics_1.jpg",
  },
  {
    id: 2,
    title: "Career Day",
    category: "Academic",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "School Hall",
    description:
      "Learners explore different careers, meet professionals and discover opportunities for their future.",
    icon: FaBriefcase,
    image: "/Career_1.png",
  },
  {
    id: 3,
    title: "Cultural Day",
    category: "Culture",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "School Grounds",
    description:
      "A celebration of culture, traditions, music, dance and the talents of our learners.",
    icon: FaMusic,
    image: "/Traditional_1.png",
  },
  {
    id: 4,
    title: "Prize Giving Ceremony",
    category: "Academic",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "School Hall",
    description:
      "Recognising learners for their academic achievements, discipline, leadership and participation.",
    icon: FaGraduationCap,
    image: "/Graduation_1.png",
  },
  {
    id: 5,
    title: "Parents Meeting",
    category: "School Community",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "School Hall",
    description:
      "An opportunity for parents, guardians and teachers to discuss learner progress and school development.",
    icon: FaUsers,
    image: "/Parent_1.jpg",
  },
  {
    id: 6,
    title: "School Open Day",
    category: "School Community",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "Gwayi Primary School",
    description:
      "Welcoming parents and visitors to discover our learning environment and school activities.",
    icon: FaBullhorn,
    image: "/Schoollife_1.jpg",
  },
  {
    id: 7,
    title: "Academic Activities",
    category: "Academic",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "School Hall",
    description:
      "Educational activities designed to encourage curiosity, creativity and academic excellence.",
    icon: FaBookOpen,
    image: "/Academics_1.jpg",
  },
  {
    id: 8,
    title: "Grade 6 Educational Trip",
    category: "School Trips",
    date: "Date to be announced",
    time: "To be announced",
    location: "Educational Destination",
    description:
      "An educational experience giving Grade 6 learners an opportunity to explore, discover and learn outside the classroom.",
    icon: FaBus,
    image: "/Trip_1.jpg",
  },
  {
    id: 9,
    title: "Grade 6 Bush Camp",
    category: "School Trips",
    date: "Date to be announced",
    time: "To be announced",
    location: "Bush Camp",
    description:
      "An outdoor learning and camping experience for Grade 6 learners, encouraging teamwork, independence, environmental awareness and practical life skills.",
    icon: FaCampground,
    image: "/Bush_Camp.jpg",
  },
  {
    id: 10,
    title: "PDC Practical Activities",
    category: "PDC Activities",
    date: "Throughout the school year",
    time: "During school hours",
    location: "School Grounds and Classrooms",
    description:
      "Practical Development and Creative activities that allow learners to develop useful skills through hands-on projects.",
    icon: FaLightbulb,
    image: "/PDC_1.jpg",
  },
  {
    id: 11,
    title: "School Conservation Programme",
    category: "Conservation",
    date: "Throughout the school year",
    time: "During school activities",
    location: "School Grounds",
    description:
      "Learners participate in tree planting, gardening, environmental awareness and keeping the school environment clean.",
    icon: FaLeaf,
    image: "/Conservation_1.jpg",
  },
  {
    id: 12,
    title: "Inter-Class Educational Quizzes",
    category: "Quizzes",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "School Hall",
    description:
      "Friendly educational competitions that challenge learners in general knowledge, mathematics, English and other subjects.",
    icon: FaQuestionCircle,
    image: "/Quiz_1.jpg",
  },
];

const categories = [
  "All",
  "Sports",
  "Academic",
  "Culture",
  "School Community",
  "School Trips",
  "PDC Activities",
  "Conservation",
  "Quizzes",
];

const pdcActivities = [
  {
    id: 1,
    title: "Gardening and Agriculture",
    description:
      "Learners develop practical agricultural skills through planting, watering, maintaining gardens and understanding food production.",
    image: "/PDC_Gardening.jpg",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Arts and Crafts",
    description:
      "Creative projects that encourage imagination, drawing, painting, designing and making useful objects.",
    image: "/PDC_Crafts.jpg",
    icon: FaPaintBrush,
  },
  {
    id: 3,
    title: "Environmental Projects",
    description:
      "Learners take part in activities that promote environmental responsibility, recycling and caring for nature.",
    image: "/PDC_Environment.jpg",
    icon: FaRecycle,
  },
  {
    id: 4,
    title: "Practical Life Skills",
    description:
      "Hands-on learning activities that develop creativity, problem-solving, responsibility and teamwork.",
    image: "/PDC_Lifeskills.jpg",
    icon: FaHandsHelping,
  },
  {
    id: 5,
    title: "School Projects",
    description:
      "Learners work together on practical classroom and school projects that turn ideas into meaningful results.",
    image: "/PDC_Projects.jpg",
    icon: FaLightbulb,
  },
  {
    id: 6,
    title: "Community Participation",
    description:
      "Activities that encourage learners to contribute positively to their school and surrounding community.",
    image: "/PDC_Community.jpg",
    icon: FaUsers,
  },
];

const conservationActivities = [
  {
    id: 1,
    title: "Tree Planting",
    description:
      "Planting and caring for trees to create a greener and healthier school environment.",
    image: "/Conservation_Trees.jpg",
    icon: FaTree,
  },
  {
    id: 2,
    title: "School Clean-Up Campaigns",
    description:
      "Keeping classrooms, school grounds and surrounding areas clean and safe.",
    image: "/Conservation_Cleaning.jpg",
    icon: FaRecycle,
  },
  {
    id: 3,
    title: "Environmental Awareness",
    description:
      "Learning about the importance of protecting natural resources, plants and wildlife.",
    image: "/Conservation_Awareness.jpg",
    icon: FaLeaf,
  },
];

const educationalQuizzes = [
  {
    id: 1,
    title: "Mathematics Quiz",
    description:
      "Learners test their mathematical knowledge through classroom challenges and problem-solving activities.",
    image: "/Quiz_Maths.jpg",
    icon: FaGraduationCap,
  },
  {
    id: 2,
    title: "English and Spelling Quiz",
    description:
      "Building vocabulary, spelling, reading and communication skills through friendly competitions.",
    image: "/Quiz_English.jpg",
    icon: FaBookOpen,
  },
  {
    id: 3,
    title: "General Knowledge Quiz",
    description:
      "Testing learners' understanding of science, geography, history and the world around them.",
    image: "/Quiz_General.jpg",
    icon: FaQuestionCircle,
  },
];

const schoolTrips = [
  {
    id: 1,
    title: "Grade 6 Bush Camp",
    category: "Camping Experience",
    destination: "Bush Camp",
    description:
      "An exciting outdoor learning experience where Grade 6 learners explore nature, develop teamwork and build practical life skills.",
    activities: [
      "Outdoor learning",
      "Team-building activities",
      "Nature exploration",
      "Environmental awareness",
      "Group learning experiences",
      "Personal responsibility",
    ],
    image: "/Bush_Camp.jpg",
    icon: FaCampground,
  },
  {
    id: 2,
    title: "Grade 6 Educational Trip",
    category: "Educational Excursion",
    destination: "Destination to be announced",
    description:
      "An opportunity for learners to connect classroom lessons with real-world experiences through educational visits.",
    activities: [
      "Educational exploration",
      "Observation and discovery",
      "Learning outside the classroom",
      "Group discussions",
      "Practical learning",
    ],
    image: "/Trip_1.jpg",
    icon: FaBus,
  },
];

const pastEvents = [
  {
    id: 1,
    title: "Learner Awards",
    description: "Learners taking part in school activities.",
    image: "/Graduation_3.png",
  },
  {
    id: 2,
    title: "Sports and Athletics",
    description: "Learners demonstrating teamwork and sporting talent.",
    image: "/Netball_1.jpg",
  },
  {
    id: 3,
    title: "Cultural Celebrations",
    description: "Celebrating our culture, traditions and talents.",
    image: "/Traditional_2.jpg",
  },
  {
    id: 4,
    title: "School Conservation",
    description: "Promoting environmental awareness and responsibility.",
    image: "/Conservation_1.jpg",
  },
  {
    id: 5,
    title: "PDC Activities",
    description: "Learning practical skills through creative projects.",
    image: "/PDC_1.jpg",
  },
  {
    id: 6,
    title: "Educational Trips",
    description: "Learning and discovering beyond the classroom.",
    image: "/Bush_Camp.jpg",
  },
];

const galleryImages = [
  { id: 1, image: "/Athletics_1.jpg", title: "Sports and Athletics" },
  { id: 2, image: "/Netball_1.jpg", title: "School Sports" },
  { id: 3, image: "/Academics_1.jpg", title: "Academic Activities" },
  { id: 4, image: "/Traditional_1.png", title: "Cultural Celebrations" },
  { id: 5, image: "/Career_3.png", title: "School Career Day" },
  { id: 6, image: "/Parent_1.jpg", title: "School Events" },
  { id: 7, image: "/Achievements_1.png", title: "Learner Achievements" },
  { id: 8, image: "/Traditional_2.jpg", title: "Memorable Moments" },
  { id: 9, image: "/Bush_Camp.jpg", title: "Grade 6 Bush Camp" },
  { id: 10, image: "/PDC_1.jpg", title: "PDC Activities" },
  { id: 11, image: "/Conservation_1.jpg", title: "School Conservation" },
  { id: 12, image: "/Quiz_1.jpg", title: "Educational Quizzes" },
];

const uniformSections = [
  {
    title: "Boys' School Uniform",
    icon: FaUserTie,
    items: [
      "Grey long trousers",
      "Grey shorts",
      "Grey socks",
      "Black school shoes",
      "Khaki shirts",
      "Blue tie",
      "Blue blazer",
    ],
  },
  {
    title: "Girls' School Uniform",
    icon: FaUserTie,
    items: [
      "Blue skirts",
      "Blue tunics",
      "Blue socks",
      "Black school shoes",
      "Khaki long-sleeved shirts",
      "Khaki short-sleeved shirts",
      "Blue tie",
    ],
  },
  {
    title: "Sports Uniform",
    icon: FaRunning,
    items: [
      "Blue tracksuit with blue stripes",
      "Royal blue round-neck T-shirts",
      "Navy blue sports shorts",
      "White Tommy shoes",
      "White caps",
    ],
  },
  {
    title: "Compulsory Item",
    icon: FaSun,
    items: ["Blue sun hat"],
  },
];

function SchoolImage({ src, alt, className = "" }) {
  const [imageError, setImageError] = useState(false);

  return imageError ? (
    <div
      className={`flex items-center justify-center bg-[#E0F2FE] ${className}`}
    >
      <div className="text-center">
        <FaImages className="mx-auto text-4xl text-[#C8982A]" />
        <p className="mt-3 text-sm font-semibold text-[#0284C7]">
          Image not found
        </p>
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}

function UniformCard({ section }) {
  const Icon = section.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E0F2FE] text-2xl text-[#0EA5E9]">
          <Icon />
        </div>

        <h3 className="text-xl font-extrabold text-[#0EA5E9]">
          {section.title}
        </h3>
      </div>

      <ul className="mt-6 space-y-3">
        {section.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-600">
            <FaCheckCircle className="mt-1 shrink-0 text-[#C8982A]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ActivityCard({ activity }) {
  const Icon = activity.icon;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <SchoolImage
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0F2FE] text-2xl text-[#0EA5E9]">
          <Icon />
        </div>

        <h3 className="mt-5 text-xl font-extrabold text-[#0EA5E9]">
          {activity.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {activity.description}
        </p>
      </div>
    </article>
  );
}

function SchoolEvents() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((event) => event.category === activeCategory);

  const featuredEvent = events.find((event) => event.featured);
  const FeaturedIcon = featuredEvent?.icon || FaCalendarAlt;

  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <section className="relative overflow-hidden bg-[#0EA5E9] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[35px] border-white/5" />
        <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full border-[35px] border-[#EBBD4E]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#EBBD4E]">
              <FaCalendarAlt />
              Gwayi Primary School
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              School Events &
              <span className="block text-[#EBBD4E]">Activities</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-sky-50 md:text-lg">
              Discover the events, educational trips, camping experiences,
              PDC activities, conservation projects and celebrations that
              make learning meaningful at Gwayi Primary School.
            </p>

            <a
              href="#upcoming-events"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#EBBD4E] px-7 py-4 font-bold text-[#0284C7] transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Explore Activities
              <FaArrowRight />
            </a>
          </div>

          <div className="relative">
            <SchoolImage
              src="/Graduation_1.png"
              alt="School graduation celebration"
              className="h-[300px] w-full rounded-3xl object-cover shadow-2xl md:h-[430px]"
            />

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 text-[#0EA5E9] shadow-xl md:-left-8">
              <FaCalendarAlt className="text-3xl text-[#C8982A]" />
              <p className="mt-2 font-extrabold">Our School Calendar</p>
              <p className="text-sm text-slate-500">
                Events and celebrations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#0284C7]">
            Moments That Matter
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
            More Than Just School Days
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            School activities create opportunities for learners to develop
            confidence, showcase their abilities, build friendships and
            celebrate achievements. We value learning inside and outside
            the classroom.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Learning",
                text: "Discovering new skills and opportunities.",
              },
              {
                number: "02",
                title: "Teamwork",
                text: "Building friendships and cooperation.",
              },
              {
                number: "03",
                title: "Achievement",
                text: "Celebrating learner success.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-100 bg-[#F7F9FC] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <span className="text-3xl font-extrabold text-[#C8982A]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-extrabold text-[#0EA5E9]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {featuredEvent && (
        <section className="bg-[#F2F5F9] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              Featured Event
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
              Coming Up at Our School
            </h2>

            <div className="mt-10 grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
              <div className="relative min-h-[350px] overflow-hidden">
                <SchoolImage
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="h-full min-h-[350px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0284C7]/90 via-[#0284C7]/20 to-transparent" />

                <div className="absolute bottom-8 left-8 text-white">
                  <FeaturedIcon className="text-5xl text-[#EBBD4E]" />

                  <p className="mt-5 text-sm font-bold uppercase tracking-widest text-[#EBBD4E]">
                    Gwayi Primary School
                  </p>

                  <h3 className="mt-2 text-3xl font-extrabold">
                    {featuredEvent.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <span className="rounded-full bg-[#E0F2FE] px-4 py-2 text-xs font-bold text-[#0284C7]">
                  {featuredEvent.category}
                </span>

                <h3 className="mt-6 text-2xl font-extrabold text-[#0EA5E9]">
                  {featuredEvent.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {featuredEvent.description}
                </p>

                <div className="mt-7 space-y-5 text-sm text-slate-600">
                  <p className="flex items-center gap-3">
                    <FaCalendarAlt className="text-[#C8982A]" />
                    {featuredEvent.date}
                  </p>

                  <p className="flex items-center gap-3">
                    <FaClock className="text-[#C8982A]" />
                    {featuredEvent.time}
                  </p>

                  <p className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[#C8982A]" />
                    {featuredEvent.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        id="upcoming-events"
        className="mx-auto max-w-7xl px-6 py-20 md:px-12"
      >
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              Plan Ahead
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
              School Events & Activities
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Explore school celebrations, educational activities, trips,
              quizzes and special programmes.
            </p>
          </div>

          <FaCalendarAlt className="text-5xl text-[#C8982A]" />
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-bold transition duration-300 ${
                activeCategory === category
                  ? "bg-[#0EA5E9] text-white shadow-md"
                  : "bg-[#E0F2FE] text-[#0284C7] hover:bg-[#EBBD4E]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => {
            const Icon = event.icon;

            return (
              <article
                key={event.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <SchoolImage
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0284C7]/90 via-[#0284C7]/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#EBBD4E]">
                        {event.category}
                      </span>

                      <h3 className="mt-2 text-xl font-extrabold">
                        {event.title}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EBBD4E] text-xl text-[#0284C7]">
                      <Icon />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="leading-7 text-slate-600">
                    {event.description}
                  </p>

                  <div className="mt-6 space-y-4 border-t border-slate-100 pt-5 text-sm text-slate-600">
                    <p className="flex items-center gap-3">
                      <FaCalendarAlt className="shrink-0 text-[#C8982A]" />
                      {event.date}
                    </p>

                    <p className="flex items-center gap-3">
                      <FaClock className="shrink-0 text-[#C8982A]" />
                      {event.time}
                    </p>

                    <p className="flex items-center gap-3">
                      <FaMapMarkerAlt className="shrink-0 text-[#C8982A]" />
                      {event.location}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <p className="py-12 text-center text-slate-500">
            No events found in this category.
          </p>
        )}
      </section>

      <section id="school-trips" className="bg-[#F2F5F9] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              Explore and Discover
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#0EA5E9] md:text-5xl">
              School Trips & Camping
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Learning goes beyond the classroom. Our educational trips
              give learners opportunities to explore new environments,
              develop confidence and gain practical knowledge.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {schoolTrips.map((trip) => {
              const Icon = trip.icon;

              return (
                <article
                  key={trip.id}
                  className="overflow-hidden rounded-3xl bg-white shadow-lg"
                >
                  <div className="relative h-72 overflow-hidden">
                    <SchoolImage
                      src={trip.image}
                      alt={trip.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0284C7]/90 to-transparent" />

                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="rounded-full bg-[#EBBD4E] px-4 py-2 text-xs font-bold uppercase text-[#0284C7]">
                        {trip.category}
                      </span>

                      <h3 className="mt-4 text-3xl font-extrabold">
                        {trip.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-7 md:p-9">
                    <div className="flex items-center gap-3 text-[#C8982A]">
                      <Icon className="text-2xl" />
                      <span className="font-bold text-[#0EA5E9]">
                        {trip.destination}
                      </span>
                    </div>

                    <p className="mt-5 leading-8 text-slate-600">
                      {trip.description}
                    </p>

                    <h4 className="mt-7 font-extrabold text-[#0EA5E9]">
                      Learning Activities
                    </h4>

                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {trip.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <FaCheckCircle className="mt-1 shrink-0 text-[#C8982A]" />
                          {activity}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 rounded-xl bg-[#E0F2FE] p-4">
                      <p className="flex items-center gap-2 text-sm font-bold text-[#0284C7]">
                        <FaCalendarAlt className="text-[#C8982A]" />
                        Date: To be announced
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pdc-activities" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              Learning by Doing
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#0EA5E9] md:text-5xl">
              PDC Activities
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Practical Development and Creative activities help learners
              build skills, express creativity, solve problems and apply
              what they learn in everyday life.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {pdcActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="school-conservation"
        className="bg-[#F2F5F9] px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[#0284C7]">
                <FaLeaf className="text-[#C8982A]" />
                Caring for Our Environment
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-[#0EA5E9] md:text-5xl">
                School Conservation
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                At Gwayi Primary School, learners are encouraged to
                understand the importance of protecting the environment.
                Through conservation activities, they learn to care for
                trees, plants, wildlife and natural resources.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Promoting tree planting and gardening.",
                  "Keeping the school environment clean.",
                  "Learning about wildlife and biodiversity.",
                  "Encouraging recycling and responsible waste management.",
                  "Developing environmental responsibility.",
                ].map((item) => (
                  <p key={item} className="flex items-start gap-3 text-slate-600">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#C8982A]" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <SchoolImage
                src="/Conservation_1.jpg"
                alt="School environmental conservation"
                className="h-[350px] w-full object-cover md:h-[470px]"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {conservationActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      <section id="educational-quizzes" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              Think, Learn and Achieve
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#0EA5E9] md:text-5xl">
              Educational Quizzes
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our educational quizzes encourage learners to think
              critically, share knowledge, solve problems and develop
              confidence through friendly academic competitions.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {educationalQuizzes.map((quiz) => (
              <ActivityCard key={quiz.id} activity={quiz} />
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#0EA5E9] p-8 text-white md:p-10">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#EBBD4E] text-3xl text-[#0284C7]">
                <FaQuestionCircle />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold">
                  Learning Through Friendly Competition
                </h3>

                <p className="mt-3 leading-7 text-sky-50">
                  Quizzes help learners improve their knowledge, practise
                  teamwork and develop a positive attitude towards learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0EA5E9] px-6 py-16 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#EBBD4E]">
              Together We Grow
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Every Activity Creates a Memory
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-sky-50">
              Our school activities celebrate learning, teamwork,
              creativity, environmental awareness and the achievements
              of our school community.
            </p>
          </div>

          <FaUsers className="text-7xl text-[#EBBD4E]" />
        </div>
      </section>

      <section className="bg-[#F2F5F9] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              Looking Back
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
              Past Events & Memories
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Explore special moments and activities from our school community.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {pastEvents.map((event) => (
              <article
                key={event.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <SchoolImage
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#C8982A]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-[#0EA5E9]">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="school-gallery"
        className="bg-white px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[#0284C7]">
                <FaImages className="text-[#C8982A]" />
                Our Memories
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-[#0EA5E9] md:text-5xl">
                School Gallery
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                A collection of special moments, school activities,
                educational trips, achievements and unforgettable
                experiences at Gwayi Primary School.
              </p>
            </div>

            <div className="flex items-center gap-3 text-[#0EA5E9]">
              <FaImages className="text-4xl text-[#C8982A]" />

              <div>
                <p className="text-2xl font-extrabold">
                  {galleryImages.length}
                </p>

                <p className="text-sm text-slate-500">Gallery images</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                className={`group relative min-h-[230px] overflow-hidden rounded-2xl bg-[#E0F2FE] ${
                  index === 0 || index === 8
                    ? "lg:col-span-2 lg:row-span-2"
                    : ""
                }`}
              >
                <SchoolImage
                  src={item.image}
                  alt={item.title}
                  className="h-full min-h-[230px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0284C7]/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="pointer-events-none absolute bottom-5 left-5 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                  <p className="font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="school-uniform"
        className="bg-[#F2F5F9] px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="flex items-center justify-center gap-2 font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              <FaTshirt className="text-[#C8982A]" />
              Gwayi Primary School
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
              School Uniform
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our school uniform encourages a sense of belonging,
              pride and discipline. Use these lists as a guide when
              preparing school and sports clothing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {uniformSections.map((section) => (
              <UniformCard key={section.title} section={section} />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm md:flex-row md:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9] text-2xl text-[#EBBD4E]">
              <FaCheckCircle />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#0EA5E9]">
                Uniform Reminder
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                The blue sun hat is compulsory. Learners should wear
                the appropriate uniform for their school activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#E3C99B] bg-white p-8 text-center shadow-lg md:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E0F2FE] text-3xl text-[#0EA5E9]">
            <FaBullhorn />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-[#0EA5E9]">
            Need More Information?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            For questions about school events, educational trips,
            PDC activities, conservation programmes, quizzes and
            uniform requirements, please contact Gwayi Primary School.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0EA5E9] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#0284C7]"
          >
            Contact the School
            <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}

export default SchoolEvents;
