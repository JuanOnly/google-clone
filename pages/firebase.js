// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5s2xqX-jDB_DqEZKtfW54MkUyA74LfwM",
  authDomain: "clone-2bac3.firebaseapp.com",
  projectId: "clone-2bac3",
  storageBucket: "clone-2bac3.appspot.com",
  messagingSenderId: "37472268808",
  appId: "1:37472268808:web:54250d2c9f18317f7997bd",
  measurementId: "G-4QYQDP5JZ4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
