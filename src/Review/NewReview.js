import React from 'react';
import { Route, Link } from 'react-router-dom'
import './NewReview.css'

function NewReview () {
    return (
        <section id='main-review'>
            <div id='container'>       
                <h3>Review</h3>
                <form>
                    <input type='text' placeholder='name' required />
                    <input type='text' placeholder='rating out of 5 stars' required />
                    <input type='text' placeholder='location' required />
                    <select required>
                        <option>restaurant</option>
                        <option>bar/coffee</option>
                        <option>shopping</option>
                        <option>activity</option>  
                    </select>

                    <span>
                        <p>Pros</p>
                        <textarea rows='5' required ></textarea>
                    </span>
                    <span>
                        <p>Cons</p>
                        <textarea rows='5' required ></textarea>
                    </span>
                    
                    <button id='search-btn'>Submit</button>
                </form>
            </div>
        </section>

    )
}

export default NewReview;