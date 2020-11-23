import React, { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";
import AppTheme from "../Colors";

const Footer = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <>
      <footer className="m-0 p-0"
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
        }}
      >
        <div class="jumbotron text-center mb-0">
          <h3 class="display-3">iNote</h3>
          <p class="lead">Move forward</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
