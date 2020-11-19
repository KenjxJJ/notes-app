import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const HomePage = () => {
  const { notes } = useContext(NotesContext);

  return (
    <>
      <main className="container-fluid d-flex flex-row flex-wrap">
        <h1>Notes</h1>
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
                  <Link to="/note">View Details</Link>
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
