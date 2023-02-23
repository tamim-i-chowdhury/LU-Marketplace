import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState({});

  // 1. Create user with Email and Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 2. Update User's Name

  const updateName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };

  // 3. Email Verification
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // 4. Sign in with Google Account
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // 5. Sign in with GitHub Account
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // 6. Login with Email and Password
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 7. Reset Password through user's email
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // 8. Logout
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      //this part will execute once the component is unmounted.
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    updateName,
    verifyEmail,
    signInWithGoogle,
    signInWithGithub,
    loginWithEmailAndPassword,
    resetPassword,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
