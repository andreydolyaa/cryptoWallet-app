
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export default function chart({ marketPrice }) {
    return (
        <div>
            <LineChart width={1200} height={400} data={marketPrice.map(item => item)}>
                <Line type="monotone" dataKey="y" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey='x' />
                <YAxis />
            </LineChart>
        </div>
    )
}




