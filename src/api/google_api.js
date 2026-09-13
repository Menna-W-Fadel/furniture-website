import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    switch (error.code) {
      case "auth/popup-closed-by-user":
        throw new Error("Sign-in popup was closed. Please try again.");
      case "auth/popup-blocked":
        throw new Error("Pop-up was blocked by your browser. Please allow pop-ups and try again.");
      case "auth/cancelled-popup-request":
        throw new Error("Sign-in was cancelled. Please try again.");
      default:
        throw new Error("Google sign-in was unsuccessful. Please try again.");
    }
  }
};