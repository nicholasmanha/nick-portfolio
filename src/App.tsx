import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";         
import Contact from "./pages/Contact";
import About from "./pages/About.tsx";
import Layout from "./pages/Layout.tsx";
import Reactedm from "./pages/experience/Reactedm.tsx";
import Leadviver from "./pages/experience/Leadviver.tsx";
import It from "./pages/experience/It.tsx";
import Tutor from "./pages/experience/Tutor.tsx";
import Assist from "./pages/experience/Assist.tsx";
import Banking from "./pages/experience/Banking.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="reactedm" element={<Reactedm />} />
        <Route path="leadviver" element={<Leadviver />} />
        <Route path="it" element={<It />} />
        <Route path="tutor" element={<Tutor />} />
        <Route path="assist" element={<Assist />} />
        <Route path="banking" element={<Banking />} />
      </Route>
    </Routes>
  );
}

export default App;
