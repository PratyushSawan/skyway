import React from 'react'
import SimplePage from '../layouts/simplePage'
import { Tab, Tabs } from 'react-bootstrap'

let AboutIndia = () => {
    return (
        <SimplePage
            title={'ABOUT INDIA'}
            image={require('../asserts/images/about-india.jpg')}
        >
            <p>
                India is the seventh largest country in the world. The country's
                official name, India is derived from the Old Persian version of
                Sindhu, the historic local appellation for the river Indus.
            </p>

            <Tabs defaultActiveKey='profile'>
                <Tab eventKey='home' title='About India'>
                    <p>
                        India is the seventh largest country in the world. The
                        country's official name, India is derived from the Old
                        Persian version of Sindhu, the historic local
                        appellation for the river Indus.
                    </p>
                    <img
                        src={require('../asserts/images/about-india.jpg')}
                        alt={''}
                    />
                </Tab>
                <Tab eventKey='profile' title='Fact Sheet'>
                    <div className='table-responsive'>
                        <br />
                        <table className='table table-striped'>
                            <tbody>
                                <tr>
                                    <td width='20%'>
                                        <strong>Capital </strong>
                                    </td>
                                    <td width='80%'>Delhi </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Area </strong>
                                    </td>
                                    <td>3,287,263 Sq.Km </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Latitude</strong>
                                    </td>
                                    <td>Between 8’4’ and 37’6’ north</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Coastline</strong>
                                    </td>
                                    <td>
                                        7516.5 ( including Lakshadweep and
                                        Andaman and Nicobar Islands )
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Land Frontier</strong>
                                    </td>
                                    <td>15,200 km</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Highest Mountain Range</strong>
                                    </td>
                                    <td>
                                        Himalayas (altitude more than 7500 m)
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Highest Mountain Peak</strong>
                                    </td>
                                    <td>K2( 8,611, above sea level )</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Largest River Basin</strong>
                                    </td>
                                    <td>Ganga-Brahmaputra Basin</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Longest River</strong>
                                    </td>
                                    <td>
                                        Brahmaputra 2,900 km ( Ganga 2,510 km )
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Language</strong>
                                    </td>
                                    <td>
                                        15 Languages specified in Eighth
                                        Schedule of the Constitution
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>National Flag</strong>
                                    </td>
                                    <td>
                                        Horizontal tricolor of deep saffron at
                                        the top, white in the middle and dark
                                        green at the bottom in equal
                                        proportions. In the centre of the
                                        white-band is the Ashoka Chakra , in
                                        navy blue, with 24 spokes.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>National Emblem</strong>
                                    </td>
                                    <td>
                                        Adaptation of the Sarnath Lion Capital
                                        of Ashoka
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>National Anthem</strong>
                                    </td>
                                    <td>Jana-Gana-Mana</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>National Calendar</strong>
                                    </td>
                                    <td>
                                        This is based on Saka Era with Chaitra
                                        as its first month and a normal year of
                                        365 days. Dates of the national calendar
                                        have a permanent correspondence with
                                        dates of Gregorian
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Calendar</strong>
                                    </td>
                                    <td>
                                        Chaitra 1 generally falls on March 22
                                        and in a leap year on March 21
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>National Bird</strong>
                                    </td>
                                    <td>Indian Peacock</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>National Animal</strong>
                                    </td>
                                    <td>Tiger</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Population</strong>
                                    </td>
                                    <td>1,147,995,898</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Male</strong>
                                    </td>
                                    <td>591,681,864</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Female</strong>
                                    </td>
                                    <td>556,314.014</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Tab>
                <Tab eventKey='contact' title='India Map'>
                    <img
                        src={require('../asserts/images/india-map.jpg')}
                        alt=''
                    />
                </Tab>
            </Tabs>
        </SimplePage>
    )
}

export default AboutIndia
