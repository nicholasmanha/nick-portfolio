import React from "react";
import { Link, useLocation } from "react-router-dom";
import Text from "./ui/Text";

function NavBar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <nav className="bg-surface-elevated rounded-full text-foreground w-3/4 py-4 my-8 mx-auto">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between gap-8">
          <Link to="/" className="text-xl font-bold">
            <Text className="font-black text-[24px]">Nicholas Manha</Text>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-slate-300 transition">
              <Text
                className={`text-[20px] ${
                  isActive("/") ? "text-primary font-bold" : "font-normal"
                }`}
              >
                Home
              </Text>
            </Link>
            <Link to="/about" className="hover:text-slate-300 transition">
              <Text
                className={`text-[20px] ${
                  isActive("/about") ? "text-primary font-bold" : "font-normal"
                }`}
              >
                About
              </Text>
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition">
              <Text
                className={`text-[20px] ${
                  isActive("/contact")
                    ? "text-primary font-bold"
                    : "font-normal"
                }`}
              >
                Contact
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
