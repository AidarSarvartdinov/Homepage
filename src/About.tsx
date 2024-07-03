import AboutTextPart from "./components/AboutTextPart/AboutTextPart"
import NavBar from "./components/NavBar/NavBar"
import AboutImgPart from "./components/AboutImgPart/AboutImgPart"
import "./basic.css"

export default function About() {
    return (
        <>
            <main>
                <div className="heading"><h1>About Me</h1></div>
                <div style={{"display":"flex"}}>
                    <AboutTextPart></AboutTextPart>
                    <AboutImgPart></AboutImgPart>
                </div>
                
            </main>
        </>
    )
}