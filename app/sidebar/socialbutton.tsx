import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

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

  if (!config) {
    console.error(`Unsupported platform: ${platform}`);
    return null;
  }

  return (
    <a
      href={ config.baseUrl }
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:scale-125 hover:text-gray-800 transition delay-150 duration-300 hover:shadow-xl focus:outline-hidden active:outline-hidden"
      aria-label={`Visit my ${platform} profile`}
    >
      <FontAwesomeIcon icon={config.icon} size="3x" className="social-icon" />
    </a>
  );
}
