import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";

const ContextSource = createContext();

export const useAuth = () => {
  return useContext(ContextSource);
};

const ContextAPI = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const provider = new GoogleAuthProvider();

  const createUser = (email, password, name, phoneNumber) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Register success");

        updateProfile(auth.currentUser, {
          displayName: name,
          phoneNumber: phoneNumber,
        });
      })
      .catch((err) => console.log(err));
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (customer) => {
      setLoading(false);
      if (customer) {
        setUser(customer);
      }
    });
  }, [auth]);

  return (
    <ContextSource.Provider
      value={{ createUser, login, googleUser, logout, loading, user, setUser }}
    >
      {children}
    </ContextSource.Provider>
  );
};

export default ContextAPI;
