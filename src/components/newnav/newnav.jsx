import React from 'react'
import style from './newnav.module.css'
import { Link } from 'react-router-dom'

const NewNav = () => {
    return (
        <div className={style.newnav}>
            <div>
                <b>Discover India Tours for Foreign tourist's visiting India</b>
                <div>
                    <a href={'/packages/5efb56cd5a26d88311d7a3bf'}>
                        Golden Triangle
                    </a>
                </div>
                <div>
                    <Link to={'/packages/5f0588b7641a400cbd4e7cae'}>
                        Best of kerela
                    </Link>
                </div>
                <div>
                    <Link to={'/packages/5f058f6e641a400cbd4e7cbf'}>
                        Indian highlights
                    </Link>
                </div>
                <div>
                    <Link to={'/packages/5f059100641a400cbd4e7cd2'}>
                        A journey through many worlds
                    </Link>
                </div>
                <div>
                    <Link to={'/'}>Golden Triangle package</Link>
                </div>
                <div>
                    <Link to={'/'}>Royal Rajasthan</Link>
                </div>
                <Link style={{ color: 'blue' }} to={'/'}>
                    more tours
                </Link>
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
