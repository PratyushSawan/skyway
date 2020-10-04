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
                            src={require('../assets/images/brands.png')}
                            alt=''
                        />
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col'>
                        <img
                            src={require('../assets/images/incredble_india.png')}
                            alt=''
                        />
                    </div>
                    <div className='col'>
                        <img
                            src={require('../assets/images/comodo_Secure.png')}
                            alt=''
                        />
                    </div>
                    <div className='col'>
                        <img
                            src={require('../assets/images/india-handbook.png')}
                            alt=''
                        />
                    </div>
                    <div className='col'>
                        <img
                            src={require('../assets/images/petit_fute.png')}
                            alt=''
                        />
                    </div>
                    <div className='col'>
                        <img
                            src={require('../assets/images/routard.png')}
                            alt=''
                        />
                    </div>
                    <div className='col'>
                        <img
                            width='50'
                            height='50'
                            src={require('../assets/images/25logo.jpg')}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
