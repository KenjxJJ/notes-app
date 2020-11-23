import React, { useContext } from "react";
import {ThemeContext} from "../contexts/ThemeContext";

const themeTogglerStyle = {
  cursor: "pointer",
  display: "inline", 
  position: "relative",
  top : ".1rem"
};

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
 
  return (
    <div
      style={themeTogglerStyle}
      onClick={() => {  setThemeMode(themeMode === "light" ? 
        "dark" : "light");
      }}
    >     
      <span title="switch theme" style={{fontSize: "1.2rem"}}>
         {themeMode === "light" ? "🌙" : "☀️"}
      </span>
  </div>
  );
};

export default ThemeToggler;
