import React, { Component } from 'react'

export default class Figures extends Component {
    render() {
        return (
            <div className="figure">
                <h3>{this.props.label}</h3>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}
