// import React from 'react'
import React, { Component } from 'react'
import { Button } from 'reactstrap'
import Result from './Result/Result'
import axios from 'axios';

// export default function Results(props) {
//     return (
//         <div>
//             <Button onClick={(e) => {
//                 e.persist()
//                 e.preventDefault()
//                 props.searchAgain(e)
//             }}>Search Again</Button>
//             <Result data={props.data} />
//         </div>
//     )
// }



export default class Results extends Component {

    constructor() {
        super()

        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        let url = 'http://api.tvmaze.com/search/shows?q=';
        axios.get(url + this.props.searchValue)
            .then((response) => {
                let data = response.data;
                this.setState({ movies: data })
                console.log(data)
            }
            )
    }

    render() {
        return (
            <div>
                <Button onClick={(e) => {
                    e.persist()
                    e.preventDefault()
                    this.props.searchAgain(e)
                }}>Search Again</Button>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Result data={this.state.movies} />
                </div>
            </div>
        )
    }
}
