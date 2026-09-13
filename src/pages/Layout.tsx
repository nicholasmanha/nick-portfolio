import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="px-4 lg:px-0">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
