import React, { Component } from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts'

const data=[
    {day: 'Monday', players: 1, conversations: 10, messages: 20},
    {day: 'Tuesday', players: 2, conversations: 20, messages: 40},
    {day: 'Wednesday', players: 3, conversations: 30, messages: 60},
    {day: 'Thursday', players: 4, conversations: 40, messages: 80},
    {day: 'Friday', players: 1, conversations: 10, messages: 20},
    {day: 'Saturday', players: 5, conversations: 50, messages: 100},
    {day: 'Sunday', players: 6, conversations: 60, messages: 120},
]

class MainGraph extends Component {
    render() {
        return (
            <ResponsiveContainer width="100%" height="80%">
                <LineChart data={data}>
                    <Line type="monotone" dataKey="players" stroke="#2a2a2a"/>
                    <Line type="monotone" dataKey="conversations" stroke="#2a2a2a"/>
                    <Line type="monotone" dataKey="messages" stroke="#2a2a2a"/>
                    <XAxis dataKey="day"/>
                    <YAxis type="number" domain={[0, 'dataMax']}/>
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

export default MainGraph