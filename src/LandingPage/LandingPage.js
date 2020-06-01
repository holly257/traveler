import React from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <>
        <main id='main-landing'>
            <h5 className='landing-main-text'>Plan your next trip with ease!</h5>
            <br />
            <h5 className='landing-main-text'>Search travel ideas</h5>
            <h5 className='landing-main-text'>See what friends are up to</h5>
            <h5 className='landing-main-text'>Save great recommendations</h5>
        </main>
        <section id='landing-start'>
          <Link className='landing-links' to={'/search'}>Search</Link>
          <Link className='landing-links' to={'/new-trip'}>Plan</Link>
        </section>
    </>
  );
}

export default LandingPage;