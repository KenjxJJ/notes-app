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
              <>
                <Card className="note">
                  <CardTitle
                    className="note-title"
                    id={"toggler" + ++index}
                    tag="h3"
                  >
                    {note.subject}
                  </CardTitle>
                  <p>{note.category}</p>
                  <small className="creation-date"> 
                    {new Date(
                      note.createdOn.split("T")[0]
                    ).toLocaleDateString()}
                  </small>
                  <UncontrolledCollapse toggler={"#toggler" + index}>
                    <CardBody>
                      <CardText>{note.about}</CardText>
                    </CardBody>
                    <div className="d-flex justify-content-between">
                      <Button
                        onClick={(e, index) => deleteNote(e, index)}
                        className="btn btn-danger pl-3 pr-3"
                      >
                        Delete
                      </Button>
                      {/* <Button onClick={} className="btn btn-info pl-4 pr-4">Edit</Button> */}
                    </div>
                  </UncontrolledCollapse>
                </Card>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default HomePage;

{
  /* <section className="note">
< className="note-title">
    <p>{note.subject}</p>
</div>
<div className="note-details">
    <p className="note-category">{note.category}</p>
    <small className="note-date">Created : {note.createdOn}</small>
    <p>{note.about}</p>
</div>
</section> */
}
