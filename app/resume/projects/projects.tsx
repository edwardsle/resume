import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import SubTitle from "~/components/subtitle";
import Project from "./project";
import OrinStream from "./orinstream";

const projects = [
  {
    title: "OrinStream",
    category: "embedded",
    img_path: "2025-orinstream",
    first_img: "orinstream.gif",
    description: (
      <div className="gap-y-5">
        <h1 className="text-xl">Edge video streaming on Jetson ORIN</h1>
        <p className="italic mt-3">IP Camera • GStreamer • Jetpack 5.1.1 • Docker • Web Server</p>
        <p className="underline mt-3">Key achievements:</p>
        <ul className="list-disc">
          <li>Dockerized the app stack.</li>
          <li>Streamed video to browsers & VLC.</li>
          <li>Auto-updated hosts & containers.</li>
        </ul>
      </div>
    ),
    year: 2025,
    external_link: false,
    modalContent: <OrinStream />,
  },
  {
    title: "Video Subtitle Generator",
    category: "ai",
    img_path: "2023-ai-subtitle-generator",
    first_img: "index.jpg",
    description: "",
    year: 2023,
    external_link: false,
    modalContent: <OrinStream />,
  },
  {
    title: "Interactive Voice Response For Pizzerias",
    category: "ai",
    img_path: "2021-master-final-project",
    first_img: "ivr.jpg",
    description: "",
    year: 2021,
    external_link: false,
    modalContent: <OrinStream />,
  },
  {
    title: "Personal Literary Page",
    category: "web",
    img_path: "2020-caovikhanh",
    first_img: "index.jpg",
    description: "",
    year: 2020,
    external_link: "http://caovikhanh.com/",
    modalContent: <></>
  },
  {
    title: "Nerdgearz",
    category: "web",
    img_path: "2020-nerdgearz",
    first_img: "index.jpg",
    description: "",
    year: 2020,
    external_link: "https://nerdgearz.com/",
    modalContent: <></>,
  },
];

export default function Projects() {
  return (
    <section className="w-full p-4">
      <SubTitle icon={faListCheck} text="Projects" />
      <div className="grid gap-y-10">
        <div className="grid grid-cols-4 gap-6">
          {projects.map((work) => (
            <Project
              title={work.title}              
              category={work.category}
              img_path={work.img_path}
              first_img={work.first_img}
              description={work.description}
              year={work.year}
              external_link={work.external_link}
              modalContent={work.modalContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
