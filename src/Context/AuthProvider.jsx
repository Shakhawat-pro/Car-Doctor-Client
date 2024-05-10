import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config'
import axios from 'axios';


export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
            
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log("token res",res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
            }


        });
        return () => {
            return unsubscribe();
        }
    }, [user?.email])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {user, loading, createUser, signInUser, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}