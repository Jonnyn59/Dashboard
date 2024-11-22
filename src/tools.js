/* eslint-disable jsx-a11y/alt-text */
import "./dashboard.css";
import "./img/avatar.png";
import "../src/img/user.png";

import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCz-XzI9pk1QMGl6c17wQSyaiIQ0bkTNOA",
  authDomain: "db-bd53e.firebaseapp.com",
  databaseURL: "https://db-bd53e-default-rtdb.firebaseio.com",
  projectId: "db-bd53e",
  storageBucket: "db-bd53e.firebasestorage.app",
  messagingSenderId: "485489455915",
  appId: "1:485489455915:web:4b59e92d8360a03afccb6e",
  measurementId: "G-PSRB5902S7",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, "users");

function writeUserData(name, age, occupation) {
  set(dbRef, {
    name,
    age,
    occupation,
  });
}

writeUserData("Jonnyn59", 30, "Software Engineer");

function test() {
  fetch("http://127.0.0.1:4000/api/v1.0/add/usersdb", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      __AdminLogin: "Admin",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Ошибка при получении данных: ", error));
}

function Dashboard() {
  return (
    <div className="body2">
      <div className="back_1" id="back_1">
        <div className="left_panel">
          <div className="user">
            <div className="iconUser"></div>
            <span>@USERNAME</span>
          </div>
          <div className="btns" id="everyoneBtns">
            <button id="MainButton" onClick={test}>
              Main
            </button>
            <button id="Statistics">Statistics</button>
            <button id="Salary">Salary</button>

            <button id="UsersDB">Workers</button>
            <button id="PaySettings">Pay settings</button>

            <button id="Settings">Settings</button>
            <button id="Exit">EXIT</button>
          </div>
        </div>
        <div className="right_panel"></div>
      </div>
    </div>
  );
}

export default Dashboard;