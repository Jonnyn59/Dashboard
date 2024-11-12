/* eslint-disable jsx-a11y/alt-text */
import "./dashboard.css"
import "../src/img/user.png"
function Dashboard(){
    console.log("---->")
    return (
        <div className="body2">
            <div className="back_1" id="back_1">
                <div className="left_panel">
                    <div className="user">
                        <div className="iconUser"></div>
                        <span>@USERNAME</span>
                    </div>
                    <div className="btns" id="everyoneBtns">
                    <button id="MainButton">Main</button>
                    <button id="Statistics">Statistics</button>
                    <button id="Salary">Salary</button>
                    <button id="Settings">Settings</button>
                    <button id="Exit">EXIT</button>
                    </div>
                    <div className="ownerBtns">

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard