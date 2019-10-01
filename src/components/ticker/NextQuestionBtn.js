import React, { Component } from 'react'

export default class NextQuestionBtn extends Component {
    render() {
        return (
            <button onClick={this.props.question}>
                Next Question
            </button>
        )
    }
}
