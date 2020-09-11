import React from 'react'
import SimplePage from '../layouts/simplePage'

const HolidayClubPage = () => {
    return (
        <SimplePage
            title={'HOLIDAY CLUB'}
            image={require('../asserts/images/carlous-img2.jpg')}
        >
            <img src={require('../asserts/images/club1.jpg')} alt='' />
            <p>
                We are in travel business for the last 23 years. We have
                Registered office in Mysore, Head Office in Bangalore and
                branches/associate offices in Madikeri & others cities in India
                and abroad. We are recognized as Tour Operator by the Ministry
                of Tourism, Govt. of India, IATA Accredited, Active Member of
                Indian Association of Tour Operators (IATO) and Travel Agent
                Federation of India (TAFI), and an ISO 9001-2008 Certified
                Travel Company
            </p>
            <h2>
                Privileges and Benefits to Club Members for the services taken
                from Skyway International Travels
            </h2>
            <ol>
                <li>
                    {' '}
                    20% discount on service charges for assistance of Passport /
                    Visa
                </li>
                <li>
                    {' '}
                    20% discount on service charges for purchase of Air Tickets
                </li>
                <li>5% discount on Car Rentals</li>
                <li>5% discount on hotel / resort booking</li>
                <li>
                    Members who opt for holiday packages avail attractive travel
                    kit
                </li>
                <li>
                    Earn Reward points on your every rupee spent
                    <ol>
                        <li>Reward point for every Rs. 100 = 1 Point</li>
                        <li>Redeem 1 point = Rs. 1</li>
                        <li>Redeemable in multiple of 500 only</li>
                        <li>Points are accountable for member’s family only</li>
                        <li>
                            Point can be redeemed within the validity period of
                            the membership
                        </li>
                        <li>
                            Points are redeemable for services taken from us
                            only
                        </li>
                    </ol>
                </li>
            </ol>
        </SimplePage>
    )
}

export default HolidayClubPage
