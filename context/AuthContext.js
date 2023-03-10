import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  // useEffect(() => checkUserLoggedIn(), []);

  //Register user
  const register = async ({ username, email, password }) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.jwt);
      router.push("/account/dashboard");
    } else {
      setError(data.message);
    }
  };

  //Login user
  const login = async ({ email, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.jwt);
      router.push("/account/dashboard");
    } else {
      setError(data.message);
    }
  };

  //Logout user
  const logout = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      router.push("/");
    }
  };

  //Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  const resetError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, error, register, login, logout, resetError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
