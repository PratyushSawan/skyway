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
            <Link to={'/grouptours/indiatours'} style={sty}> India tours </Link>
            <Link to={'/grouptours/foreigntours'} style={sty}>Foreign tours</Link>
        </div>
    )
}

export default ToursNav
