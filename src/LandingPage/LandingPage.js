import React from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <>
      <main id='main-landing'>
        <br/>
        <h5 className='landing-main-text'>Plan your next trip with ease!</h5>
        <br />
        <br />
        <h5 className='landing-main-text'>Want to demo the app?</h5>
        <p className='landing-demo-text'>Username: test_user</p>
        <p className='landing-demo-text'>Password: Pa55w-rd</p> 
      </main>
      <section id='landing-start'>
        <Link className='landing-links' to={'/search'}>Search Reviews</Link>
        <Link className='landing-links' to={'/new-trip'}>Plan Trips</Link>
      </section>
    </>
  );
}

export default LandingPage;