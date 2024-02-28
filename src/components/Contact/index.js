import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import React , { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


export const Contact = () => {
const [letterClass,setLetterClass] = useState('text-animate')
const refForm = useRef();

    useEffect( () => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    },[]);
        
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm (
                'nodqcdh',
                'template_03afhxp',
                refForm.current,
                'your-token',    
            )
            .then(
                (response) => {
                    console.log('Email sent successfully!', response);
                    alert('Message successfully sent!')
                },
                (error) => {
                    console.error('Failed to send the message:', error);
                    alert('Failed to send the message, please try again.')
                }
            )
    };    
        
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','M','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in opportunities especially on ambitious
                        and large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Reis Özaylak,
                    <br/>
                    Turkey,
                    <br/>
                    Izmir,Karşıyaka <br/>
                    <span> reisozaylak@gmail.com </span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[38.459575, 27.100854]} zoom={10}> 
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[38.459575, 27.100854]} >
                            <Popup> Reis lives here, come over for a cup of coffee :) </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
        )
    }

export default Contact