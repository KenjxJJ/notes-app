import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  UncontrolledCollapse,
  Button,
} from "reactstrap";

const HomePage = () => {
  const { notes, dispatch } = useContext(NotesContext);

  // Delete functionality
  const deleteNote = (e) => {
    console.log("Target Index", e.currentTarget);
    console.log(
      "INde",
      e.currentTarget.parentElement.parentElement.parentElement.querySelector(".note .creation-date").textContent
    );
    const removedNoteDate = e.currentTarget.parentElement.parentElement.parentElement.querySelector(".note .creation-date").textContent;
    const remainingNotes = notes.filter((note) =>new Date(
      note.createdOn.split("T")[0]
    ).toLocaleDateString() !== removedNoteDate);
    console.log(remainingNotes);
    dispatch({ type: "DELETE_NOTE", notes: remainingNotes });
    // window.location.reload();
  };

  return (
    <>
      <main className="container-fluid">
        <h1>Notes</h1>
        <p className="flex-column">
          <small className="d-block font-italic">
            (Click title to expand note!)
          </small>
        </p>
        <div className="notes d-flex flex-row flex-wrap">
          {notes.map((note, index) => {
            return (
              <Card className="note" key={index++}>
                <CardBody>
                  <CardTitle className="note-title" tag="h5">
                    {note.subject}
                  </CardTitle>
                  <CardText className="note-category">{note.category}</CardText>
                  <small>

                    {new Date(
                      note.createdOn.split("T")[0]
                    ).toLocaleDateString()}
                  </small>
                </CardBody>
              </Card>

            );
          })}
        </div>
      </main>
    </>
  );
};

export default HomePage;
