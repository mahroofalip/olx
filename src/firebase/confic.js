import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9gE-94RgYRt57A2i9WdzPUMsX9cRmlJk",
    authDomain: "fir-2980c.firebaseapp.com",
    projectId: "fir-2980c",
    storageBucket: "fir-2980c.appspot.com",
    messagingSenderId: "944103586555",
    appId: "1:944103586555:web:d66fce1661e9d26e750e5e",
    measurementId: "G-TRF8878MWK"
  };

  export default firebase.initializeApp(firebaseConfig)