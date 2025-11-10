import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="lg:hidden flex items-center justify-center min-h-screen bg-background p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">📱 Desktop Required</h1>
          <p className="text-gray-600">
            Please view this on a desktop or larger screen
          </p>
        </div>
      </div>
      <div className="hidden lg:block">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
