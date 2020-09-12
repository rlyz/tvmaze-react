import React, { Component } from 'react'
import Search from './Search/Search'
import Results from './Results/Results'


export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            searchInput: "",
            searchValue: "",
            currentAction: "",
        }
    }

    searchInputOnChangeHandler = (e) => {
        this.setState((prevState) => ({
            searchInput: e.target.value,
        }))
    }

    searchQueryOnClickHandler = (e) => {
        this.setState((prevState) => ({
            searchValue: this.state.searchInput.toLowerCase(),
            currentAction: "True"
        }))
    }

    searchAgainOnClickHandler = (e) => {
        this.setState((prevState) => ({
            searchValue: "",
            currentAction: ""
        }))
    }

    render() {
        return (
            <div>
                <h1 className="App">TVMAZE React</h1>
                {this.state.currentAction ? null : <Search searchInput={this.searchInputOnChangeHandler} searchQuery={this.searchQueryOnClickHandler} />}
                {/* <Results searchValue={this.state.searchValue} searchAgain={this.searchAgainOnClickHandler} /> */}
                {this.state.currentAction ? <Results searchValue={this.state.searchValue} searchAgain={this.searchAgainOnClickHandler} data={this.state.movies} /> : null}
            </div>
        )
    }
}
