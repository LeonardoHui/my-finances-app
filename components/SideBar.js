import React from "react";

import styles from "@/styles/SideBar.module.css";

export default function SideBar({ setCurrentPage }) {
  return (
    <div>
      <aside className={styles.sideBar}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <div onClick={() => setCurrentPage("STATEMENTS")}> STATEMENTS</div>
          </li>
          <li className={styles.li}>
            <div onClick={() => setCurrentPage("SIMULATION")}>SIMULATION</div>
          </li>
          <li className={styles.li}>
            <div onClick={() => setCurrentPage("INVESTMENTS")}>INVESTMENTS</div>
          </li>
          <li className={styles.li}>
            <div onClick={() => setCurrentPage("STOCKS")}>STOCKS</div>
          </li>
          <li className={styles.li}>
            <div onClick={() => setCurrentPage("BONDS")}>BONDS</div>
          </li>
        </ul>
      </aside>
    </div>
  );
}
