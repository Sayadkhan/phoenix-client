import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isLoading, setIsLoding] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsLoding(true);
    setError(null);

    const res = await fetch("http://localhost:4000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name, email, password }),
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
    signup,
    isLoading,
    error,
  };
};
