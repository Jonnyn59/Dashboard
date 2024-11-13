/* eslint-disable jsx-a11y/alt-text */
import "./dashboard.css"
import "./img/avatar.png"
import "../src/img/user.png"

import { getDatabase, ref } from "firebase/database";
import { initializeApp } from "firebase/app";
import { set } from "lodash";
const firebaseConfig = {...};

let app = initializeApp(firebaseConfig);

const db = getDatabase(app)


function test(){
    fetch("http://127.0.0.1:4000/api/v1.0/add/usersdb" , {
        method : 'POST',
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            __AdminLogin: "Admin",
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Ошибка при получении данных: ', error);
    });
}

function Dashboard(){
    return (
        <div className="body2">
            <div className="back_1" id="back_1">
                <div className="left_panel">
                    <div className="user">
                        <div className="iconUser"></div>
                        <span>@USERNAME</span>
                    </div>
                    <div className="btns" id="everyoneBtns">
                    <button id="MainButton" onClick={test}>Main</button>
                    <button id="Statistics">Statistics</button>
                    <button id="Salary">Salary</button>

                    <button id="UsersDB">Workers</button>
                    <button id="PaySettings">Pay settings</button>

                    <button id="Settings">Settings</button>
                    <button id="Exit">EXIT</button>
                    </div>
                </div>
                <div className="right_panel">
                    
                </div>
            </div>
        </div>
    )
}


export default Dashboard
