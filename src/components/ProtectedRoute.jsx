import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  const auth = getAuth();

  const emailVerified = getCookie('emailVerified');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        router.push("/");
      }
    });
  }, [auth]);

  return <div>{user && emailVerified == true ? children : null}</div>;
};

export default ProtectedRoute;
