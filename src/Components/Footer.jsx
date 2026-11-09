
import { Link } from "react-router-dom";

const links = [
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "School Life", path: "/school-life" },
  { name: "Parents & Learners", path: "/school-hub" },
  { name: "Contact", path: "/contact" },
  { name: "Admissions", path: "/admissions" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0EA5E9] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:justify-between md:px-10">
        <div>
          <p className="text-xl font-black tracking-wider">
            GWAYI PRIMARY SCHOOL
          </p>

          <p className="mt-2 text-sm italic text-[#D7B982]">
            Education • Discipline • Excellence
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm"
        >
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="text-white/80 transition hover:text-[#D7B982]"
            >
              {l.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Gwayi Primary School. All rights reserved.
      </div>
    </footer>
  );
}
