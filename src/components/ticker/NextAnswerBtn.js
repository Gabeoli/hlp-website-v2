import React, { Component } from 'react'

export default class NextAnswerBtn extends Component {
    render() {
        return (
            <button onClick={this.props.nextAnswer}>
                Next Answer
            </button>
        )
    }
}
