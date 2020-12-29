import React, { createContext, useReducer, useEffect } from "react";
import { db } from "../config/firebaseConfig";
import firebase from '../config/firebaseConfig';

const allNotesArr = [];

// create context
export const NotesContext = createContext();

const reducerFunction = (state, action) => {
  const ref = firebase.firestore().collection("notes");
 
  switch (action.type) {
    case "CREATE_NOTE":
      state = [
        ...state,
        {
          index: state.length + 1,
          subject: action.note.subject,
          createdOn: action.note.date,
          isNotDone: true,
          category: action.note.category,
          about: action.note.aboutNote,
        }
      ];

      // add note to firestore
      ref.add({
        index: state.length + 1,
          subject: action.note.subject,
          createdOn: action.note.date,
          isNotDone: true,
          category: action.note.category,
          about: action.note.aboutNote
      });
      return state;

    case "GET_NOTES":
      console.log([...action.payload]);
      return [...action.payload]; //update state with notes

    case "DELETE_NOTE":
      state = [
        ...state.filter(
          (note) =>
            note.id !==
            action.payload
        ),
      ];
      // delete a note from firestore
      ref.doc(action.payload).delete().then(() => {
        console.log("Document successfully deleted!");
      });

    return state;

    case "EDIT_NOTE":
      const updatedNote = action.payload;
      const updatedNotes = state.map((note) => {
        if (note.index === updatedNote.index) {
          return updatedNote;
        }
        return note;
      });

      // update to firestore
      ref.doc(action.key).set({
        ...action.payload });
        
      state = [...updatedNotes];
      return state;

    case "MARK_NOTE_DONE":
      const markNoteDone = action.payload;

      state = state.map((note) => {
        if (note.id === markNoteDone.id) {
          // change state to mark complete
          note.isNotDone = false;
          return note;
        }
        return note;
      });
        // update to firestore
        ref.doc(action.payload.id).set({
          ...action.payload });
          
      console.log("====================================");
      console.log("State With Marked Done", state);
      console.log("====================================");
      return state;
    default:
      return state;
  } // end switch
};

// Context Provider
const NotesContextProvider = (props) => {
  //obtain data from localStorage
  const [notes, dispatch] = useReducer(reducerFunction, allNotesArr);

  const allNotes = [];

  useEffect(() => {
    const colRef = db.collection("notes");

    colRef.onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        // console.log("Doc obj", doc);
        let {id} = doc;
        if(doc.data() !== null) allNotes.push({...doc.data(), id});
      });
      dispatch({ type: "GET_NOTES", payload: allNotes });
    });
  },[]);

  return (
    <NotesContext.Provider value={{ notes: notes, dispatch: dispatch }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
