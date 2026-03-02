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
      { name: 'NXP i.MX6',        tagColor: 'red'     },
      { name: 'ESP32',            tagColor: 'teal'    },
      { name: 'Jetson Orin',      tagColor: 'violet'  },
      { name: 'PREEMPT_RT',       tagColor: 'red'     },
      { name: 'Linux BSP',        tagColor: 'teal'    },
      { name: 'Yocto / BitBake',  tagColor: 'amber'   },
      { name: 'U-Boot',           tagColor: 'lime'    },
      { name: 'GStreamer',        tagColor: 'sky'     },
      { name: 'RTSP',             tagColor: 'fuchsia' },
      { name: 'ONVIF',            tagColor: 'indigo'  },
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
      { name: 'DeepStream',       tagColor: 'teal'    },
      { name: 'TensorRT',         tagColor: 'lime'    },
      { name: 'ONNX Runtime',     tagColor: 'red'     },
      { name: 'INT8 Quantization', tagColor: 'orange' },
      { name: 'Triton Server',    tagColor: 'fuchsia' },
      { name: 'Whisper cpp',      tagColor: 'sky'     },
      { name: 'LangChain',        tagColor: 'violet'  },
      { name: 'FAISS',            tagColor: 'indigo'  },
      { name: 'Function Calling', tagColor: 'amber'   },
      { name: 'Piper TTS',        tagColor: 'orange'    },
      { name: 'AI Automation',    tagColor: 'cyan'    },
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
      { name: 'Blade',          tagColor: 'red'     },
      { name: 'Artisan',        tagColor: 'orange'   },
      { name: 'Vite',           tagColor: 'lime'     },
      { name: 'Nginx / Apache', tagColor: 'teal'     },
      { name: 'Redis',          tagColor: 'fuchsia'  },
      { name: 'Liquid',         tagColor: 'sky'      },
      { name: 'OAuth 2.0 / SAML', tagColor: 'violet'  },
      { name: 'AWS',            tagColor: 'amber'   },
      { name: 'CI/CD',          tagColor: 'cyan'     },
      { name: 'SQL',  tagColor: 'indigo'  },
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
      { name: 'Xcode',             tagColor: 'sky'     },
      { name: 'Android Studio',    tagColor: 'lime'    },
      { name: 'CocoaPods',         tagColor: 'orange'  },
      { name: 'Gradle',            tagColor: 'violet'  },
      { name: 'Core Data',         tagColor: 'teal'    },
      { name: 'Room DB',           tagColor: 'amber'   },
      { name: 'SceneGraph',        tagColor: 'red'     },
      { name: 'BrightScript',      tagColor: 'fuchsia' },
      { name: 'APNs / FCM',        tagColor: 'cyan'    },
      { name: 'Fastlane',          tagColor: 'indigo'  },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
