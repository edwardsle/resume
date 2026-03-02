import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface SocialPlatformConfig {
  icon: IconDefinition;
  baseUrl: string;
}

type Platform = "github" | "linkedin" | "twitter" | "email";

interface SocialBtnProps {
  platform: Platform;
  username: string;
}

export default function SocialButton({ platform, username }: SocialBtnProps) {
  const socialPlatforms: Record<Platform, SocialPlatformConfig> = {
    github: {
      icon: faSquareGithub,
      baseUrl: "https://edwardsle.github.io/",
    },
    linkedin: {
      icon: faLinkedin,
      baseUrl: "https://www.linkedin.com/in/edwardsle/",
    },
    twitter: {
      icon: faSquareTwitter,
      baseUrl: "https://twitter.com/",
    },
    email: {
      icon: faSquareEnvelope,
      baseUrl: "mailto: le_edward@yahoo.com",
    },
  };

  const config = socialPlatforms[platform];
  if (!config) return null;

  return (
    <motion.a
      href={config.baseUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-300 hover:text-brand-500 transition-colors duration-300 focus:outline-hidden active:outline-hidden"
      whileHover={{ scale: 1.2, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Visit my ${platform} profile`}
    >
      <FontAwesomeIcon icon={config.icon} size="2x" />
    </motion.a>
  );
}
