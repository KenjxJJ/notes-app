// Import firebase.
import firebase from 'firebase';

// Configure Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyCmt6dqpKCSaiXhRsl_y7SjIyRWAn8WoLo",
    authDomain: "notes-app-f03f2.firebaseapp.com",
    databaseURL: "https://notes-app-f03f2.firebaseio.com",
    projectId: "notes-app-f03f2",
    storageBucket: "notes-app-f03f2.appspot.com",
    messagingSenderId: "632491420055",
    appId: "1:632491420055:web:3a986934c4b84f448c3cd2"
};

firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',

    // Redirect to /addNewNote after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',

    // Display Email and GitHub as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
    ]
};


export default firebase;