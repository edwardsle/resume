import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import ServiceTag from "./servicetag";

export interface TagProps {
  name: string;
  tagColor: string;
}

interface ServiceProps {
  title: string;
  count: number;
  expandedText: string;
  tags: TagProps[];
  fontawesome: IconDefinition;
  color: string;
  background: string;
  border: string;
}

export default function Service({
  title,
  count,
  expandedText,
  tags,
  fontawesome,
  color,
  background,
  border,
}: ServiceProps) {
  return (
    <div className="group flex items-start rounded-xl bg-white p-4 shadow-sm overflow-hidden">
      <div
        className={`flex min-h-12 min-w-12 items-center justify-center rounded-full border ${border} ${background}`}
      >
        <FontAwesomeIcon
          icon={fontawesome}
          size="2x"
          className={`${color} transition-transform duration-300 group-hover:scale-125 group-hover:animate-spin antialiased`}
        />
      </div>

      <div className="ml-4 min-w-0 flex-1">
        {/* Title row */}
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">{title}</h2>
          <span className="inline-flex items-center whitespace-nowrap text-[11px] font-bold rounded-full bg-brand-600 text-white overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-w-0 opacity-0 px-0 py-0 group-hover:max-w-[14rem] group-hover:opacity-100 group-hover:px-2.5 group-hover:py-0.5">
            <span className="shrink-0">{count}</span>
            <span className="ml-1 whitespace-nowrap">{expandedText}</span>
          </span>
        </div>

        {/* Scrolling tags */}
        <div className="overflow-hidden w-full">
          <div className="flex animate-none group-hover:animate-[scroll-left_5s_linear_infinite] whitespace-nowrap text-xs gap-x-2">
            {tags.map((tag) => (
              <ServiceTag
                key={`original-${tag.name}`}
                text={tag.name}
                tagColor={tag.tagColor}
              />
            ))}
            {tags.map((tag, index) => (
              <ServiceTag
                key={`duplicate-${tag.name}-${index}`}
                text={tag.name}
                tagColor={tag.tagColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}