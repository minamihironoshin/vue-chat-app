import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA8qeGviolZbdC9woCpLouOJCkrfcu4eoM",
  authDomain: "vue-chat-app-1eb6c.firebaseapp.com",
  projectId: "vue-chat-app-1eb6c",
  storageBucket: "vue-chat-app-1eb6c.appspot.com",
  messagingSenderId: "541290192292",
  appId: "1:541290192292:web:f4753f34f864cdb538b531"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;