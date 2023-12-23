import React from 'react'
import vg from '../assets/Graphics-transformed.webp'
import {AiFillGoogleCircle,AiFillTwitterCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id='home'>
        <main>
            <h1>MindMosaic</h1>
            <p>Exploring the Depths of Human Psychology</p>
        </main>
    </div>

    <div className="home2" id="home">
      <img src= {vg} alt="Graphics"/>

      <div>
        <p>
        The title "MindMosaic: Exploring the Depths of Human Psychology" suggests a dynamic and intricate exploration of the human mind.
        "MindMosaic" implies a collection of diverse thoughts and experiences, symbolizing the complexity of human psychology. 
        "Exploring the Depths" conveys a journey into the profound aspects of the mind, highlighting the website's intent to delve into various psychological dimensions, from emotions to cognition. 
        Overall, the title aims to evoke curiosity and convey a sense of comprehensive examination of the intricate mosaic that makes up human psychology.
        </p>

      </div>
    </div>

    <div className="home3" id="about">

      <div>
        <h1> Who we are?</h1>
        <p>
       As we are Psychologists, we conduct both basic and applied research, serve as consultants to communities and organizations, diagnose and treat people, and teach future psychologists and those who will pursue other disciplines. 
       They test intelligence and personality. 
       Many psychologists work as health care providers.
       Essentially, we helps people in large part because it can explain why people act the way they do.
       With this kind of professional insight, a psychologist can help people improve their decision making, stress management and behavior based on understanding past behavior to better predict future behavior.
        </p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>

        <artical>

          <div
          style={{
            animationDelay: "0.3s",
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div
          style={{
            animationDelay: "0.5s",
          }}>
            <AiFillTwitterCircle/>
            <p>Twitter</p>
          </div>

          <div
          style={{
            animationDelay: "0.7s",
          }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

          <div
          style={{
            animationDelay: "1s",
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        
        </artical>
      </div>

    </div>
    
    </>
  )
}

export default Home;