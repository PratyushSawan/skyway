import React from 'react'
import { Link } from 'react-router-dom'

const ExNav = () => {
    let sty = {
        width: '200px',
        padding: '10px',
        backgroundColor: 'white',
        color: 'black',
    }

    return (
        <div
            style={{
                boxShadow: '1px 1px 15px #555',
            }}
        >
            <Link to={'/ayurveda'} style={sty}>
                Ayurveda Resorts / Packages
            </Link>
            <Link style={sty}>Day Trip / Excursions</Link>
            <Link style={sty}>House Boats</Link>
            <Link style={sty}>Indian City Tours</Link>
            <Link style={sty}>Mysore Dasara Tours</Link>
            <Link style={sty}>Mysore Dasara Gold Card</Link>
            <Link style={sty}>Trupati Special Darshan Tours</Link>
            <Link style={sty}>Weekend Getaways</Link>
        </div>
    )
}

export default ExNav
