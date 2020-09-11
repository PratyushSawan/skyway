import React from 'react'
const FlightNav = () => {
    let sty = {
        padding: '10px',
        backgroundColor: 'white',
    }

    return (
        <div
            style={{
                boxShadow: '1px 1px 15px #555',
            }}
        >
            <div style={sty}>Domestic</div>
            <div style={sty}>International</div>
            <div style={sty}>Visa Assistance</div>
            <div style={sty}>Passport Assistance</div>
            <div style={sty}>Travel Insurance</div>
            <div style={sty}>FOreign Exchange</div>
        </div>
    )
}

export default FlightNav
