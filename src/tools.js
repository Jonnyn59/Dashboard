import "./dashboard.css"
import "./avatar.png"
import "../src/img/user.png"
function Dashboard(){
    console.log("---->")
    return (
        <div className="body2">
            <div className="back_1" id="back_1">
                <div className="left_panel">
                    <div className="user">
                        <img src="../src/img/user.png"></img>
                        <span>@username</span>
                    </div>
                    <button id="MainButton">Main</button>
                    <button id="Statistics">Statistics</button>
                    <button id="Salary">Salary</button>
                    <button id="Settings">Settings</button>
                    <button id="Exit">EXIT</button>
                </div>
            </div>
        </div>
    )
}


export default Dashboard