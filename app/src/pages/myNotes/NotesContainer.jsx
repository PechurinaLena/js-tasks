import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListItem, IconButton } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import DisplayNote from "./DisplayNote";
import data from "./data";
import styles from "./styles.module.css";

/**
 * NotesContainer component
 * @constructor
 */

const NotesContainer = () => {
  const [active, setActive] = useState(false);
  const [notes, setNewNotes] = useState([]);
  const [edit, setEdit] = useState(null);
  const [isEditText, setIsEditText] = useState(" ");
  console.log(notes);
  //Press edit icon for change note
  function editNote(name) {
    const updatedNotes = [...data].map((item) => {
      if (item.id === name.id) {
        name.description = isEditText;
      }
      return item;
    });
    setNewNotes(updatedNotes);
    setEdit(null);
    setIsEditText("");
  }

  const Notes = ({ name }) => (
      <ListItem button selected={active === name}>
        <div className={styles.row} onClick={() => setActive(name)}>
          <div className={[styles.item, styles.title].join(" ")}>
            {name.title}
          </div>
          {edit === name ? (
            <div className={[styles.item, styles.description].join(" ")}>
              <input
                className={styles.input}
                type="text"
                value={isEditText}
                onChange={(e) => setIsEditText(e.target.value)}
              />
            </div>
          ) : (
            <div className={[styles.item, styles.description].join(" ")}>
              {`${name.description.substring(0, 20)}...`}
            </div>
          )}
          <div className={[styles.item, styles.date].join(" ")}>
            {name.date}
          </div>
        </div>
        {edit === name ? (
          <IconButton
            size="small"
            variant="contained"
            color="primary"
            className={styles.button}
            onClick={() => editNote(name)}
          >
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton
            size="small"
            variant="contained"
            color="secondary"
            className={styles.button}
            onClick={() => setEdit(name)}
            onFocus={() => isEditText}
          >
            <EditIcon />
          </IconButton>
        )}
      </ListItem>
    );

  return (
    <>
      {data.map((item, key) => (
        <Notes name={item} key={key} />
      ))}
      <DisplayNote selected={active} valueOf={1} />
    </>
  );
};

NotesContainer.propTypes = {
  name: PropTypes.string,
};

export default NotesContainer;
