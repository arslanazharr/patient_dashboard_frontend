export const summary = [
  {
    id: 0,
    type: "allPatients",
    title: "All Patients",
    icon: "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450716/health_dashboard/icons/summary/all_yanf0e.svg",
    total: 400,
    hasGraph: false,
    hasDiseases: true,
    hasPiChart: true,
    diseases: {
      copd: {
        value: 100,
        color: "#5388D8",
      },

      tb: {
        value: 200,
        color: "#F4BE37",
      },
      asthma: {
        value: 100,
        color: "#F665A2",
      },
    },
    color: "#F1F4EB",
  },
  {
    id: 1,
    type: "activePatients",
    title: "Active Patients",
    icon: "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450716/health_dashboard/icons/summary/active_yxwk69.svg",
    total: 170,
    hasGraph: false,
    hasDiseases: true,
    hasPiChart: true,
    diseases: {
      copd: {
        value: 90,
        color: "#A155B9",
      },

      tb: {
        value: 50,
        color: "#4CAF50",
      },
      asthma: {
        value: 30,
        color: "#F5840E",
      },
    },
    color: "#FBEAE4",
  },
  {
    id: 2,
    type: "newRegistrations",
    title: "New Registrations",
    icon: "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450716/health_dashboard/icons/summary/new_qmpmn0.svg",
    total: 62,
    hasGraph: true,
    hasDiseases: false,
    hasPiChart: false,
    parcentageChange: {
      percentage: 10,
      type: "increase",
    },
    days: 7,
    color: "#E1FAFF",
  },

  {
    id: 3,
    type: "previousAppointments",
    title: "Previous Appointments",
    icon: "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450715/health_dashboard/icons/summary/previous_wp15cj.svg",
    total: 13,
    hasGraph: true,
    hasDiseases: false,
    hasPiChart: false,
    parcentageChange: {
      percentage: 4,
      type: "decrease",
    },
    days: 7,
    color: "#E7ECF8",
  },
  {
    id: 4,
    type: "appointmentsToday",
    title: "Appointments Today",
    icon: "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450713/health_dashboard/icons/summary/today_eexbt1.svg",
    total: 12,
    hasGraph: false,
    hasDiseases: true,
    hasPiChart: true,
    diseases: {
      copd: {
        value: 3,
        color: "#91BE3E",
      },

      tb: {
        value: 3,
        color: "#0D2535",
      },
      asthma: {
        value: 6,
        color: "#F4BE37",
      },
    },
    color: "#F8E4FB",
  },
  {
    id: 5,
    type: "upcomingAppointments",
    title: "Upcoming Appointments",
    icon: "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450712/health_dashboard/icons/summary/upcoming_ypcshi.svg",
    total: 12,
    hasGraph: false,
    hasDiseases: true,
    hasPiChart: true,
    diseases: {
      copd: {
        value: 88,
        color: "#867068",
      },

      tb: {
        value: 50,
        color: "#4CAF50",
      },
      asthma: {
        value: 100,
        color: "#F665A2",
      },
    },
    color: "#FFF3E0",
  },
];

export const patientsData = [
  {
    id: 0,
    name: "Olivia Rhye",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450686/health_dashboard/icons/avatars/avatar10_i3bjlz.svg",
    diseases: ["bp", "sugar"],
    previousAppointment: "2024-07-09T16:24:00Z",
    status: "attend",
    nextAppointment: "2024-07-09T16:24:00Z",
  },
  {
    id: 1,
    name: "Phoenix Baker",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450688/health_dashboard/icons/avatars/avatar1_invmzj.svg",
    diseases: ["breating_problem"],
    previousAppointment: "2024-07-09T16:24:00Z",
    status: "no_appointment",
    nextAppointment: "2024-07-09T16:24:00Z",
  },
  {
    id: 2,
    name: "Lana Steiner",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450688/health_dashboard/icons/avatars/avatar1_invmzj.svg",
    diseases: ["bp"],
    previousAppointment: "2024-07-09T16:24:00Z",
    status: "cancelled",
    nextAppointment: "2024-07-09T16:24:00Z",
  },
  {
    id: 3,
    name: "Demi Wilkinson",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450703/health_dashboard/icons/avatars/avatar3_z7nquu.svg",
    diseases: ["sugar", "breating_problem"],
    previousAppointment: "2024-07-09T16:24:00Z",
    status: "attend",
    nextAppointment: "2024-07-09T16:24:00Z",
  },
  {
    id: 4,
    name: "Candice Wu",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450719/health_dashboard/icons/avatars/avatar4_w0po48.svg",
    diseases: ["sugar", "bp", "cancer"],
    previousAppointment: "2024-07-09T16:24:00Z",
    status: "missed",
    nextAppointment: "2024-07-09T16:24:00Z",
  },
  {
    id: 5,
    name: "Natali Craig",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450735/health_dashboard/icons/avatars/avatar5_xqnr0f.svg",
    diseases: ["breathing_problem"],
    previousAppointment: "2024-07-09T16:24:00Z",
    status: "no_appointment",
    nextAppointment: "2024-07-09T16:24:00Z",
  },
  {
    id: 6,
    name: "Orlando Diggs",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450735/health_dashboard/icons/avatars/avatar5_xqnr0f.svg",
    diseases: ["bp"],
    previousAppointment: "2024-07-09T16:24:00Z",
    status: "cancelled",
    nextAppointment: "2024-07-09T16:24:00Z",
  },
  {
    id: 7,
    name: "Drew Cano",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450712/health_dashboard/icons/avatars/avatar7_bobbrf.svg",
    diseases: ["breathing_problem"],
    previousAppointment: "2024-07-09T16:24:00Z",
    status: "missed",
    nextAppointment: "2024-07-09T16:24:00Z",
  },
  {
    id: 8,
    name: "Andi Lane",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450687/health_dashboard/icons/avatars/avatar8_z2q96u.svg",
    diseases: ["breathing_problem"],
    previousAppointment: "2024-07-09T16:24:00Z",
    status: "attend",
    nextAppointment: "2024-07-09T16:24:00Z",
  },
  {
    id: 9,
    name: "Kate Morrison",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450707/health_dashboard/icons/avatars/avatar9_xoynn3.svg",
    diseases: ["breathing_problem", "bp", "sugar", "cancer"],
    previousAppointment: "2024-07-09T16:24:00Z",
    status: "attend",
    nextAppointment: "2024-07-09T16:24:00Z",
  },
  {
    id: 10,
    name: "John Doe",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar1_vydzy8.svg",
    diseases: ["asthma"],
    previousAppointment: "2024-07-10T12:00:00Z",
    status: "attend",
    nextAppointment: "2024-07-11T14:30:00Z",
  },
  {
    id: 11,
    name: "Jane Smith",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar2_cu9zb6.svg",
    diseases: ["diabetes"],
    previousAppointment: "2024-07-11T08:15:00Z",
    status: "missed",
    nextAppointment: "2024-07-12T09:45:00Z",
  },
  {
    id: 12,
    name: "Michael Johnson",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar3_ks0hcj.svg",
    diseases: ["hypertension"],
    previousAppointment: "2024-07-12T11:00:00Z",
    status: "cancelled",
    nextAppointment: "2024-07-13T15:00:00Z",
  },
  {
    id: 13,
    name: "Emily Davis",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar4_t0j6kv.svg",
    diseases: ["arthritis"],
    previousAppointment: "2024-07-13T10:00:00Z",
    status: "attend",
    nextAppointment: "2024-07-14T16:00:00Z",
  },
  {
    id: 14,
    name: "William Brown",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar5_wxsgxy.svg",
    diseases: ["asthma", "diabetes"],
    previousAppointment: "2024-07-14T09:30:00Z",
    status: "missed",
    nextAppointment: "2024-07-15T13:30:00Z",
  },
  {
    id: 15,
    name: "Sophia Wilson",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar6_ur9snv.svg",
    diseases: ["hypertension", "arthritis"],
    previousAppointment: "2024-07-15T08:00:00Z",
    status: "cancelled",
    nextAppointment: "2024-07-16T14:00:00Z",
  },
  {
    id: 16,
    name: "James Martinez",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar7_yx9iou.svg",
    diseases: ["diabetes"],
    previousAppointment: "2024-07-16T11:30:00Z",
    status: "attend",
    nextAppointment: "2024-07-17T15:45:00Z",
  },
  {
    id: 17,
    name: "Isabella Anderson",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar8_lzjei5.svg",
    diseases: ["asthma", "arthritis"],
    previousAppointment: "2024-07-17T10:15:00Z",
    status: "missed",
    nextAppointment: "2024-07-18T16:15:00Z",
  },
  {
    id: 18,
    name: "David Clark",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar9_zkeo8n.svg",
    diseases: ["hypertension"],
    previousAppointment: "2024-07-18T09:00:00Z",
    status: "cancelled",
    nextAppointment: "2024-07-19T14:45:00Z",
  },
  {
    id: 19,
    name: "Mia Lewis",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar10_jwgn0i.svg",
    diseases: ["diabetes"],
    previousAppointment: "2024-07-19T08:30:00Z",
    status: "attend",
    nextAppointment: "2024-07-20T13:00:00Z",
  },
  {
    id: 20,
    name: "Benjamin Robinson",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar11_gxze7k.svg",
    diseases: ["arthritis"],
    previousAppointment: "2024-07-20T07:45:00Z",
    status: "missed",
    nextAppointment: "2024-07-21T12:15:00Z",
  },
  {
    id: 21,
    name: "Amelia Walker",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar12_zkx5o4.svg",
    diseases: ["asthma", "hypertension"],
    previousAppointment: "2024-07-21T10:45:00Z",
    status: "cancelled",
    nextAppointment: "2024-07-22T15:30:00Z",
  },
  {
    id: 22,
    name: "Lucas Harris",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar13_eaiuvw.svg",
    diseases: ["diabetes"],
    previousAppointment: "2024-07-22T09:15:00Z",
    status: "attend",
    nextAppointment: "2024-07-23T14:15:00Z",
  },
  {
    id: 23,
    name: "Charlotte Young",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar14_fdxzgy.svg",
    diseases: ["arthritis"],
    previousAppointment: "2024-07-23T08:45:00Z",
    status: "missed",
    nextAppointment: "2024-07-24T13:45:00Z",
  },
  {
    id: 24,
    name: "Jack Allen",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar15_xan8lx.svg",
    diseases: ["asthma"],
    previousAppointment: "2024-07-24T07:30:00Z",
    status: "cancelled",
    nextAppointment: "2024-07-25T11:45:00Z",
  },
];
