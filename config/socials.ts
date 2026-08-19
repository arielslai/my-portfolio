import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@arielslai",
    icon: Icons.gitHub,
    link: "https://github.com/arielslai",
  },
  {
    name: "LinkedIn",
    username: "Ariel Lai",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/arielslai",
  },
  {
    name: "Email",
    username: "asl284@cornell.edu",
    icon: Icons.gmail,
    link: "mailto:asl284@cornell.edu",
  },
];
