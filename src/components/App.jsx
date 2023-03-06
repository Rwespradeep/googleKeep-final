import React, { Component, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newnote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newnote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <React.Fragment>
      <Header></Header>
      <CreateArea onAdd={addNote} />
      {notes.map((eachNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={eachNote.title}
            content={eachNote.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
