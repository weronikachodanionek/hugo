import React, { useState } from "react";

//import * as firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { Desk } from "../../components";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDcjAaHM684IEg_Ec9J3rGQjcvrpknk5vk",
  authDomain: "hugo-a7518.firebaseapp.com",
  databaseURL: "https://hugo-a7518-default-rtdb.firebaseio.com",
  projectId: "hugo-a7518",
  storageBucket: "hugo-a7518.appspot.com",
  messagingSenderId: "445966567357",
  appId: "1:445966567357:web:8e27f566fdd0335aafb4d4",
  measurementId: "G-EZD40XD5EZ",
});

// const auth = firebase.auth();
// const firestore = firebase.firestore();

const Company: React.FC = () => {
  const [input, setInput] = useState(""); // '' is the initial state value

  const docRef = firebase.firestore();
  // docRef.collection("desk");

  const submit = (e: any) => {
    e.preventDefault();
    console.log("Wysłane", input);
    docRef.collection("desk").add({
      created: firebase.firestore.FieldValue.serverTimestamp(),
      user: [{ name: input }],
    });
  };

  return (
    <div className="App">
      <div>
        <Desk />
        <label>Biurko</label>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={submit}>Wyslij</button>
      </div>
    </div>
  );
};

export default Company;
