import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, link } from 'react-router-dom';
export class MovieItem extends React.Component {
    //renders the components onto the webpage
    //outputting movie title, year and poster to the screen
    //imported card element from bootstrap
    //imported link element to card

    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-warning">Edit</Link>
                </Card>
            </div>
        );
    }

} 