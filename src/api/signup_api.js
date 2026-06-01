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
        throw new Error("Email already exists");

      case "auth/invalid-email":
        throw new Error("Invalid email");

      case "auth/weak-password":
        throw new Error("Password should be at least 6 characters");

      default:
        throw new Error("Signup failed");
    }
  }
};