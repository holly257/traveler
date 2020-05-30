import React from 'react';
import './SearchPage.css'

function SearchPage () {
    return (
        <>
            <section id='main-search'>
                <div id='container'>
                    <h6>Search</h6>
                    <form>
                        <input id='search' type='text' placeholder='city name' />
                        <span>
                            <img id='food-img' />
                            <input type='checkbox' title='hey' />
                            <p>restaurants</p>
                        </span>
                        <span>
                            <img id='bev-img' />
                            <input type='checkbox' title='hey' />
                            <p>coffee/bars</p>
                        </span>
                        <span>
                            <img id='shopping-img' />
                            <input type='checkbox' title='hey' />
                            <p>shopping</p>
                        </span>
                        <span>
                            <img id='activities-img' />
                            <input type='checkbox' title='hey' />
                            <p>activities</p>
                        </span>
                        <button id='search-btn'>Let's Go!</button>
                    </form>
                </div>
            </section>
            <section id='results'>
                <h1 id='results-title'>results</h1>
                <div className='results-cont'>
                    <p>image</p>
                    <h5>title</h5>
                    <h6>rating</h6>
                    <h6>address</h6>
                    <p>rating notes</p>
                    <button>add to trip</button>
                </div>
            </section>
        </>
    )
}

export default SearchPage;