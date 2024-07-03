import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./basic.css"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Portfolio from "./Portfolio"


function App() {
    return (
        <>
            <Router>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                    <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
                </Routes>
            </Router>
            
        </>
    )
}

export default App
