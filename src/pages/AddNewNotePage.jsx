import React from "react";
import AddNote from "../components/AddNote";

function AddNewNotePage() {
  return (
    <>
      <section className="add-new-note">
        <h1 className="pt-2 ml-5 pl-5 "> Welcome to iNote</h1>
        <p className="pt-4 ml-5 pl-5 font-italic">Create your first note...</p>
        <div className="add-note-form">
          <AddNote />
        </div>
      </section>
    </>
  );
}

export default AddNewNotePage;
