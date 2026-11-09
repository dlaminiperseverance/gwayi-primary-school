
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaSchool,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting Gwayi Primary School.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="bg-white text-slate-800">

      <section className="bg-[#0EA5E9] px-6 py-24 text-center text-white md:px-12">
        <FaSchool className="mx-auto text-5xl text-[#EBBD4E]" />

        <p className="mt-6 font-bold uppercase tracking-[0.25em] text-[#EBBD4E]">
          Gwayi Primary School
        </p>

        <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
          Contact <span className="text-[#EBBD4E]">Us</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100">
          We welcome questions, enquiries and communication from
          parents, guardians, learners and members of our community.
        </p>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              Get in Touch
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
              We'd Love to Hear From You
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: FaPhoneAlt,
                title: "Phone Number",
                value: "Add school phone number",
              },
              {
                icon: FaEnvelope,
                title: "Email Address",
                value: "Add school email address",
              },
              {
                icon: FaMapMarkerAlt,
                title: "Our Location",
                value: "Gwayi, Lupane, Zimbabwe",
              },
              {
                icon: FaClock,
                title: "Office Hours",
                value: "Add official office hours",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-[#F7F9FC] p-7 text-center transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <Icon className="mx-auto text-4xl text-[#C8982A]" />

                  <h3 className="mt-5 font-extrabold text-[#0EA5E9]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600">
                    {item.value}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      <section className="bg-[#F2F5F9] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              Send an Enquiry
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#0EA5E9] md:text-4xl">
              How Can We Help You?
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Whether you have questions about admissions, school
              activities, learner progress or general information,
              please use the form to send your enquiry.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl bg-[#0EA5E9] p-8 text-white">
              <FaSchool className="text-5xl text-[#EBBD4E]" />

              <h3 className="mt-5 text-2xl font-extrabold">
                Gwayi Primary School
              </h3>

              <p className="mt-4 leading-8 text-blue-100">
                Education, discipline, teamwork and excellence.
                Building a brighter future for every learner.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-7 shadow-lg md:p-10"
          >
            <h3 className="mb-8 text-2xl font-extrabold text-[#0EA5E9]">
              Send Us a Message
            </h3>

            <div className="space-y-6">

              <div>
                <label className="mb-2 block text-sm font-bold text-[#0EA5E9]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-[#F7F9FC] px-5 py-4 outline-none focus:border-[#0EA5E9]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#0EA5E9]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-[#F7F9FC] px-5 py-4 outline-none focus:border-[#0EA5E9]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#0EA5E9]">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is your enquiry about?"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-[#F7F9FC] px-5 py-4 outline-none focus:border-[#0EA5E9]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#0EA5E9]">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-[#F7F9FC] px-5 py-4 outline-none focus:border-[#0EA5E9]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#0EA5E9] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#0284C7]"
              >
                Send Message <FaPaperPlane />
              </button>

            </div>
          </form>

        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <FaMapMarkerAlt className="mx-auto text-5xl text-[#C8982A]" />

          <h2 className="mt-5 text-3xl font-extrabold text-[#0EA5E9]">
            Find Our School
          </h2>

          <p className="mt-4 text-slate-600">
            Gwayi, Lupane, Zimbabwe
          </p>
        </div>
      </section>

    </main>
  );
}

export default Contact;
