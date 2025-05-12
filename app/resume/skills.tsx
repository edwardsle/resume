import SubTitle from "~/components/subtitle";
import Skill from "./skill";
import {
  faPython,
  faPhp,
  faJava,
  faJs,
  faAndroid,
  faSwift,
  faReact,
  faNode,
  faLaravel,
  faShopify,
  faBootstrap,
  faDocker,
  faGit,
  faLinux,
  faVuejs,
  faRaspberryPi,
} from "@fortawesome/free-brands-svg-icons";
import { faC, faPenRuler, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const languages = [
  { text: "Python", fontawesome: faPython },
  { text: "C and C++", fontawesome: faC },
  { text: "SHELL", fontawesome: faTerminal },
  { text: "PHP", fontawesome: faPhp },
  { text: "JavaScript", fontawesome: faJs },
  { text: "Java", fontawesome: faJava },
  { text: "Kotlin", fontawesome: faAndroid },
  { text: "Swift", fontawesome: faSwift },
];

const frameworks = [
  { text: "NodeJS", fontawesome: faNode },
  { text: "ReactJS", fontawesome: faReact },
  { text: "Laravel", fontawesome: faLaravel },
  { text: "VueJS", fontawesome: faVuejs },
  { text: "Shopify", fontawesome: faShopify },
  { text: "Bootstrap", fontawesome: faBootstrap },
];
const tools = [
  { text: "Docker", fontawesome: faDocker },
  { text: "git", fontawesome: faGit },
  { text: "Linux", fontawesome: faLinux },
  { text: "RaspberryPi", fontawesome: faRaspberryPi },  
];

export default function Skills() {
  return (
    <section className="w-full p-4">
      <SubTitle icon={faPenRuler} text="Skills" />
      <div className="grid gap-y-10">
        <div className="grid grid-cols-8 gap-x-4 gap-y-28 lg:gap-y-16">
          {languages.map((lang) => (
            <Skill
              key={lang.text}
              text={lang.text}
              icon={
                <FontAwesomeIcon
                  icon={lang.fontawesome}
                  size="3x"
                  className="antialiased"
                />
              }
            />
          ))}
        </div>
        <div className="grid grid-cols-8 gap-x-4 gap-y-28 lg:gap-y-16">
          {frameworks.map((lang) => (
            <Skill
              key={lang.text}
              text={lang.text}
              icon={
                <FontAwesomeIcon
                  icon={lang.fontawesome}
                  size="3x"
                  className="antialiased"
                />
              }
            />
          ))}
          <Skill
            text="Codeigniter"
            icon={
              <svg
                fill="#fff"
                height="40"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.49 24c-1.54-.68-2.586-2.146-2.723-3.824.09-1.727 1.002-3.305 2.45-4.246-.238.58-.18 1.24.15 1.77.376.525 1.022.777 1.655.646.902-.254 1.43-1.19 1.176-2.092-.09-.316-.27-.602-.516-.818-1.02-.83-1.532-2.133-1.35-3.436.175-.69.557-1.314 1.096-1.785-.405 1.08.737 2.146 1.504 2.67 1.36.816 2.67 1.713 3.924 2.686 1.37 1.08 2.117 2.77 2 4.5-.308 1.84-1.61 3.36-3.385 3.93 3.55-.79 7.21-3.61 7.28-7.61-.07-3.2-1.98-6.072-4.9-7.38h-.13c.065.157.096.326.09.496.01-.11.01-.22 0-.33.016.13.016.26 0 .39-.222.91-1.14 1.47-2.052 1.248-.364-.09-.69-.295-.924-.59-1.17-1.5 0-3.207.196-4.857.12-2.11-.844-4.127-2.554-5.36.856 1.427-.284 3.3-1.113 4.366-.83 1.066-2.03 1.86-3.008 2.79-1.054.98-2.02 2.058-2.887 3.21-1.874 2.29-2.61 5.31-2 8.205.836 2.79 3.155 4.886 6.015 5.43H8.5z" />
              </svg>
            }
          />
          <Skill
            text="TailwindCSS"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 54 33"
                height="30"
              >
                <g clip-path="url(#prefix__clip0)">
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clip-rule="evenodd"
                  />
                </g>
              </svg>
            }
          />
        </div>
        <div className="grid grid-cols-8 gap-x-4 gap-y-28 lg:gap-y-16">
          {tools.map((lang) => (
            <Skill
              key={lang.text}
              text={lang.text}
              icon={
                <FontAwesomeIcon
                  icon={lang.fontawesome}
                  size="3x"
                  className="antialiased"
                />
              }
            />
          ))}
          <Skill
            text="Nvidia Jetson"
            icon={
              <svg
                viewBox="0 0 271.7 179.7"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
              >
                <path
                  d="M101.3 53.6V37.4c1.6-.1 3.2-.2 4.8-.2 44.4-1.4 73.5 38.2 73.5 38.2S148.2 119 114.5 119c-4.5 0-8.9-.7-13.1-2.1V67.7c17.3 2.1 20.8 9.7 31.1 27l23.1-19.4s-16.9-22.1-45.3-22.1c-3-.1-6 .1-9 .4m0-53.6v24.2l4.8-.3c61.7-2.1 102 50.6 102 50.6s-46.2 56.2-94.3 56.2c-4.2 0-8.3-.4-12.4-1.1v15c3.4.4 6.9.7 10.3.7 44.8 0 77.2-22.9 108.6-49.9 5.2 4.2 26.5 14.3 30.9 18.7-29.8 25-99.3 45.1-138.7 45.1-3.8 0-7.4-.2-11-.6v21.1h170.2V0H101.3zm0 116.9v12.8c-41.4-7.4-52.9-50.5-52.9-50.5s19.9-22 52.9-25.6v14h-.1c-17.3-2.1-30.9 14.1-30.9 14.1s7.7 27.3 31 35.2M27.8 77.4s24.5-36.2 73.6-40V24.2C47 28.6 0 74.6 0 74.6s26.6 77 101.3 84v-14c-54.8-6.8-73.5-67.2-73.5-67.2z"
                  fill="#ffffff"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
