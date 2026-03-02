import { Outlet } from "react-router";
import { motion } from "framer-motion";
import Card from "~/sidebar/card";

export default function Layout() {
  return (
    <div className="relative min-h-screen text-slate-800">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 bottom-0 w-[420px] z-10">
        <Card />
      </aside>

      {/* Main content area */}
      <main className="ml-[400px] min-h-screen">
        <div className="h-screen overflow-auto">
          <div className="h-[99%] overflow-auto rounded-4xl bg-white/60 backdrop-blur-sm border border-slate-200/60 my-1 shadow-sm">
            <motion.div
              className="ml-10 p-2"
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
