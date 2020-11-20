import React, { useContext, useState, useEffect } from "react";

import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { NotesContext } from "../contexts/NotesContext";
import { useHistory, Link } from "react-router-dom";

const EditNotePage = (route) => {
  let history = useHistory();
  const { notes, dispatch } = useContext(NotesContext);
  const currentNoteId = route.match.params.id;
  const [selectedNote, setSelectedNote] = useState({
    index: null,
    subject: "",
    createdOn: "",
    about: "",
  });

  //format date in format YYYY//MM//dd
   const formattedDate = selectedNote.createdOn !== "" ? 
   new Date(selectedNote.createdOn.split("T")[0]).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  console.log(formattedDate);
  useEffect(() => {
    const notesId = currentNoteId;
    const selectedNote = notes.find((note) => note.index === parseInt(notesId));
    setSelectedNote(selectedNote);
   
  }, [currentNoteId, notes]);

  //Submission
  const editNote = (note) => {
    dispatch({ type: "EDIT_NOTE", payload: note });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editNote(selectedNote);
    history.push("/");
    window.location.reload();
  };

  // Obtain values
  const handleOnChange = (userKey, value) =>{
    setSelectedNote({ ...selectedNote, [userKey]: value });
  // if (!selectedNote || !selectedNote.index) {
  //   alert("Id dont match !");
  // }
  }
  return (
    <>
      <section class="edit-note-form m-auto mw-50">
        <Form onSubmit={onSubmit} action="/">
          <FormGroup>
            <Label for="subject">Subject : </Label>
            <Input
              type="text"
              id="subject"
              placeholder="Enter a subject(title)"
              value={selectedNote.subject}
              onChange={(e) => handleOnChange("subject", e.target.value)}
            />
            <Label for="category">Category : </Label>
            <Input
              type="text"
              id="category"
              placeholder="World, Fiction, Love.."
              value={selectedNote.category}
              onChange={(e) => handleOnChange("category", e.target.value)}
            />
            <Label for="date">Date : </Label>

            <Input
              type="date"
              name=""
              id="date"
              placeholder="Select a date"
              value={formattedDate}
              onChange={(e) => handleOnChange("createdOn", e.target.value)}
            />
            <Label for="about-note"> Description :</Label>
            <Input
              type="textarea"
              id="about-note"
              placeholder="What's the note about?"
              value={selectedNote.about}
              onChange={(e) => handleOnChange("about", e.target.value)}
            />
            <div className="flex ">
              <Button className="edit-btn btn-info pl-3 pr-3 mt-2">Save</Button>
            </div>
            <div className="text-center mt-5">
              <Link to="/">Cancel</Link>
            </div>
          </FormGroup>
        </Form>
      </section>
    </>
  );
};

export default EditNotePage;
