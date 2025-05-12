import LinkUnderline from "~/components/linkunderline";
import JobTag from "./jobtag";

interface JobProps {
  title:          string;
  company:        string;
  location:       string;
  logo:           string;
  workingStatus:  string;
  tags:           string[];
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
  return (
    <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl p-5">
      {/* Title */}
      <div className="flex content-center gap-4">
        <div className="size-30 content-center bg-gradient-to-t from-blue-100 group-hover:from-blue-200 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-50 border border-gray-100 rounded-lg shadow-sm p-4 ">
          <img alt="" src={`/img/${ logo }`} className="w-full object-cover" />
        </div>

        <div className="tracking-wide content-center">
          <h1 className="text-2xl font-semibold">
            <LinkUnderline text={title} />
          </h1>
          <h3 className="text-xl font-medium mt-3">{company}</h3>
          <p className="text-base text-sky-500">{location}</p>
        </div>
      </div>
      {/* Divider */}
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gray-300"></span>

        <span className="shrink-0 px-4">{workingStatus}</span>

        <span className="h-px flex-1 bg-gray-300"></span>
      </span>
      {/* Responsibility */}
      <div className="grid gap-4 mt-10">
        <div className="flex flex-wrap justify-between gap-4 after:content-[''] after:flex-auto">
          {tags.map((tag) => (
            <JobTag key={tag} text={tag} />
          ))}
        </div>
        <div className="">
          <ul className="list-disc p-5 divide-y divide-gray-200 *:even:bg-gray-50">
            {responsibility.map((res) => (
              <li className="p-3">{res}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
