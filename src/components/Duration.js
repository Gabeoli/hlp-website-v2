import React, { Component } from 'react'

var initalDate = Date();
console.log(initalDate);

class Duration extends Component {

    render() {
        return (
            <div>
                <p>{initalDate}</p>
            </div>
        )
    }
}

export default Duration
