import React from "react";
import Notes from "./Notes";
import styles from "./styles.module.css";

const data = [
  {
    title: "Breakfast",
    description: "some description",
    date: "date",
  },
  {
    title: "Morning Yoga",
    description: "some description for second",
    date: "date",
  },
  {
    title: "Meeting Call",
    description: "some description for third",
    date: "date",
  },
  {
    title: "Lunch",
    description: "some description for third",
    date: "date",
  },
  {
    title: "Work time",
    description: "some description for third",
    date: "date",
  },
  {
    title: "Dinner with family",
    description: "some description for third",
    date: "date",
  },
  {
    title: "Relaxing",
    description: "some description for third",
    date: "date",
  },
];

function NotesContainer() {
  return (
    <>
      <div className={styles.container}>
        {data.map((item, key) => (
          <div key={key}>
            <Notes
              title={item.title}
              description={item.description}
              date={item.date}
              key={key}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default NotesContainer;
