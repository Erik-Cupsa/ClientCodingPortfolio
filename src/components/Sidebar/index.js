import './index.scss'
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faFolderOpen, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import LogoM from '../../assets/images/M.png'
import LogoSubtitle from '../../assets/images/sub-logo.png'
import { faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)
    return(
        <div className = 'nav-bar'> 
            <Link className = "logo" to="/"> 
                <img src = {LogoM} alt="logo" />
                <img className="sub-logo" src = {LogoSubtitle} alt="max" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ""}>
                <NavLink exact="true" activeclassname = "active" to="/">
                    <FontAwesomeIcon icon = {faHome} onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "about-link" to="/about">
                    <FontAwesomeIcon icon = {faUser} onClick={() => setShowNav(false)}/>
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon = {faFolderOpen} onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "work-link" to="/work">
                    <FontAwesomeIcon icon = {faSuitcase} onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname = "active" className = "contact-link" to="/contact">
                    <FontAwesomeIcon icon = {faEnvelope} onClick={() => setShowNav(false)}/>
                </NavLink>
                <FontAwesomeIcon icon = {faClose} size = "3x" className="close-icon" onClick={() => setShowNav(false)} />
            </nav>
            <ul>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/max-craig-7680872a4/">
                        <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = "https://github.com/maxxcraig">
                        <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = "mailto:max8alton@gmail.com">
                        <FontAwesomeIcon icon={faTelegram} color = "#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#c108c1" size="3x" className="hamburger-icon" />
        </div>
    )
}

export default Sidebar 