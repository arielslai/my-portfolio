import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "C/C++",
    description: "Develop embedded firmware and system-level code for microcontrollers and hardware integration.",
    rating: 5,
    icon: Icons.laptop, // briefcase
  },
  {
    name: "Python",
    description: "Automate validation workflows, build device interfaces, and prototype ML benchmarks.",
    rating: 5,
    icon: Icons.work,
  },
  {
    name: "SystemVerilog & FPGA",
    description: "Design and debug digital logic, datapaths, FSMs, and single-cycle processors on FPGA platforms.",
    rating: 4,
    icon: Icons.media, // image icon
  },
  {
    name: "RTL Design & Simulation",
    description: "Implement and verify register-transfer level designs with timing, control, and functional correctness.",
    rating: 4,
    icon: Icons.paper,
  },
  {
    name: "Hardware-in-the-Loop (HIL)",
    description: "Validate embedded systems with deterministic I/O, SCPI automation, and simulator architectures.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "PCB Design (KiCad)",
    description: "Design and prototype schematics and layouts for compact instrumentation and mixed-signal boards.",
    rating: 4,
    icon: Icons.spinner,
  },
  {
    name: "ARM Assembly",
    description: "Write low-level routines for Cortex-M microcontrollers, handling interrupts and concurrency.",
    rating: 4,
    icon: Icons.laptop,
  },
  {
    name: "Embedded Platforms",
    description: "Work with Beckhoff PLCs, Toradex SoMs, ESP32, and Arduino for real-world hardware integration.",
    rating: 4,
    icon: Icons.laptop,
  },
  {
    name: "Oscilloscopes & AWGs",
    description: "Instrument and debug circuits with waveform generation, signal measurement, and mixed-signal interfacing.",
    rating: 4,
    icon: Icons.work,
  },
  {
    name: "Analog/Digital I/O",
    description: "Interface sensors, actuators, and mixed-signal pathways for embedded and test systems.",
    rating: 4,
    icon: Icons.synthwave,
  },
  {
    name: "Circuit Bring-up",
    description: "Debug and integrate mixed-signal circuits, wiring, and system-level hardware prototypes.",
    rating: 4,
    icon: Icons.add,
  },
  {
    name: "Docker & Redis",
    description: "Build modular device-interface modules with containerization and Pub/Sub messaging for validation.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "Git & Linux CLI",
    description: "Version control and efficient command-line workflows for collaborative engineering projects.",
    rating: 5,
    icon: Icons.gitBranch,
  },
  {
    name: "LTspice",
    description: "Simulate analog and mixed-signal circuits for validation and design exploration.",
    rating: 3,
    icon: Icons.laptop,
  },
  {
    name: "PyTorch",
    description: "Benchmark CNN training and analyze performance bottlenecks across compute architectures.",
    rating: 3,
    icon: Icons.star,
  },
];


export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
