import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import ServiceTag from "./servicetag";
import "./service.css"

export interface TagProps {
  name: string;
  tagColor: string;
}

interface ServiceProps {
  title: string;
  tags: TagProps[];
  fontawesome: IconDefinition;
  color: string;
  background: string;
  border: string;
}

export default function Service({
  title,
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

      <div className="ml-4">
        <h2 className="font-semibold">{title}</h2>
        <div className="overflow-hidden w-full">
          <div className="flex animate-none group-hover:animate-[scroll-left_5s_linear_infinite] whitespace-nowrap text-xs gap-x-2">
            {/* Original tags */}
            {tags.map((tag) => (
              <ServiceTag
                key={`original-${tag.name}`}
                text={tag.name}
                tagColor={tag.tagColor}
              />
            ))}

            {/* Duplicated tags for seamless loop */}
            {tags.map((tag, index) => (
              <ServiceTag
                key={`duplicate-${tag.name}-${index}`}
                text={tag.name}
                tagColor={tag.tagColor}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
