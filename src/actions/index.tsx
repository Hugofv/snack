import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyDaxttNALTjdkjPfXVPXiOL2mEKQhbkqjY",
  authDomain: "snack-62458.firebaseapp.com",
  databaseURL: "https://snack-62458.firebaseio.com",
  projectId: "snack-62458",
  storageBucket: "snack-62458.appspot.com",
  messagingSenderId: "90270961530",
  appId: "1:90270961530:web:77042d1578dc695e"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 