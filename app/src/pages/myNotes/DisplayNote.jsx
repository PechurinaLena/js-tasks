import React from "react";
import PropTypes from "prop-types";
import data from "./data";
import styles from "./styles.module.css";

/**
 * DisplayNote component
 *
 * @param {boolean} isShow
 * @constructor
 *
 */

const DisplayNote = ({ isShow }) => {
  return (
    <div className={styles.showBlock}>
      {isShow ? (
        <>
          {data.map((item, i) => (
            <div key={i} className={styles.activeDescription}>
              {item.description}
            </div>
          ))}
        </>
      ) : (
        <div>Select note to display</div>
      )}
    </div>
  );
};

DisplayNote.propTypes = {
  isShow: PropTypes.bool,
};

export default DisplayNote;
