import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import SubTitle from "~/components/subtitle";

export default function Education() {
  return (
    <section className="w-full p-4">
      <SubTitle icon={faGraduationCap} text="Education" />
      <div className="grid grid-cols-2 gap-y-10 gap-x-6 mt-20">
        {/* ===== UCI ===== */}
        <div className="group relative w-full">
          <div className="w-full flex justify-center">
            <div className="relative">
              <img
                src="/img/uci.png"
                className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] z-40"
              />
            </div>
          </div>
          <div className="relative overflow-hidden
            break-words p-[1px] rounded-xl
            bg-white shadow-sm
            hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
            mb-6"
          >
            <div className="group-hover:animate-spin transform duration-2000 invisible absolute -top-100 -bottom-100 left-1 right-1 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-xl bg-white group-hover:bg-gradient-to-b group-hover:from-blue-50 px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full text-center mt-20">
                  <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div className="p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                        #9
                      </span>
                      <span className="text-sm text-slate-400">
                        Top Public Schools
                      </span>
                    </div>
                    <div className="p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                        #33
                      </span>
                      <span className="text-sm text-slate-400">
                        National Universities
                      </span>
                    </div>
                    <div className="p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                        #10
                      </span>
                      <span className="text-sm text-slate-400">
                        Software Engineering
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-2">
                <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                  University of California, Irvine
                </h3>
                <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                  Irvine, CA 92697
                </div>
              </div>
              <div className="mt-6 py-6 border-t border-slate-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4">
                    <p className="font-light leading-relaxed text-slate-600 mb-4">
                      Bachelor of Science in Computer Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===== CSUF ===== */}
        <div className="group relative w-full">
          <div className="w-full flex justify-center">
            <div className="relative">
              <img
                src="/img/csuf.png"
                className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] z-40"
              />
            </div>
          </div>
          <div className="relative overflow-hidden
            break-words p-[1px] rounded-xl
            bg-white shadow-sm
            hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
            mb-6"
          >
            <div className="group-hover:animate-spin transform duration-2000 invisible absolute -top-100 -bottom-100 left-1 right-1 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-xl bg-white group-hover:bg-gradient-to-b group-hover:from-blue-50 px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                <div className="relative">
                  <img
                    src="/img/csuf.png"
                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                  />
                </div>
              </div>
              <div className="w-full text-center mt-20">
                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                  <div className="p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                      #69
                    </span>
                    <span className="text-sm text-slate-400">
                      Top Public Schools
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                      #28
                    </span>
                    <span className="text-sm text-slate-400">
                      California Colleges
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                      #28
                    </span>
                    <span className="text-sm text-slate-400">
                      Online ECS Master's
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                California State University, Fullerton
              </h3>
              <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                Fullerton, CA 92831
              </div>
            </div>
            <div className="mt-6 py-6 border-t border-slate-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                  <p className="font-light leading-relaxed text-slate-600 mb-4">
                    Master in Computer Science
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
}
