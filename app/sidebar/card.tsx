import SocialButton from "./socialbutton";
import Image from "./image";
import ShineBtn from "~/components/shinebtn";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  return (
    <div className="rounded-4xl my-20 ml-10 shadow-lg sm:p-10 bg-white">
      <div className="flex justify-between">
        <h1 className="text-5xl font-medium">Ed Le</h1>
        <div className="tracking-wide text-gray-400 text-end">
          <p>Software Engineer</p>
          <p className="text-sm">Irvine, CA</p>
        </div>
      </div>
      <Image />
      <div className="flex justify-around mt-10">
        <SocialButton platform="github" username="edwardsle" />
        <SocialButton platform="linkedin" username="edwardsle" />
        <SocialButton platform="email" username="le_edward" />
      </div>
      <div className="flex justify-center mt-10">
        <ShineBtn text="résumé" icon={ faCircleArrowDown } />
      </div>
    </div>
  );
}
