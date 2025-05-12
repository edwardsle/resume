import { useState } from "react";

interface ProjectProps {
  title: string;  
  category: string;
  img_path: string;
  first_img: string;
  description: string;
  year: number;
  linkTo?: string;
}

export default function Project({
  title,
  category,
  img_path,
  first_img,
  description,
  year,
  linkTo = "#",
}: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md w-full h-80 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with sliding effect */}
      <div 
        className={`absolute top-0 w-full h-full transition-transform duration-500 ease-in-out ${
          isHovered ? 'translate-x-[-40%]' : 'translate-x-0'
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
          isHovered ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        
        <a 
          href={linkTo || "#"} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md text-center transition-colors duration-300 mt-4"
        >
          View More
        </a>
      </div>
    </div>
  );
}
