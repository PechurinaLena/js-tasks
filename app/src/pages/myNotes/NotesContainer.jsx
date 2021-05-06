import React, { useCallback, useState } from "react";
import Notes from "./Notes";
import DisplayNote from "./DisplayNote";
import data from "./data";
import styles from "./styles.module.css";

/**
 * NotesContainer component
 * @constructor
 */

function NotesContainer() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const onChange = useCallback(() => setIsDisplayed(!isDisplayed), [
    isDisplayed,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.allNotes}>
        {data.map((item, key) => (
          <div key={key}>
            <Notes
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
      <div className={styles.chosenNote}>
        <DisplayNote isShow={isDisplayed} />
      </div>
    </div>
  );
}

export default NotesContainer;
