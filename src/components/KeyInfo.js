import React, { Component } from 'react'
import MainGraph from "./graphs/MainGraph"

class KeyInfo extends Component {
    render() {
        return (
            <div className="key-info">
                <div className="main-graph">
                    <MainGraph/>
                </div>
                <div className="main-figures">
                    <div className="figure">
                        <h3>Total Number of Players</h3>
                        <h1>2310</h1>
                    </div>
                    <div className="figure">
                        <h3>Total Number of Players</h3>
                        <h1>2310</h1>
                    </div>
                    <div className="figure">
                        <h3>Total Number of Players</h3>
                        <h1>2310</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default KeyInfo
