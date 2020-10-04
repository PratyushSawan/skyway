import React from 'react'
import { Card, Button } from 'react-bootstrap'
import homepageStyle from './homepage.module.css'
import { FaSearch } from 'react-icons/fa'
import {
    FaUserFriends,
    FaSpaceShuttle,
    FaTripadvisor,
    FaClock,
} from 'react-icons/fa'
import BannerNew from '../bannerNew/banner'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import Brands from '../brands/brands'

let CustomCard = (props) => {
    return (
        <div className={homepageStyle.customCard}>
            <div className='row'>
                <div className='col-md-6'>
                    <img
                        style={{ height: '150%', width: '100%' }}
                        src={props.image}
                        alt=''
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                    }}
                    className={`col-md-6 ${homepageStyle.cardContent}`}
                >
                    <h4>{props.name}</h4>
                    <Button variant={'primary'}>OFFER OF THE WEEK</Button>
                </div>
            </div>
        </div>
    )
}

let HomepageHandPicked = () => {
    return (
        <div>
            <div className={homepageStyle.headingTxt}>
                HAND-PICKED HOLIDAYS FOR YOU
            </div>
            <center>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <CustomCard
                                image={require('../assets/prototype/holiday1.webp')}
                                name='GOLDEN TRIANGLE TOUR PACKAGE'
                            />
                        </div>
                        <div className='col-md-6'>
                            <CustomCard
                                image={require('../assets/prototype/holiday2.webp')}
                                name='KERELA GALORE'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <CustomCard
                                image={require('../assets/prototype/holiday3.webp')}
                                name='EXPLORE COORG'
                            />
                        </div>
                        <div className='col-md-6'>
                            <CustomCard
                                image={require('../assets/prototype/holiday4.webp')}
                                name='DAZZLING DUBAI'
                            />
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

let APopularCard = ({ description, duration, image, priceDetail }) => {
    return (
        <div className={homepageStyle.apop}>
            <img src={image} alt="" className={homepageStyle.apopImg} />
            <div className={homepageStyle.apopDuration}>
                {duration}
            </div>
            <div className={homepageStyle.apopTitle}>
                {description}
            </div>
            <div className={homepageStyle.apopPrice}>
                {priceDetail}
            </div>
            <div className={homepageStyle.apopBtn}>
                Show Details
            </div>
        </div>
    )
}

let PopularCard = (props) => {
    return (
        <Card className={homepageStyle.mycard} style={{ width: '250px' }}>
            <Card.Img variant='top' src={props.image} />
            <div
                style={{
                    backgroundColor: '#0056ff',
                    width: '100%',
                    fontSize: '15pt',
                    padding: '5px',
                    color: 'white',
                }}
            >
                {props.priceDetail}
            </div>
            <Card.Body
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                }}
            >
                <div>
                    <Card.Title>{props.description}</Card.Title>
                    <div style={{ color: '#555', fontSize: '14pt' }}>
                        <FaClock /> {props.duration}
                    </div>
                </div>
                <Button variant='primary'>Show details</Button>
            </Card.Body>
        </Card>
    )
}

let PopularTours = () => {
    return (
        <div>
            <div className={homepageStyle.headingTxt}>POPULAR TOURS</div>
            <div className={homepageStyle.smallTxt}>
                Unlimited Choices. Great Support & Service. Best Prices. Happy
                Memories.
            </div>
            <center>
                <div style={{ margin: '20px' }} className='container'>
                    <div className={'row'}>
                        <div className={'col-md-3'}>
                            <APopularCard
                                description='Himachal Delight Honeymoon package'
                                duration='6 nights / 7 days'
                                image={require('../assets/images/populat0.jpg')}
                                priceDetail={'Starts at ₹ 19200/- PP'}
                            />
                        </div>
                        <div className={'col-md-3'}>
                            <APopularCard
                                description='European Delight'
                                duration='6 nights / 7 days'
                                image={require('../assets/images/popular1.jpg')}
                                priceDetail={'starts at ₹ 67000/- PP'}
                            />
                        </div>
                        <div className={'col-md-3'}>
                            <APopularCard
                                description='Pondicherry getaway'
                                duration='3 nights / 4 days'
                                image={require('../assets/images/pupular2.jpg')}
                                priceDetail={'Starts at ₹ 10200/- PP'}
                            />
                        </div>
                        <div className={'col-md-3'}>
                            <APopularCard
                                description='Australian east coaster EAST COASTER'
                                duration='09 nights/ 10 days'
                                image={require('../assets/images/popular3.jpg')}
                                priceDetail={'Starts at ₹ 97300/- PP'}
                            />
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

let IndianSpritualTours = () => {
    return (
        <div>
            <div className={homepageStyle.headingTxt}>
                INDIAN SPRITUAL TOUR PACAKGES
            </div>
            <center>
                <div style={{ margin: '20px' }} className='container'>
                    <div className='row'>
                        <div className={`col-md-3`}>
                            <PopularCard
                                priceDetail='Starts at ₹ 136000/- pp'
                                description='Kailash Manasarovara Yatra By OVERLAND - 2020'
                                image={require('../assets/prototype/spritual1.webp')}
                            />
                        </div>
                        <div className='col-md-3'>
                            <PopularCard
                                priceDetail='Starts at ₹ 180000/- pp'
                                description='Kailash Manasarovara Yatra By HELICOPTER - 2020'
                                image={require('../assets/prototype/spritual2.webp')}
                            />
                        </div>
                        <div className='col-md-3'>
                            <PopularCard
                                duration='12 Nights / 13 Days'
                                priceDetail='Starts at ₹ 31500/- pp'
                                description='Char Dham Yatra 2020'
                                image={require('../assets/prototype/spritual3.webp')}
                            />
                        </div>
                        <div className='col-md-3'>
                            <PopularCard
                                duration='1 Nights / 2 Days'
                                priceDetail='Starts at ₹ 6000/- pp'
                                description='Tirupathi Seeghra Darshan Package'
                                image={require('../assets/prototype/spritual4.webp')}
                            />
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

let TestimonialsCard = () => {
    return (
        <Card
            className={homepageStyle.mycard}
            style={{
                backgroundColor: 'white',
                boxShadow: '1px 1px 15px #ddd',
                margin: '10px',
            }}
        >
            <Card.Body>
                <Card.Text>
                    Dear Mr Mahalingaiah, we have been very happy during our
                    trip to Karnataka, India. Efficiency and professionalism of
                    your team in Mysore was exemplary
                    <br />
                    <b>Mr Marc REITER </b>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

let Testimonials = () => {
    return (
        <div>
            <div className={homepageStyle.headingTxt}>TESTIMONIALS</div>
            <center>
                <div style={{ margin: '20px' }} className='container'>
                    <div className='row'>
                        <div className={`col`}>
                            <TestimonialsCard />
                        </div>
                        <div className='col'>
                            <TestimonialsCard />
                        </div>
                        <div className='col'>
                            <TestimonialsCard />
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

let WhySkyway = () => {
    return (
        <div className={homepageStyle.why}>
            <div style={{ color: 'blue' }}></div>
            <h3 style={{ color: 'blue' }}>Why choose Skyway</h3>
            <h4>
                Inbound Tours & Travel Agency Operator recognised by Ministry of
                Tourism, Govt of India
            </h4>
            <p>
                IATA Accredited, Active Member of Indian Association of Tour
                Operators (IATO), Travel Agent Federation of India (TAFI) &
                Pacific Asia Travel Association (PATA)
            </p>

            <div className={'row'}>
                <div
                    className={`col ${homepageStyle.whyskyway}`}
                    style={{ width: '18rem' }}
                >
                    <Card className={homepageStyle.mycard}>
                        <Card.Body>
                            <h5 style={{ color: 'blue' }}>
                                <FaUserFriends style={{ fontSize: '18pt' }} />
                                100% TAILOR MADE PACKAGES
                            </h5>
                            <ul style={{ padding: '10px' }}>
                                <li>
                                    Your entire holiday is designed around your
                                    requirements.
                                </li>
                                <li>
                                    Explore your interests at your own speed.
                                </li>
                                <li>
                                    Select your preferred accommodation &
                                    vehicle.
                                </li>
                                <li>
                                    Create the perfect trip with the help of our
                                    specialists.
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>
                <div
                    className={`col ${homepageStyle.whyskyway}`}
                    style={{ width: '18rem' }}
                >
                    <Card className={homepageStyle.mycard}>
                        <Card.Body>
                            <h5 style={{ color: 'blue' }}>
                                <FaTripadvisor style={{ fontSize: '18pt' }} />
                                GET EXPERT KNOWLEDGE
                            </h5>
                            <ul style={{ padding: '10px' }}>
                                <li>
                                    Our travel experts have complete knowledge
                                    of destination.
                                </li>
                                <li>
                                    Our travel experts will handle your trip
                                    from start to finish.
                                </li>
                                <li>Make the most of your time and budget.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>
                <div
                    className={`col ${homepageStyle.whyskyway}`}
                    style={{ width: '18rem' }}
                >
                    <Card className={homepageStyle.mycard}>
                        <Card.Body>
                            <h5 style={{ color: 'blue' }}>
                                <FaSpaceShuttle style={{ fontSize: '18pt' }} />
                                GET THE BEST TRAVEL GUIDES
                            </h5>
                            <ul style={{ padding: '10px' }}>
                                <li>
                                    Make the difference between a good trip and
                                    an outstanding one.
                                </li>
                                <li>
                                    Training by Ministry of Tourism, hand picked
                                    by us or our local partners as the best
                                    available.
                                </li>
                                <li>
                                    Offering more than just dates and names,
                                    they strive to offer real insight into their
                                    region.
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>

                <div
                    className={`col ${homepageStyle.whyskyway}`}
                    style={{ width: '18rem' }}
                >
                    <Card className={homepageStyle.mycard}>
                        <Card.Body>
                            <h5 style={{ color: 'blue' }}>
                                <FaUserFriends style={{ fontSize: '18pt' }} />
                                100% SAFE & SECURE
                            </h5>
                            <ul style={{ padding: '10px' }}>
                                <li>
                                    24/7 emergency India contact number while
                                    travelling +91-8884 467467.
                                </li>
                                <li>Established for over 25 years.</li>
                                <li>IATA Accredited</li>
                                <li>
                                    Recognised by Ministry of Tourism, Govt. of
                                    India as Inbound Tour Operator in India.
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

let Homepage = () => {
    let [searchRes, setSearchRes] = useState([])
    let history = useHistory()
    return (
        <div>
            <BannerNew />
            <div
                style={{
                    textAlign: 'center',
                    width: '100%',
                    height: '200px',
                    backgroundColor: '#0059ff',
                    paddingTop: '50px',
                    color: 'white',
                }}
            >
                <h3 style={{ color: 'white' }}>
                    BOOK YOUR DREAM HOLIDAY WITH SKYWAY
                </h3>
                <p>
                    Proudly managed over 10000+ Tours & delighted over 300000+
                    travelers in last 24 years
                </p>
                <div style={{ margin: '0px 400px 0px 400px' }}>
                    <div
                        style={{
                            width: '100%',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <input
                            onChange={(event) => {
                                setSearchRes([])

                                let query = event.target.value

                                fetch(`/search/${query}`)
                                    .then((res) => {
                                        return res.json()
                                    })
                                    .then((data) => {
                                        setSearchRes(data)
                                    })
                                    .catch((err) => {
                                        console.log(err)
                                    })
                            }}
                            style={{
                                width: '100%',
                                border: 'none',
                                borderRight: 'none',
                                padding: '18px',
                                height: '20px',
                                borderRadius: '5px 0 0 5px',
                                outline: 'none',
                                color: '#555',
                            }}
                            type='text'
                            placeholder='Search your destination ...'
                        />
                        <button
                            style={{
                                width: '40px',
                                height: '36px',
                                border: '1px solid #00B4CC',
                                background: '#00B4CC',
                                textAlign: 'center',
                                color: '#fff',
                                borderRadius: '0 5px 5px 0',
                                cursor: 'pointer',
                                fontSize: '20px',
                            }}
                        >
                            <FaSearch />
                        </button>
                    </div>
                    {searchRes.length !== 0 ? (
                        <div
                            style={{
                                margin: '3px 400px 0px 0px',
                                backgroundColor: '#fff',
                                width: '36%',
                                position: 'absolute',
                                boxShadow: '1px 1px 15px #ddd',
                                borderRadius: '0px 0px 10px 10px',
                            }}
                        >
                            {searchRes.map((res) => {
                                return (
                                    <div
                                        style={{
                                            padding: '7px',
                                            fontSize: '15pt',
                                            cursor: 'pointer',
                                            color: 'black',
                                            backgroundColor: 'white',
                                            textAlign: 'left',
                                        }}
                                        onClick={() => {
                                            history.push(`/packages/${res.id}`)
                                        }}
                                    >
                                        <FaArrowRight /> {res.name}
                                    </div>
                                )
                            })}
                        </div>
                    ) : null}
                </div>
            </div>

            <HomepageHandPicked />
            <PopularTours />
            <IndianSpritualTours />
            <Testimonials />
            <WhySkyway />
            <Brands />
        </div>
    )
}

export default Homepage
