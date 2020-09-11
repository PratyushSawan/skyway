import React from 'react'
import navbarStyle from './navbar.module.css'
import { Link } from 'react-router-dom'
import { FaAlignLeft, FaAngleDown } from 'react-icons/fa'
import NewNav from '../newnav/newnav'
import ExNav from '../newnav/expe.nav'
import FlightNav from '../newnav/flight.nav'
import { useHistory } from 'react-router-dom'

let Navbar = () => {
    let history = useHistory()

    return (
        <nav className={navbarStyle.mainNav}>
            <div className={navbarStyle.topNav}>
                <FaAlignLeft className={navbarStyle.ham} />
                <div
                    onClick={() => {
                        history.push('/')
                    }}
                    style={{
                        cursor: 'pointer',
                        backgroundImage: `url(${require('../asserts/images/brand-image.jpg')})`,
                    }}
                    className={navbarStyle.brandImage}
                ></div>

                <div className={navbarStyle.contactUs}>
                    <div className={navbarStyle.contactIcon}>
                        <img
                            width='30'
                            height='30'
                            src={require('../asserts/images/icons/time.svg')}
                            alt=''
                        />

                        <b>&nbsp;&nbsp; GMT + 5Hrs 30Mins</b>
                    </div>
                    <div className={navbarStyle.contactIcon}>
                        <img
                            width='30'
                            height='30'
                            src={require('../asserts/images/icons/call.svg')}
                            alt=''
                        />
                        <b>&nbsp;&nbsp;+91-8884 467467</b>
                    </div>
                    <div className={navbarStyle.contactIcon}>
                        <img
                            width='30'
                            height='30'
                            src={require('../asserts/images/icons/whatsapp.png')}
                            alt=''
                        />
                        <b>&nbsp;&nbsp; +91-98451 55833</b>
                    </div>
                    <div className={navbarStyle.contactIcon}>
                        <img
                            width='30'
                            height='30'
                            src={require('../asserts/images/icons/facebook.svg')}
                            alt=''
                        />
                    </div>
                    <div className={navbarStyle.contactIcon}>
                        <img
                            width='30'
                            height='30'
                            src={require('../asserts/images/icons/twitter.svg')}
                            alt=''
                        />
                    </div>
                    <div className={navbarStyle.contactIcon}>
                        <img
                            width='30'
                            height='30'
                            src={require('../asserts/images/icons/linkedin.svg')}
                            alt=''
                        />
                    </div>
                    <div className={navbarStyle.contactIcon}>
                        <img
                            width='30'
                            height='30'
                            src={require('../asserts/images/icons/instagram.svg')}
                            alt=''
                        />
                    </div>
                    <div className={navbarStyle.contactIcon}>
                        <img
                            width='30'
                            height='30'
                            src={require('../asserts/images/icons/google-plus.svg')}
                            alt=''
                        />
                    </div>
                    <div className={navbarStyle.contactIcon}>
                        <img
                            width='30'
                            height='30'
                            src={require('../asserts/images/icons/pinterest.svg')}
                            alt=''
                        />
                    </div>
                    <div className={navbarStyle.contactIcon}>
                        <img
                            width='80'
                            height='80'
                            src={require('../asserts/images/25logo.jpg')}
                            alt=''
                        />
                    </div>
                </div>
            </div>
            <div className={navbarStyle.menu}>
                <ul>
                    <li
                        style={{
                            display: 'flex',
                        }}
                        className={navbarStyle.menuDrop}
                    >
                        <div>
                            <Link to={'/'}>Holiday</Link>
                            <div className={navbarStyle.dropdown}>
                                <NewNav />
                            </div>
                        </div>
                        <FaAngleDown
                            style={{
                                display: 'block',
                                color: 'white',
                                position: 'relative',
                                top: '15px',
                                right: '10px',
                            }}
                        />
                    </li>
                    <li
                        style={{
                            display: 'flex',
                        }}
                        className={navbarStyle.menuDrop}
                    >
                        <div>
                            <Link to={'/'}>Experiences</Link>
                            <div className={navbarStyle.dropdown}>
                                <ExNav />
                            </div>
                        </div>
                        <FaAngleDown
                            style={{
                                display: 'block',
                                color: 'white',
                                position: 'relative',
                                top: '15px',
                                right: '10px',
                            }}
                        />
                    </li>
                    <li>
                        <Link to={'/jungle'}>Jungle Lodges</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Taxi Hire</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Luxury trains</Link>
                    </li>
                    <li
                        style={{
                            display: 'flex',
                        }}
                        className={navbarStyle.menuDrop}
                    >
                        <div>
                            <Link to={'/'}>Flights</Link>
                            <div className={navbarStyle.dropdown}>
                                <FlightNav />
                            </div>
                        </div>
                        <FaAngleDown
                            style={{
                                display: 'block',
                                color: 'white',
                                position: 'relative',
                                top: '15px',
                                right: '10px',
                            }}
                        />
                    </li>
                    <li>
                        <Link to={'/'}>Group Tours</Link>
                    </li>
                    <li>
                        <Link to={'/payOnline'}>Pay Online</Link>
                    </li>
                    <li>
                        <a href={'https://blog.skywaytour.com/'}>Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
