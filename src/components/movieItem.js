import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export class MovieItem extends React.Component {

    //renders the components onto the webpage
    //outputting movie title, year and poster to the screen
    //imported card element from bootstrap
    //imported link element to card
    //imported bootstrap button
    //created delete button

    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //delete movie function
    //prevent default prevents user from deleting the entire database
    DeleteMovie(e){
        e.preventDefault();
        console.log("Delete: "+this.props.movie._id);

        axios.delete("http://localhost:4000/api/movies/" +this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }


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
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }

} 