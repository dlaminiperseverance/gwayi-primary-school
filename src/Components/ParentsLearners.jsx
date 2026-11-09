
import { useState } from "react";
import {
  FaBell,
  FaCalendarAlt,
  FaDownload,
  FaBookOpen,
  FaUsers,
  FaFileAlt,
  FaArrowRight,
  FaSearch,
  FaGraduationCap,
  FaBullhorn,
  FaQuestionCircle,
  FaChevronDown,
  FaClipboardList,
  FaSchool,
  FaRegCalendarCheck,
} from "react-icons/fa";

const notices = [
  {
    id: 1,
    title: "Welcome Back to School",
    category: "General",
    date: "Date to be announced",
    description:
      "Parents and learners are encouraged to prepare for the upcoming school term.",
    important: true,
  },
  {
    id: 2,
    title: "Parents Meeting",
    category: "Parents",
    date: "Date to be announced",
    description:
      "Parents and guardians are invited to attend an important school meeting.",
    important: true,
  },
  {
    id: 3,
    title: "Examination Preparation",
    category: "Academic",
    date: "Date to be announced",
    description:
      "Learners are encouraged to revise their subjects and prepare for examinations.",
    important: false,
  },
  {
    id: 4,
    title: "Sports Activities",
    category: "Activities",
    date: "Date to be announced",
    description:
      "Learners are encouraged to participate in upcoming sporting activities.",
    important: false,
  },
];

const calendar = [
  {
    title: "School Opening",
    date: "To be announced",
    category: "Academic",
  },
  {
    title: "Parents Meeting",
    date: "To be announced",
    category: "Parents",
  },
  {
    title: "Examinations",
    date: "To be announced",
    category: "Academic",
  },
  {
    title: "Sports Day",
    date: "To be announced",
    category: "Activities",
  },
  {
    title: "School Closing",
    date: "To be announced",
    category: "Academic",
  },
];

const downloads = [
  {
    title: "School Admission Form",
    description: "Forms for new learner registrations.",
    file: "/documents/admission-form.pdf",
    type: "PDF Document",
  },
  {
    title: "School Rules and Regulations",
    description: "Important school rules and learner expectations.",
    file: "/documents/school-rules.pdf",
    type: "PDF Document",
  },
  {
    title: "School Timetable",
    description: "Learner class timetable and schedules.",
    file: "/documents/school-timetable.pdf",
    type: "PDF Document",
  },
  {
    title: "School Calendar",
    description: "Important dates and school activities.",
    file: "/documents/school-calendar.pdf",
    type: "PDF Document",
  },
  {
    title: "Parent Information Guide",
    description: "Useful information for parents and guardians.",
    file: "/documents/parent-guide.pdf",
    type: "PDF Document",
  },
  {
    title: "Learner Study Guide",
    description: "Guidance to help learners with their studies.",
    file: "/documents/study-guide.pdf",
    type: "PDF Document",
  },
];

const resources = [
  {
    icon: FaBookOpen,
    title: "Study Resources",
    description: "Learning materials and revision resources.",
  },
  {
    icon: FaClipboardList,
    title: "Homework Guidance",
    description: "Information to help learners complete homework.",
  },
  {
    icon: FaGraduationCap,
    title: "Academic Support",
    description: "Encouraging learners to achieve their best.",
  },
  {
    icon: FaUsers,
    title: "Parent Support",
    description: "Guidance for supporting learning at home.",
  },
];

const faqs = [
  {
    question: "How can I register a new learner?",
    answer:
      "Parents and guardians can contact the school to obtain admission information and the required registration forms.",
  },
  {
    question: "Where can I find school notices?",
    answer:
      "All published school announcements can be viewed in the School Notices section of this portal.",
  },
  {
    question: "How can I download school documents?",
    answer:
      "Visit the Downloads Centre, select the document you need and click the download button.",
  },
  {
    question: "How can I communicate with the school?",
    answer:
      "Parents and guardians can use the separate Contact page to find the school's communication details.",
  },
  {
    question: "Where can learners find study resources?",
    answer:
      "Learners can visit the Learner Resources section for available learning materials and study guidance.",
  },
];

function ParentsLearners() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    "All",
    "General",
    "Parents",
    "Academic",
    "Activities",
  ];

  const filteredNotices = notices.filter((notice) => {
    const matchesCategory =
      activeCategory === "All" ||
      notice.category === activeCategory;

    const matchesSearch =
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const quickLinks = [
    {
      icon: FaBell,
      title: "School Notices",
      text: "Latest announcements and updates.",
      link: "#notices",
    },
    {
      icon: FaCalendarAlt,
      title: "School Calendar",
      text: "Important dates and activities.",
      link: "#calendar",
    },
    {
      icon: FaDownload,
      title: "Downloads",
      text: "Forms, documents and guides.",
      link: "#downloads",
    },
    {
      icon: FaBookOpen,
      title: "Learner Resources",
      text: "Learning and study support.",
      link: "#resources",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0EA5E9] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-white/5" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full border-[40px] border-[#EBBD4E]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#EBBD4E]">
              <FaSchool />
              Gwayi Primary School
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Parents &
              <span className="block text-[#EBBD4E]">
                Learners Portal
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-blue-50 md:text-lg">
              Your central destination for school announcements,
              important dates, downloadable documents and learning
              resources. Stay informed and connected with Gwayi
              Primary School.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#notices"
                className="inline-flex items-center gap-3 rounded-full bg-[#EBBD4E] px-7 py-4 font-bold text-[#0EA5E9] transition hover:-translate-y-1 hover:bg-white"
              >
                View Notices <FaArrowRight />
              </a>

              <a
                href="#downloads"
                className="inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#0EA5E9]"
              >
                Downloads <FaDownload />
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="/Schoollife_1.jpg"
              alt="Gwayi Primary School learners"
              className="h-[320px] w-full rounded-3xl object-cover shadow-2xl md:h-[440px]"
            />

            <div className="absolute -bottom-7 -left-3 rounded-2xl bg-white p-5 text-[#0EA5E9] shadow-xl md:-left-7">
              <FaGraduationCap className="text-4xl text-[#C8982A]" />
              <h3 className="mt-2 font-extrabold">
                Learning Together
              </h3>
              <p className="text-sm text-slate-500">
                Parents, learners and teachers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
            Welcome to Our Portal
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
            Everything You Need in One Place
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            We believe that strong communication between parents,
            learners and teachers creates a better learning
            environment. This portal makes it easier to access
            important school information.
          </p>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="bg-[#F2F5F9] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
              Explore the Portal
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
              Quick Access
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  href={item.link}
                  key={item.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E0F2FE] text-2xl text-[#0EA5E9] transition group-hover:bg-[#EBBD4E]">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-[#0EA5E9]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0EA5E9]">
                    Explore <FaArrowRight />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOTICES */}
      <section id="notices" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
                Stay Updated
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
                School Notices & Announcements
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Important information and updates for parents and learners.
              </p>
            </div>

            <FaBullhorn className="text-5xl text-[#C8982A]" />
          </div>

          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search school notices..."
                className="w-full rounded-xl border border-slate-200 bg-[#F7F9FC] py-4 pl-12 pr-5 outline-none transition focus:border-[#0EA5E9]"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                  activeCategory === category
                    ? "bg-[#0EA5E9] text-white"
                    : "bg-[#E0F2FE] text-[#0EA5E9] hover:bg-[#EBBD4E]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {filteredNotices.map((notice) => (
              <article
                key={notice.id}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-[#E0F2FE] px-4 py-2 text-xs font-bold text-[#0EA5E9]">
                    {notice.category}
                  </span>

                  {notice.important && (
                    <span className="flex items-center gap-2 text-xs font-bold text-red-600">
                      <FaBell /> Important Notice
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#0EA5E9]">
                  {notice.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {notice.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm text-slate-500">
                  <FaCalendarAlt className="text-[#C8982A]" />
                  {notice.date}
                </div>
              </article>
            ))}
          </div>

          {filteredNotices.length === 0 && (
            <p className="py-12 text-center text-slate-500">
              No notices found. Try another search or category.
            </p>
          )}
        </div>
      </section>

      {/* CALENDAR */}
      <section id="calendar" className="bg-[#F2F5F9] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
              Important Dates
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
              School Calendar
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Keep track of academic activities, meetings and school events.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="flex items-center justify-between bg-[#0EA5E9] p-6 text-white">
                <div>
                  <h3 className="text-xl font-extrabold">
                    Important School Dates
                  </h3>
                  <p className="mt-1 text-sm text-blue-50">
                    Academic activities and events
                  </p>
                </div>

                <FaCalendarAlt className="text-3xl text-[#EBBD4E]" />
              </div>

              <div className="divide-y divide-slate-100 px-6">
                {calendar.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between gap-3 py-6 sm:flex-row sm:items-center"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E0F2FE] text-xl text-[#0EA5E9]">
                        <FaRegCalendarCheck />
                      </div>

                      <div>
                        <h4 className="font-extrabold text-[#0EA5E9]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm font-semibold text-[#C8982A]">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-[#0EA5E9] p-8 text-white">
              <div>
                <FaCalendarAlt className="text-5xl text-[#EBBD4E]" />

                <h3 className="mt-7 text-2xl font-extrabold">
                  Plan Ahead
                </h3>

                <p className="mt-4 leading-8 text-blue-50">
                  Stay informed about upcoming school activities,
                  academic dates and important events.
                </p>
              </div>

              <a
                href="/documents/school-calendar.pdf"
                download
                className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#EBBD4E] px-6 py-4 font-bold text-[#0EA5E9] transition hover:bg-white"
              >
                Download Calendar <FaDownload />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section id="downloads" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
              Useful Documents
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
              Downloads Centre
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Access useful school documents, forms and learning guides.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {downloads.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E0F2FE] text-2xl text-[#0EA5E9]">
                  <FaFileAlt />
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-[#0EA5E9]">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-14 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs text-slate-500">
                    {item.type}
                  </span>

                  <a
                    href={item.file}
                    download
                    className="flex items-center gap-2 rounded-full bg-[#0EA5E9] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#0284C7]"
                  >
                    Download <FaDownload />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNER RESOURCES */}
      <section id="resources" className="bg-[#F2F5F9] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
              Supporting Education
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
              Learner Resources
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Helpful resources to encourage independent learning,
              academic development and personal growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <Icon className="text-4xl text-[#C8982A]" />

                  <h3 className="mt-5 text-lg font-extrabold text-[#0EA5E9]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARENTS INFORMATION */}
      <section id="parents" className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
              Stronger Together
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0EA5E9] md:text-4xl">
              Supporting Parents and Guardians
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Parents and guardians play an important role in
              supporting learners. We encourage regular communication,
              participation in school activities and cooperation
              between home and school.
            </p>

            <ul className="mt-7 space-y-5">
              {[
                "Attend scheduled parents meetings.",
                "Encourage learners to complete their homework.",
                "Stay informed about school announcements.",
                "Support school activities and programmes.",
                "Communicate with teachers about learner progress.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FaArrowRight className="mt-1 shrink-0 text-[#C8982A]" />
                  <span className="text-sm leading-7 text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src="/Parent_1.jpg"
              alt="School community"
              className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
            />

            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-[#EBBD4E] p-6 text-[#0EA5E9] shadow-lg md:-left-6">
              <FaUsers className="text-3xl" />
              <p className="mt-2 font-extrabold">
                One School Community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F2F5F9] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <FaQuestionCircle className="mx-auto text-5xl text-[#C8982A]" />

            <p className="mt-5 font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
              Need Help?
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 p-6 text-left"
                >
                  <span className="font-bold text-[#0EA5E9]">
                    {faq.question}
                  </span>

                  <FaChevronDown
                    className={`shrink-0 text-[#C8982A] transition-transform ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFAQ === index && (
                  <div className="border-t border-slate-100 px-6 py-5 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-[#0EA5E9] px-6 py-20 text-center text-white md:px-12">
        <div className="mx-auto max-w-3xl">
          <FaSchool className="mx-auto text-5xl text-[#EBBD4E]" />

          <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">
            Together We Build a Brighter Future
          </h2>

          <p className="mt-5 leading-8 text-blue-50">
            Thank you for being part of the Gwayi Primary School
            community. Your involvement makes a difference.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#EBBD4E] px-8 py-4 font-bold text-[#0EA5E9] transition hover:-translate-y-1 hover:bg-white"
          >
            Contact the School <FaArrowRight />
          </a>
        </div>
      </section>

    </main>
  );
}

export default ParentsLearners;
