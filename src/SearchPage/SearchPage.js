import React from 'react';
import './SearchPage.css'
import ResultsPage from './Results/ResultsPage'
import AppContext from '../App/AppContext'

class SearchPage extends React.Component {
    static contextType = AppContext

    SubmitSearch = e => {
        e.preventDefault()
        const { searchTerm } = e.target
        const search = {
            searchTerm: searchTerm.value,
            
        }
        
        console.log(search)
    }

    render () {
        return (
            <>
                <section id='main-search'>
                    <div id='search-container'>
                        <h6 id='search-title'>Search</h6>
                        <form onSubmit={(e) => this.SubmitSearch(e)}>
                            <input id='search' type='text' name='searchTerm' placeholder='city name' />
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
                            <span className='search-check-items'>
                                <img id='activities-icon' alt=''/>
                                <input type='checkbox' value='activities' />
                                <p>lodging</p>
                            </span>
                            <button type='submit' id='search-btn'>Let's Go!</button>
                        </form>
                    </div>
                </section>
                <section id='results-cont'>
                    <h4 id='results-title'>Results</h4>
                    {this.context.reviews.map(review => {
                        return (<ResultsPage key={review.review_id} review={review}/>)
                    })}
                </section>
            </>
        )
    }
}

export default SearchPage;