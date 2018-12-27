import firebase from 'firebase'

const config = {
        apiKey: "AIzaSyClT5fHYdpzgtLnW1bgIckg1AqdzT0WQsU",
        authDomain: "expensify-ed4c0.firebaseapp.com",
        databaseURL: "https://expensify-ed4c0.firebaseio.com",
        projectId: "expensify-ed4c0",
        storageBucket: "expensify-ed4c0.appspot.com",
        messagingSenderId: "726550869890"
    };
firebase.initializeApp(config);
const database = firebase.database(); // root database

export { firebase, database as default };