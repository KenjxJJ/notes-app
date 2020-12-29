import React, { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";
import AppTheme from "../Colors";

const Footer = () => {
  const theme = useContext(ThemeContext)[0];
  // consider adding the current theme as white color by default :)
  const currentTheme = AppTheme[theme];

  return (
    <>
    
      <footer className="m-0 p-0"
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
        }}
      >
        {/* // Please  space this -- this is a just a trial */}
        <div class="jumbotron text-center mb-0">
          <h3 class="display-3">iNote</h3>
          <p class="lead">Move forward</p>
          <small>&copy; 2020</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
