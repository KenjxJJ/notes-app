import React, {useContext} from "react";
import AddNote from "../components/AddNote";
import {ThemeContext} from "../contexts/ThemeContext";
import AppTheme from "../Colors";


function AddNewNotePage() {
  
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <>
      <section className="add-new-note"
       style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}` }} >
        <h1 className="pt-2 ml-5 pl-5"> Welcome to iNote</h1>
        <p className="pt-4 ml-5 pl-5 font-italic">Create your first note...</p>
        <div className="add-note-form ">
          <AddNote />
        </div>
      </section>
    </>
  );
}

export default AddNewNotePage;
