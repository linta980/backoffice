import firebase from 'firebase'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAwG_c3-GDknydM0eR3PnaQWcRBsMClJuE",
    authDomain: "backoffice-cbd34.firebaseapp.com",
    databaseURL: "https://backoffice-cbd34.firebaseio.com",
    projectId: "backoffice-cbd34",
    storageBucket: "backoffice-cbd34.appspot.com",
    messagingSenderId: "347619782755",
    appId: "1:347619782755:web:b515ab99990dc28b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db= firebase.firestore();
//   db.settings({timestampsInSnapshots:true})

  export default db
