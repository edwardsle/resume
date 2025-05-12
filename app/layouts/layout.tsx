import { Outlet } from "react-router";
import Card from "~/sidebar/card";

export default function Layout() {
  return (
    <div className="relative min-h-screen text-blue-900">
      <aside className="absolute top-0 left-0 bottom-0 w-120 z-10">
        <Card />
      </aside>
      <main className="ml-110 min-h-screen">
        <div className="h-screen overflow-auto">
          <div className="h-99/100 overflow-auto rounded-4xl bg-slate-50 border border-slate-200 my-1">
            <div className="ml-10 p-2">
              <Outlet />
            </div>            
          </div>          
        </div>
      </main>      
    </div>
  );
}
