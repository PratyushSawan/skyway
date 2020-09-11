import homepageStyle from '../homepage/homepage.module.css'
import React from 'react'

let Brands = () => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <div className={homepageStyle.headingTxt}>
                RECOGNIZED, APPROVED & ACCREDITED
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img
                            style={{ width: '100%' }}
                            src={require('../asserts/images/brands.png')}
                            alt=''
                        />
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col'>
                        <img
                            src={require('../asserts/images/incredble_india.png')}
                            alt=''
                        />
                    </div>
                    <div className='col'>
                        <img
                            src={require('../asserts/images/comodo_Secure.png')}
                            alt=''
                        />
                    </div>
                    <div className='col'>
                        <img
                            src={require('../asserts/images/india-handbook.png')}
                            alt=''
                        />
                    </div>
                    <div className='col'>
                        <img
                            src={require('../asserts/images/petit_fute.png')}
                            alt=''
                        />
                    </div>
                    <div className='col'>
                        <img
                            src={require('../asserts/images/routard.png')}
                            alt=''
                        />
                    </div>
                    <div className='col'>
                        <img
                            width='50'
                            height='50'
                            src={require('../asserts/images/25logo.jpg')}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
