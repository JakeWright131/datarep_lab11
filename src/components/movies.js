import React from 'react';
import { MovieItem } from './movieItem';

//used map function to break up movie data to display individual movies
//passed single movie to movie item for each movie

export class Movies extends React.Component {


    render() {
        return this.props.movies.map((movie) => {
            return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>

        })


    }

}