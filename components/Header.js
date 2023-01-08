import React from "react";
import Link from "next/link";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";

import styles from "@/styles/Header.module.css";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

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

          {user ? (
            // If logged in
            <>
              <li>
                <Link href="/something">something visable only logged in</Link>
              </li>
              <li>
                <button onClick={() => logout()}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            // If logged out
            <>
              <li>
                <Link href="/account/login">
                  <button>
                    <FaSignInAlt /> Login
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
