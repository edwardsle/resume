import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubTitle from "~/components/subtitle";

export default function Introduce() {
  return (
    <section className="w-full p-4">
      <SubTitle icon={ faHouseUser } text="Introduce" />
      <div className="grid gap-y-10">
        <div className="text-8xl font-light tracking-wide">
          <h1 className="">
            Hi<span className="text-gray-300">—</span>I'm{" "}
            <span className="text-orange-500">Ed</span>,
          </h1>
          <h1 className="">a Real-Time Linux engineer.</h1>
        </div>
        <div className="mt-10">
          <p className="text-2xl text-gray-500">
          With deep kernel know-how and a knack for low-latency magic, I make hard real-time look easy.
          </p>
        </div>
      </div>
    </section>
  );
}
