import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAZfQeV78qaWhFkXf7RNkWjqFEv_mqvB_w",
    authDomain: "chatproject-10c21.firebaseapp.com",
    projectId: "chatproject-10c21",
    storageBucket: "chatproject-10c21.appspot.com",
    messagingSenderId: "940338182188",
    appId: "1:940338182188:web:61322a3065d3abc7f93989"
}).auth();