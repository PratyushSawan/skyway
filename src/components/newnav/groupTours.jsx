import React from 'react'
import { Link } from 'react-router-dom'

const ToursNav = () => {

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
            <Link to={'https://grouptour.skywaytour.com/searchByType/TOUR_TAGS/India%20Tours'} style={sty}> India tours </Link>
            <Link to={'https://grouptour.skywaytour.com/searchByType/TOUR_TAGS/Foreign%20Tours'} style={sty}>Foreign tours</Link>
        </div>
    )
}

export default ToursNav
