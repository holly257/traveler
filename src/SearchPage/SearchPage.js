import React from 'react';
import './SearchPage.css'
import ResultsPage from './Results/ResultsPage'
import AppContext from '../App/AppContext'
import { API_URL } from '../config'

class SearchPage extends React.Component {
    static contextType = AppContext
    
    formatParams(params) {
        const items = Object.keys(params).map(key =>
            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        return items.join('&')
    }

    SubmitSearch = e => {
        e.preventDefault()
        const { searchTerm, category } = e.target

        let searchParams
        if(category.value === 'cat') {
            searchParams = {
                city: searchTerm.value,
            }
        } else {
            searchParams = {
                city: searchTerm.value,
                category: category.value
            }
        }

        const query = this.formatParams(searchParams)
        
        const url = `${API_URL}/search/term?${query}`
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong, please try again soon.')
                }
            return res
        })
        .then(res => res.json())
        .then((reviewData) => {
            this.context.updateSearchResults(reviewData)
        })
        .catch(error => {
            console.error(error)
            this.setState({error: 'Something went wrong. Please try again later.'})
        })
    }

    render () {
        return (
            <>
                <section id='main-search'>
                    <div id='search-container'>
                        <h6 id='search-title'>Search</h6>
                        <form onSubmit={(e) => this.SubmitSearch(e)}>
                            <input id='search' type='text' name='searchTerm' placeholder='city name' />
                            <br/>
                            <select className='searchTypes' name='category'>
                                <option value='cat' >Categories:</option>
                                <option>restaurant</option>
                                <option>bar/coffee</option>
                                <option>shopping</option>
                                <option>activity</option>
                                <option>lodging</option>  
                            </select>
                            <button type='submit' id='search-btn'>Let's Go!</button>
                        </form>
                    </div>
                </section>
                <section id='results-cont'>
                    <h4 id='results-title'>Results</h4>
                    {this.context.searchList.map(review => {
                        return (<ResultsPage key={review.id} review={review}/>)
                    })}
                </section>
            </>
        )
    }
}

export default SearchPage;