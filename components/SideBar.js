import React from "react";

import styles from "@/styles/SideBar.module.css";

export default function SideBar({ setCurrentPage }) {
  return (
    <div>
      <div className={styles.sidebar}>
        <aside>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <div onClick={() => setCurrentPage("STATEMENTS")}>
                {" "}
                STATEMENTS
              </div>
            </li>
            <li className={styles.li}>
              <div onClick={() => setCurrentPage("SIMULATION")}>SIMULATION</div>
            </li>
            <li className={styles.li}>
              <div onClick={() => setCurrentPage("EVOLUTION")}>EVOLUTION</div>
            </li>
            <li className={styles.li}>
              <div onClick={() => setCurrentPage("INVESTMENTS")}>
                INVESTMENTS
              </div>
            </li>
            <li className={styles.li}>
              <div onClick={() => setCurrentPage("OTHERS")}>OTHERS</div>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
