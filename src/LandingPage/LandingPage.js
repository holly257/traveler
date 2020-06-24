import React from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <>
      <main id='main-landing'>
        <br/>
        <h1 className='landing-main-text'>Plan your next trip with ease!</h1>
        <p className='landing-demo-text'>Search fun activities</p>
        <p className='landing-demo-text'>Review places you've been</p>
        <p className='landing-demo-text'>Create new trips</p>
        <br />
        <br />
        <h2 className='landing-main-text'>Want to demo the app?</h2>
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