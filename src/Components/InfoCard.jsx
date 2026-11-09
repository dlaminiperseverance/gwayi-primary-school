import { Link } from "react-router-dom";
import { FaBullhorn, FaRegCalendarAlt, FaTrophy, FaChevronRight } from "react-icons/fa";
import useReveal from "../../hooks/useReveal";

// Edit these with the school's real notices and events
const notices = [
  { day: "24", month: "APR", title: "School Reopens for Term 2", text: "All learners are expected back on 28 April 2025." },
  { day: "18", month: "APR", title: "Parent Meeting", text: "A meeting will be held on 25 April 2025 at 2pm." },
  { day: "10", month: "APR", title: "Sports Day Update", text: "Sports day will now be on 17 May 2025." },
];

const events = [
  { day: "25", month: "APR", title: "Parent Meeting", text: "2:00 PM – School Hall" },
  { day: "17", month: "MAY", title: "Sports Day", text: "8:00 AM – School Grounds" },
  { day: "30", month: "MAY", title: "Mid-Term Break", text: "30 May – 6 June 2025" },
];

// Put your photo at public/images/school-building.jpg
const HIGHLIGHT_IMAGE = "/School_1.png";

function CardHeader({ icon: Icon, title, linkText, to }) {
  return (
    <div className="flex items-center justify-between rounded-t-xl bg-[#0A2F66] px-5 py-4 text-white">
      <div className="flex items-center gap-3">
        <Icon className="text-3xl text-[#EBBD4E]" />
        <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
      </div>
      {to && (
        <Link
          to={to}
          className="group flex items-center gap-1.5 text-sm font-semibold transition hover:text-[#EBBD4E]"
        >
          {linkText}
          <FaChevronRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}

function DateList({ items }) {
  return (
    <ul className="divide-y divide-gray-100 rounded-b-xl border border-t-0 border-gray-100 bg-white px-4 shadow-md">
      {items.map((item) => (
        <li key={item.title} className="group flex items-center gap-4 py-3.5">
          <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-md bg-[#FBEFCB] text-[#0A2F66] transition duration-300 group-hover:bg-[#EBBD4E]">
            <span className="text-xl font-extrabold leading-none">{item.day}</span>
            <span className="mt-0.5 text-xs font-bold">{item.month}</span>
          </div>
          <div>
            <p className="font-bold text-[#0A2F66]">{item.title}</p>
            <p className="text-sm text-slate-600">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function InfoCards() {
  const [ref, visible] = useReveal();
  const reveal = `reveal ${visible ? "is-visible" : ""}`;

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-10 md:px-10">
      <div ref={ref} className="grid gap-6 lg:grid-cols-3">
        <div className={reveal} style={{ "--d": "0ms" }}>
          <CardHeader icon={FaBullhorn} title="School Notices" linkText="View All" to="/school-hub/notices" />
          <DateList items={notices} />
        </div>

        <div className={reveal} style={{ "--d": "150ms" }}>
          <CardHeader icon={FaRegCalendarAlt} title="Upcoming Events" linkText="View Calendar" to="/school-hub/calendar" />
          <DateList items={events} />
        </div>

        <div className={reveal} style={{ "--d": "300ms" }}>
          <CardHeader icon={FaTrophy} title="School Highlights" />
          <Link
            to="/school-life/gallery"
            className="group relative block h-[250px] overflow-hidden rounded-b-xl bg-[#0A2F66] shadow-md"
          >
            <img
              src={Building_1.jpg}
              alt="Gwayi Primary School buildings"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-[#0A2F66]/90 px-4 py-3 text-white">
              <span className="font-semibold">A Conducive Learning Environment</span>
              <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InfoCards;