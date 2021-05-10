import React from "react";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <h2>Home page</h2>
      <div>
        It is a main page. For checking a list of notes you need to go to the
        &apos;Notes&apos; page :)
      </div>
    </div>
  );
};

export default Home;
