import React from 'react';
import Card from 'react-bootstrap/Card';
export class MovieItem extends React.Component {
    //renders the components onto the webpage
    //outputting movie title, year and poster to the screen
    //imported card element from bootstrap

    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}