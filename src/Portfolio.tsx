import NavBar from "./components/NavBar/NavBar"
import ProjectPart from "./components/Project/ProjectPart"
import "./basic.css"

export default function Portfolio() {
    return (
        <>
        <div style={{"textAlign": "center", "fontSize": "25px"}} className="main-text">
            <p>At the moment, I have only study assignments as projects:</p>
        </div>
        <div className="main-text">
            <ProjectPart></ProjectPart>
        </div>
        </>
    )
}