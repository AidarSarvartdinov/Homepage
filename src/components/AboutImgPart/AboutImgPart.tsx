import aboutPhoto from "../../../img/aboutMePhoto.jpg"
import "./AboutImgPart.css"

export default function AboutImgPart() {
    return (
        <div className="image-part">
            <img id="about-me-img" src={aboutPhoto} />
        </div>
    )
}
