import NavBar from "./components/NavBar/NavBar"
import "./basic.css"
import discordIcon from "../img/discordIcon.png"
import githubIcon from "../img/githubIcon.png"
import telegramIcon from "../img/telegramIcon.png"
import "./Contact.css"

export default function Contact() {
    return (
        <>
        <div style={{"textAlign": "center"}}><h1 className="heading">My social links</h1></div>
        <div id="links">
            <a id="tg-link" href="https://t.me/aidar_sar"><img src={telegramIcon} width={145} alt="Telegram" /></a>
            <a id="dc-link" href=" https://discord.com/users/Aidar#6319"><img src={discordIcon} width={145} alt="Discord" /></a>
            <a id="gh-link" href="https://github.com/AidarSarvartdinov"><img src={githubIcon} width={145} alt="GitHub" /></a>
        </div>
        </>
    )
}