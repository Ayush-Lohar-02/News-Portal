import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import App from '../firebase/firebase.config'
export const AuthContext = createContext()



const auth = getAuth(App);


const AuthProvider = ({ children }) => {

    //const user = { displayName: 'Sohel' }

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const providerLogain = (provider) => {
        setLoading(false);

        return signInWithPopup(auth, provider);

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
            setLoading(true);
        })

        return () => {
            unsubscribe();
        }


    }, [])

    const LogOut = () => {
        setLoading(true);
        return signOut(auth);

    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const SingIn = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {

        return updateProfile(auth.currentUser, profile);
    }

    const varificationEmail = () => {

        return sendEmailVerification(auth.currentUser);
    }






    const authInfo = {
        user, providerLogain, LogOut, createUser,
        SingIn, loading, updateUserProfile, varificationEmail
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;