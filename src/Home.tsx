import "./Home.css"
import mainPhoto from "../img/mainPhoto.jpg"

export default function Home() {
    return (
        <>
        <main id="main-home">
        <div className="text-part">
            <div className="main-text">
                <h1 style={{"fontSize": "50px"}}>HELLO! My name is <span className="red">Aidar Sarvartdinov</span></h1>
                <p style={{"fontSize": "35px"}}>I am a first year bachelor student at <span className="red">Innopolis University</span></p>
                <p style={{"fontSize": "30px"}}>This is my homepage</p>
            </div>
        </div>
        <div className="image-part">
            <img id="main-photo" src={mainPhoto} />
        </div>
        </main>
        </>
    )
}