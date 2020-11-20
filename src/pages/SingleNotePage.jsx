import React, {useContext} from 'react';

import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import {NotesContext} from "../contexts/NotesContext";

const SingleNotePage = () =>{
    const { notes } = useContext(NotesContext);
    const index =  1;

     return(
         <>
         <h1>Single Page Display</h1>
         <Card className="note">
                <CardBody>
                  <CardTitle className="note-title" tag="h5">
                    {notes[index].subject}
                  </CardTitle>
                  <CardText className="note-category">{notes[index].category}</CardText>
                  <small>
                    {new Date(
                      notes[index].createdOn.split("T")[0]
                    ).toLocaleDateString()}
                  </small>
                </CardBody>
              </Card>
         </>
     )
}

export default SingleNotePage;