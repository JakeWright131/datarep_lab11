import React from 'react';

export class Content extends React.Component {
    //renders the components onto the webpage
    //text is outputted onto the webpage
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }

}