import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";         
import Contact from "./pages/Contact";
import About from "./pages/About.tsx";
import Layout from "./pages/Layout.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
