import React, { useEffect, useState } from 'react'
import style from './newnav.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const NewNav = () => {

    const [pkg, setpkg] = useState([])
    async function packagesList() {
        const data = await axios.get("https://skyway-server.herokuapp.com/api/v1/packages/getAllPackages")
        setpkg(data.data)
    }
    packagesList();
    useEffect(() => {
        console.log(pkg)
    }, [pkg])

    return (

        <div className={style.newnav}>
            <div>

                <b>Discover India Tours for Foreign tourist's visiting India</b>
                {pkg.length ? pkg.map((pkg) => {
                    return (
                        <div>

                            <a href={'/packages/' + pkg._id}>
                                Golden Triangle
                                {pkg.packageName}

                            </a>
                        </div>
                    )
                }) : <p>No Packages in This Group Yet!</p>}

                <img src={require('../asserts/images/taj.png')} alt='' />
            </div>
            <div>
                <b>India Tours for indian tourists to travel within India</b>
                <div>
                    <Link to={'/'}>Central India</Link>
                </div>
                <div>
                    <Link to={'/'}>East India</Link>
                </div>
                <div>
                    <Link to={'/'}>North India</Link>
                </div>
                <div>
                    <Link to={'/'}>South India</Link>
                </div>
                <div>
                    <Link to={'/'}>West India</Link>
                </div>

                <b>Honeymoon Packages</b>
                <div>
                    <Link to={'/'}>India</Link>
                </div>
                <div>
                    <Link to={'/'}>Internaional</Link>
                </div>
                <img src={require('../asserts/images/menu2.png')} alt='' />
            </div>
            <div>
                <span>
                    <b>International</b>
                    <div>
                        <Link to='/'>Australia</Link>
                    </div>
                    <div>
                        <Link to='/'>Europe</Link>
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
                        <Link to='/'>Karnataka Tours</Link>
                    </div>
                    <div>
                        <Link to='/'>Kerela Tours</Link>
                    </div>
                    <div>
                        <Link to='/'>Weekend Gateways</Link>
                    </div>
                    <div>
                        <Link to='/'>City Breaks</Link>
                    </div>
                    <div>
                        <Link to='/'>Coach Tours</Link>
                    </div>
                </span>
                <img src={require('../asserts/images/menu5.png')} alt='' />
            </div>
        </div>
    )
}

export default NewNav
