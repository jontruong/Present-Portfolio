import React from 'react';
import './Page.css';
import photo from '../assets/bioPic.jpg';


function Page() {
    return (
        <div className="page-container">
            <div className="bio">
                <div>
                <h1>Hello! </h1>
                <h3>My name is Jonathan</h3>
                <br></br>
                <p>
                I'm currently working as an Assistant Site Director at Kids' Country. I'm an aspiring web developer that has completed UC Berkeley's Coding boot camp. I've also been self learning for the past year.
                </p>
                <br>
                </br>
                <p>
                Out of work you can find me trying out new food, creating food content, cooking, catching up on the latest Marvel series or movie, and exploring the great outdoors.
                </p>

                </div>
                <div className="bio">
                    <img src={photo} alt=""></img>
                </div>
               
                
               
            
            </div>
            
            
        </div>
    )
}

export default Page
