import React from "react";
import Link from "next/link";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">My Finances</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">events</Link>
          </li>
          <li>
            <Link href="/account/login">
              <button>
                <FaSignInAlt /> Login{" "}
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
