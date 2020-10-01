import React from 'react'
import SimpleBanner from '../simplebanner/simplebanner'
import BreadcrumComp from '../breadcrum/breadcrum'
import HolidayClub from '../holidayClub/holidayClub'
import PopularHoliday from '../popularHoliday/popularHoliday'
import { useEffect } from 'react'

const Career = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <SimpleBanner
                image={require('../asserts/images/career.jpg')}
                name={'CAREER'}
            />
            <BreadcrumComp />
            <div className='container-fluid' style={{ margin: '20px 0px' }}>
                <div className='row'>
                    <div className='col-md-9'>
                        <div
                            style={{
                                padding: '20px',
                                boxShadow: '1px 1px 15px #ddd',
                            }}
                        >
                            <p>
                                IATA Accredited, Active Member of Indian
                                Association of Tour Operators (IATO) & Travel
                                Agent Federation of India (TAFI), an ISO
                                9001-2015 Certified Travel Company looking for
                            </p>
                            <h5>Head Office - Bangalore:</h5>
                            <ul>
                                <li>
                                    <b>Executive – Tours:</b> <br />
                                    <p>
                                        Graduate( MTA Graduates preferred)
                                        having 2 to 3 years’ experience in
                                        Travel Trade / Service Industry. Should
                                        be result oriented person who enjoys
                                        customer interaction and knowledge of
                                        Indian History especially South India.
                                        Age below 30 years.
                                    </p>
                                </li>
                                <li>
                                    <b>Executive – Travel:</b> <br />
                                    <p>
                                        Graduate having 3 to 5 years’ experience
                                        in Travel Trade / Service Industry
                                        handling Ticketing, Out bound travel,
                                        Visas and travel documentations. Should
                                        be result oriented person who enjoys
                                        customer interaction and knowledge of
                                        overseas travel preferred. . Age below
                                        30 years.
                                    </p>
                                </li>
                                <li>
                                    <b>Manager - seo & Digital Marketing:</b>{' '}
                                    <br />
                                    <p>
                                        Person having thorough knowledge in
                                        Digital Marketing and Search Engine
                                        Optimization related work. Should be
                                        result oriented and capacity to handle
                                        independently with creativity and ready
                                        to accept challenging job.
                                    </p>
                                </li>
                            </ul>
                            <h5>Registered Office - Mysore:</h5>
                            <ul>
                                <li>
                                    <b>Asst. Manager - Tours</b>
                                    <p>
                                        MTA / Graduate with 5 years’ experience
                                        in Travel Trade / Service Industry.
                                        Should be result oriented person who can
                                        lead our Inbound Team and enjoys
                                        customer interaction. Age below 35
                                        years.
                                    </p>
                                </li>
                                <li>
                                    <b>Executive – Tours</b>
                                    <p>
                                        MTA Graduates / Graduate having 2 to 3
                                        years’ experience in Travel Trade /
                                        Service Industry and having computer
                                        knowledge. Should be result oriented
                                        person who enjoys customer interaction
                                        and knowledge of Indian History
                                        especially South India. Age below 30
                                        years
                                    </p>
                                </li>
                            </ul>
                            <h5>Branch Offices</h5>
                            <ul>
                                <li>
                                    Chennai: <br />
                                    <b>Executive – Tours</b>
                                    <p>
                                        Graduates ( preferably in tourism)
                                        having 2 to 3 years’ experience in
                                        Travel Trade / Service Industry and
                                        having computer knowledge. Should be
                                        result oriented person who enjoys
                                        customer interaction and knowledge of
                                        Indian History especially
                                        Karnataka/South India to work in our
                                        Chennai office.
                                    </p>
                                </li>
                                <li>
                                    Hyderabad: <br />
                                    <b>Executive – Tours</b>
                                    <p>
                                        Graduates ( preferably in tourism)
                                        having 2 to 3 years’ experience in
                                        Travel Trade / Service Industry and
                                        having computer knowledge. Should be
                                        result oriented person who enjoys
                                        customer interaction and knowledge of
                                        Indian History especially
                                        Karnataka/South India to work in our
                                        Hyderabad office.
                                    </p>
                                </li>
                                <li>
                                    Indore: <br />
                                    <b>Executive – Tours</b>
                                    <p>
                                        Graduates ( preferably in tourism)
                                        having 2 to 3 years’ experience in
                                        Travel Trade / Service Industry and
                                        having computer knowledge. Should be
                                        result oriented person who enjoys
                                        customer interaction and knowledge of
                                        Indian History especially
                                        Karnataka/South India to work in our
                                        Indore office.
                                    </p>
                                </li>
                                <li>
                                    Madikeri: <br />
                                    <b>Executive - Car Rentals</b>
                                    <p>
                                        Graduate / P.U.C. Pass with fluency in
                                        English, Computers knowledge like
                                        Microsoft Word, Excel, Outlook Express,
                                        required to work in hotel travel desk at
                                        Madikeri and Virajpet in shifts.
                                    </p>
                                </li>
                            </ul>
                            <br />
                            Please sent us your resume at{' '}
                            <b>career@skywaytour.com</b>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <HolidayClub />
                        <PopularHoliday />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career
