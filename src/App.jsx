import  { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Ecommrece from "./pages/home/Ecommrece";
import HR from './pages/home/HR'
import CRM from './pages/home/CRM'
import Projects from './pages/home/Projects'
import School from './pages/home/School'
import Social from './pages/home/Social'
import Courses from './pages/home/Courses'
const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout theme={theme} setTheme={setTheme} />}>
          <Route index element={<Home />} />
          <Route path="/ecommrece" element={<Ecommrece />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/school" element={<School />} />
          <Route path="/social" element={<Social />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
      </Routes>
    </Router>
  </>;
};

export default App;
