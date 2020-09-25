import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ExNav = () => {

    const [experiences, setExperiences] = useState([])
    async function packagesList() {
        const data = await axios.get("http://localhost:4545/api/v1/packages/getAllPackages")

        setExperiences(data.data.filter((pkg) => {
            return ((pkg.category[0].toUpperCase() === "EXPERIENCES" && !pkg.category[1]) ? pkg : null)
        }))
    }

    useEffect(() => {
        packagesList();
    }, [experiences])

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
            {experiences && experiences.length ? experiences.map((pkg, i) => {
                return (
                    pkg ?
                        <a key={'explink' + i} href={'/packages/' + pkg._id} style={sty}>
                            {pkg.packageName}
                        </a>
                        : ""
                )
            }) : ""}
            <Link to={'/experiences/ayurveda'} style={sty}>
                Ayurveda Resorts / Packages
            </Link>
            <Link to={'/experiences/DayTrip-Excursions'} style={sty}>Day Trip / Excursions</Link>
            <Link to={'/experiences/indiancitytours'} style={sty}>Indian City Tours</Link>
            <Link to={'/experiences/mysore-dasara-tours'} style={sty}>Mysore Dasara Tours</Link>
            <Link to={'/experiences/trupati-special-darshan'} style={sty}>Trupati Special Darshan Tours</Link>
            <Link to={'/experiences/weekend-gateways'} style={sty}>Weekend Getaways</Link>
        </div>
    )
}

export default ExNav
