import { useState } from "react";
import JobTag from "./jobtag";

interface JobProps {
  title: string;
  company: string;
  location: string;
  logo: string;
  workingStatus: string;
  tags: string[];
  responsibility: string[];
}

export default function Job({
  title,
  company,
  location,
  logo,
  workingStatus,
  tags,
  responsibility,
}: JobProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="group/job relative pl-8">
      {/* Timeline dot — vertically centered, pulse on hover only */}
      <div className="absolute -left-[7px] top-1/2 -translate-y-1/2 z-10">
        <span className="relative flex size-3.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-0 group-hover/job:animate-ping group-hover/job:opacity-75" />
          <span className="relative inline-flex size-3.5 rounded-full bg-neutral-900" />
        </span>
      </div>

      {/* Card */}
      <div
        onClick={() => setActive(!active)}
        className="cursor-pointer rounded-2xl bg-white/70 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      >
        {/* Top row: logo + info + date */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="size-30 content-center bg-gradient-to-t from-blue-100 group-hover:from-blue-200 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-50 border border-gray-100 rounded-lg shadow-sm p-4 ">
              <img alt="" src={`/img/${ logo }`} className="w-full object-cover" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-neutral-900 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-neutral-500">
                {company} | {location}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <span className="flex items-center">
          <span className="h-px flex-1 bg-gray-300"></span>

          <span className="text-xs text-neutral-500 shrink-0 px-4">{workingStatus}</span>

          <span className="h-px flex-1 bg-gray-300"></span>
        </span>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <JobTag key={tag} text={tag} />
          ))}
        </div>

        {/* Expandable details */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-in-out ${
            active ? "max-h-[600px] mt-4" : "max-h-0"
          }`}
        >
          <ul className="list-disc pl-5 space-y-1.5">
            {responsibility.map((res, i) => (
              <li
                key={i}
                className="text-sm text-neutral-600 leading-relaxed"
              >
                {res}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
