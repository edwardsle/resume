import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import SubTitle from "~/components/subtitle";
import Project from "./project";
import OrinStream from "./orinstream";
import SubtitleGenerator from "./subtitlegenerator";
import SampleModal from "./samplemodal";

const projects = [
  {
    title: "Vision Hub",
    category: "embedded",
    img_path: "2025-orinstream",
    first_img: "orinstream.gif",
    description: (
      <div className="space-y-2 max-w-xl">
        <h1 className="text-lg font-semibold">
          Edge Video Streaming — Jetson Orin
        </h1>

        <p className="text-xs text-gray-300">
          IP Camera · GStreamer · JetPack 6.1 · Docker · RTSP · WebRTC
        </p>

        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Dockerized full stack</li>
          <li>Low-latency WebRTC & RTSP streaming</li>
          <li>YOLO + TensorRT for Fast Object Detection</li>
          <li>Automated host/container updates</li>
        </ul>
      </div>
    ),
    year: 2025,
    external_link: false,
    modalContent: <OrinStream />,
  },
  {
    title: "AI Video Processor",
    category: "ai",
    img_path: "2023-ai-subtitle-generator",
    first_img: "index.jpg",
    description: (
      <div className="space-y-2 max-w-xl">
        <h1 className="text-lg font-semibold">
          Subtitle & Voiceover
        </h1>

        <p className="text-xs text-gray-300">
          QtWidgets · ZeroMQ · Multithreading · Whisper · Google Translate · ElevenLabs
        </p>

        <ul className="text-sm list-disc list-inside space-y-1">
          <li>High-performance multi-threaded video processing engine</li>
          <li>Parallel clip segmentation from single or multiple streams</li>
          <li>Automatic subtitle generation & multilingual translation</li>
          <li>AI-powered voiceover synthesis</li>
        </ul>
      </div>
    ),
    year: 2023,
    external_link: false,
    modalContent: <SubtitleGenerator />,
  },
  {
    title: "IVR For Pizzerias",
    category: "ai",
    img_path: "2021-master-final-project",
    first_img: "ivr.jpg",
    description: (
      <div className="space-y-2 max-w-xl">
        <h1 className="text-lg font-semibold">
          Pizza Ordering System
        </h1>

        <p className="text-xs text-gray-300">
          ExpressJS · ReactJS · Vonage Voice API · IVR · SMS · Web
        </p>

        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Multi-channel ordering (phone, SMS, web)</li>
          <li>Scalable IVR engine supporting 50 concurrent calls</li>
          <li>Voice-programmed flows with custom NLP dictionary</li>
          <li>Automated kitchen dispatch & order lifecycle management</li>
        </ul>
      </div>
    ),
    year: 2021,
    external_link: false,
    modalContent: <SampleModal />,
  },
  {
    title: "Personal Literary Page",
    category: "web",
    img_path: "2020-caovikhanh",
    first_img: "index.jpg",
    description: "",
    year: 2020,
    external_link: "http://caovikhanh.com/",
    modalContent: <></>,
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
  {
    title: "Image Denoising",
    category: "ai",
    img_path: "2019-image-denoising",
    first_img: "ai-denoising.jpg",
    description: (
      <div className="space-y-2 max-w-xl">
        <h1 className="text-lg font-semibold">
          Deep Neural Networks
        </h1>

        <p className="text-xs text-gray-300">
          Deep Learning · CNN · Low-Light Imaging · RGB Restoration
        </p>

        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Designed CNN-based pipeline for real-world low-light denoising</li>
          <li>Trained directly on RGB images with authentic noise patterns</li>
          <li>Restored image quality without exposure or ISO trade-offs</li>
          <li>Benchmarked performance against BM3D baseline</li>
        </ul>
      </div>
    ),
    year: 2019,
    external_link: "https://github.com/edwardsle/imagedenoise",
    modalContent: <></>,
  },
  {
    title: "Half-Cheetah",
    category: "ai",
    img_path: "2019-genetic-algorithm",
    first_img: "ai-genetic-alg.jpg",
    description: (
      <div className="space-y-2 max-w-xl">
        <h1 className="text-lg font-semibold">
          Neuroevolution in MuJoCo
        </h1>

        <p className="text-xs text-gray-300">
          Python · OpenAI Gym · MuJoCo · Genetic Algorithms · Neural Networks
        </p>

        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Implemented GA-based neuroevolution for control policies</li>
          <li>Targeted continuous control in Half-Cheetah simulation</li>
          <li>Leveraged parallel evaluation for scalable population training</li>
          <li>Demonstrated gradient-free reinforcement learning approach</li>
        </ul>
      </div>
    ),
    year: 2019,
    external_link: "https://github.com/edwardsle/Genetic-Algorithm",
    modalContent: <></>,
  },
  {
    title: "99Lookup",
    category: "web",
    img_path: "2018-99lookup",
    first_img: "simple-search-engine.jpg",
    description: (
      <div className="space-y-2 max-w-xl">
        <h1 className="text-lg font-semibold">
          Search Engine Prototype
        </h1>

        <p className="text-xs text-gray-300">
          Information Retrieval · Search Systems · Java · Servlet · MongoDB · SQL · Web Architecture
        </p>

        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Implemented web-based search application prototype</li>
          <li>Explored backend search workflows using Java Servlets</li>
          <li>Evaluated data storage strategies with MongoDB and SQL</li>
        </ul>
      </div>
    ),
    year: 2018,
    external_link: "https://github.com/edwardsle/Search-Engine",
    modalContent: <></>,
  },
];

export default function Projects() {
  return (
    <section className="w-full p-4">
      <SubTitle icon={faListCheck} text="Projects" />
      <div className="grid gap-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((work) => (
            <Project
              key={work.title}
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
