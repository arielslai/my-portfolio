import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "dbf-propulsion",
    companyName: "CU Design Build Fly",
    type: "Professional",
    category: ["Aerospace", "Embedded Systems"],
    shortDescription:
      "Propulsion & mechanisms lead for Cornell’s AIAA Design Build Fly team. ",
    websiteLink: "/projects/dbf", // internal page
    githubLink: "", // optional, add if you publish code
    techStack: ["Arduino", "C++", "KiCad", "Python"],
    startDate: new Date("2024-11-01"),
    endDate: new Date("2025-05-31"),
    companyLogoImg: "/projects/dbf/logo.png",
    descriptionDetails: {
      paragraphs: [
        "As propulsion subteam lead, I directed motor–propeller–battery trade studies, balancing thrust, efficiency, temperature, and drag constraints. We validated designs through wind tunnel testing and static thrust measurements.",
        "I built an Arduino-based thrust test stand with sensors and control logic to characterize motor–propeller response. This system guided our final propulsion selection and ensured reliable performance under competition conditions.",
        "Beyond technical work, I soldered and crimped wiring harnesses, integrated electronics across subsystems, and facilitated cross-team collaboration. I also mentored new members, helping them learn embedded integration and test workflows.",
        "Our team competed at the AIAA Design Build Fly competition in Kansas (April 2026), placing 26th out of 200 teams. I contributed to the 60-page technical report and presented design rationale during reviews.",
      ],
      bullets: [
        "Led propulsion trade studies across motors, props, and batteries.",
        "Built Arduino-based thrust test system with sensor integration.",
        "Conducted wind tunnel testing and static thrust validation.",
        "Performed soldering, crimping, and embedded wiring integration.",
        "Mentored teammates and documented design rationale in 60-page report.",
        "Competed at AIAA DBF 2026, placing 26th of 200 teams.",
      ],
    },
    pagesInfoArr: [
      {
        title: "Thrust Test Stand",
        description: "Arduino-based thrust measurement rig used to characterize motor–propeller performance.",
        imgArr: ["/projects/dbf/teststand.png"], // add your photo here
      },
      {
        title: "Competition Aircraft",
        description: "Final aircraft flown at AIAA DBF 2026 in Kansas, achieving 26th place out of 200 teams.",
        imgArr: ["/projects/dbf/aircraft.png"], // add competition photo
      },
      {
        title: "Team Collaboration",
        description: "Mentoring teammates, soldering and crimping harnesses, and facilitating cross-subteam integration.",
        imgArr: ["/projects/dbf/team.png"], // add team photo
      },
    ],
  },
{
  id: "ccra",
  companyName: "Cornell Computer Reuse Association",
  type: "Professional",
  category: ["Community", "Hardware"],
  shortDescription:
    "Mobilized volunteers to refurbish donated computers for global education initiatives.",
  websiteLink: "https://cornellcomputerreuse.org/", // ✅ Instagram link
  githubLink: "", // no repo
  techStack: ["Git", "Hardware Repair"], // add Hardware Repair to ValidSkills
  startDate: new Date("2025-01-01"),
  endDate: new Date("2026-05-18"),
  companyLogoImg: "/projects/ccra/logo.png",
  descriptionDetails: {
    paragraphs: [
      "As part of CCRA, I helped facilitate refurbishment events where donated computers were repaired, tested, and shipped to schools abroad.",
      "I trained volunteers on diagnostics and safe handling, and coordinated task delegation across hardware triage, OS installation, and final testing.",
      "Beyond technical work, I also contributed to outreach — designing flyers, creating Instagram posts, and helping market events to recruit volunteers and meet donation goals."
    ],
    bullets: [
      "Trained volunteers in diagnostics and repair.",
      "Designed troubleshooting guides and repair workflows.",
      "Led refurbishment of 50+ computers in one weekend.",
      "Coordinated logistics for international computer donations.",
      "Helped with marketing and outreach: Instagram posts, flyers, and event promotion.",
    ],
  },
  pagesInfoArr: [
    {
      title: "Repair Workshop",
      description: "Volunteers learning diagnostics and safe component replacement.",
      imgArr: ["/projects/ccra/workshop.png"], // repair photo
    },
  ],
},

  {
    id: "dragon-day",
    companyName: "Dragon Day Disaster",
    type: "Personal",
    category: ["Game Dev", "Embedded Systems"],
    shortDescription:
      "Two-player FRDM-KL46Z-based physical game inspired by Cornell’s Dragon Day tradition.",
    websiteLink: "https://pages.github.coecis.cornell.edu/ece3140-spr2026/asl284-rj426/", // internal page
    githubLink: "https://pages.github.coecis.cornell.edu/ece3140-spr2026/asl284-rj426/", // class project site
    techStack: ["C++", "Python", "Pygame", "FRDM-KL46Z"],
    startDate: new Date("2026-03-01"),
    endDate: new Date("2026-05-01"),
    companyLogoImg: "/projects/dragon-day/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Built a two-player game inspired by Cornell’s Dragon Day rivalry. Each player straps a FRDM-KL46Z board to their body and physically jumps or ducks to control their character in a Python pygame race.",
        "On the board side, I implemented accelerometer sampling, gesture detection, and serial transmission with concurrency and spinlocks. On the laptop side, we integrated dual serial streams into a pygame engine with collision detection and win screens.",
        "I debugged UART initialization, calibrated thresholds empirically, and designed the serial protocol. Our collaboration bridged embedded firmware with a laptop game engine, creating a head-to-head survival race across Cornell’s Arts Quad.",
      ],
      bullets: [
        "Developed board-side firmware for accelerometer sampling and gesture detection.",
        "Implemented spinlock-protected concurrency and real-time scheduling.",
        "Designed serial protocol and debugged UART initialization.",
        "Integrated dual serial streams into Python pygame for two-player gameplay.",
        "Created calibration tool to empirically tune jump/duck thresholds.",
      ],
    },
    pagesInfoArr: [
      {
        title: "Gameplay Screenshot",
        description: "Two-player race across Cornell’s Arts Quad, dodging obstacles like the Clock Tower and flying pumpkin.",
        imgArr: ["/projects/dragon-day/gameplay.png"],
      },
      {
        title: "Board Setup",
        description: "FRDM-KL46Z boards strapped to players for gesture input.",
        imgArr: ["/projects/dragon-day/board.png"],
      },
      {
        title: "Accelerometer Debugging",
        description: "Calibrating jump and duck thresholds from accelerometer data.",
        imgArr: ["/projects/dragon-day/accelerometer.png"],
      },
      {
        title: "Team Collaboration",
        description: "Working together to integrate embedded boards with the Python game engine.",
        imgArr: ["/projects/dragon-day/team.png"],
      },
    ],
  },
{
  id: "cnn-gpu",
  companyName: "GPU-Accelerated CNN Benchmark",
  type: "Personal",
  category: ["Machine Learning", "Parallel Computing"],
  shortDescription:
    "Compared CPU vs GPU performance when training a CNN on CIFAR-10 using PyTorch and CUDA.",
  websiteLink: "/projects/cnn-gpu", // internal page
  githubLink: "https://github.com/arielslai/GPU-Accelerated-CNN", // replace with your repo
  techStack: ["Python", "PyTorch", "NumPy", "CUDA"],
  startDate: new Date("2025-09-01"),
  endDate: new Date("2025-10-15"),
  companyLogoImg: "/projects/cnn-gpu/logo.png", // screenshot of code/data as logo
  descriptionDetails: {
    paragraphs: [
      "This project explored the practical benefits of GPU acceleration in deep learning. I trained a small CNN on the CIFAR-10 dataset twice: once on CPU and once on an NVIDIA Tesla T4 GPU.",
      "The GPU achieved ~5.5× faster training per epoch and reached 72% accuracy in 20 epochs, compared to the CPU plateauing at ~49% after 2 epochs. Although GPU total runtime was longer, it enabled deeper training in the same wall-clock time.",
      "I implemented the model in PyTorch, measured runtime with synchronized timers, and visualized results with bar charts comparing CPU vs GPU speed and accuracy.",
    ],
    bullets: [
      "Implemented a 3-layer CNN in PyTorch for CIFAR-10 classification.",
      "Benchmarked CPU vs GPU training runtime and accuracy.",
      "Measured per-epoch speedup (~5.5× faster on GPU).",
      "Visualized performance with bar charts and accuracy plots.",
      "Demonstrated why GPU acceleration is critical for modern AI workflows.",
    ],
  },
  pagesInfoArr: [],
},
{
  id: "simon-says",
  companyName: "Motion Simon Says",
  type: "Personal",
  category: ["Embedded Systems", "Game Dev"],
  shortDescription:
    "A tilt‑controlled Simon Says memory game built on ESP32 with MPU6050 IMU and OLED display. ",
  websiteLink: "/projects/simon-says", // internal page
  githubLink: "https://github.com/arielslai/simon-says", // replace with your repo
  techStack: ["ESP32", "Arduino", "MPU6050", "C++"],
  startDate: new Date("2025-06-01"),
  endDate: new Date("2025-07-31"),
  companyLogoImg: "/projects/simon-says/logo.png", // screenshot of code or wiring diagram
  descriptionDetails: {
    paragraphs: [
      "Built a gesture‑controlled Simon Says game using ESP32, MPU6050 IMU, and SSD1306 OLED. The game replaces traditional button input with tilt gestures, making gameplay fully motion‑based.",
      "I implemented I²C peripherals with auto‑retry, OLED prompts for arrows and win/lose screens, and pitch/roll threshold detection for Up/Down/Left/Right gestures. The system includes configurable levels, delays, and timeouts, plus a debounced start/reset button.",
      "This project taught me how to integrate multiple I²C devices, calibrate motion thresholds, and design a user‑friendly embedded game loop.",
    ],
    bullets: [
      "Designed tilt‑controlled input system using MPU6050 accelerometer.",
      "Implemented OLED UI with arrows, level intros, and win/lose screens.",
      "Configured I²C peripherals with auto‑retry and recovery.",
      "Calibrated pitch/roll thresholds for reliable gesture detection.",
      "Built configurable gameplay loop with levels, delays, and timeouts.",
    ],
  },
  pagesInfoArr: [], // ✅ no extra images
},
{
  id: "fall-detector",
  companyName: "Fall Detection Wearable",
  type: "Personal",
  category: ["Embedded Systems", "IoT"],
  shortDescription:
    "ESP32-based wearable that detects falls using an MPU6050 sensor.",
  websiteLink: "/projects/fall-detector", // internal page
  githubLink: "hhttps://github.com/arielslai/ESP32-Fall-Detector/tree/main", // replace with your repo
  techStack: ["ESP32", "Arduino", "MPU6050", "C++"],
  startDate: new Date("2025-06-01"),
  endDate: new Date("2025-07-31"),
  companyLogoImg: "/projects/fall-detector/logo.png", // screenshot of code or wiring diagram
  descriptionDetails: {
    paragraphs: [
      "Designed and built a wearable fall detection system using ESP32 and MPU6050. The device monitors acceleration spikes and stillness to detect potential falls, then triggers a cancellation window with LED blinking and button input.",
      "If no cancellation occurs, the system sends an SMS alert via CallMeBot API over WiFi. Thresholds and timing parameters are configurable, allowing tuning for sensitivity and responsiveness.",
      "This project taught me how to integrate motion sensing with real-time firmware logic, design user safety features, and connect embedded devices to cloud APIs for real-world impact.",
    ],
    bullets: [
      "Implemented fall detection algorithm using acceleration + stillness checks.",
      "Added LED + button interface for cancellation window.",
      "Integrated CallMeBot API for SMS alerts over WiFi.",
      "Calibrated thresholds and timing parameters for reliable detection.",
      "Built and tested prototype hardware on ESP32 with MPU6050.",
    ],
  },
  pagesInfoArr: [], // ✅ no extra images
},
];
// At the bottom of config/projects.ts

// Sort projects by whatever criteria you want (e.g. order, date, etc.)
export const featuredProjects = Projects.slice(0, 3);
