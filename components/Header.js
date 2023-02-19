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
      <div className={styles.subheader}>
        {user ? (
          <div></div>
        ) : (
          <>
            <nav>
              <ul>
                <li>
                  <Link href="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/about">About us</Link>
                </li>
              </ul>
            </nav>
          </>
        )}
        <nav className={styles.login}>
          <ul>
            {user ? (
              // If logged in
              <>
                <li>
                  <Link href="/something">
                    something visable only logged in
                  </Link>
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
                  <Link href="/account/register">Sign up</Link>
                </li>
                <li>
                  <Link href="/account/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
