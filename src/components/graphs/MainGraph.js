import React, { Component } from 'react'
import {FlexibleWidthXYPlot, AreaSeries, XAxis, YAxis,} from 'react-vis'

const data=[
    // {day: 'Monday', players: 1, conversations: 10, messages: 20},
    // {day: 'Tuesday', players: 2, conversations: 20, messages: 40},
    // {day: 'Wednesday', players: 3, conversations: 30, messages: 60},
    // {day: 'Thursday', players: 4, conversations: 40, messages: 80},
    // {day: 'Friday', players: 1, conversations: 10, messages: 20},
    // {day: 'Saturday', players: 5, conversations: 50, messages: 100},
    // {day: 'Sunday', players: 6, conversations: 60, messages: 120},
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
]

class MainGraph extends Component {
    render() {
        return (
        <FlexibleWidthXYPlot height={550}>
        <AreaSeries data={data} />
        <XAxis />
        <YAxis />
        </FlexibleWidthXYPlot>
        )
    }
}

export default MainGraph