import React from 'react'
import SimpleBanner from '../simplebanner/simplebanner'
import { FaArrowRight } from 'react-icons/fa'
import { Divider } from 'antd'
import { MdLocationCity } from 'react-icons/md'
import EmailSub from '../emailsub/emailsub'
import BreadcrumComp from '../breadcrum/breadcrum'
import { Link } from 'react-router-dom'
import HolidayClub from '../holidayClub/holidayClub'
import PopularHoliday from '../popularHoliday/popularHoliday'

const Ayurveda = () => {
    let data = [
        {
            name: 'Indus Valley Ayurvedic Centre',
            place: 'Mysore, India',
            dec:
                'A peaceful sanctuary dedicated to physical purification and health.',
            image:
                'https://i.pinimg.com/originals/b3/8a/c3/b38ac38fb6f2b7b03614117824979c96.jpg',
        },
        {
            name: 'Ayurvedagram Heritage Wellness Centre',
            place: 'Banagaluru, India',
            dec:
                'Rejuvenation programs suited to your constitution and lifestyle',
            image:
                'https://r-cf.bstatic.com/images/hotel/max1024x768/718/7181272.jpg',
        },
        {
            name: 'Isola Di Cocco Ayurvedic',
            place: 'Trivandrum, India',
            dec:
                "Projected by the National Geographic Traveller Magazine as one of the 50 best 'must see destinations' in the world",
            image:
                'https://i.pinimg.com/474x/75/df/0e/75df0efd0e3bf6403fdf81b586151c29.jpg',
        },
        {
            name: 'Isola Di Cocco Ayurvedic',
            place: 'Trivandrum, India',
            dec:
                "Projected by the National Geographic Traveller Magazine as one of the 50 best 'must see destinations' in the world",
            image:
                'https://i.pinimg.com/474x/75/df/0e/75df0efd0e3bf6403fdf81b586151c29.jpg',
        },
        {
            name: 'Isola Di Cocco Ayurvedic',
            place: 'Trivandrum, India',
            dec:
                "Projected by the National Geographic Traveller Magazine as one of the 50 best 'must see destinations' in the world",
            image:
                'https://i.pinimg.com/474x/75/df/0e/75df0efd0e3bf6403fdf81b586151c29.jpg',
        },
    ]

    let CustomCard = ({ name, place, dec, image }) => {
        return (
            <div
                style={{
                    width: '100%',
                    boxShadow: '1px 1px 15px #ddd',
                    height: 'fit-content',
                    marginBottom: '10px',
                }}
            >
                <div className='row'>
                    <div className='col-md-4'>
                        <img
                            style={{
                                width: '100%',
                                height: '200px',
                            }}
                            src={image}
                            alt=''
                        />
                    </div>
                    <div
                        style={{
                            padding: '10px',
                        }}
                        className='col-md-8'
                    >
                        <div
                            style={{
                                fontSize: '16pt',
                            }}
                        >
                            {name}
                        </div>
                        <div
                            style={{
                                fontSize: '13pt',
                                color: 'blue',
                            }}
                        >
                            <MdLocationCity style={{ marginRight: '10px' }} />
                            {place}
                        </div>
                        <div
                            style={{
                                fontSize: '12pt',
                            }}
                        >
                            {dec}
                        </div>
                        <button
                            style={{
                                margin: '50px 50px 0px 50px',
                                float: 'right',
                            }}
                            className={'btn btn-primary'}
                        >
                            VIEW DETAIL <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <SimpleBanner
                name={'Ayurveda'}
                image={
                    'https://images.squarespace-cdn.com/content/v1/5cc913ecb7c92c52b20ac69d/1557363951184-0HHGOYT69IU0TGLB3T6H/ke17ZwdGBToddI8pDm48kFmTIaMuDlYTI0ZFaIqqJxZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PImr6kPDB8fcJW7JmpLOsHHynA68jEn_RnGWS_wUlnTTkKMshLAGzx4R3EDFOm1kBS/Ayurveda_07.jpg'
                }
            />
            <BreadcrumComp />
            <div className='row'>
                <div
                    style={{
                        padding: '40px',
                    }}
                    className='col-9'
                >
                    <p>
                        Tired and exhausted from the drudgery of work? Then the
                        Ayurveda package just fits the bill. The objective of
                        this package is to rejuvenate and relax the body and
                        soul by going through a series of therapy. Medicated
                        herbal oils from locally available resources are used,
                        which were the inventions of our fore fathers and being
                        in vogue even today to give relief to the body. South
                        India being the home for Ayurveda, Resorts have been
                        selected keeping the travellers profile in mind.
                    </p>
                    <Divider />
                    {data.map((d) => (
                        <CustomCard
                            image={d.image}
                            name={d.name}
                            place={d.place}
                            dec={d.dec}
                        />
                    ))}
                </div>
                <div className='col-3'>
                    <HolidayClub />
                    <PopularHoliday />
                    <img
                        style={{
                            width: '100%',
                            padding: '10px',
                            height: '250px',
                        }}
                        src={require('../asserts/images/ban.jpg')}
                        alt=''
                    />
                </div>
            </div>
            <EmailSub />
        </div>
    )
}

export default Ayurveda
