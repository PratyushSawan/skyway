import React from 'react'
import bannerStyle from './banner.module.css'
import { FaClock } from 'react-icons/fa'

let Banner = (props) => {
    return (
        <div style={{ width: '100%' }}>
            <div
                className={bannerStyle.banner}
                style={{ backgroundImage: `url("${props.image}")` }}
            >
                <div className={bannerStyle.overlay}>
                    <div className={bannerStyle.content}>
                        <div className={bannerStyle.headingTxt}>
                            {props.heading}
                        </div>
                    </div>
                    <div className={bannerStyle.bookNow}>
                        <div className={bannerStyle.bookNowContent}>
                            <p>Starts at (per person)</p>
                            <h2 style={{ color: 'white' }}>₹ {props.pricingAt}</h2>
                            <button className={'btn btn-primary'}>
                                Enquiry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={bannerStyle.mobileView}>
                <h2>{props.heading}</h2>
                <div className={bannerStyle.duration}>
                    <FaClock style={{ marginRight: '10px' }} />
                    {props.duration}
                </div>
                <p>Starts at (per person)</p>
                <h2 style={{ color: 'white' }}>₹ {props.pricingAt}</h2>
                <button
                    style={{ marginLeft: '20px' }}
                    className={'btn btn-primary'}
                >
                    Enquiry
                </button>
            </div>
        </div>
    )
}

export default Banner
