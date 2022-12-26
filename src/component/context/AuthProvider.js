import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile}from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {


// User state detect 
const [user,setuser]=useState(null)



    // Registation/Sigup code 
    const createUser = (email, password) => {
       
        return createUserWithEmailAndPassword(auth, email, password)
    }

// SignIn code
const signin=(email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
}



// send user others info to firebase 
const updateuser=(userinfo)=>{
    return updateProfile(user,userinfo);
    }
    

// observer set here
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentuser=>{
        console.log('user observer')
        setuser(currentuser);
    })
// return the arrow function and call the unsubcribe function
return()=>unsubscribe()

},[])



const authInfo={
    createUser,
    updateuser,
    signin,
    user,
}




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;