import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const config = {
//   apiKey: "AIzaSyCZ1veQMvQwwkb1ka0-zVm2nrk7OgiyDmU",
//   authDomain: "react-ecommerce-caf86.firebaseapp.com",
//   databaseURL: "https://react-ecommerce-caf86.firebaseio.com",
//   projectId: "react-ecommerce-caf86",
//   storageBucket: "react-ecommerce-caf86.appspot.com",
//   messagingSenderId: "522930649756",
//   appId: "1:522930649756:web:f062c083dee844c8440b59",
//   measurementId: "G-M8X1HNCPV0"
// };

var config = {
  apiKey: "AIzaSyAXuuVNtCEowKtiWl_8GYWsCXxEI1Wd_IQ",
  authDomain: "poc-blockchain-7a030.firebaseapp.com",
  databaseURL: "https://poc-blockchain-7a030.firebaseio.com",
  projectId: "poc-blockchain-7a030",
  storageBucket: "poc-blockchain-7a030.appspot.com",
  messagingSenderId: "379544968829",
  appId: "1:379544968829:web:21fe0c4ba478f95dcf9b14",
  measurementId: "G-RR66XVBHSX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  
  if(snapShot.exists === false){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message)
    }
  }
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;