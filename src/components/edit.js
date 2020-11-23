import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {
    //renders the components onto the webpage
    //text is outputted onto the webpage
    //users can edit content on the webpage

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);


        this.state = {
            Title: '',
            Year: '',
            Poster: '',
        }
    }

    //lifecycle hook becomes active when in the view
    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Title: response.data.title,
                    Year: response.data.year,
                    Poster: response.data.poster
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //Targets title value to change
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    //Targets Year value to change
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    //Targets Poster value to change
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    //On submit the values of title,year and poster are output to the screen by an alert
    //submits post request to localhost 4000/api/movies
    //submits put request to localhost 4000/api/movies to update the movie info
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " Was Added Successfully" + this.state.Year + "" + this.state.Poster)

        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/movies/' + this.state._id, newMovie)
            .then(res => {
                console.log(res.data)
            })
            .catch();

        //sends new objects to the webpage
        //outputs data to the console
        //throws error if there is a problem
        //     axios.post('http://localhost:4000/api/movies', newMovie)
        //     .then((res)=>{
        //         console.log(res);
        //     })
        //     .catch((err)=>{
        //         console.log(err);
        //     }); 
    }

    //form field is displayed onto webpage with text areas
    //user can edit movie name, year and poster
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Edit Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Edit Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                        <div className="form-group">

                        </div>

                        <div className='form-group'>
                            <label>Edit Movie Poster: </label>
                            <textarea type='text'
                                className='form-control'
                                value={this.state.Poster}
                                onChange={this.onChangePoster}></textarea>
                        </div>
                    </div>
                    <input type='submit'
                        value='Edit Movie'
                        className='btn btn-success'></input>
                </form>
            </div>

        );
    }

}