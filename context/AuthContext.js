import { createContext, useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  //Register user
  const register = async ({ username, email, password }) => {
    const res = await fetch(`${API_URL}/register`, {
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
      setUser(data.token);
      router.push("/account/dashboard");
    } else {
      setError(data.message);
    }
  };

  //Login user
  const login = async ({ email, password }) => {
    const res = await fetch(`${API_URL}/login`, {
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
      setUser(data.token);
      router.push("/account/dashboard");
    } else {
      setError(data.message);
    }
  };

  //Logout user
  const logout = async (user) => {
    const res = await fetch(`${API_URL}/logout`, {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      router.push("/");
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
