import React from 'react'
import SimpleBanner from '../simplebanner/simplebanner'
import BreadcrumComp from '../breadcrum/breadcrum'
import HolidayClub from '../holidayClub/holidayClub'
import PopularHoliday from '../popularHoliday/popularHoliday'
import { useEffect } from 'react'
import EmailSub from '../emailsub/emailsub'

const SimplePage = ({ children, title, image }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <SimpleBanner name={title} image={image} />
            <BreadcrumComp />
            <div className='container-fluid' style={{ margin: '20px 0px' }}>
                <div
                    className='row'
                    style={{
                        padding: '0px 20px',
                    }}
                >
                    <div
                        className={'col-md-9'}
                        style={{
                            padding: '20px',
                            boxShadow: '1px 1px 15px #ddd',
                        }}
                    >
                        {children}
                    </div>
                    <div className='col-md-3'>
                        <div id='stky'>
                            <HolidayClub />
                            <PopularHoliday />
                        </div>
                    </div>
                </div>
            </div>
            <EmailSub />
        </div>
    )
}

export default SimplePage
