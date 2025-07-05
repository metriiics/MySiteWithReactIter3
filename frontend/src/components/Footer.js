import { useState } from "react";

export default function Footer() {
  const [isChecked, setChecked] = useState(false);

  function handleChange(e) {
    setChecked(e.target.checked);
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
            </label>
        </div>
    </footer>
  );
}