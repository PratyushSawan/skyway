import React from 'react'
import { Divider } from 'antd'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PopularHoliday = () => {
    return (
        <div
            style={{
                padding: '10px',
            }}
        >
            <div
                style={{
                    background: 'linear-gradient(90deg , blue , skyblue)',
                    color: 'white',
                    fontWeight: 'bold',
                    paddingBottom: '5px',
                    boxShadow: '1px 1px 15px #ddd',
                }}
            >
                <div
                    style={{
                        padding: '10px',
                        fontSize: '12pt',
                    }}
                >
                    POPULAR HOLIDAY
                </div>
                <div
                    style={{
                        width: '100%',
                        background: 'white',
                    }}
                >
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ padding: '10px' }}>
                            <Link
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                to={'/'}
                            >
                                <div>Golden Chariot</div> <FaArrowRight />{' '}
                            </Link>
                        </li>
                        <Divider style={{ margin: '0px' }} />
                        <li style={{ padding: '10px' }}>
                            <Link
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                to={'/'}
                            >
                                <div>Indian Tours</div>
                                <FaArrowRight />
                            </Link>
                        </li>
                        <Divider style={{ margin: '0px' }} />
                        <li style={{ padding: '10px' }}>
                            <Link
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                to={'/'}
                            >
                                <div>City Breaks</div>
                                <FaArrowRight />
                            </Link>
                        </li>
                        <Divider style={{ margin: '0px' }} />
                        <li style={{ padding: '10px' }}>
                            <Link
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                to={'/'}
                            >
                                <div>Honeymoon Packages</div>
                                <FaArrowRight />
                            </Link>
                        </li>
                        <Divider style={{ margin: '0px' }} />
                        <li style={{ padding: '10px' }}>
                            <Link
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                to={'/'}
                            >
                                <div>House Boat</div>
                                <FaArrowRight />
                            </Link>
                        </li>
                        <Divider style={{ margin: '0px' }} />
                        <li style={{ padding: '10px' }}>
                            <Link
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                to={'/'}
                            >
                                <div>Ayurveda Packages</div>
                                <FaArrowRight />
                            </Link>
                        </li>
                        <Divider style={{ margin: '0px' }} />
                        <li style={{ padding: '10px' }}>
                            <Link
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                to={'/'}
                            >
                                <div>India Weekends Getaways</div>
                                <FaArrowRight />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PopularHoliday
