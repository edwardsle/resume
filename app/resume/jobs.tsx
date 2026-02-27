import SubTitle from "~/components/subtitle";
import Job from "./job";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const listJobs = [
  {
    title: "Embedded Software Engineer",
    company: "Iteris, Inc.",
    location: "Santa Ana, California",
    logo: "iteris.png",
    workingStatus: "Aug 2022 to Present",
    tags: [
      "Yocto",
      "U-boot",
      "Nvidia Jetson Xavier",
      "Nvidia Jetson Orin",
      "Gstreamer",
      "RTSP Server",
      "C/C++",
      "Python",
      "BASH Script",
      "SHELL Script",
      "ONVIF",
      "i.MX 6 Processors",
      "Sony IMX500",
      "Bazel",
      "Monorepo",
    ],
    responsibility: [
      "Develop and implement software of embedded devices and systems.",
      "Execute full embedded software development life cycle.",
      "Develop, code, test and troubleshoot the system software.",
      "Provide postproduction support.",
      "Analyze, monitor, and improve efficiency, stability of the system.",
      "Interface with hardware design and development.",
      "Support software QA and field testing.",
    ],
  },
  {
    title: "Jr. Web Developer",
    company: "Dental Game Plan",
    location: "Montrose, California",
    logo: "dentalgameplan.png",
    workingStatus: "Jun 2021 to Aug 2022",
    tags: [
      "PHP",
      "CodeIgniter 4",
      "JavaScript",
      "SSO authentication",
      "SAML",
      "Amazon EC2",
      "Auto Scaling",
      "Amazon S3",
      "Amazon Connect",
      "AWS API Gateway",
      "AWS Lambda",
      "IAM",
      "CloudWatch",
      "Amazon Lex",
      "Serverless",
      "AWS DynamoDB",
      "Twilio",
      "bulk SMS",
    ],
    responsibility: [
      "Developed and maintained backend systems using PHP and CodeIgniter 4.",
      "Built scalable AWS architecture using EC2 with 4 slave nodes, load balancing, and database replication to master.",
      "Integrated Amazon Connect with internal systems to streamline call workflows.",
      "Stored and managed call recordings securely on Amazon S3.",
      "Created Twilio SMS flows for inbound/outbound messaging and bulk SMS marketing campaigns.",
      "Implemented SSO authentication using SAML for internal and external systems.",
      "Performed bug fixes, system troubleshooting, and performance tuning for backend services.",
      "Worked directly with end users (call agents) to resolve live system issues and gather feedback.",
      "Managed server security, configurations, and serverless functions using AWS Lambda, IAM, and CloudWatch.",
    ],
  },
  {
    title: "Video Editor · Camera Operator · Program Scheduler · IT Support",
    company: "Vietsky Television",
    location: "Garden Grove, California",
    logo: "vietsky.png",
    workingStatus: "May 2018 to Mar 2022",
    tags: [
      "Broadcast Engineering",
      "Live Production",
      "Video Encoding",
      "Signal Routing",
      "Playout Automation",
      "FFmpeg",
      "NFS",
      "Samba",
      "Active Directory",
      "Network Administration",
      "SAN/NAS",
      "ENG",
      "CCU Control",
      "Teleprompter Control",
      "Transcoding Automation",
      "VMix",
      "EDIUS",
    ],
    responsibility: [
      "Engineered broadcast video pipelines and signal routing for live and recorded content.",
      "Operated ENG cameras and CCU control units, ensuring stable SDI/HDMI outputs.",
      "Configured and maintained playout automation systems and program scheduling software.",
      "Administered LAN/WAN infrastructure: TCP/IP, DHCP, DNS, VLANs, firewall rules.",
      "Deployed a KVM-virtualized Ubuntu file server with 100 TB RAID-6 storage for centralized media access.",
      "Set up Active Directory-authenticated Samba and NFS shares for Windows and Ubuntu systems.",
      "Automated routine tasks with Python and Bash scripts for ingest, backup, and transfer.",
      "Monitored network performance and broadcast logs; executed root-cause analysis for outages.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "BolsaGroup",
    location: "Garden Grove, California",
    logo: "bolsagroup.png",
    workingStatus: "Aug 2017 to Feb 2020",
    tags: [
      "Full-stack",
      "MySQL",
      "PHP",
      "JavaScript",
      "REST API",
      "Laravel",
      "React.js",
      "Express.js",
      "JSON",
      "XML",
      "Bootstrap 4",
      "jQuery",
      "October CMS",
      "Shopify",
      "Git",
      "CI/CD",
    ],
    responsibility: [
      "Built web apps using Laravel 5.x/6.x, PHP 7, and MySQL",
      "Created responsive UIs with HTML5, CSS3, Bootstrap, and jQuery.",
      "Developed REST APIs and backend logic.",
      "Integrated front-end and back-end using October CMS, Shopify, and custom CMS.",
      "Built SPAs with React.js, backend with Express.js, and connected via JSON/XML.",
      "Used Blade, Eloquent ORM, Middleware, and Auth in Laravel projects.",
      "Applied Git, Bitbucket, and basic CI/CD for code versioning and deployment.",
      "Followed web security best practices and optimized database performance.",
    ],
  },
];

export default function Jobs() {
  return (
    <section className="w-full mx-auto px-4 py-20">
      <SubTitle icon={faBriefcase} text="Experience" />

      {/* Timeline container with vertical line */}
      <div className="relative ml-8 mt-12 border-l-2 border-neutral-200 space-y-9">
        {listJobs.map((job) => (
          <Job
            key={job.company}
            title={job.title}
            company={job.company}
            location={job.location}
            logo={job.logo}
            workingStatus={job.workingStatus}
            tags={job.tags}
            responsibility={job.responsibility}
          />
        ))}
      </div>
    </section>
  );
}
