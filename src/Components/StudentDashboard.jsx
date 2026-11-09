
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaUserGraduate,
  FaWallet,
  FaChartPie,
  FaTrophy,
  FaAward,
  FaBars,
  FaTimes,
  FaPlus,
  FaTrash,
  FaSearch,
  FaSchool,
  FaChevronRight,
  FaCalendarCheck,
  FaClipboardList,
  FaPhoneAlt,
  FaUserTie,
  FaCheckCircle,
  FaClock,
  FaBoxOpen,
  FaMoneyBillWave,
  FaChalkboardTeacher,
  FaTools,
  FaShieldAlt,
  FaExclamationTriangle,
  FaLock,
} from "react-icons/fa";

const classes = [
  "ECD A",
  "ECD B",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
];

const initialLearners = [
  {
    id: 1,
    name: "Learner One",
    className: "Grade 1",
    achievement: "Excellent classroom performance",
    points: 95,
    image: "/Grade_1.jpg",
  },
  {
    id: 2,
    name: "Learner Two",
    className: "Grade 2",
    achievement: "Outstanding academic progress",
    points: 92,
    image: "/Grade_1A.jpg",
  },
  {
    id: 3,
    name: "Learner Three",
    className: "Grade 3",
    achievement: "Excellent reading skills",
    points: 90,
    image: "/Grade_2C.jpg",
  },
  {
    id: 4,
    name: "Learner Four",
    className: "Grade 4",
    achievement: "Consistent academic excellence",
    points: 94,
    image: "/Grade_3.jpg",
  },
  {
    id: 5,
    name: "Learner Five",
    className: "Grade 5",
    achievement: "Outstanding classroom participation",
    points: 91,
    image: "/Grade_4A.jpg",
  },
  {
    id: 6,
    name: "Learner Six",
    className: "Grade 6",
    achievement: "Excellent leadership and discipline",
    points: 96,
    image: "/Grade_5.jpg",
  },
  {
    id: 7,
    name: "Learner Seven",
    className: "Grade 7",
    achievement: "Outstanding academic achievement",
    points: 97,
    image: "/Vice_2.jpg",
  },
];

const initialBudget = [
  { id: 1, category: "Teaching and Learning", allocated: 0, spent: 0 },
  { id: 2, category: "Staff and Administration", allocated: 0, spent: 0 },
  { id: 3, category: "Infrastructure and Maintenance", allocated: 0, spent: 0 },
  { id: 4, category: "Sports and Extracurricular", allocated: 0, spent: 0 },
  { id: 5, category: "Utilities and Services", allocated: 0, spent: 0 },
  { id: 6, category: "Other Expenses", allocated: 0, spent: 0 },
];

const initialCommittee = [
  { id: 1, name: "To be added", position: "School Head", contact: "" },
  { id: 2, name: "To be added", position: "Committee Chairperson", contact: "" },
  { id: 3, name: "To be added", position: "Secretary", contact: "" },
];

const money = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(amount) || 0);

function StudentDashboard() {
  const [activePage, setActivePage] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [learners, setLearners] = useState(initialLearners);
  const [budget, setBudget] = useState(initialBudget);
  const [transactions, setTransactions] = useState([]);
  const [committee, setCommittee] = useState(initialCommittee);

  const [inventory, setInventory] = useState([]);
  const [staff, setStaff] = useState([]);
  const [fees, setFees] = useState([]);

  const [concerns, setConcerns] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("All Classes");

  const [attendanceDate, setAttendanceDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [attendanceClass, setAttendanceClass] = useState("Grade 1");
  const [attendance, setAttendance] = useState({});

  const [newTransaction, setNewTransaction] = useState({
    title: "",
    type: "Income",
    amount: "",
  });

  const [award, setAward] = useState({
    name: "",
    className: "ECD A",
    description: "",
  });

  const [newMember, setNewMember] = useState({
    name: "",
    position: "",
    contact: "",
  });

  const [newAsset, setNewAsset] = useState({
    name: "",
    category: "Furniture",
    quantity: "",
    condition: "Good",
    location: "",
  });

  const [newStaff, setNewStaff] = useState({
    name: "",
    position: "",
    department: "Teaching",
    phone: "",
  });

  const [newFee, setNewFee] = useState({
    learner: "",
    className: "ECD A",
    total: "",
    paid: "",
    term: "Term 1",
  });

  const [newConcern, setNewConcern] = useState({
    learner: "",
    className: "ECD A",
    category: "Bullying",
    priority: "Medium",
    description: "",
    followUp: "",
    followUpDate: "",
  });

  const navigation = [
    { title: "Overview", icon: FaHome },
    { title: "Learners", icon: FaUsers },
    { title: "Attendance", icon: FaCalendarCheck },
    { title: "Learner Recognition", icon: FaAward },
    { title: "Well-Behaved Student", icon: FaTrophy },
    { title: "Safeguarding", icon: FaShieldAlt },
    { title: "Financial Records", icon: FaWallet },
    { title: "Budgets", icon: FaChartPie },
    { title: "School Fees", icon: FaMoneyBillWave },
    { title: "Staff Management", icon: FaChalkboardTeacher },
    { title: "Inventory & Assets", icon: FaBoxOpen },
    { title: "School Committee", icon: FaUserTie },
  ];

  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((total, item) => total + Number(item.amount), 0);

  const expenses = transactions
    .filter((item) => item.type === "Expense")
    .reduce((total, item) => total + Number(item.amount), 0);

  const allocated = budget.reduce(
    (total, item) => total + Number(item.allocated),
    0
  );

  const spent = budget.reduce(
    (total, item) => total + Number(item.spent),
    0
  );

  const totalFees = fees.reduce(
    (total, item) => total + Number(item.total),
    0
  );

  const totalPaid = fees.reduce(
    (total, item) => total + Number(item.paid),
    0
  );

  const totalOutstanding = fees.reduce(
    (total, item) =>
      total + Math.max(0, Number(item.total) - Number(item.paid)),
    0
  );

  const filteredLearners = learners.filter((learner) => {
    const matchesName = learner.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesClass =
      selectedClass === "All Classes" ||
      learner.className === selectedClass;

    return matchesName && matchesClass;
  });

  const attendanceLearners = learners.filter(
    (learner) => learner.className === attendanceClass
  );

  const getAttendance = (learnerId) =>
    attendance[attendanceDate]?.[learnerId] || "Not Marked";

  const markAttendance = (learnerId, status) => {
    setAttendance((previous) => ({
      ...previous,
      [attendanceDate]: {
        ...previous[attendanceDate],
        [learnerId]: status,
      },
    }));
  };

  const attendanceSummary = attendanceLearners.reduce(
    (summary, learner) => {
      const status = getAttendance(learner.id);

      if (status === "Present") summary.present++;
      if (status === "Absent") summary.absent++;
      if (status === "Late") summary.late++;

      return summary;
    },
    { present: 0, absent: 0, late: 0 }
  );

  const navigate = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  const addLearner = () => {
    setLearners([
      ...learners,
      {
        id: Date.now(),
        name: "",
        className: "ECD A",
        achievement: "",
        points: 0,
        image: "",
      },
    ]);
  };

  const updateLearner = (id, field, value) => {
    setLearners(
      learners.map((learner) =>
        learner.id === id ? { ...learner, [field]: value } : learner
      )
    );
  };

  const deleteLearner = (id) => {
    if (window.confirm("Delete this learner?")) {
      setLearners(learners.filter((learner) => learner.id !== id));
    }
  };

  const addTransaction = (e) => {
    e.preventDefault();

    if (
      !newTransaction.title.trim() ||
      !newTransaction.amount ||
      Number(newTransaction.amount) <= 0
    ) {
      alert("Please enter a description and a valid amount.");
      return;
    }

    setTransactions([
      ...transactions,
      {
        id: Date.now(),
        ...newTransaction,
        amount: Number(newTransaction.amount),
        date: new Date().toLocaleDateString(),
      },
    ]);

    setNewTransaction({
      title: "",
      type: "Income",
      amount: "",
    });
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  const updateBudget = (id, field, value) => {
    setBudget(
      budget.map((item) =>
        item.id === id
          ? { ...item, [field]: Number(value) || 0 }
          : item
      )
    );
  };

  const addAward = (e) => {
    e.preventDefault();

    if (!award.name.trim() || !award.description.trim()) {
      alert("Please enter the learner's name and achievement.");
      return;
    }

    alert("Recognition details submitted.");

    setAward({
      name: "",
      className: "ECD A",
      description: "",
    });
  };

  const addCommitteeMember = (e) => {
    e.preventDefault();

    if (!newMember.name.trim() || !newMember.position.trim()) {
      alert("Please enter the member's name and position.");
      return;
    }

    setCommittee([
      ...committee,
      { id: Date.now(), ...newMember },
    ]);

    setNewMember({
      name: "",
      position: "",
      contact: "",
    });
  };

  const deleteCommitteeMember = (id) => {
    if (window.confirm("Remove this committee member?")) {
      setCommittee(committee.filter((member) => member.id !== id));
    }
  };

  const addAsset = (e) => {
    e.preventDefault();

    if (
      !newAsset.name.trim() ||
      !newAsset.quantity ||
      Number(newAsset.quantity) <= 0 ||
      !newAsset.location.trim()
    ) {
      alert("Please complete all required asset details.");
      return;
    }

    setInventory([
      ...inventory,
      {
        id: Date.now(),
        ...newAsset,
        quantity: Number(newAsset.quantity),
      },
    ]);

    setNewAsset({
      name: "",
      category: "Furniture",
      quantity: "",
      condition: "Good",
      location: "",
    });
  };

  const deleteAsset = (id) => {
    if (window.confirm("Delete this asset record?")) {
      setInventory(inventory.filter((item) => item.id !== id));
    }
  };

  const addStaffMember = (e) => {
    e.preventDefault();

    if (!newStaff.name.trim() || !newStaff.position.trim()) {
      alert("Please enter the staff member's name and position.");
      return;
    }

    setStaff([
      ...staff,
      {
        id: Date.now(),
        ...newStaff,
      },
    ]);

    setNewStaff({
      name: "",
      position: "",
      department: "Teaching",
      phone: "",
    });
  };

  const deleteStaffMember = (id) => {
    if (window.confirm("Remove this staff member?")) {
      setStaff(staff.filter((member) => member.id !== id));
    }
  };

  const addFeeRecord = (e) => {
    e.preventDefault();

    if (
      !newFee.learner.trim() ||
      !newFee.total ||
      Number(newFee.total) <= 0 ||
      Number(newFee.paid) < 0 ||
      Number(newFee.paid) > Number(newFee.total)
    ) {
      alert("Enter a learner name, valid total fees and a valid payment.");
      return;
    }

    setFees([
      ...fees,
      {
        id: Date.now(),
        ...newFee,
        total: Number(newFee.total),
        paid: Number(newFee.paid || 0),
      },
    ]);

    setNewFee({
      learner: "",
      className: "ECD A",
      total: "",
      paid: "",
      term: "Term 1",
    });
  };

  const addFeePayment = (id) => {
    const payment = window.prompt("Enter the payment amount:");

    if (payment === null) return;

    const amount = Number(payment);

    if (!Number.isFinite(amount) || amount <= 0) {
      alert("Please enter a valid payment amount.");
      return;
    }

    const record = fees.find((item) => item.id === id);

    if (!record || amount > record.total - record.paid) {
      alert("The payment cannot be greater than the outstanding balance.");
      return;
    }

    setFees(
      fees.map((item) =>
        item.id === id
          ? { ...item, paid: item.paid + amount }
          : item
      )
    );
  };

  const deleteFeeRecord = (id) => {
    if (window.confirm("Delete this school fees record?")) {
      setFees(fees.filter((item) => item.id !== id));
    }
  };

  const addConcern = (e) => {
    e.preventDefault();

    if (
      !newConcern.learner.trim() ||
      !newConcern.description.trim()
    ) {
      alert("Please enter the learner's name and a concern description.");
      return;
    }

    const concern = {
      id: Date.now(),
      ...newConcern,
      dateReported: new Date().toLocaleDateString(),
      status: "Open",
    };

    setConcerns([...concerns, concern]);

    setNewConcern({
      learner: "",
      className: "ECD A",
      category: "Bullying",
      priority: "Medium",
      description: "",
      followUp: "",
      followUpDate: "",
    });

    alert("Concern record added. Please follow your school's safeguarding procedure.");
  };

  const updateConcern = (id, field, value) => {
    setConcerns(
      concerns.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const deleteConcern = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this concern record?"
      )
    ) {
      setConcerns(concerns.filter((item) => item.id !== id));
    }
  };

  const StatCard = ({ title, value, icon: Icon }) => (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="mt-2 break-words text-2xl font-bold text-[#0EA5E9]">
            {value}
          </h3>
        </div>
        <Icon className="shrink-0 text-3xl text-yellow-500" />
      </div>
    </div>
  );

  const renderPage = () => {
    switch (activePage) {
      case "Learners":
        return (
          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#0EA5E9]">
                  Learners Management
                </h2>
                <p className="text-sm text-gray-500">
                  Manage learners from ECD A to Grade 7.
                </p>
              </div>

              <button
                onClick={addLearner}
                className="flex items-center gap-2 rounded-lg bg-[#0EA5E9] px-4 py-3 text-white hover:bg-[#0284C7]"
              >
                <FaPlus />
                Add Learner
              </button>
            </div>

            <div className="mb-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-lg border bg-white px-3">
                <FaSearch className="text-gray-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search learners..."
                  className="min-w-0 py-3 outline-none"
                />
              </div>

              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="rounded-lg border bg-white px-4 py-3"
              >
                <option>All Classes</option>
                {classes.map((className) => (
                  <option key={className}>{className}</option>
                ))}
              </select>
            </div>

            <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0EA5E9] text-white">
                  <tr>
                    <th className="p-4">Learner</th>
                    <th className="p-4">Class</th>
                    <th className="p-4">Achievement</th>
                    <th className="p-4">Points</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredLearners.map((learner) => (
                    <tr key={learner.id} className="border-b">
                      <td className="p-4">
                        <input
                          value={learner.name}
                          onChange={(e) =>
                            updateLearner(learner.id, "name", e.target.value)
                          }
                          placeholder="Learner name"
                          className="w-36 rounded border p-2"
                        />
                      </td>

                      <td className="p-4">
                        <select
                          value={learner.className}
                          onChange={(e) =>
                            updateLearner(
                              learner.id,
                              "className",
                              e.target.value
                            )
                          }
                          className="rounded border p-2"
                        >
                          {classes.map((className) => (
                            <option key={className}>{className}</option>
                          ))}
                        </select>
                      </td>

                      <td className="p-4">
                        <input
                          value={learner.achievement}
                          onChange={(e) =>
                            updateLearner(
                              learner.id,
                              "achievement",
                              e.target.value
                            )
                          }
                          className="w-48 rounded border p-2"
                        />
                      </td>

                      <td className="p-4">
                        <input
                          type="number"
                          value={learner.points}
                          onChange={(e) =>
                            updateLearner(
                              learner.id,
                              "points",
                              Number(e.target.value)
                            )
                          }
                          className="w-20 rounded border p-2"
                        />
                      </td>

                      <td className="p-4">
                        <button
                          onClick={() => deleteLearner(learner.id)}
                          className="text-red-500 hover:text-red-700"
                          aria-label="Delete learner"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filteredLearners.length === 0 && (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-gray-500">
                        No learners found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Attendance":
        return (
          <div>
            <h2 className="text-2xl font-bold text-[#0EA5E9]">
              School Attendance
            </h2>
            <p className="mb-6 mt-1 text-sm text-gray-500">
              Record and monitor daily learner attendance.
            </p>

            <div className="mb-6 grid gap-4 rounded-xl bg-white p-5 shadow-sm sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Select Date
                </label>
                <input
                  type="date"
                  value={attendanceDate}
                  onChange={(e) => setAttendanceDate(e.target.value)}
                  className="w-full rounded-lg border p-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Select Class
                </label>
                <select
                  value={attendanceClass}
                  onChange={(e) => setAttendanceClass(e.target.value)}
                  className="w-full rounded-lg border p-3"
                >
                  {classes.map((className) => (
                    <option key={className}>{className}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <StatCard title="Present" value={attendanceSummary.present} icon={FaCheckCircle} />
              <StatCard title="Absent" value={attendanceSummary.absent} icon={FaUsers} />
              <StatCard title="Late" value={attendanceSummary.late} icon={FaClock} />
            </div>

            <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0EA5E9] text-white">
                  <tr>
                    <th className="p-4">Learner Name</th>
                    <th className="p-4">Class</th>
                    <th className="p-4">Attendance Status</th>
                  </tr>
                </thead>

                <tbody>
                  {attendanceLearners.map((learner) => (
                    <tr key={learner.id} className="border-b">
                      <td className="p-4 font-semibold">
                        {learner.name || "Unnamed Learner"}
                      </td>
                      <td className="p-4">{learner.className}</td>
                      <td className="p-4">
                        <select
                          value={getAttendance(learner.id)}
                          onChange={(e) =>
                            markAttendance(learner.id, e.target.value)
                          }
                          className="rounded-lg border p-2"
                        >
                          <option>Not Marked</option>
                          <option>Present</option>
                          <option>Absent</option>
                          <option>Late</option>
                        </select>
                      </td>
                    </tr>
                  ))}

                  {attendanceLearners.length === 0 && (
                    <tr>
                      <td colSpan="3" className="p-8 text-center text-gray-500">
                        No learners registered in this class.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Learner Recognition":
        return (
          <div>
            <h2 className="mb-2 text-2xl font-bold text-[#0EA5E9]">
              Learner Recognition
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              Celebrate outstanding learner performance.
            </p>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {learners
                .filter((learner) => learner.name.trim())
                .sort((a, b) => b.points - a.points)
                .map((learner) => (
                  <div
                    key={learner.id}
                    className="overflow-hidden rounded-xl bg-white shadow-sm"
                  >
                    <img
                      src={learner.image || "/Logo_1.png"}
                      alt={learner.name}
                      onError={(e) => {
                        e.currentTarget.src = "/Logo_1.png";
                      }}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-5">
                      <FaAward className="mb-2 text-2xl text-yellow-500" />
                      <h3 className="font-bold text-[#0EA5E9]">
                        {learner.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {learner.className}
                      </p>
                      <p className="mt-2 text-sm">{learner.achievement}</p>
                      <p className="mt-3 font-bold text-yellow-600">
                        {learner.points} Points
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );

      case "Well-Behaved Student":
        return (
          <div>
            <h2 className="mb-2 text-2xl font-bold text-[#0EA5E9]">
              Well-Behaved Student
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              Recognise good conduct, respect and discipline.
            </p>

            <form
              onSubmit={addAward}
              className="max-w-2xl space-y-4 rounded-xl bg-white p-6 shadow-sm"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Learner Name
                </label>
                <input
                  value={award.name}
                  onChange={(e) =>
                    setAward({ ...award, name: e.target.value })
                  }
                  className="w-full rounded-lg border p-3"
                  placeholder="Enter learner name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Class
                </label>
                <select
                  value={award.className}
                  onChange={(e) =>
                    setAward({ ...award, className: e.target.value })
                  }
                  className="w-full rounded-lg border p-3"
                >
                  {classes.map((className) => (
                    <option key={className}>{className}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Reason for Recognition
                </label>
                <textarea
                  value={award.description}
                  onChange={(e) =>
                    setAward({ ...award, description: e.target.value })
                  }
                  className="w-full rounded-lg border p-3"
                  rows="4"
                  placeholder="Describe the learner's good behaviour"
                />
              </div>

              <button className="rounded-lg bg-[#0EA5E9] px-6 py-3 font-semibold text-white hover:bg-[#0284C7]">
                Save Recognition
              </button>
            </form>
          </div>
        );

      case "Safeguarding":
        return (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-sky-100 p-3 text-2xl text-[#0EA5E9]">
                  <FaShieldAlt />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0EA5E9]">
                    Learner Safeguarding
                  </h2>
                  <p className="text-sm text-gray-500">
                    Record and monitor learner-protection concerns.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-5">
              <div className="flex items-start gap-3">
                <FaLock className="mt-1 shrink-0 text-xl text-red-600" />
                <div>
                  <h3 className="font-bold text-red-800">
                    Confidential Safeguarding Information
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-red-700">
                    Safeguarding records must only be accessed by authorised
                    school staff. Do not share case details publicly or enter
                    unnecessary personal information. Follow the school's
                    approved safeguarding and reporting procedures.
                  </p>
                  <p className="mt-2 text-sm font-semibold text-red-800">
                    If a learner may be in immediate danger, contact the
                    designated safeguarding lead and follow the school's
                    urgent protection procedures without waiting to enter a
                    record here.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="Total Reports"
                value={concerns.length}
                icon={FaClipboardList}
              />
              <StatCard
                title="Open Cases"
                value={concerns.filter((item) => item.status === "Open").length}
                icon={FaClock}
              />
              <StatCard
                title="Under Review"
                value={concerns.filter((item) => item.status === "Under Review").length}
                icon={FaSearch}
              />
              <StatCard
                title="Resolved"
                value={concerns.filter((item) => item.status === "Resolved").length}
                icon={FaCheckCircle}
              />
            </div>

            <div className="mb-6 rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <FaExclamationTriangle className="text-xl text-[#0EA5E9]" />
                <div>
                  <h3 className="text-lg font-bold text-[#0EA5E9]">
                    Report a Concern
                  </h3>
                  <p className="text-sm text-gray-500">
                    Record the essential information for authorised follow-up.
                  </p>
                </div>
              </div>

              <form onSubmit={addConcern} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Learner Name
                    </label>
                    <input
                      value={newConcern.learner}
                      onChange={(e) =>
                        setNewConcern({
                          ...newConcern,
                          learner: e.target.value,
                        })
                      }
                      placeholder="Enter learner name"
                      className="w-full rounded-lg border p-3"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Class
                    </label>
                    <select
                      value={newConcern.className}
                      onChange={(e) =>
                        setNewConcern({
                          ...newConcern,
                          className: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border p-3"
                    >
                      {classes.map((className) => (
                        <option key={className}>{className}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Concern Category
                    </label>
                    <select
                      value={newConcern.category}
                      onChange={(e) =>
                        setNewConcern({
                          ...newConcern,
                          category: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border p-3"
                    >
                      <option>Bullying</option>
                      <option>Abuse</option>
                      <option>Neglect</option>
                      <option>Discrimination</option>
                      <option>Safety</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Priority Level
                    </label>
                    <select
                      value={newConcern.priority}
                      onChange={(e) =>
                        setNewConcern({
                          ...newConcern,
                          priority: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border p-3"
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>Urgent</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Follow-up Date
                    </label>
                    <input
                      type="date"
                      value={newConcern.followUpDate}
                      onChange={(e) =>
                        setNewConcern({
                          ...newConcern,
                          followUpDate: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border p-3"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Concern Description
                  </label>
                  <textarea
                    value={newConcern.description}
                    onChange={(e) =>
                      setNewConcern({
                        ...newConcern,
                        description: e.target.value,
                      })
                    }
                    rows="4"
                    placeholder="Record a brief, factual summary. Avoid unnecessary sensitive details."
                    className="w-full rounded-lg border p-3"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Initial Follow-up Action
                  </label>
                  <textarea
                    value={newConcern.followUp}
                    onChange={(e) =>
                      setNewConcern({
                        ...newConcern,
                        followUp: e.target.value,
                      })
                    }
                    rows="3"
                    placeholder="Record the action taken or the next follow-up step."
                    className="w-full rounded-lg border p-3"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-[#0EA5E9] px-6 py-3 font-semibold text-white hover:bg-[#0284C7]"
                >
                  <FaPlus />
                  Submit Concern Record
                </button>
              </form>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-5">
                <h3 className="text-lg font-bold text-[#0EA5E9]">
                  Safeguarding Records
                </h3>
                <p className="text-sm text-gray-500">
                  Review case status and update follow-up information.
                </p>
              </div>

              {concerns.length === 0 ? (
                <div className="rounded-lg bg-gray-50 p-8 text-center">
                  <FaShieldAlt className="mx-auto mb-3 text-3xl text-gray-400" />
                  <h4 className="font-bold text-gray-700">
                    No safeguarding records yet
                  </h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Submitted concern records will appear here.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  {concerns.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-gray-200 p-5"
                    >
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h4 className="font-bold text-[#0EA5E9]">
                            {item.learner}
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.className} • {item.category}
                          </p>
                          <p className="mt-1 text-xs text-gray-400">
                            Reported: {item.dateReported}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              item.priority === "Urgent"
                                ? "bg-red-100 text-red-700"
                                : item.priority === "Medium"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-green-100 text-green-700"
                            }`}
                          >
                            {item.priority} Priority
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              item.status === "Resolved"
                                ? "bg-green-100 text-green-700"
                                : item.status === "Under Review"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4 rounded-lg bg-gray-50 p-4">
                        <p className="text-sm font-semibold text-gray-700">
                          Concern Description
                        </p>
                        <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                          {item.description}
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold">
                            Case Status
                          </label>
                          <select
                            value={item.status}
                            onChange={(e) =>
                              updateConcern(item.id, "status", e.target.value)
                            }
                            className="w-full rounded-lg border p-3"
                          >
                            <option>Open</option>
                            <option>Under Review</option>
                            <option>Resolved</option>
                          </select>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold">
                            Follow-up Date
                          </label>
                          <input
                            type="date"
                            value={item.followUpDate}
                            onChange={(e) =>
                              updateConcern(
                                item.id,
                                "followUpDate",
                                e.target.value
                              )
                            }
                            className="w-full rounded-lg border p-3"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="mb-2 block text-sm font-semibold">
                          Follow-up Actions and Notes
                        </label>
                        <textarea
                          value={item.followUp}
                          onChange={(e) =>
                            updateConcern(item.id, "followUp", e.target.value)
                          }
                          rows="3"
                          placeholder="Update follow-up actions..."
                          className="w-full rounded-lg border p-3"
                        />
                      </div>

                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={() => deleteConcern(item.id)}
                          className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                          Delete Record
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-5">
              <h3 className="font-bold text-yellow-800">
                Important Safeguarding Reminder
              </h3>
              <p className="mt-2 text-sm leading-6 text-yellow-800">
                This dashboard is a demonstration interface. Records are held
                only in temporary React state and will be lost when the page
                is refreshed. It does not provide secure storage, user
                authentication or access restrictions. Do not use it to store
                real confidential safeguarding cases until a secure backend,
                authorised staff access, audit records and approved school
                safeguarding procedures are implemented.
              </p>
            </div>
          </div>
        );

      case "Financial Records":
        return (
          <div>
            <h2 className="mb-2 text-2xl font-bold text-[#0EA5E9]">
              Financial Records
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              Record and manage school income and expenses.
            </p>

            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <StatCard title="Total Income" value={money(income)} icon={FaWallet} />
              <StatCard title="Total Expenses" value={money(expenses)} icon={FaWallet} />
              <StatCard title="Balance" value={money(income - expenses)} icon={FaChartPie} />
            </div>

            <form
              onSubmit={addTransaction}
              className="mb-6 grid gap-3 rounded-xl bg-white p-5 shadow-sm sm:grid-cols-4"
            >
              <input
                value={newTransaction.title}
                onChange={(e) =>
                  setNewTransaction({
                    ...newTransaction,
                    title: e.target.value,
                  })
                }
                placeholder="Transaction description"
                className="rounded-lg border p-3"
              />

              <select
                value={newTransaction.type}
                onChange={(e) =>
                  setNewTransaction({
                    ...newTransaction,
                    type: e.target.value,
                  })
                }
                className="rounded-lg border p-3"
              >
                <option>Income</option>
                <option>Expense</option>
              </select>

              <input
                type="number"
                min="0"
                step="0.01"
                value={newTransaction.amount}
                onChange={(e) =>
                  setNewTransaction({
                    ...newTransaction,
                    amount: e.target.value,
                  })
                }
                placeholder="Amount"
                className="rounded-lg border p-3"
              />

              <button className="rounded-lg bg-[#0EA5E9] p-3 font-semibold text-white hover:bg-[#0284C7]">
                Add Record
              </button>
            </form>

            <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0EA5E9] text-white">
                  <tr>
                    <th className="p-4">Description</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-4">{item.title}</td>
                      <td className="p-4">{item.type}</td>
                      <td className="p-4">{money(item.amount)}</td>
                      <td className="p-4">{item.date}</td>
                      <td className="p-4">
                        <button
                          onClick={() => deleteTransaction(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {transactions.length === 0 && (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-gray-500">
                        No financial records yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Budgets":
        return (
          <div>
            <h2 className="mb-2 text-2xl font-bold text-[#0EA5E9]">
              School Budgets
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              Manage school budget allocations and expenditure.
            </p>

            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <StatCard title="Total Allocated" value={money(allocated)} icon={FaWallet} />
              <StatCard title="Total Spent" value={money(spent)} icon={FaChartPie} />
              <StatCard title="Remaining" value={money(allocated - spent)} icon={FaAward} />
            </div>

            <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0EA5E9] text-white">
                  <tr>
                    <th className="p-4">Category</th>
                    <th className="p-4">Allocated</th>
                    <th className="p-4">Spent</th>
                    <th className="p-4">Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  {budget.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-4 font-semibold">{item.category}</td>
                      <td className="p-4">
                        <input
                          type="number"
                          min="0"
                          value={item.allocated}
                          onChange={(e) =>
                            updateBudget(item.id, "allocated", e.target.value)
                          }
                          className="w-28 rounded-lg border p-2"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          type="number"
                          min="0"
                          value={item.spent}
                          onChange={(e) =>
                            updateBudget(item.id, "spent", e.target.value)
                          }
                          className="w-28 rounded-lg border p-2"
                        />
                      </td>
                      <td className="p-4 font-semibold text-green-700">
                        {money(item.allocated - item.spent)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "School Fees":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#0EA5E9]">
                School Fees Management
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Record learner fees, payments and outstanding balances.
              </p>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard title="Total Fees" value={money(totalFees)} icon={FaMoneyBillWave} />
              <StatCard title="Total Collected" value={money(totalPaid)} icon={FaCheckCircle} />
              <StatCard title="Outstanding Fees" value={money(totalOutstanding)} icon={FaClock} />
              <StatCard title="Fee Records" value={fees.length} icon={FaClipboardList} />
            </div>

            <form
              onSubmit={addFeeRecord}
              className="mb-6 rounded-xl bg-white p-5 shadow-sm"
            >
              <h3 className="mb-4 text-lg font-bold text-[#0EA5E9]">
                Add Learner Fee Record
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <input
                  value={newFee.learner}
                  onChange={(e) =>
                    setNewFee({ ...newFee, learner: e.target.value })
                  }
                  placeholder="Learner full name"
                  className="rounded-lg border p-3"
                />

                <select
                  value={newFee.className}
                  onChange={(e) =>
                    setNewFee({ ...newFee, className: e.target.value })
                  }
                  className="rounded-lg border p-3"
                >
                  {classes.map((className) => (
                    <option key={className}>{className}</option>
                  ))}
                </select>

                <select
                  value={newFee.term}
                  onChange={(e) =>
                    setNewFee({ ...newFee, term: e.target.value })
                  }
                  className="rounded-lg border p-3"
                >
                  <option>Term 1</option>
                  <option>Term 2</option>
                  <option>Term 3</option>
                </select>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={newFee.total}
                  onChange={(e) =>
                    setNewFee({ ...newFee, total: e.target.value })
                  }
                  placeholder="Total fees ($)"
                  className="rounded-lg border p-3"
                />

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={newFee.paid}
                  onChange={(e) =>
                    setNewFee({ ...newFee, paid: e.target.value })
                  }
                  placeholder="Amount paid ($)"
                  className="rounded-lg border p-3"
                />

                <button className="flex items-center justify-center gap-2 rounded-lg bg-[#0EA5E9] p-3 font-semibold text-white hover:bg-[#0284C7]">
                  <FaPlus />
                  Add Fee Record
                </button>
              </div>
            </form>

            <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0EA5E9] text-white">
                  <tr>
                    <th className="p-4">Learner</th>
                    <th className="p-4">Class</th>
                    <th className="p-4">Term</th>
                    <th className="p-4">Total Fees</th>
                    <th className="p-4">Paid</th>
                    <th className="p-4">Balance</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((item) => {
                    const balance = item.total - item.paid;
                    const status =
                      balance <= 0
                        ? "Paid"
                        : item.paid > 0
                          ? "Partial"
                          : "Unpaid";

                    return (
                      <tr key={item.id} className="border-b">
                        <td className="p-4 font-semibold">{item.learner}</td>
                        <td className="p-4">{item.className}</td>
                        <td className="p-4">{item.term}</td>
                        <td className="p-4">{money(item.total)}</td>
                        <td className="p-4 text-green-700">{money(item.paid)}</td>
                        <td className="p-4 font-semibold text-red-600">
                          {money(balance)}
                        </td>
                        <td className="p-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              status === "Paid"
                                ? "bg-green-100 text-green-700"
                                : status === "Partial"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {status}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            {balance > 0 && (
                              <button
                                onClick={() => addFeePayment(item.id)}
                                className="font-semibold text-[#0EA5E9] hover:text-[#0284C7]"
                                title="Record payment"
                              >
                                Add Payment
                              </button>
                            )}
                            <button
                              onClick={() => deleteFeeRecord(item.id)}
                              className="text-red-500 hover:text-red-700"
                              title="Delete fee record"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  {fees.length === 0 && (
                    <tr>
                      <td colSpan="8" className="p-8 text-center text-gray-500">
                        No school fees records have been added yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Staff Management":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#0EA5E9]">
                Staff Management
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Register and manage teachers and other school employees.
              </p>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <StatCard title="Total Staff" value={staff.length} icon={FaUsers} />
              <StatCard
                title="Teaching Staff"
                value={staff.filter((item) => item.department === "Teaching").length}
                icon={FaChalkboardTeacher}
              />
              <StatCard
                title="Other Staff"
                value={staff.filter((item) => item.department !== "Teaching").length}
                icon={FaUserTie}
              />
            </div>

            <form
              onSubmit={addStaffMember}
              className="mb-6 rounded-xl bg-white p-5 shadow-sm"
            >
              <h3 className="mb-4 text-lg font-bold text-[#0EA5E9]">
                Register Staff Member
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <input
                  value={newStaff.name}
                  onChange={(e) =>
                    setNewStaff({ ...newStaff, name: e.target.value })
                  }
                  placeholder="Full name"
                  className="rounded-lg border p-3"
                />

                <input
                  value={newStaff.position}
                  onChange={(e) =>
                    setNewStaff({ ...newStaff, position: e.target.value })
                  }
                  placeholder="Job position"
                  className="rounded-lg border p-3"
                />

                <select
                  value={newStaff.department}
                  onChange={(e) =>
                    setNewStaff({ ...newStaff, department: e.target.value })
                  }
                  className="rounded-lg border p-3"
                >
                  <option>Teaching</option>
                  <option>Administration</option>
                  <option>Support Staff</option>
                  <option>Maintenance</option>
                  <option>Security</option>
                </select>

                <input
                  value={newStaff.phone}
                  onChange={(e) =>
                    setNewStaff({ ...newStaff, phone: e.target.value })
                  }
                  placeholder="Phone number"
                  className="rounded-lg border p-3"
                />

                <button className="flex items-center justify-center gap-2 rounded-lg bg-[#0EA5E9] p-3 font-semibold text-white hover:bg-[#0284C7] sm:col-span-2 lg:col-span-4">
                  <FaPlus />
                  Add Staff Member
                </button>
              </div>
            </form>

            <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0EA5E9] text-white">
                  <tr>
                    <th className="p-4">Staff Member</th>
                    <th className="p-4">Position</th>
                    <th className="p-4">Department</th>
                    <th className="p-4">Contact</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {staff.map((member) => (
                    <tr key={member.id} className="border-b">
                      <td className="p-4 font-semibold">{member.name}</td>
                      <td className="p-4">{member.position}</td>
                      <td className="p-4">{member.department}</td>
                      <td className="p-4">
                        {member.phone || "Not provided"}
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => deleteStaffMember(member.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {staff.length === 0 && (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-gray-500">
                        No staff members registered yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Inventory & Assets":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#0EA5E9]">
                Inventory & Asset Management
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Keep records of school furniture, equipment, learning
                materials and other assets.
              </p>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <StatCard title="Asset Records" value={inventory.length} icon={FaBoxOpen} />
              <StatCard
                title="Total Items"
                value={inventory.reduce(
                  (total, item) => total + Number(item.quantity),
                  0
                )}
                icon={FaSchool}
              />
              <StatCard
                title="Needs Attention"
                value={inventory.filter(
                  (item) =>
                    item.condition === "Damaged" ||
                    item.condition === "Needs Repair"
                ).length}
                icon={FaTools}
              />
            </div>

            <form
              onSubmit={addAsset}
              className="mb-6 rounded-xl bg-white p-5 shadow-sm"
            >
              <h3 className="mb-4 text-lg font-bold text-[#0EA5E9]">
                Add School Asset
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <input
                  value={newAsset.name}
                  onChange={(e) =>
                    setNewAsset({ ...newAsset, name: e.target.value })
                  }
                  placeholder="Asset name"
                  className="rounded-lg border p-3"
                />

                <select
                  value={newAsset.category}
                  onChange={(e) =>
                    setNewAsset({ ...newAsset, category: e.target.value })
                  }
                  className="rounded-lg border p-3"
                >
                  <option>Furniture</option>
                  <option>Books and Learning Materials</option>
                  <option>Computers and Technology</option>
                  <option>Sports Equipment</option>
                  <option>Office Equipment</option>
                  <option>Tools and Maintenance</option>
                  <option>Other</option>
                </select>

                <input
                  type="number"
                  min="1"
                  value={newAsset.quantity}
                  onChange={(e) =>
                    setNewAsset({ ...newAsset, quantity: e.target.value })
                  }
                  placeholder="Quantity"
                  className="rounded-lg border p-3"
                />

                <select
                  value={newAsset.condition}
                  onChange={(e) =>
                    setNewAsset({ ...newAsset, condition: e.target.value })
                  }
                  className="rounded-lg border p-3"
                >
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Needs Repair</option>
                  <option>Damaged</option>
                </select>

                <input
                  value={newAsset.location}
                  onChange={(e) =>
                    setNewAsset({ ...newAsset, location: e.target.value })
                  }
                  placeholder="Location e.g. Grade 4 classroom"
                  className="rounded-lg border p-3"
                />

                <button className="flex items-center justify-center gap-2 rounded-lg bg-[#0EA5E9] p-3 font-semibold text-white hover:bg-[#0284C7]">
                  <FaPlus />
                  Add Asset
                </button>
              </div>
            </form>

            <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0EA5E9] text-white">
                  <tr>
                    <th className="p-4">Asset Name</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Condition</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-4 font-semibold">{item.name}</td>
                      <td className="p-4">{item.category}</td>
                      <td className="p-4">{item.quantity}</td>
                      <td className="p-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            item.condition === "Good"
                              ? "bg-green-100 text-green-700"
                              : item.condition === "Fair"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.condition}
                        </span>
                      </td>
                      <td className="p-4">{item.location}</td>
                      <td className="p-4">
                        <button
                          onClick={() => deleteAsset(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {inventory.length === 0 && (
                    <tr>
                      <td colSpan="6" className="p-8 text-center text-gray-500">
                        No school assets have been registered yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "School Committee":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#0EA5E9]">
                School Committee
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Manage school leadership and committee information.
              </p>
            </div>

            <form
              onSubmit={addCommitteeMember}
              className="mb-6 grid gap-3 rounded-xl bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4"
            >
              <input
                value={newMember.name}
                onChange={(e) =>
                  setNewMember({ ...newMember, name: e.target.value })
                }
                placeholder="Member name"
                className="rounded-lg border p-3"
              />

              <input
                value={newMember.position}
                onChange={(e) =>
                  setNewMember({ ...newMember, position: e.target.value })
                }
                placeholder="Committee position"
                className="rounded-lg border p-3"
              />

              <input
                value={newMember.contact}
                onChange={(e) =>
                  setNewMember({ ...newMember, contact: e.target.value })
                }
                placeholder="Contact details"
                className="rounded-lg border p-3"
              />

              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#0EA5E9] p-3 font-semibold text-white hover:bg-[#0284C7]">
                <FaPlus />
                Add Member
              </button>
            </form>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {committee.map((member) => (
                <div
                  key={member.id}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-2xl text-[#0EA5E9]">
                    <FaUserTie />
                  </div>
                  <h3 className="font-bold text-[#0EA5E9]">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-yellow-600">
                    {member.position}
                  </p>
                  <p className="mt-3 text-sm text-gray-500">
                    {member.contact || "No contact details provided"}
                  </p>
                  <button
                    onClick={() => deleteCommitteeMember(member.id)}
                    className="mt-5 flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                    Remove Member
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div>
            <div className="mb-8 rounded-2xl bg-[#0EA5E9] p-8 text-white">
              <img
                src="/Logo_1.png"
                alt="Gwayi Primary School"
                className="mb-4 h-16 w-16 rounded-full bg-white object-contain p-1"
              />
              <h2 className="text-3xl font-bold">School Dashboard</h2>
              <p className="mt-2 text-sky-100">
                Welcome to Gwayi Primary School Administration Portal.
              </p>
              <p className="mt-4 text-sm font-semibold text-yellow-300">
                Ever Onward
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard title="Registered Learners" value={learners.length} icon={FaUsers} />
              <StatCard title="Total Staff" value={staff.length} icon={FaChalkboardTeacher} />
              <StatCard title="School Assets" value={inventory.length} icon={FaBoxOpen} />
              <StatCard title="Outstanding Fees" value={money(totalOutstanding)} icon={FaMoneyBillWave} />
            </div>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-[#0EA5E9]">
                Quick Actions
              </h3>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {navigation.slice(1).map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.title}
                      onClick={() => navigate(item.title)}
                      className="flex items-center gap-3 rounded-lg border p-4 text-left transition hover:bg-sky-50"
                    >
                      <Icon className="text-xl text-[#0EA5E9]" />
                      <span className="font-semibold">{item.title}</span>
                      <FaChevronRight className="ml-auto text-xs text-gray-400" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <FaCalendarCheck className="text-2xl text-[#0EA5E9]" />
                  <h3 className="text-lg font-bold text-[#0EA5E9]">
                    School Attendance
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-6 text-gray-500">
                  Monitor daily learner attendance and record absences across
                  all classes.
                </p>
                <button
                  onClick={() => navigate("Attendance")}
                  className="rounded-lg bg-[#0EA5E9] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0284C7]"
                >
                  Manage Attendance
                </button>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <FaClipboardList className="text-2xl text-[#0EA5E9]" />
                  <h3 className="text-lg font-bold text-[#0EA5E9]">
                    School Committee
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-6 text-gray-500">
                  View and manage school committee members and leadership
                  responsibilities.
                </p>
                <button
                  onClick={() => navigate("School Committee")}
                  className="rounded-lg bg-[#0EA5E9] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0284C7]"
                >
                  View Committee
                </button>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <FaMoneyBillWave className="text-2xl text-[#0EA5E9]" />
                  <h3 className="text-lg font-bold text-[#0EA5E9]">
                    School Fees
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-6 text-gray-500">
                  Track fee payments, outstanding balances and learner fee
                  records.
                </p>
                <button
                  onClick={() => navigate("School Fees")}
                  className="rounded-lg bg-[#0EA5E9] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0284C7]"
                >
                  Manage Fees
                </button>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] p-7 text-white shadow-sm sm:p-9">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-wider text-yellow-300">
                  Gwayi Primary School
                </span>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Need assistance or have a question?
                </h3>
                <p className="mt-3 leading-7 text-sky-100">
                  Get in touch with the school through our contact section.
                  We are ready to assist parents, learners and members of our
                  community.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-3 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-[#0EA5E9] hover:bg-yellow-300"
                >
                  <FaPhoneAlt />
                  Contact the School
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      {sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          aria-label="Close navigation"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-[#0EA5E9] text-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <div className="flex items-center gap-3">
            <img
              src="/Logo_1.png"
              alt="School Logo"
              className="h-12 w-12 rounded-full bg-white object-contain p-1"
            />
            <div>
              <h1 className="font-bold">GWAYI PRIMARY</h1>
              <p className="text-xs text-sky-100">School Management</p>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
            aria-label="Close sidebar"
          >
            <FaTimes />
          </button>
        </div>

        <p className="px-5 py-5 text-xs font-bold uppercase text-sky-100">
          Main Menu
        </p>

        <nav className="flex-1 space-y-2 overflow-y-auto px-4 pb-5">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.title;

            return (
              <button
                key={item.title}
                onClick={() => navigate(item.title)}
                className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? "bg-white text-[#0EA5E9]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Icon />
                <span>{item.title}</span>
                {isActive && <FaChevronRight className="ml-auto text-xs" />}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-5">
          <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
            <FaUserGraduate className="text-2xl text-yellow-400" />
            <div>
              <p className="text-sm font-bold">School Admin</p>
              <p className="text-xs text-sky-100">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-72">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b bg-white px-5 py-4 shadow-sm">
          <div className="flex min-w-0 items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg bg-gray-100 p-2 text-[#0EA5E9] lg:hidden"
              aria-label="Open navigation"
            >
              <FaBars />
            </button>

            <div className="min-w-0">
              <h2 className="font-bold text-[#0EA5E9]">{activePage}</h2>
              <p className="text-xs text-gray-500">
                Gwayi Primary School Administration
              </p>
            </div>
          </div>

          <img
            src="/Logo_1.png"
            alt="School Logo"
            className="h-11 w-11 shrink-0 rounded-full object-contain"
          />
        </header>

        <main className="mx-auto w-full max-w-7xl p-5 sm:p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default StudentDashboard;
