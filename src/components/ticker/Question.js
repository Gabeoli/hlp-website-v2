import React, { Component } from 'react'

class Question extends Component {
  render() {
    return (
      <div className="question-bubble">
        <h3>Question</h3>
        <p>{this.props.question}</p>
      </div>
    )
  }
}

export default Question