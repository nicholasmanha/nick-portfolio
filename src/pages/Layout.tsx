import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="">
      <nav className="bg-surface-elevated text-foreground px-6 py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold">
            Nicholas Manha
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-slate-300 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-slate-300 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
