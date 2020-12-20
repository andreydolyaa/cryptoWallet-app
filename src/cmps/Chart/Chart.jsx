
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import './Chart.scss'


export default function chart({ marketPrice, tradingVolume }) {
    return (

        
        <div className="chartz">
            <h2>5 Months price chart</h2>
            <LineChart width={900} height={400} data={marketPrice.map(item => item)}>
                <Line type="monotone" dataKey="y" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey='x' />
                <YAxis />
            </LineChart>



            <h2>5 Months daily trading volume</h2>
            <LineChart width={900} height={400} data={tradingVolume.map(item => item)}>
                <Line type="monotone" dataKey="y" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey='x' />
                <YAxis />
            </LineChart>
        </div>
    )
}




