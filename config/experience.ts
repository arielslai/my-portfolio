import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
  media?: { type: "image" | "pdf"; src: string; alt?: string }[];
}

export const experiences: ExperienceInterface[] = [
  {
    id: "llnl",
    position: "Embedded Systems Engineering Intern",
    company: "Lawrence Livermore National Laboratory",
    location: "Livermore, CA",
    startDate: new Date("2026-05-18"),
    endDate: "Present",
    description: [
      "Developed a hardware‑in‑the‑loop simulator for the National Ignition Facility (NIF)'s Plasma Electrode Pockels Cell (PEPC) optical switch, enabling safe integration testing and edge‑case validation.",
      "Designed modular simulator architecture with containerized C++/Python device modules, Redis Pub/Sub messaging, REST configuration, and centralized control logic.",
      "Integrated Toradex Verdin iMX8M hardware, Beckhoff CX7000 PLCs, Perle IOLAN serial servers, and AWGs for serial, digital, and analog I/O simulation.",
      "Built configuration/UI tools for model selection, command execution, state toggling, and simulator log visibility.",
      "Presented work at three lab‑wide poster sessions; project success led to replication across four simulator units and extension into LLNL’s Indeterminate Internship Program.",
    ],
    achievements: [
      "Created production‑ready simulator architecture for PEPC hardware testing.",
      "Expanded prototype into four deployable units at LLNL.",
      "Presented at three lab‑wide poster sessions.",
      "Continued part‑time contribution during academic semester.",
    ],
    skills: ["C++", "Python", "Redis", "Docker", "Embedded Systems", "Hardware Integration"],
    companyUrl: "https://llnl.gov",
    logo: "/experience/llnl-logo.png",
    media: [
      { type: "image", src: "/experience/llnl-poster.png", alt: "LLNL Internship Poster" },
      { type: "image", src: "/experience/llnl-group-photo.jpg", alt: "Ariel with LLNL intern friends" },
    ],
  },
  {
    id: "acert-signal-science",
    position: "Undergraduate Researcher",
    company: "ACERT Signal Science Lab",
    companyUrl: "https://acert.cornell.edu/",
    location: "Ithaca, NY",
    startDate: new Date("2025-12-23"),
    endDate: "Present",
    description: [
      "Conducting research on affordable, scaled-down ESR spectrometer design.",
      "Analyzing RF wave behavior and spectrometer architecture options.",
      "Presented findings on ESR principles and proposed system architecture in lab meetings."
    ],
    achievements: [
      "Delivered presentations on ESR fundamentals and spectrometer architecture.",
      "Explored PCB and digital logic approaches for potential implementation.",
      "Collaborated with lab members to refine research direction."
    ],
    skills: ["RF Theory", "Engineering Design", "Digital Logic", "Signal Processing"],
    logo: "/experience/acert-logo.png",
    media: [
      { type: "link", src: "https://drive.google.com/file/d/1S0Ps2qtmtEzqESeITd3N-yQuPiQ9yxWM/view?usp=sharing", alt: "ESR Research Presentation" },
      { type: "link", src: "https://drive.google.com/file/d/1XIsZGCifBipuhxp5q6tyzQxvJFoohzYC/view?usp=sharing", alt: "Spectrometer Architecture Slides" }
    ]
  },
{
  id: "digital-logic-ta",
  position: "Teaching Assistant",
  company: "Cornell University ECE 2300",
  companyUrl: "https://www.ece.cornell.edu/ece",
  location: "Ithaca, NY",
  startDate: new Date("2026-01-01"),
  endDate: "Present",
  description: [
    "Selected from a pool of 200+ past students to serve as TA for a core ECE course: Digital Logic & Computer Organization.",
    "Teaching and mentoring 100+ students in processor design, datapath/control logic, and waveform analysis.",
    "Guided students through labs on memory interfaces, ALU design, and embedded integration."
  ],
  achievements: [
    "Proposed and piloted a new quiz format where students create problems for peers, strengthening class culture and expanding the practice question bank.",
    "Created solution videos for practice problems to support independent study.",
    "Developed answer keys for midterms and assisted with grading.",
    "Supported lab sessions by debugging student designs and clarifying RTL concepts.",
    "Selected as a return TA based on strong teaching performance."
  ],
  skills: [
    "Digital Logic",
    "Computer Organization",
    "RTL Design",
    "Waveform Analysis",
    "Mentoring",
    "Instructional Design"
  ],
  logo: "/experience/cornell-logo.png",
  media: [] // no images or links
},
{
  id: "cornell-mentorship",
  position: "Mentorship Roles",
  company: "Cornell Engineering",
  location: "Ithaca, NY",
  startDate: new Date("2025-09-01"),
  endDate: "Present",
  description: [
    "Facilitated weekly Academic Excellence Workshops in Multivariable Calculus for ~20 students, promoting collaborative learning.",
    "Led a 12‑week first‑year engineering seminar for 40+ students, mentoring on academic planning, course selection, and campus resources.",
    "Selected to return as a Peer Advisor for a second year."
  ],
  achievements: [
    "Strengthened student community through collaborative problem‑solving.",
    "Mentored first‑year engineers on project teams and engagement opportunities.",
    "Recognized for effective facilitation and advising, earning return selection."
  ],
  skills: ["Mentoring", "Facilitation", "Academic Advising", "Community Building"],
  media: [],
  logo: "/experience/cornell-logo.png",

},
{
  id: "cornell-dining-content",
  position: "Content Creator",
  company: "Cornell Student & Campus Life",
  companyUrl: "https://scl.cornell.edu/dining",
  location: "Ithaca, NY",
  startDate: new Date("2025-09-01"),
  endDate: new Date("2026-05-01"),
  description: [
    "Produced 30+ social media reels featured on Cornell Dining and official Cornell University IG/FB accounts with 389K+ followers.",
    "Achieved a 50% engagement increase, generating 70K+ views across campaigns.",
    "Collaborated with marketing staff to design posts and campaigns for student outreach."
  ],
  achievements: [
    "Boosted visibility of Cornell Dining initiatives through high‑engagement reels and posts.",
    "Designed flyers and posts for donation drives and dining events.",
    "Contributed to consistent branding and storytelling across platforms."
  ],
  skills: ["Content Creation", "Social Media Marketing", "Photography", "Graphic Design"],
  media: [
    {
      type: "image",
      src: "/experience/cornell-dining-promo.jpg",
      alt: "Cornell Dining promotional post"
    },
    {
      type: "link",
      src: "https://www.instagram.com/cornelldining/",
      alt: "Cornell Dining Instagram"
    }
  ],
  logo: "/experience/cornell-logo.png",
},
];

