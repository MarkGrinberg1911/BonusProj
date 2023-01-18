
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_apiKey,
    authDomain: process.env.REACT_authDomain ,
    projectId: "ski-junkie",
    storageBucket: process.env.REACT_storageBucket,
    messagingSenderId: process.env.REACT_messagingSenderId,
    appId: process.env.REACT_appId,
    measurementId:process.env.REACT_measurementId

};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);