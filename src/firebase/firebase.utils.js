import firebase from "firebase/app";

import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9B_MlHU0yUgR2qbwGcwgoHg8iDWStj2o",
  authDomain: "sheno-game.firebaseapp.com",
  projectId: "sheno-game",
  storageBucket: "sheno-game.appspot.com",
  messagingSenderId: "580510721994",
  appId: "1:580510721994:web:bd46bb3463761d0457d133",
};

export const recordUser = async (userEmail) => {
  const userRef = firestore.doc(`users/${userEmail}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const createdAt = new Date();

    try {
      await userRef.set({
        email: userEmail,
        createdAt,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
