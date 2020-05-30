import React from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <>
        <main id='main-landing'>
            <h3>Plan your next trip with ease!</h3>
            <h3>Search travel ideas</h3>
            <h3>See what friends are up to</h3>
            <h3>Save great recommendations</h3>
            <p id='img'>placeholder for exciting travel img</p>
        </main>
        <section id='start'>
          <h4>Let's Go!</h4>
          <Link to={'/search'}>Search</Link>
          <Link to={'/new-trip'}>Plan</Link>
        </section>
    </>
  );
}

export default LandingPage;