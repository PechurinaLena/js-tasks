import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import DisplayNote from "./DisplayNote";
import data from "./data";

/**
 * NotesContainer component
 * @constructor
 */

const NotesContainer = () => {
  const [active, setActive] = useState(false);
  const [notes, setNewNotes] = useState(data);

  // Get changed array of notes to localStorage
  useEffect(() => {
    const arrStringify = localStorage.getItem("notes");
    const loadedNotes = JSON.parse(arrStringify);
    if (loadedNotes) {
      setNewNotes(loadedNotes);
    }
  }, []);

  // Set changed array of notes to localStorage
  useEffect(() => {
    const arrStringify = JSON.stringify(notes);
    localStorage.setItem("notes", arrStringify);
  }, [notes]);

  return (
    <>
      {notes.map((item, key) => (
        <Notes
          name={item}
          key={key}
          notes={notes}
          setNewNotes={setNewNotes}
          active={Boolean`${active}`}
          setActive={setActive}
        />
      ))}
      <DisplayNote selected={active} valueOf={1} />
    </>
  );
};

export default NotesContainer;
