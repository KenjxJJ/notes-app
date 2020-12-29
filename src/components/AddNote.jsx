import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { NotesContext } from "../contexts/NotesContext";
import { ThemeContext } from "../contexts/ThemeContext";
import AppTheme from "../Colors";

const AddNote = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [aboutNote, setAboutNote] = useState("");

  const { dispatch } = useContext(NotesContext);

  let history = useHistory();

  // add a new note functionality
  const addNewNote = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_NOTE",
      note: { subject, date, category, aboutNote },
    });
    history.push("/");
  }

  return (
    <>
      <section class="add-note-form">
        <Form
          onSubmit={addNewNote}
            style={{
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
          }}
        >
          <FormGroup>
            <Label for="subject">Subject : </Label>
            <Input
              type="text"
              id="subject"
              placeholder="Enter a subject(title)"
              onChange={(e) => setSubject(e.target.value)}
            />
            <Label for="category">Category : </Label>
            <Input
              type="text"
              id="category"
              placeholder="World, Fiction, Love.."
              onChange={(e) => setCategory(e.target.value)}
            />
            <Label for="date">Date : </Label>

            <Input
              type="date"
              name=""
              id="date"
              placeholder="Select a date"
              onChange={(e) => setDate(e.target.value)}
            />
            <Label for="about-note"> Description :</Label>
            <Input
              type="textarea"
              id="about-note"
              placeholder="What's the note about?"
              onChange={(e) => setAboutNote(e.target.value)}
            />
            <Button type="submit" id="add-note" className="mt-3 btn btn-info">
              Add Note
            </Button>
          </FormGroup>
        </Form>
      </section>
    </>
  );
};

export default AddNote;
