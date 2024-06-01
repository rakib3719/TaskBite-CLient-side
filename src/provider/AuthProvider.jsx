import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useCommonAxios from "../hook/useCommonAxios";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)
    const commonAxios = useCommonAxios()


    const googleProvider = new GoogleAuthProvider()


    const loginWithGoogle = ()=> {
     
        return signInWithPopup(auth, googleProvider)
     }
     



     
  
     
const registar = (email, password)=>{

    return createUserWithEmailAndPassword(auth, email, password)
}
const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}
const updatesProfile = (name, photo)=>{


    return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL:photo
    })
}
const logOut = ()=>{
    return signOut(auth)
}



useEffect(()=>{

const unSUbscribe = onAuthStateChanged(auth, (currentUser)=>{
setLoader(false)
setUser(currentUser)

if(currentUser){
const userInfo = {email: currentUser.email};
commonAxios.post('/jwt',  userInfo)
.then(res => {

localStorage.setItem('access-token', res.data.token);

})




}
else{
    localStorage.removeItem('access-token')
}

setLoader(false)


})

return ()=>unSUbscribe()

},[])
const authInfo = {loader, registar, login, setLoader, updatesProfile, user, logOut, loginWithGoogle}
    return (
        <div>
          <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>  
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;




