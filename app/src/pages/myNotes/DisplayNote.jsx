import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

/**
 * DisplayNote component
 * @constructor
 */

const DisplayNote = ({ selected }) => {
  return (
    <div className={styles.showBlock}>
      {selected ? (
        <div className={styles.activeDescription}> {selected.description}</div>
      ) : (
        <div className={styles.alternativeText}>Select note to display</div>
      )}
    </div>
  );
};

DisplayNote.propTypes = {
  selected: PropTypes.any,
};

export default DisplayNote;
