import React, { Component } from 'react'

class Answer extends Component {
    render() {
        return (
            <div className="answer-bubble">
                <h3>Answer</h3>
                <p>{this.props.answer}</p>
            </div>
        )
    }
}

export default Answer