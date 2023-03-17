import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isLoading, setIsLoding] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoding(true);
    setError(null);

    const res = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setIsLoding(false);
      setError(data);
    }

    if (res.ok) {
      setIsLoding(false);
      // update authcontex
      dispatch({ type: "LOGIN", payload: data });

      // update local storage

      localStorage.setItem("user", JSON.stringify(data));
    }
  };

  return {
    login,
    isLoading,
    error,
  };
};
