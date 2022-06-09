import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../config";
import { AuthContext } from "../context/AuthContext";

function useIsAuthenticated() {
  const { user, setUser } = useContext(AuthContext);

  const [isAuthenticated, setisAuthenticated] = useState(false);
  const checkIfUserLoggedin = () => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        const uid = user.uid;
        setUser(user);
        setisAuthenticated(true);
      } else {
        setisAuthenticated(false);
        setUser(null);
      }
    });
  };
  useEffect(() => {
    checkIfUserLoggedin();
  }, []);

  // const isAuthenticated = user !== null ? true : false;
  return isAuthenticated;
}

export default useIsAuthenticated;
