import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Footer() {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setChecked(true);
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setChecked(false);
    }
  }, []);

  function handleChange(e) {
    const checked = e.target.checked;
    setChecked(checked);

    if (checked) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }


  return (
    <footer>
        <div className="footer-content">
            <div className="userName">
                <p>© 2025 Алексей Кочетков.</p>
            </div>

            <select className="lang-select">
              <option>Ru</option>
              <option>En</option>
            </select>

            <label className="toggle-checkbox">
              <input 
                  type="checkbox" 
                  hidden 
                  checked={isChecked}
                  onChange={handleChange}/>
              <span className="icon sun"><Sun size={16} /></span>
              <span className="icon moon"><Moon size={16} /></span>
              <span className="thumb"></span>
            </label>
        </div>
    </footer>
  );
}