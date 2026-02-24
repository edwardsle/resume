import { useState, type ReactNode } from "react";
import Modal from "./modal";
import OrinStream from "./orinstream";

export interface ProjectProps {
  title: string;
  category: string;
  img_path: string;
  first_img: string;
  description: ReactNode;
  year: number;
  external_link?: string | boolean;
  modalContent?: ReactNode;
}

export default function Project({
  title,
  category,
  img_path,
  first_img,
  description,
  year,
  external_link = false,
  modalContent,
}: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    if (typeof external_link === "string") {
      // open the URL in a new tab
      window.open(external_link, "_blank", "noopener,noreferrer")
    } else {
      // fallback to showing the modal
      setIsOpen(true)
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md w-full h-80 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with sliding effect */}
      <div
        className={`absolute top-0 w-full h-full transition-transform duration-500 ease-in-out ${
          isHovered ? "translate-x-[-40%]" : "translate-x-0"
        }`}
      >
        <img
          src={`/img/projects/${img_path}/${first_img}`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content that appears on hover */}
      <div
        className={`absolute top-0 right-0 w-4/5 h-full bg-white p-4 flex flex-col justify-between transition-transform duration-500 ease-in-out ${
          isHovered ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="">
          <button
            onClick={handleClick}
            className="absolute inset-0 bg-black bg-opacity-25 opacity-0 
                   group-hover:opacity-100 flex items-center justify-center 
                   text-stone-800 font-bold transition cursor-pointer"
          >
            {typeof external_link === "string" ? "Go to Site" : "View Details"}
          </button>

          {/* only render Modal when there's no external_link */}
          {!external_link && modalContent && (
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {modalContent}
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
