import React from 'react'

import { BsClock } from 'react-icons/bs'
import { MdCardTravel, MdPlace } from 'react-icons/md'
import { Divider } from 'antd'

const CompBanner = ({duration}) => {
    return (
        <div
            className='row'
            style={{
                paddingLeft: '30px',
                width: '100%',
            }}
        >
            <Divider />
            <div className='col-md-3'>
                <div className='row' style={{ display: 'flex' }}>
                    <div style={{ marginRight: '10px' }}>
                        <span
                            style={{
                                fontSize: '20pt',
                                color: '#0059ff',
                            }}
                        >
                            <MdCardTravel />
                        </span>
                    </div>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>Tour name</span>
                        <br />
                        <span style={{ color: '#555' }}>
                            Golden Triangle Package
                        </span>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='row' style={{ display: 'flex' }}>
                    <div style={{ marginRight: '10px' }}>
                        <span
                            style={{
                                fontSize: '20pt',
                                color: '#0059ff',
                            }}
                        >
                            <BsClock />
                        </span>
                    </div>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>Duration</span>
                        <br />
                        <span style={{ color: '#555' }}>{duration}</span>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='row' style={{ display: 'flex' }}>
                    <div style={{ marginRight: '10px' }}>
                        <span
                            style={{
                                fontSize: '20pt',
                                color: '#0059ff',
                            }}
                        >
                            <MdPlace />
                        </span>
                    </div>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>
                            Places covered
                        </span>
                        <br />
                        <span style={{ color: '#555' }}>
                            DELHI , AGRA , JAIPUR
                        </span>
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default CompBanner
