import React from 'react';
import './ResultsPage.css'

function ResultsPage () {
    return (
        <>
            <section id='results'>
                <h1 id='results-title'>results</h1>
                <div className='results-cont'>
                    <img 
                        className='results-image' 
                        src='https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                        alt=''
                    />
                    <section>
                        <h5>title</h5>
                        <h6>rating</h6>
                        <h6>address</h6>
                        <p>rating notes</p>
                        <button>add to trip</button>
                    </section>
                </div>
            </section>
        </>
    )
}

export default ResultsPage;