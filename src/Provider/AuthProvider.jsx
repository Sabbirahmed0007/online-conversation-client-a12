import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser]= useState('');
    const [loading, setLoading]=useState(true);
    const axiosSecure= UseAxiosSecure();

    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();


    // Create user with email and password to register the Account
    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in with email and password 

    const signIn =(email, password)=>{
        setLoading(true);
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
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('Current user',currentUser)
            setLoading(false);
            const userInfo={
                email: currentUser.email,
            }
            if(currentUser){
                //get token and store client
                axiosSecure.post('/jwt', userInfo)
                .then(res=>{
                    if( res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        // setLoading(false);
                    }
                })

            }
            else{
                localStorage.removeItem('access-token');
                // setLoading(false);
            }
        })

        return ()=>{
            unSubscribe([]);
        }

    },[axiosSecure])



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