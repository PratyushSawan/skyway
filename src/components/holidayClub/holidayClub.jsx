import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const HolidayClub = () => {
    return (
        <div
            style={{
                height: '260px',
                margin: '10px',
                backgroundColor: 'skyblue',
            }}
        >
            <div style={{ padding: '5px 20px 5px 20px' }}>
                <div className='row'>
                    <div
                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            fontSize: '14pt',
                            padding: '10px',
                            fontWeight: 'bold',
                        }}
                        className='col-4'
                    >
                        SKYWAY
                    </div>
                    <div
                        style={{
                            backgroundColor: '#fc5305',
                            color: 'white',
                            fontSize: '14pt',
                            padding: '10px',
                            fontWeight: 'bold',
                        }}
                        className='col-8'
                    >
                        Holiday Club
                    </div>
                </div>
                <div
                    style={{
                        height: '100%',
                    }}
                    className='row'
                >
                    <div className='col-12'>
                        <img
                            style={{
                                position: 'relative',
                                left: '-15px',
                                width: '110%',
                                height: '197px',
                            }}
                            src={
                                'https://cdn.blueswandaily.com//2018/11/Travel000-2000x1200.jpg'
                            }
                            alt=''
                        />
                    </div>
                </div>
                <div className='row'>
                    <div style={{ textAlign: 'center' }} className='col-12'>
                        <button
                            style={{
                                position: 'relative',
                                top: '-50px',
                            }}
                            className={'btn btn-warning'}
                        >
                            Join Now <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HolidayClub
