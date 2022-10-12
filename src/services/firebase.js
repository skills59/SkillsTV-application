import firebase from "firebase";
const config = {
    apiKey: "AIzaSyAmifXJHi3aelAUmM2ya0FHDbc4RDn3vjg",
    authDomain: "livestream-19c1a.firebaseapp.com",
    projectId: "livestream-19c1a",
    storageBucket: "livestream-19c1a.appspot.com",
    messagingSenderId: "1007437578179",
    appId: "1:1007437578179:web:760a5bd284da6e95740776",
    measurementId: "G-8VCB8CNE1R"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
