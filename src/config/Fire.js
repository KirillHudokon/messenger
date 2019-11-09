import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDIRI34IDrZjpays4fpjkgz_Rz-EwtTF5I",
    authDomain: "messenger-4e5ff.firebaseapp.com",
    databaseURL: "https://messenger-4e5ff.firebaseio.com",
    projectId: "messenger-4e5ff",
    storageBucket: "messenger-4e5ff.appspot.com",
    messagingSenderId: "166404109317",
    appId: "1:166404109317:web:f51aec1080f038e8bb186c",
    measurementId: "G-WNV8BXLH75"
};
// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);

export default fire