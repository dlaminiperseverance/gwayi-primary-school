import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBullhorn, FaTimes, FaChevronRight } from "react-icons/fa";

const STORAGE_KEY = "gwayi-banner-closed";

// Edit the message and link here
const BANNER = {
  text: "Admissions for the new school year are now open.",
  linkText: "Apply now",
  to: "/admissions",
};

function AnnouncementBanner() {
  const [closed, setClosed] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [shown, setShown] = useState(false); // drives the slide-down on load
  const [hiding, setHiding] = useState(false); // drives the slide-up on close
  const timer = useRef(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true));
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer.current);
    };
  }, []);

  const dismiss = () => {
    setHiding(true);
    timer.current = setTimeout(() => {
      setClosed(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* storage blocked, banner just returns on refresh */
      }
    }, 400);
  };

  if (closed) return null;

  const open = shown && !hiding;

  return (
    <div
      role="region"
      aria-label="School announcement"
      className={`overflow-hidden bg-[#EBBD4E] text-[#0A2F66] transition-all duration-500 ease-in-out motion-reduce:transition-none ${
        open ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-3 px-5 py-2.5 md:px-10">
        <FaBullhorn className="hidden shrink-0 text-lg sm:block" aria-hidden="true" />

        <p className="text-center text-sm font-semibold md:text-[15px]">
          {BANNER.text}{" "}
          <Link
            to={BANNER.to}
            className="group inline-flex items-center gap-1 font-extrabold underline decoration-2 underline-offset-4 transition hover:text-white"
          >
            {BANNER.linkText}
            <FaChevronRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </p>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Close announcement"
          className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition hover:bg-[#0A2F66] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0A2F66] sm:ml-0"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default AnnouncementBanner;