import { useState,useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import unrealLogo from '../../assets/images/unrealLogo.png';

const About = () => {
    
    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => clearTimeout(timeoutId);
      }, []);

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>
                Welcome to my portfolio website ! I'm Reis Özaylak, 
                a passionate developer specializing in Unreal Engine 5, 
                JavaScript Node.js and React.js. With a focus on creating 
                immersive experiences, I blend creativity with technical expertise
                to deliver outstanding projects.
                </p>
                <p align="LEFT">
                With Unreal Engine 5, I create captivating worlds and lifelike characters, 
                pushing the boundaries of digital experiences.
                </p>
                <p>
                I architect robust backend systems using JavaScript and Node.js, ensuring 
                efficient data management and seamless interactions.
                </p>
                <p>
                Leveraging React.js, I design intuitive user interfaces that elevate user 
                experiences with responsive layouts and interactive components.
                </p>
                <p>
                Let's collaborate to bring your ideas to life,whether it's in Unreal Engine 5, 
                Node.js backend or React.js frontend. Together, we can innovate and create 
                something extraordinary.
                </p>
            </div>
         <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='side front'>
                    <img src={unrealLogo} alt='Unreal'></img>
                </div>
                <div className='side back'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className='side top'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                <div className='side bottom'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='side left'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className='side right'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                </div>
            </div>
         </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}


export default About