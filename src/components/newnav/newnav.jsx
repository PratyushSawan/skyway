import React, { useEffect, useState } from 'react'
import style from './newnav.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const NewNav = () => {

    const [pkgs, setpkgs] = useState([])
    async function packagesList() {
        const data = await axios.get("https://skyway-server.herokuapp.com/api/v1/packages/getAllPackages")
        setpkgs(data.data)
    }
    useEffect(() => {
        packagesList();
    }, [pkgs])

    return (

        <div className={style.newnav}>
            <div>

                <b>Discover India Tours for Foreign tourist's visiting India</b>
                {pkgs && pkgs.length ? pkgs.map((pkg, i) => {
                    if (i < 7 && pkg.category[1].toLowerCase() === "Discover India Tours for Foreign tourists visiting India".toLowerCase()) {
                        return (
                            <div key={pkg._id}>
                                <a href={'/packages/' + pkg._id}>
                                    {pkg.packageName}
                                </a>
                            </div>
                        )
                    }
                }) : <p>No Packages in This Group Yet!</p>}
                <a href="/holidays/Discover-India-Tours-for-Foreign-tourists-visiting-India" style={{ color: 'blue' }}>See More</a>
                <img src={require('../asserts/images/taj.png')} alt='' />
            </div>
            <div>
                <b>India Tours for indian tourists to travel within India</b>
                <div>
                    <a href={"/holidays/travel-within-india/Central-India"}>Central India</a>
                </div>
                <div>
                    <a href={'/holidays/travel-within-india/East-India'}> a East India</a>
                </div>
                <div>
                    <a href={'/holidays/travel-within-india/North-India'}>North India</a>
                </div>
                <div>
                    <a href={'/holidays/travel-within-india/South-India'}>South India</a>
                </div>
                <div>
                    <a href={'/holidays/travel-within-india/West-India'}>West India</a>
                </div>

                <b>Honeymoon Packages</b>
                <div>
                    <a href={'/holidays/Honeymoon-Packages/India'}>India</a>
                </div>
                <div>
                    <a href={'/holidays/Honeymoon-Packages/International'}>International</a>
                </div>
                <img src={require('../asserts/images/menu2.png')} alt='' />
            </div>
            <div>
                <span>
                    <b>International</b>
                    <div>
                        <Link to='/holidays/Honeymoon-Packages/Australia'>Australia</Link>
                    </div>
                    <div>
                        <Link to='/holidays/Honeymoon-Packages/Europe'>Europe</Link>
                    </div>
                    <div>
                        <Link to='/'>North and south america</Link>
                    </div>
                    <div>
                        <Link to='/'>Honeymoon Packages</Link>
                    </div>
                </span>
                <img src={require('../asserts/images/menu3.png')} alt='' />
            </div>
            <div>
                <span>
                    <b>Destination</b>
                    <div>
                        <Link to='/holidays/Destination/Karnataka-Tours'>Karnataka Tours</Link>
                    </div>
                    <div>
                        <Link to='/holidays/Destination/Kerela-Tours'>Kerela Tours</Link>
                    </div>
                    <div>
                        <Link to='/holidays/Destination/Weekend-Gateways'>Weekend Gateways</Link>
                    </div>
                    <div>
                        <Link to='/holidays/Destination/City-Breaks'>City Breaks</Link>
                    </div>
                    <div>
                        <Link to='/holidays/Destination/Coach-Tours'>Coach Tours</Link>
                    </div>
                </span>
                <img src={require('../asserts/images/menu5.png')} alt='' />
            </div>
        </div >
    )
}

export default NewNav
