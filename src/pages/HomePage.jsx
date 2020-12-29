import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  UncontrolledCollapse,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import AppTheme from "../Colors";
import { ThemeContext } from "../contexts/ThemeContext";


const HomePage = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const history = useHistory();

  const { notes, dispatch } = useContext(NotesContext);

  // Delete functionality
  const deleteNote = (id) => {
    dispatch({ type: "DELETE_NOTE", payload: id });
    history.push("/");
  };

  // Mark Complete functionality
  const markComplete = (note) => {
    dispatch({ type: "MARK_NOTE_DONE", payload: note });

  };

  console.log("notes.length", notes.length);
  return (
    <>
      <main
        className="container-fluid pt-3"
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
        }}
      >
        <h1>Notes</h1>
        <p className="flex-column">
          <small className="d-block font-italic">
            (Click title to expand note!)
          </small>
        </p>
        <div className="notes d-flex flex-row flex-wrap">
          {notes.length > 0 ? (
            <>
              {notes.map((note, index) => {
                return (
                  <>
                    <Card
                      className={`${
                        !note.isNotDone ? "completed" : ""
                      } note shadow`}
                      style={{
                        backgroundColor: `${currentTheme.backgroundColor}`,
                        color: `${currentTheme.textColor}`,
                      }}
                      key={index + 1}
                    >
                      <CardTitle
                        className="note-title"
                        id={"toggler" + ++index}
                        tag="h3"
                      >
                        {note.subject}
                      </CardTitle>
                      <p style={{ color: "orangered" }}>{note.category}</p>
                      <small className="creation-date">
                        {new Date(
                          note.createdOn.split("T")[0]
                        ).toLocaleDateString()}
                      </small>
                      <UncontrolledCollapse toggler={"#toggler" + index}>
                        <CardBody className="text-justify pl-1">
                          <CardText>{note.about}</CardText>
                        </CardBody>
                        <div className="d-flex justify-content-between">
                          <Button
                            onClick={() => deleteNote(note.id)}
                            className="btn-sm btn-danger pl-3 pr-3"
                          >
                            Delete
                          </Button>
                          <Link to={`/edit/${note.id}`} className="mr-3">
                            <Button className="btn-sm btn-info pl-4 pr-4 ">
                              Edit
                            </Button>
                          </Link>{" "}
                        </div>
                      </UncontrolledCollapse>
                      <Button
                        className="btn-sm mt-4 mb-2 pt-2 pb-2 border-0"
                        onClick={() => {
                          markComplete(note);
                        }}
                      >
                        Mark Complete
                      </Button>
                    </Card>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <p className="jumbotron">No data yet!..</p>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
