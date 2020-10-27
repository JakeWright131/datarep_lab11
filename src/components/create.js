import React from 'react';

export class Create extends React.Component {
    //renders the components onto the webpage
    //text is outputted onto the webpage

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
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " Was Added Successfully"+ this.state.Year + "" +this.state.Poster)
    }

    //form field is displayed onto webpage with text areas
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type='text'
                    className='form-control'
                    value={this.state.Year}
                    onChange={this.onChangeYear}></input>
                    <div className="form-group">    
                        
                    </div>

                    <div className='form-group'>
                        <label>Add Movie Poster: </label>
                        <textarea type='text'
                        className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}></textarea>
                    </div>
                </div>
                <input type='submit'
                            value='Add Movie'
                            className='btn btn-success'></input>
                </form>
            </div>

        );
    }

}