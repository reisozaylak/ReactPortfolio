import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoR from '../../assets/images/logoFinal.png'
import LogoSubtitle from '../../assets/images/logoSub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoR} alt="logo" />
            <img className= "sub-logo" src={LogoSubtitle} alt="Ozaylak" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>

            <NavLink
                onClick={() => setShowNav(false)}
                exact="true" 
                activeclassname="active" 
                to="/"
            >
                    <FontAwesomeIcon icon={faHome} color="#7077A1" />
            </NavLink>

            <NavLink
                onClick={() => setShowNav(false)}
                exact="true" 
                activeclassname="active" 
                className="about-link" 
                to="/about">
                    <FontAwesomeIcon icon={faUser} color="#7077A1" />
            </NavLink>

            <NavLink 
                onClick={() => setShowNav(false)}
                exact="true" 
                activeclassname="active" 
                className="portfolio-link" 
                to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#7077A1" />
            </NavLink>

            <NavLink
                onClick={() => setShowNav(false)}
                exact="true" 
                activeclassname="active" 
                className="contact-link" 
                to="/contact" 
            >
                    <FontAwesomeIcon icon={faEnvelope} color="#7077A1" />
            </NavLink>

            <FontAwesomeIcon
                onClick={() => setShowNav(false)}
                icon={faClose}
                color='#7077A1'
                size='3x'
                className='close-icon'
            />
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/reis-özaylak/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#7077A1'/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/reisozaylak'>
                    <FontAwesomeIcon icon={faGithub} color='#7077A1'/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars}
            color='#7077A1'
            size='3x'
            className='hamburger-icon'
        />
    </div>
    )
}
export default Sidebar