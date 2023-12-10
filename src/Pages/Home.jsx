import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/App.css';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

const Homepage = () => {
  return (
  <div class ="page">
      <Header />
      <main>
        <section>
          <p>
            My name is Aeryk Andrews and I am a twenty year old graduate currently looking for any junior dev positions!
          </p>
        </section>
        <section>
          <h2>About Us!</h2>
          <p>
            I have been working at Subway for 4 total years and have loved every minute of it! However I do think that it is time for me to 
            branch out and expand my horizons, and start building a career instead of working an unfortunately dead-end job.
          </p>
        </section>
        <section>
          <h2>Skills/Proficiencies</h2>
          <ul>
            <li>Javascript</li>
            <li>CSS</li>            
            <li>React</li>
            <li>Node</li>
          </ul>
        </section>
        <section>
        </section>
      </main>
      <Footer />
  </div>
  );
};

export default Homepage;