import React, { useState} from "react";

export const ThemeContext = React.createContext(["light", () => {}]);

const ThemeContextProvider = (props) => {
    const theme = useState("light");
  
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
