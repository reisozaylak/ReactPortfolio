import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logoFinal.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import LogoR from '../../assets/images/logoFinal.png';
import Loader from 'react-loaders';

const Home = () =>{
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = [ 'e','i','s',' ',' ','O','z','a','y','l','a','k' ]
    const jobArray= [ 'W','e','b',' ',' ','&',' ',' ']
    const jobArray1= [ 'G','a','m','e',' ','D','e','v','e','l','o','p','e','r']


    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => clearTimeout(timeoutId);
      }, []);
      

    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer' />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray1} idx={22}/>
                </h1>
                <h2>JavaScript / Unreal Engine 5 </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>

            <div className='logo-container'>
            <img className='solid-logo' src={LogoR} alt='R'/>
            </div>

        </div>
        <Loader type='pacman' />
        </>
    );
}
export default Home