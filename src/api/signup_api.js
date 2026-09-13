import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential.user;

  } catch (error) {
    console.error(error.code);

    switch (error.code) {
      case "auth/email-already-in-use":
        throw new Error("An account with this email already exists. Please sign in instead.");

      case "auth/invalid-email":
        throw new Error("Please enter a valid email address.");

      case "auth/weak-password":
        throw new Error("Your password is too weak. Please use at least 6 characters with a mix of letters and numbers.");

      default:
        throw new Error("Something went wrong while creating your account. Please try again.");
    }
  }
};