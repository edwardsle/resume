import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SubTitleProps {
  icon?: IconDefinition;
  text: string;
}

export default function SubTitle({ icon, text }: SubTitleProps) {
  return (
    <div className="w-full text-3xl text-white bg-blue-900 rounded-3xl mb-10 px-10 py-5">
      {icon && <FontAwesomeIcon icon={icon} className="" />}
      <span className="inline-block uppercase font-extralight ml-5">{text}</span>
    </div>
  );
}
