import React from 'react'
import SimpleBanner from '../simplebanner/simplebanner'
import BreadcrumComp from '../breadcrum/breadcrum'
import HolidayClub from '../holidayClub/holidayClub'
import PopularHoliday from '../popularHoliday/popularHoliday'
import EmailSub from '../emailsub/emailsub'
import { useEffect } from 'react'

const HotelResort = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <SimpleBanner
                name={'HOTEL RESORT LIST'}
                image={require('../assets/images/hotel.jpg')}
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
                                9001-2015 Certified Travel Company
                            </p>
                            <b>Our preferred Hotels / Resorts in India</b>
                            <table className='table table-striped'>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>City</strong>
                                        </td>
                                        <td>
                                            <strong>3 star</strong>
                                        </td>
                                        <td>
                                            <strong>4 Star</strong>
                                        </td>
                                        <td>
                                            <strong>5 Star</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Agra</td>
                                        <td>
                                            Hotel Amar,
                                            <br />
                                            Hotel Pushpa Villa,
                                            <br />
                                            Hotel Crystal Inn,
                                        </td>
                                        <td>
                                            Trident Agra,
                                            <br />
                                            Hotel Marina Agra,
                                            <br />
                                            Hotel Clark Shiraz,
                                        </td>
                                        <td>
                                            ITC Mughal,
                                            <br />
                                            Radisson Hotel,
                                            <br />
                                            The Taj Gateway,
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ahmedabad</td>
                                        <td>
                                            Comfort Inn President,
                                            <br />
                                            Lemon Tree Hotel,
                                            <br />
                                            Sarovar Portico
                                        </td>
                                        <td>
                                            Fortune Landmark,
                                            <br />
                                            Park Plaza,
                                            <br />
                                            Country Inn &amp; Suites By Carlson,
                                            <br />
                                            Cama Hotel
                                        </td>
                                        <td>
                                            Le Meridian,
                                            <br />
                                            The Gateway Hotel,
                                            <br />
                                            Courtyard By Marriott,
                                            <br />
                                            Radisson Blu
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Alleppey</td>
                                        <td>
                                            Punnamada Backwater Resort, Pagoda
                                            Resorts
                                        </td>
                                        <td>
                                            Lemon Tree Vembanad Lake
                                            <br />
                                            Marari Beach Resort, Rainbow Cruises{' '}
                                        </td>
                                        <td>The Park on Vembanad Lake</td>
                                    </tr>
                                    <tr>
                                        <td>Aurangabad</td>
                                        <td>
                                            Hotel Athithi,
                                            <br />
                                            Hotel Avon International
                                            <br />
                                            Hotel Amarpreeth
                                        </td>
                                        <td>
                                            The Meadows,
                                            <br />
                                            Lemon Tree Hotel
                                        </td>
                                        <td>
                                            Taj Residency
                                            <br />
                                            Welcomhotel Rama International,
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bangalore</td>
                                        <td>
                                            Grand Magrath, <br />
                                            The Elanza, <br />
                                            The Solitaire, <br />
                                            Young Island Comforts
                                        </td>
                                        <td>
                                            St, Mark’s Hotel,
                                            <br />
                                            The Chancery,
                                            <br />
                                            The Pride.
                                        </td>
                                        <td>
                                            Vivanta By Taj, M.G. Road, <br />
                                            The Lalit Ashok, <br />
                                            Le Meriden, <br />
                                            The Chancery Pavilion
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bandipur National Park</td>
                                        <td>
                                            JLR Bandipur Safari Lodge, Dholes
                                            Den, <br />
                                            Windflower Resort
                                        </td>
                                        <td>The Serai Bandipur </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Badami</td>
                                        <td>
                                            Kishkinda Heritage Resort
                                            <br />
                                            Krishna Heritage
                                            <br />
                                            Badami Court
                                            <br />
                                            KSTDC Mayura Chalukya
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Bikaner</td>
                                        <td>
                                            Hotel Basant Vihar Palace,
                                            <br />
                                            Heritage Resort Bikaner,
                                        </td>
                                        <td>Hotel Gaj Kesari</td>
                                        <td>Laxmi Niwas Palace - Heritage</td>
                                    </tr>
                                    <tr>
                                        <td>Bekal</td>
                                        <td>Niravana </td>
                                        <td>Ocean Pera</td>
                                        <td>
                                            The Lalit Resort &amp; Spa,
                                            <br />
                                            Vivanta By Taj
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bhopal</td>
                                        <td>
                                            Hotel Lake View Ashok,
                                            <br />
                                            Hotel Amar Palace
                                        </td>
                                        <td>Welcom Heritage Noor Us Palace,</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>B.R Hills</td>
                                        <td>
                                            JLR K Gudi Wilderness Camp, Gorukana
                                            Resort
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Calicut</td>
                                        <td>
                                            Hotel Asma Tower
                                            <br />
                                            Westway Hotel
                                            <br />
                                            Hayson Heritage
                                        </td>
                                        <td>
                                            Kadavu resort &amp; Ayurveda
                                            <br />
                                            Malabar Palace -4
                                        </td>
                                        <td>The Gateway Hotel</td>
                                    </tr>
                                    <tr>
                                        <td>Chennai</td>
                                        <td>
                                            Benz Park Tulip
                                            <br />
                                            The Residency, <br />
                                            Hotel Br/eeze, <br />
                                            Raj Park Chennai
                                            <br />
                                            Deccan Plaza hotel
                                        </td>
                                        <td>
                                            Fortune Select Palms, <br />
                                            Green park <br />
                                            GRT Grand <br />
                                            Quality Inn Sabari{' '}
                                        </td>
                                        <td>
                                            Radison Hotel GRT
                                            <br />
                                            Trident Chennai
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Chikmagalur</td>
                                        <td>The Planters Court,</td>
                                        <td>The Gateway Hotel</td>
                                        <td>The Serai - Chikmagalur</td>
                                    </tr>
                                    <tr>
                                        <td>Coimbatore</td>
                                        <td>
                                            Hotel CAG Pride,
                                            <br />
                                            Hotel City Tower
                                        </td>
                                        <td>
                                            The Residency Hotel,
                                            <br />
                                            Hotel Heritage Inn,
                                        </td>
                                        <td>
                                            Vivanta By Taj Surya,
                                            <br />
                                            Le Meridien
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Coonoor</td>
                                        <td>MGM Hillworth</td>
                                        <td>
                                            The Gateway Hotel
                                            <br />
                                            Kurumba Village resort
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Cochin</td>
                                        <td>
                                            The Trident,
                                            <br />
                                            The International Hotel Kochi
                                            <br />
                                            Abad Atrium
                                        </td>
                                        <td>Cherai Beach Resort</td>
                                        <td>
                                            Taj Residency,
                                            <br />
                                            Taj Malabar,
                                            <br />
                                            Le Meriden,
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Coorg - Madikeri</td>
                                        <td>
                                            JLR Dubare Elephant Camp,
                                            KSTDC&nbsp; Mayura Valley View&nbsp;
                                            Crystal Court.
                                        </td>
                                        <td>
                                            Heritage Resort, Windflower Spa
                                            &amp; Resort,
                                            <br />
                                            Amanvana Spa &amp; Resort
                                        </td>
                                        <td>
                                            Club Mahindra Kodagu Valley Resort,
                                            <br />
                                            Vivanta By Taj, Coorg
                                            <br />
                                            Orange County - Coorg
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Darjeeling</td>
                                        <td>
                                            Central Niravana,
                                            <br />
                                            May Fair Hill Resort,
                                            <br />
                                            Sinclairs Hotel,
                                        </td>
                                        <td>
                                            Central Heritage,
                                            <br />
                                            Elgin Dajeeling,
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Dandeli</td>
                                        <td>
                                            JLR Kali Adventure Camp
                                            <br />
                                            Sangway Holiday Home
                                            <br />
                                            Hornbill River Resort
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Delhi</td>
                                        <td>
                                            Hotel Grand Sartaj,
                                            <br />
                                            Hotel Iris Park,
                                            <br />
                                            Hotel Almonds,
                                            <br />
                                            Hotel Br/oadway
                                        </td>
                                        <td>
                                            Hotel Connaught,
                                            <br />
                                            Maidens Hotel,
                                            <br />
                                            Hotel Diplomat
                                        </td>
                                        <td>
                                            Vivanta By Taj Ambassador,
                                            <br />
                                            The Taj Mahal Hotel,
                                            <br />
                                            The Leela Palace, <br />
                                            The Lalit, Taj Palace Hotel
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Goa</td>
                                        <td>
                                            Aldia Santa Rita,
                                            <br />
                                            Sandal Wood Beach Resort, Santiago
                                            Resort,{' '}
                                        </td>
                                        <td>
                                            Sun Village, <br />
                                            Bay Watch&nbsp; Resort, Lemon Tree
                                            Amarante Beach Resort,{' '}
                                        </td>
                                        <td>
                                            Cidade De Goa, <br />
                                            Kenil Worth Beach Resort, Radisson
                                            Blu, <br />
                                            The zuri
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gangtok</td>
                                        <td>
                                            Greendale Residence,
                                            <br />
                                            Sterling Delisso Abode Resort,
                                        </td>
                                        <td>
                                            Elgin Nor Khill,
                                            <br />
                                            Hotel Tara Palace,
                                            <br />
                                            Summit Norling Resort &amp; Spa,
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Gokarna</td>
                                        <td>
                                            Om Beach Resort
                                            <br />
                                            Kushi Village Resort
                                        </td>
                                        <td>SwaSwara</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Gulmarg</td>
                                        <td>
                                            Hotel Grand Mumtaz
                                            <br />
                                            Hotel Heevan Retreat
                                        </td>
                                        <td>The Vintage Gulmarg</td>
                                        <td>
                                            The Khyber Himalayan Resort &amp;
                                            Spa
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gwalior</td>
                                        <td>
                                            Hotel Central Park,
                                            <br />
                                            Hotel Silver Oak
                                        </td>
                                        <td>Taj Usha Kiran Palace</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Hassan</td>
                                        <td>
                                            Hotel Southern Star,
                                            <br />
                                            Hotel Mallige Residency
                                        </td>
                                        <td>
                                            Hoysala Village, <br />
                                            Hotel Hassan Ashok
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Hospet - Hampi</td>
                                        <td>
                                            Krishna Palace,
                                            <br />
                                            Hotel Malligi, <br />
                                            JLR Sloth Bear Resort, <br />
                                            KSTDC Mayura Bhuvaneshwari
                                        </td>
                                        <td>Royal Orchid Central Kireeti,</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Jaipur</td>
                                        <td>
                                            Hotel Hawa Mahal,
                                            <br />
                                            Hotel Jaipur Greens,
                                            <br />
                                            Golden Tulip
                                        </td>
                                        <td>
                                            Fortune Select Metropolitan,
                                            <br />
                                            Trident Jaipur, <br />
                                            Hotel Mansingh
                                        </td>
                                        <td>
                                            The Lalit,
                                            <br />
                                            Le Meriden,
                                            <br />
                                            Jai Mahal Palace, <br />
                                            Country Inn &amp; Suites by Carlson
                                            <br />
                                            The Ramgarh Lodge,
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jodhpur</td>
                                        <td>Hotel Karni Bhawan</td>
                                        <td>
                                            Park Plaza,
                                            <br />
                                            Ranbanka Palace,
                                        </td>
                                        <td>
                                            Umaid Bhawan Palace,
                                            <br />
                                            Vivanta By taj – Hari Mahal
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jaisalmer</td>
                                        <td>
                                            Heritage Inn,
                                            <br />
                                            Gorbandh Palace,
                                        </td>
                                        <td>BR/Y’s Fort,</td>
                                        <td>Taj Gateway</td>
                                    </tr>
                                    <tr>
                                        <td>Karwar</td>
                                        <td>
                                            Devbagh Beach Resort, Emerald Bay
                                            Resort, Estuary View Resort
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Kanyakumari</td>
                                        <td>
                                            Singaar International,
                                            <br />
                                            Hotel Sea View
                                            <br />
                                            Cape Residency
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Khajuraho</td>
                                        <td>Hotel Zen Khajuraho</td>
                                        <td>Hotel Usha Bundela</td>
                                        <td>
                                            Radisson Jass,
                                            <br />
                                            Hotel Clarks,
                                            <br />
                                            The Lalit Temple View
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kumarakom</td>
                                        <td>
                                            Coco Bay Resort,
                                            <br />
                                            Back Water Retreat,
                                            <br />
                                            Saro Lake County,
                                        </td>
                                        <td>
                                            Lake Song Resort,
                                            <br />
                                            Back Water Ripples,
                                            <br />
                                            Abad Whispering Palms
                                        </td>
                                        <td>
                                            Kumarakom Lake Resort,
                                            <br />
                                            Taj Garden Retreat,
                                            <br />
                                            Coconut Lagoon Resort,
                                            <br />
                                            The Park – Vembanad Lake
                                            <br />
                                            The Zuri Kumarakom
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kodaikanal</td>
                                        <td>
                                            Hotel Kodai Resort,
                                            <br />
                                            Mountain View,
                                            <br />
                                            Valley View (Sterling)
                                        </td>
                                        <td>
                                            The Carlton,
                                            <br />
                                            Hotel Kodai International
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Kovalam</td>
                                        <td>
                                            Uday Samudra Beach Resort,
                                            <br />
                                            Beach and Lake Ayurvdic Resort,
                                            <br />
                                            Abad Harmonia Ayurveda&nbsp; Beach
                                            Resort
                                            <br /> &nbsp;
                                        </td>
                                        <td>
                                            Hotel Sea Face,
                                            <br />
                                            Estuary Island Resort,
                                            <br />
                                            Isola Di Cocco Beach Resort, <br />
                                            Poovar Island Resort,
                                        </td>
                                        <td>
                                            The Leela Kovalam Beach
                                            <br />
                                            Vivanta By Taj,
                                            <p></p>{' '}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lucknow</td>
                                        <td>
                                            Comfort Inn Lucknow,
                                            <br />
                                            Hotel Sagar International
                                        </td>
                                        <td>
                                            Golden Tulip Lucknow,
                                            <br />
                                            Best western Plus Levana
                                        </td>
                                        <td>
                                            Vivanta By Taj,
                                            <br />
                                            Hotel Clarks Avadh
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Leh</td>
                                        <td>
                                            Grand Himalaya,
                                            <br />
                                            Hotel Dragon
                                        </td>
                                        <td>The Grand Dragon</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Madurai</td>
                                        <td>
                                            Hotel Sangam,
                                            <br />
                                            Hotel Supreme,
                                            <br />
                                            Best Western Germanus
                                        </td>
                                        <td>
                                            Heritage Hotel,
                                            <br />
                                            GRT Grand
                                        </td>
                                        <td>The Taj Gateway Hotel</td>
                                    </tr>
                                    <tr>
                                        <td>Mysore</td>
                                        <td>
                                            Crystal Paark Inn, <br />
                                            The Quorum, <br />
                                            Kings Kourt Hotel
                                            <br />
                                            Young Island Resort&nbsp;{' '}
                                        </td>
                                        <td>
                                            Hotel Regallis,
                                            <br />
                                            Royal Orchid Metropole,
                                            <br />
                                            Windflower Spa &amp; Resort
                                            <br />
                                            Sandesh De Prince
                                        </td>
                                        <td>
                                            Lalitha Mahal Palace <br />
                                            Fortune JP Palace
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mangalore</td>
                                        <td>
                                            The Ocean Pearl
                                            <br />
                                            Deepa Comforts, <br />
                                            Poonja International{' '}
                                        </td>
                                        <td>
                                            The Gateway Hotel
                                            <br />
                                            Gold Finch Hotel
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Mahabalipuram</td>
                                        <td>
                                            Hotel Mamalla Heritage,
                                            <br />
                                            Golden Sun Hotel and Beach Resort,
                                        </td>
                                        <td>The Chariot Beach Resort,</td>
                                        <td>Radisson Temple Bay Resort,</td>
                                    </tr>
                                    <tr>
                                        <td>Munnar</td>
                                        <td>
                                            Hotel T &amp; U,
                                            <br />
                                            Misty Mountain
                                            <br />
                                            Deshadan Mountain Club
                                        </td>
                                        <td>
                                            Tea County,
                                            <br />
                                            Camelot Resort,
                                            <br />
                                            Ambady Estate
                                        </td>
                                        <td>
                                            Mountain Club,
                                            <br />
                                            Club Mahindra Lakeview,
                                            <p></p>{' '}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mumbai</td>
                                        <td>
                                            King’s International,
                                            <br />
                                            Hotel Supreme Heritage
                                            <br />
                                            Hotel Silver Inn
                                        </td>
                                        <td>
                                            Hotel Trident,
                                            <br />
                                            The Emerald,
                                            <br />
                                            Hotel Kohinoor Continental,
                                        </td>
                                        <td>
                                            The Taj Mahal Hotel,
                                            <br />
                                            Jm Marriott Hotel,
                                            <br />
                                            The Lalit,
                                            <br />
                                            The Leela
                                            <br />
                                            The Taj Mahal Palace
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Nagarahole National Park - Kabini
                                        </td>
                                        <td>
                                            JLR Kabini River Lodge, <br />
                                            The Bison Resort, <br />
                                            Water Woods
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Ooty</td>
                                        <td>
                                            Holiday Inn Gem Park,
                                            <br />
                                            Hotel Sinclairs,
                                            <br />
                                            Hotel Sullivan Court
                                        </td>
                                        <td>
                                            Fern Hills,
                                            <br />
                                            Taj Savoy,
                                            <br />
                                            Derby Green
                                            <br />
                                            Danish Villa
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Patna</td>
                                        <td>
                                            Fortune Residency,
                                            <br />
                                            Hotel Clarks Inn
                                        </td>
                                        <td>
                                            Hotel Chanukya
                                            <br />
                                            Hotel Pataliputra
                                        </td>
                                        <td>Hotel Maurya</td>
                                    </tr>
                                    <tr>
                                        <td>Pahalagam</td>
                                        <td>
                                            Hotel Forest Hill Resort,
                                            <br />
                                            Mountain View
                                        </td>
                                        <td>
                                            Hotel Hill Top,
                                            <br />
                                            Paradise Inn
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Pondicherry</td>
                                        <td>
                                            Hotel Lotus Comfort,
                                            <br />
                                            Hotel Ginger,
                                            <br />
                                            The Ashok Beach Resort
                                        </td>
                                        <td>
                                            The Windflower Spa &amp; Resort
                                            <br />
                                            Hotel Athithi,
                                            <br />
                                            The Richmond
                                        </td>
                                        <td>
                                            Club Mahindra&nbsp; at Zest at Big
                                            Beach ,<br />
                                            The Accord
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pushkar</td>
                                        <td>
                                            Hotel Gulaab Niwaas Palace,
                                            <br />
                                            Hotel Pushkar Heritage
                                        </td>
                                        <td>
                                            Pushkar Resort,
                                            <br />
                                            The orchard Resort,
                                        </td>
                                        <td>Ananta Spa &amp; Resorts</td>
                                    </tr>
                                    <tr>
                                        <td>Srinagar</td>
                                        <td>
                                            Hotel Grand Kashmir,
                                            <br />
                                            Hotel Imperial Lake View
                                        </td>
                                        <td>
                                            Peacock House Boat
                                            <br />
                                            Hotel Br/oadway
                                        </td>
                                        <td>
                                            The lalit Grand Palace,
                                            <br />
                                            Vivanta By Taj
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sonmarg</td>
                                        <td>
                                            Mountain Greens,
                                            <br />
                                            Hotel Sonmarg Resort
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Thanjavur</td>
                                        <td>
                                            Hotel Sangam,
                                            <br />
                                            Hotel Oriental Towers
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Thekkady</td>
                                        <td>
                                            Wood N Spice,
                                            <br />
                                            Carmelia Haven,
                                            <br />
                                            Spice Garden
                                        </td>
                                        <td>
                                            Cardmom County,
                                            <br />
                                            Green Woods,
                                            <br />
                                            Abad Green Forest
                                        </td>
                                        <td>
                                            Spice Village,
                                            <br />
                                            Tusker Trails,
                                            <br />
                                            The Elephant Court
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Trivandrum</td>
                                        <td>
                                            Hotel Horizon,
                                            <br />
                                            Hotel Pankaj,
                                            <p></p>{' '}
                                        </td>
                                        <td>
                                            Fortune Hotel The south Park,
                                            <br />
                                            Classic Avenue,
                                            <br />
                                            The Gateway Hotel,
                                        </td>
                                        <td>
                                            Vivanta By Taj
                                            <br />
                                            The Leela,
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Udaipur</td>
                                        <td>
                                            Lake Pichola,
                                            <br />
                                            Hotel Rajadarshan
                                        </td>
                                        <td>
                                            Amantra Comfort Hotel,
                                            <br />
                                            Cambay Spa &amp; Resort,
                                            <br />
                                            Golden Tulip,
                                            <br />
                                            Trident Udaipur
                                        </td>
                                        <td>
                                            The leela Palace,
                                            <br />
                                            Taj lake Palace,
                                            <br />
                                            The Oberoi Udaivilas
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Varanasi</td>
                                        <td>
                                            Hotel Crescent Villa,
                                            <br />
                                            Hotel Ideal Tower
                                        </td>
                                        <td>
                                            Hotel Hindustan International,
                                            <br />
                                            Hotel City Inn
                                        </td>
                                        <td>
                                            Hotel Clarks,
                                            <br />
                                            Radisson Hotel,
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Varkala</td>
                                        <td>
                                            Deshadan Beach Resort,
                                            <br />
                                            Hindustan Beach Resort
                                        </td>
                                        <td>
                                            The Gateway Hotel Janaradhanapuram,
                                            <br />
                                            Blue Water Resort
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>Wayanad</td>
                                        <td>
                                            Rain County Resort,
                                            <br />
                                            Blue Ginger Resort,
                                            <br />
                                            Bansura Hill Resort
                                        </td>
                                        <td>
                                            Vythiri Resort,
                                            <br />
                                            Silver Woods,
                                            <br />
                                            The Windflower Resort &amp; Spa,
                                            <br />
                                            Vythiri Village
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <HolidayClub />
                        <PopularHoliday />
                    </div>
                </div>
            </div>
            <EmailSub />
        </div>
    )
}

export default HotelResort
