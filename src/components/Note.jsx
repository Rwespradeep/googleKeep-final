import React, { Component } from "react";
import Fab from "@mui/material/Fab";

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Note;