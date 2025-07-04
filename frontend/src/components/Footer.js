import { useState } from "react";

export default function Footer() {
  const [isChecked, setChecked] = useState(false);
  const [isClick, setClick] = useState(false);
  const [state, setState] = useState("En");

  const options = ["En", "Ru"];

  function handleChange(e) {
    setChecked(e.target.checked);
  }

  function handleClick(e) {
    setClick(e.target.checked);
  }

  return (
    <footer>
        <div className="footer-content">
            <div className="userName">
                <p>© 2025 Алексей Кочетков.</p>
            </div>

            <div className="dropdown-container">
                <button className="dropdown-button" onClick={toggleDropdown}>
                    {selectedOption} ▼
                </button>
            </div>

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