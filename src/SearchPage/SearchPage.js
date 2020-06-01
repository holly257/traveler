import React from 'react';
import './SearchPage.css'
import ResultsPage from './Results/ResultsPage'

function SearchPage () {
    return (
        <>
            <section id='main-search'>
                <div id='container'>
                    <h6 id='search-title'>Search</h6>
                    <form>
                        <input id='search' type='text' placeholder='city name' />
                        <span className='search-check-items'>
                            <img id='food-icon' alt=''/>
                            <input type='checkbox' value='restaurants' />
                            <p>restaurants</p>
                        </span>
                        <span className='search-check-items'>
                            <img id='bev-icon' alt=''/>
                            <input type='checkbox' value='coffee-bars' />
                            <p>coffee/bars</p>
                        </span>
                        <span className='search-check-items'>
                            <img id='shopping-icon' alt=''/>
                            <input type='checkbox' value='shopping' />
                            <p>shopping</p>
                        </span>
                        <span className='search-check-items'>
                            <img id='activities-icon' alt=''/>
                            <input type='checkbox' value='activities' />
                            <p>activities</p>
                        </span>
                        <button id='search-btn'>Let's Go!</button>
                    </form>
                </div>
            </section>
            <section>
                <ResultsPage />
            </section>
        </>
    )
}

export default SearchPage;