import React from 'react'
import simpleStyle from './simplebanner.module.css'

const SimpleBanner = (props) => {
    return (
        <div>
            <div className={simpleStyle.simple} style={{ backgroundImage: `url(${props.image})` }}>
                <div className={simpleStyle.overlay}>
                    <div className={simpleStyle.content}>
                        <div className={simpleStyle.whiteOverlay}>
                            {props.name}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ padding: "20px", fontSize: "18pt", fontWeight: "bold" }} className={simpleStyle.mobileView + ' pl-5 ml-5'}>
                {props.name}
            </div>
        </div>
    )
}


export default SimpleBanner;