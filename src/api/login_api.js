import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    switch (error.code) {
      case "auth/user-not-found":
        throw new Error("No account found with this email. Please sign up first.");
      case "auth/wrong-password":
        throw new Error("Incorrect password. Please try again.");
      case "auth/invalid-email":
        throw new Error("Please enter a valid email address.");
      case "auth/too-many-requests":
        throw new Error("Too many failed attempts. Please try again later.");
      case "auth/invalid-credential":
        throw new Error("Invalid email or password. Please check your credentials.");
      default:
        throw new Error("We couldn't sign you in right now. Please try again.");
    }
  }
};
