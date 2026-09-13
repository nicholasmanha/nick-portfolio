import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Text from "./ui/Text";

function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-surface-elevated text-foreground lg:w-3/4 py-4 my-8 lg:mx-auto relative rounded-[32px]">
      <div className="max-w-screen-xl lg:w-9/10 mx-auto px-6 lg:px-0">
        <div className="flex items-center justify-between gap-8">
          <Link to="/" className="text-xl font-bold">
            <Text className="font-black text-[20px] sm:text-[24px]">
              Nicholas Manha
            </Text>
          </Link>

          {/* Desktop menu */}
          <div className="hidden sm:flex gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-slate-300 transition"
              >
                <Text
                  className={`text-[20px] ${
                    isActive(link.to) ? "text-primary font-bold" : "font-normal"
                  }`}
                >
                  {link.label}
                </Text>
              </Link>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            className="sm:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 relative shrink-0"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown — smooth height animation */}
        <div
          className={`sm:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col items-center gap-4 pt-6 pb-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-slate-300 transition"
                >
                  <Text
                    className={`text-[20px] ${
                      isActive(link.to)
                        ? "text-primary font-bold"
                        : "font-normal"
                    }`}
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;