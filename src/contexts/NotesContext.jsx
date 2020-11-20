import React, { createContext, useReducer } from "react";

let allNotes = [
  {
    _id: "5fb43487c3fd9ef7ac1a8478",
    index: 0,
    subject: "ex non culpa dolor minim",
    createdOn: "2016-03-08T05:14:35 -03:00",
    category: "qui",
    about:
      "Et ad nostrud nulla commodo ex non ullamco dolor exercitation sint enim reprehenderit. Enim aute aute mollit consectetur exercitation Lorem nulla sint laboris consectetur consectetur reprehenderit consectetur officia. Qui esse quis ut sint tempor ad deserunt est do dolor eiusmod reprehenderit. Fugiat proident culpa elit tempor culpa deserunt consectetur irure laborum id labore labore deserunt. Reprehenderit et nulla exercitation ipsum. Ullamco occaecat ex anim ut dolor eu enim eu consequat incididunt. Irure in veniam quis eiusmod sit quis ullamco cillum ex ullamco est labore ea.\r\n",
  },
  {
    _id: "5fb43487f7289dd377e85c1e",
    index: 1,
    subject: "officia do eiusmod eu sunt",
    createdOn: "2019-09-07T10:14:04 -03:00",
    category: "aliqua",
    about:
      "Enim ullamco nulla cillum ex nulla aute pariatur ullamco ex anim. Magna cupidatat excepteur amet qui eiusmod occaecat nulla eiusmod cupidatat. Aliqua nulla id aliquip officia aute in excepteur anim consequat proident velit. Lorem eiusmod consectetur in Lorem. Do laborum deserunt fugiat fugiat irure cillum cillum aliqua dolore adipisicing. Do ex laboris minim occaecat eu quis irure ea dolore. Culpa cillum laboris dolor eu sint dolor dolore excepteur ullamco velit labore aliqua.\r\n",
  },
  {
    _id: "5fb4348720159fc4c48d528f",
    index: 2,
    subject: "commodo Lorem id adipisicing tempor",
    createdOn: "2017-06-06T12:42:13 -03:00",
    category: "culpa",
    about:
      "Culpa quis do amet labore est commodo magna duis mollit. Excepteur labore ex proident exercitation proident deserunt amet consectetur cillum. Do fugiat minim exercitation dolore do mollit ad quis consectetur est consectetur commodo tempor. Voluptate ullamco laboris irure velit culpa fugiat. Nisi nisi proident do commodo ipsum minim veniam ex pariatur excepteur sunt nostrud ullamco non. Nulla est non velit velit sint minim est voluptate veniam. Ullamco aliqua fugiat consectetur dolor eu irure elit quis anim.\r\n",
  },
  {
    _id: "5fb434878f4407426159f050",
    index: 3,
    subject: "amet irure irure pariatur velit",
    createdOn: "2018-05-02T04:30:01 -03:00",
    category: "fugiat",
    about:
      "Dolor occaecat deserunt sit incididunt non in. Nulla aute do cupidatat enim pariatur enim excepteur ea et aute. Culpa consequat consectetur amet excepteur anim irure nostrud reprehenderit irure officia. Nostrud duis irure irure sit veniam dolore occaecat labore. Magna sit reprehenderit proident qui sint et cillum et amet.\r\n",
  },
  {
    _id: "5fb434874ff2d42f95ae06f2",
    index: 4,
    subject: "duis incididunt nostrud dolor sunt",
    createdOn: "2018-05-27T11:26:13 -03:00",
    category: "non",
    about:
      "Id in nostrud ipsum ullamco magna ea. Mollit do qui tempor do occaecat eiusmod deserunt magna id. Tempor aliqua anim ut amet dolor veniam tempor veniam cillum minim excepteur aliquip ad proident. Enim do in in excepteur amet non velit ex voluptate ad sint cillum pariatur.\r\n",
  },
];

// create context
export const NotesContext = createContext();

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      return [
        ...state,
        {
          _id: "5fb434874ff2d42f95ae06f2",
          index: 4,
          subject: "duis incididunt nostrud dolor sunt",
          createdOn: "2018-05-27T11:26:13 -03:00",
          category: "non",
          about:
            "Id in nostrud ipsum ullamco magna ea. Mollit do qui tempor do occaecat eiusmod deserunt magna id. Tempor aliqua anim ut amet dolor veniam tempor veniam cillum minim excepteur aliquip ad proident. Enim do in in excepteur amet non velit ex voluptate ad sint cillum pariatur.\r\n",
        },
      ];

    case "DELETE_NOTE":
       console.log( "Deleteing note before "+ state);
      return state;
    default:
      return state;
  }
};

// Context Provider
const NotesContextProvider = (props) => {
  const [notes, dispatch] = useReducer(reducerFunction, allNotes);

  return (
    <NotesContext.Provider value={{ notes: notes, dispatch: dispatch }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;