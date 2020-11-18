import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const HomePage = () => {
  const { notes } = useContext(NotesContext);

  return (
    <>
      <main className="container-fluid d-flex flex-row flex-wrap">
        <h1>Notes</h1>
        <div className="notes d-flex flex-row flex-wrap">
          {notes.map((note) => {
            return (
              <>
                <Card className="note">
                  <CardBody>
                    <CardTitle className="note-title" tag="h5">
                      {note.subject}
                    </CardTitle>
                    <CardText className="note-category">
                      {note.category}
                    </CardText>
                    <small>{new Date(note.createdOn.split("T")[0]).toLocaleDateString()}</small>
                  </CardBody>
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
