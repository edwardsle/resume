import SubTitle from "~/components/subtitle";
import Service from "./service";
import {
  faBell,
  faCompassDrafting,
  faGlobe,
  faHexagonNodes,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Embedded",
    count: 12,
    expandedText: "projects completed",
    tags: [
      { name: 'Docker',    tagColor: 'teal'   },
      { name: 'GStreamer', tagColor: 'red'    },
      { name: 'C',         tagColor: 'lime'   },
      { name: 'Bash',      tagColor: 'violet' },
    ],
    fontawesome: faMicrochip,
    color: "text-sky-400",
    background: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    title: "AI",
    count: 5,
    expandedText: "solutions completed",
    tags: [
      { name: 'OpenAI',     tagColor: 'cyan'  },
      { name: 'Azure',      tagColor: 'stone' },
      { name: 'Whisper AI', tagColor: 'yellow'},
    ],
    fontawesome: faHexagonNodes,
    color: "text-teal-400",
    background: "bg-teal-50",
    border: "border-teal-200",
  },
  {
    title: "Web",
    count: 35,
    expandedText: "websites completed",
    tags: [
      { name: 'Laravel',    tagColor: 'sky'     },
      { name: 'CodeIgniter',tagColor: 'orange'  },
      { name: 'ReactJS',    tagColor: 'fuchsia' },
      { name: 'ExpressJS',  tagColor: 'pink'    },
      { name: 'Shopify',    tagColor: 'slate'   },
    ],
    fontawesome: faGlobe,
    color: "text-lime-400",
    background: "bg-lime-50",
    border: "border-lime-200",
  },
  {
    title: "Mobile App",
    count: 8,
    expandedText: "apps completed",
    tags: [
      { name: 'iOS',    tagColor: 'amber' },
      { name: 'Android',tagColor: 'rose'  },
      { name: 'Roku',   tagColor: 'indigo'},
    ],
    fontawesome: faCompassDrafting,
    color: "text-orange-400",
    background: "bg-orange-50",
    border: "border-orange-200",
  },
];

export default function Services() {
  return (
    <section className="w-full p-4">
      <SubTitle icon={faBell} text="Services" />
      <div className="grid gap-y-10">
        <div className="grid grid-cols-4 gap-6">
          {services.map((sv) => (
            <Service
              key={sv.title}
              title={sv.title}
              count={sv.count}
              expandedText={sv.expandedText}
              tags={sv.tags}
              fontawesome={sv.fontawesome}
              color={sv.color}
              background={sv.background}
              border={sv.border}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
