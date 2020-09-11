import React, { useEffect } from 'react'
import style from './expericences.module.css'
import Banner from '../banner/banner'
import BreadcrumComp from '../breadcrum/breadcrum'
import { Table } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'
import {
    FaBook,
    FaMoneyBill,
    FaPhotoVideo,
    FaEvernote,
    FaBan,
} from 'react-icons/fa'

import axios from "axios";

let Experiences = async () => {
    useEffect(() => {
        window.onscroll = (e) => {
            let sidebar = document.getElementById('side')
            if (sidebar !== null) {
                if (window.scrollY > 500) {
                    sidebar.style.height = '100vh'
                    sidebar.style.top = '0px'
                    sidebar.style.position = 'fixed'
                } else {
                    sidebar.style.position = 'relative'
                }

                if (window.scrollY > document.body.scrollHeight - 900) {
                    //sidebar.style.marginTop = '6500px'
                    sidebar.style.position = 'relative'
                }
            }
        }
    }, [])

    async function packagesList() {
        const data = await axios.get("https://skyway-server.herokuapp.com/packages/getAllPackages")
        return data
    }

    let data = {
        name: 'HOUSE BOAT',
        location: 'Alleppey | Alleppey-Kumarakom',
        duration: '1 Night / 2 Days',
        overview: `Traditionally, the houseboat was called kettuvallom, which means a boat made by tying together pieces of wood. Incredible may sound, not a single nail is used in the making of a kettuvallom.
            Jack wood planks are joined together with coir rope and then coated with black resin made from boiled cashew nut shells. Today, these giant 80 foot long crafts have been adapted into luxuriously furnished houseboats. A kettuvallom usually has one, two or three bath attached bedrooms, an open lounge, deck, kitchenette and a crew comprising oarsmen, a cook and guide.`,

        galImages: [
            'https://www.skywaytour.com/static/images/House_Boat_Kerala.jpg',
            'https://www.skywaytour.com/static/images/houseboat1.jpg',
            'https://www.skywaytour.com/static/images/houseboat2.jpg',
            'https://www.skywaytour.com/static/images/houseboat3.jpg',
        ],
    }

    try {
        data = await packagesList()
        data = data.data
        console.log(data);

    } catch (error) {
        console.log(error);

    }

    return (
        <div>
            <Banner
                heading={data.name}
                duration={data.duration}
                image={require('../asserts/images/carlous-img1.jpg')}
                places={data.location}
            />
            <BreadcrumComp />
            <div className='container-fluid'>
                <div className='row'>
                    <div
                        style={{ padding: '0', margin: '0' }}
                        className={`col-md-2 ${style.sidebar}`}
                    >
                        <div id={'side'}>
                            <div className={style.anchorPane}>
                                <Scrollspy
                                    items={[
                                        'overview',
                                        'mygallery',
                                        'pricing',
                                        'features',
                                        'tandc',
                                        'cancel',
                                    ]}
                                    currentClassName={style.dopeNav}
                                >
                                    <li>
                                        <a
                                            className={style.navLink}
                                            href='#overview'
                                        >
                                            <FaBook /> Overview
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#mygallery'>
                                            <FaPhotoVideo /> Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#pricing'>
                                            <FaMoneyBill /> Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#features'>
                                            <FaEvernote /> Features
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#tandc'>
                                            <FaBook /> Terms and conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#cancel'>
                                            <FaBan /> Cancellation
                                        </a>
                                    </li>
                                </Scrollspy>
                            </div>
                        </div>
                    </div>
                    <div
                        className='col-10'
                        style={{
                            margin: '0px',
                            padding: '0px',
                        }}
                    >
                        <div style={{ padding: '20px' }}>
                            <h3 id='overview'>OVERVIEW</h3>
                            <p>{data.overview}</p>
                            <h3 id='mygallery'>GALLERY</h3>
                            <div
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <div
                                    style={{
                                        width: '300px',
                                        height: '170px',
                                        marginRight: '10px',
                                        backgroundImage: `url("${require('../asserts/images/cardback1.jpg')}")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                    }}
                                />

                                <div
                                    style={{
                                        width: '300px',
                                        height: '170px',
                                        marginRight: '10px',
                                        backgroundImage: `url("${require('../asserts/images/cardback1.jpg')}")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                    }}
                                />
                                <div
                                    style={{
                                        width: '300px',
                                        height: '170px',
                                        marginRight: '10px',
                                        backgroundImage: `url("${require('../asserts/images/cardback1.jpg')}")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                    }}
                                />

                                <div
                                    style={{
                                        width: '300px',
                                        height: '170px',
                                        marginRight: '10px',
                                        backgroundImage: `url("${require('../asserts/images/cardback1.jpg')}")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                    }}
                                />
                            </div>
                            <h3 id='pricing'>PRICING</h3>
                            <b>Deluxe Air Conditioned Houseboats</b>
                            <Table striped responsive>
                                <thead>
                                    <tr>
                                        <th>Route</th>
                                        <th>2 Pax</th>
                                        <th>4 Pax</th>
                                        <th>6 Pax</th>
                                        <th>8 Pax</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alleppey-Alleppey</td>
                                        <td>₹ 12100/-</td>
                                        <td>₹ 17050/-</td>
                                        <td>₹ 23650/-</td>
                                        <td>₹ 30250/-</td>
                                    </tr>
                                    <tr>
                                        <td>Alleppey-Kumarakom</td>
                                        <td>₹ 13200/-</td>
                                        <td>₹ 18500/-</td>
                                        <td>₹ 25250/-</td>
                                        <td>₹ 31750/-</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <b>Premium Air Conditioned Houseboats</b>
                            <Table striped responsive>
                                <thead>
                                    <tr>
                                        <th>Route</th>
                                        <th>2 Pax</th>
                                        <th>4 Pax</th>
                                        <th>6 Pax</th>
                                        <th>8 Pax</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alleppey-Alleppey</td>
                                        <td>₹ 13750/-</td>
                                        <td>₹ 23250/-</td>
                                        <td>₹ 32750/-</td>
                                        <td>₹ 41600/-</td>
                                    </tr>
                                    <tr>
                                        <td>Alleppey-Kumarakom</td>
                                        <td>₹ 15850/-</td>
                                        <td>₹ 25500/-</td>
                                        <td>₹ 35000/-</td>
                                        <td>₹ 43800/-</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <b>Luxury Air Conditioned Houseboats</b>
                            <Table striped responsive>
                                <thead>
                                    <tr>
                                        <th>Route</th>
                                        <th>2 Pax</th>
                                        <th>4 Pax</th>
                                        <th>6 Pax</th>
                                        <th>8 Pax</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alleppey-Alleppey</td>
                                        <td>₹ 23340/-</td>
                                        <td>₹ 23250/-</td>
                                        <td>₹ 32750/-</td>
                                        <td>₹ 41600/-</td>
                                    </tr>
                                    <tr>
                                        <td>Alleppey-Kumarakom</td>
                                        <td>₹ 15850/-</td>
                                        <td>₹ 25500/-</td>
                                        <td>₹ 35000/-</td>
                                        <td>₹ 43800/-</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <h3 id='features'>FEATURES</h3>
                            <div>
                                <p>
                                    Each houseboat is of excellent construction
                                    and luxurious furnishing, with exquisite
                                    flooring, hull and valavara (canopy). They
                                    are in top cruising worthy condition.
                                </p>
                                <p>
                                    Houseboat is provided with a sun deck,
                                    spacious living / dining area (200 sq. ft.),
                                    one, two and three bedrooms (varying from
                                    100 sq. ft.- 130 sq. ft.), separate toilets
                                    for the crew, spacious passage and a neat,
                                    classy kitchen (75 sq. ft.).
                                </p>
                                <p>
                                    Adequate numbers of boys are provided and so
                                    are fire buckets.
                                </p>
                            </div>
                            <ul>
                                <li>
                                    Solid wastes and sewage are not directly
                                    discharged into the water, bio-chemical
                                    alternatives are provided and for energy
                                    requirements solar power is used.
                                </li>
                                <li>
                                    Wherever possible environment-friendly
                                    practices are put to use and plastics are
                                    strictly not used.
                                </li>
                                <li>
                                    Locally available palm trees, areca nut
                                    trees, bamboos and other ethnic materials
                                    are used for the boat construction. Also
                                    local communities are encouraged to actively
                                    involve themselves in this venture.
                                </li>
                                <li>
                                    The services of professional cooks are
                                    available on the boat. And the fixed menu
                                    offered is excellent and exotic.
                                </li>
                                <li>
                                    Excellent reading materials can also be
                                    accessed.
                                </li>
                            </ul>
                            <p>
                                All materials used onboard are eco-friendly,
                                from the Solar Power energy system to the decor.
                                Skillfully equipped with every safety and luxury
                                amenities. We are working hard to ensure that
                                the highest standards are maintained onboard.
                                Making your time with us, enchanting in every
                                way.
                            </p>
                        </div>
                        <h3 id='tandc'>TERMS AND CONDITIONS</h3>
                        <ul>
                            <li>Children below 5 yrs are free.</li>
                            <li>
                                Children above 6-12 Rs.1500 with extra mattress.
                            </li>
                            <li>
                                Extra person Rs. 3000/- with extra mattress.
                            </li>
                            <li>
                                Check in time: 12.30 pm, Check out time: 9.30
                                am.
                            </li>
                            <li>
                                For deluxe houseboats, AC will be operated from
                                9 pm to 6 am in Room
                            </li>
                            <li>
                                For Premium & Luxury – full time Ac in Room.
                            </li>
                            <li>
                                Tariff include Lunch, Tea, Dinner and Breakfast
                                – Menu: veg or non veg
                            </li>
                            <li>GST at 5% extra on total</li>
                            <li>
                                From December 20th to January 10th -25% hike on
                                the above rates.
                            </li>
                        </ul>
                        <h3 id='cancel'>Cancellation policy</h3>
                        <b>
                            Prior to commencement of tour and counted from a
                            working day.
                        </b>
                        <ol>
                            <li>
                                45 to 30 days prior to commencement of tour,
                                cancellation fee, 10 percent.
                            </li>
                            <li>
                                29 to 15 days prior to commencement of tour,
                                cancellation fee, 50 percent.
                            </li>
                            <li>
                                No refund for cancellation with less than 15
                                days.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences
