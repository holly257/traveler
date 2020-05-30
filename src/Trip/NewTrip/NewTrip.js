import React from 'react';
import './NewTrip.css'

function NewTrip () {
    return (
        <section id='main-trip'>
            <div id='container'>       
                <h3>Itinerary</h3>
                <form>
                    <input type='text' placeholder='name' required />
                    <input type='text' placeholder='location' required />
                    <span>
                        <p>Day 1</p>
                        <textarea rows='5'  placeholder='What would you like to do?' ></textarea>
                    </span>
                    <button>Add Day</button>
                    <button id='search-btn'>Save</button>
                </form>
            </div>
        </section>
    )
}

export default NewTrip;