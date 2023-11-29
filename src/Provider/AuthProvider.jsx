import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser]= useState('');
    const [loading, setLoading]=useState(true);

    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();


    // Create user with email and password to register the Account
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in with email and password 

    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    /// Sign in with Google
    const SignInwithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);

    }

    // sign in With GitHub

    const signInWithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth, githubAuthProvider);
    }

    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('Current user',currentUser)
            setLoading(false);
        })

        return ()=>{
            unSubscribe([]);
        }

    },[])



    const userInfo ={
        user,
        SignInwithGoogle,
        signInWithGithub,
        user, 
        loading,
        logOut,
        createUser,
        signIn

    }
    return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;