import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {
    //renders the components onto the webpage
    //text is outputted onto the webpage
    //imbedding movies component in read component
    //passing data from read component using state object

    state = {
        movies: [

        ]

    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    this.setState({ movies: response.data })
                }

            )
            .catch(
                (error) => { console.log(error) });
    }

    render() {
        return (
            <div>
                <h1>This is the read component.</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }

}