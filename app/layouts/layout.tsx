import { Outlet } from "react-router";
import { motion } from "framer-motion";
import Card from "~/sidebar/card";

export default function Layout() {
  return (
    <div className="relative min-h-screen text-slate-800">
      {/* Sidebar: stacks on top for mobile, fixed left on lg+ */}
      <aside className="relative w-full lg:fixed lg:top-0 lg:left-0 lg:bottom-0 lg:w-[420px] z-10">
        <Card />
      </aside>

      {/* Main content area */}
      <main className="min-h-screen lg:ml-[400px]">
        <div className="lg:h-screen lg:overflow-auto">
          <div className="lg:h-[99%] overflow-auto rounded-none lg:rounded-4xl bg-white/60 backdrop-blur-sm border-0 lg:border lg:border-slate-200/60 lg:my-1 shadow-sm">
            <motion.div
              className="px-3 py-2 sm:px-4 lg:ml-10 lg:p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
