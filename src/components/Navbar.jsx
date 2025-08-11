import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center fixed w-full z-50 shadow-lg">
      <h1 className="text-2xl font-bold">Nayan Islam</h1>
      <ul className="flex gap-6 items-center">
        {["about", "projects", "contact"].map((section, i) => (
          <li key={i}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
        <li>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
