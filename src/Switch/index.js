import "./Styles.css";
import { useTheme } from "../ThemeContext";
import { useCallback } from "react";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  // Optymalizacja funkcji za pomocą useCallback (opcjonalne)
  const handleChange = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={handleChange} // Obsługa zmiany motywu
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
