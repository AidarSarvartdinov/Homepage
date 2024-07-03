import {NavLink} from "react-router-dom"
import './NavBar.css';

export default function NavBar() {
    return (
        <>
        <div className="header-line">
            <div className="left-header">
                <h2><NavLink to="/">Aidar Sarvartdinov</NavLink></h2>
            </div>
            <div className="right-header">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/contact">Contact Me</NavLink>
                    <NavLink to="/comic">Comic</NavLink>
                </nav>
            </div>
        </div> 
        </>
    )
}