import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import SubTitle from "~/components/subtitle";
import Project from "./project";

const projects = [
  {
    title: "Video Subtitle Generator",
    category: "ai",
    img_path: "2023-ai-subtitle-generator",
    first_img: "index.jpg",
    description: "",
    year: 2023,
  },
  {
    title: "Interactive Voice Response For Pizzerias",
    category: "ai",
    img_path: "2021-master-final-project",
    first_img: "ivr.jpg",
    description: "",
    year: 2021,
  },
  {
    title: "Personal Literary Page",
    category: "web",
    img_path: "2020-caovikhanh",
    first_img: "index.jpg",
    description: "",
    year: 2020,
  },
  {
    title: "Nerdgearz",
    category: "web",
    img_path: "2020-nerdgearz",
    first_img: "index.jpg",
    description: "",
    year: 2020,
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
