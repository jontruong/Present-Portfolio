import React from 'react'
import Card from './Card'
import './Projects.css'
import ModelS from '../assets/Desktop-ModelS.jpg';
import MotoWeather from '../assets/MotoWeather.png';
import Netflix from '../assets/NetflixLogo.jpg'
import Pinterest from '../assets/Pinterest.png'



function Projects() {
    return (
        <div className="project">
        <div className='project-container'>
           <Card 
           title="Tesla Homepage Clone"
           imageUrl={ModelS}
           body="A Tesla Homepage using REACT.js"
           Url="https://tesla-clone-9d32c.firebaseapp.com/"
           />
           <Card
           title="Netflix Clone"
           imageUrl={Netflix}
           body="A Netflix clone using REACT.js, Firebase"
           Url="https://netflix-clone-307ee.firebaseapp.com/"
           
           />
           <Card
           title="MotoWeather"
           imageUrl={MotoWeather}
           body="A weather tracker app for motorcyclists. Built with REACT.js, React-Map-GL, Deck.GL"
           Url="http://moto-weather.herokuapp.com/"
          
           />
           <Card
           title="Pinterest Clone"
           imageUrl={Pinterest}
           body="A Pinterest clone using React.js, Material-UI, and Axios."
           Url="https://pinterest-clone-c1a12.firebaseapp.com/">

           </Card>
        </div>
        </div>
    )
}

export default Projects
