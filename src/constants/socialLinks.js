import { randomId } from "@mantine/hooks";

import {
  ArrowUpRight,
  CodepenLogo,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

const socialLinks = [
  {
    id: randomId(),
    to: "https://www.linkedin.com/in/iamdipankarpaul/",
    label: "LinkedIn",
    leftIcon: LinkedinLogo,
    rightIcon: ArrowUpRight,
    target: "_blank",
    ariaLabel: "Linkedin link",
  },
  {
    id: randomId(),
    to: "https://github.com/iamdipankarpaul",
    label: "GitHub",
    leftIcon: GithubLogo,
    rightIcon: ArrowUpRight,
    target: "_blank",
    ariaLabel: "Github link",
  },
  {
    id: randomId(),
    to: "https://codepen.io/iamdipankarpaul",
    label: "CodePen",
    leftIcon: CodepenLogo,
    rightIcon: ArrowUpRight,
    target: "_blank",
    ariaLabel: "Codepen link",
  },
  {
    id: randomId(),
    to: "https://www.instagram.com/iamdipankarpaul/",
    label: "Instagram",
    leftIcon: InstagramLogo,
    rightIcon: ArrowUpRight,
    target: "_blank",
    ariaLabel: "Instagram link",
  },
  {
    id: randomId(),
    to: "https://wa.me/+916296793396",
    label: "WhatsApp",
    leftIcon: WhatsappLogo,
    rightIcon: ArrowUpRight,
    target: "_blank",
    ariaLabel: "Whatsapp link",
  },
];

export default socialLinks;
