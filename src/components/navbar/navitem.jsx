import React from 'react'
import style from './navitem.module.css'
import { ReactMegaMenu } from 'react-mega-menu'
import { Link } from 'react-router-dom'

export let NavItem = () => {
    let linkdata = {
        header: 'Golden Triangle',
        items: [
            'Best of kerela',
            'Indian Highlights',
            'A journey',
            'Golden trinagle & Goa',
            'Royal Rajastan',
        ],
    }

    let forign = (
        <div className={style.drop}>
            <div
                style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14pt',
                    borderBottom: '1px solid #000',
                    display: 'block',
                    width: '50%',
                }}
                className='heading'
            >
                {linkdata.header}
            </div>
            <ul>
                <li>
                    <a href='/'>Best of kerela</a>
                </li>
                <li>
                    <a href='/'>Indian Highlights</a>
                </li>
                <li>
                    <a href='/'>A journey through many worlds</a>
                </li>
                <li>
                    <Link to={'/packages'}>Golden triangle & Goa</Link>
                </li>
                <li>
                    <a href='/'>Royal Rajasthan</a>
                </li>
                <a style={{ color: '#000' }} href='/'>
                    more tours
                </a>
            </ul>
        </div>
    )

    let indian = (
        <div className={style.drop}>
            <div
                style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14pt',
                    borderBottom: '1px solid #000',
                    display: 'block',
                    width: '50%',
                }}
                className='heading'
            >
                {linkdata.header}
            </div>
            <ul>
                <li>
                    <a href='/'>Centeral India</a>
                </li>
                <li>
                    <a href='/'>East India</a>
                </li>
                <li>
                    <a href='/'>North India</a>
                </li>
                <li>
                    <a href='/'>South India</a>
                </li>
                <li>
                    <a href='/'>West India</a>
                </li>
            </ul>
        </div>
    )

    let Honeymoon = (
        <div className={style.drop}>
            <div
                style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14pt',
                    borderBottom: '1px solid #000',
                    display: 'block',
                    width: '50%',
                }}
                className='heading'
            >
                {linkdata.header}
            </div>
            <ul>
                <li>
                    <a href='/'>India</a>
                </li>
                <li>
                    <a href='/'>International</a>
                </li>
            </ul>
        </div>
    )

    let International = (
        <div className={style.drop}>
            <div
                style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14pt',
                    borderBottom: '1px solid #000',
                    display: 'block',
                    width: '50%',
                }}
                className='heading'
            >
                Asia
            </div>
            <ul>
                <li>
                    <a href='/'>Bali</a>
                </li>
                <li>
                    <a href='/'>Bhutan</a>
                </li>
                <li>
                    <a href='/'>Cambodia</a>
                </li>
                <li>
                    <a href='/'>Thailand</a>
                </li>
                <li>
                    <a href='/'>Vietnam</a>
                </li>
                <a style={{ color: '#000' }} href='/'>
                    more asia honeymoon tours
                </a>
            </ul>
            <div
                style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14pt',
                    borderBottom: '1px solid #000',
                    display: 'block',
                    width: '50%',
                }}
                className='heading'
            >
                Africa
            </div>
        </div>
    )

    let Destination = (
        <div className={style.drop}>
            <div
                style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14pt',
                    borderBottom: '1px solid #000',
                    display: 'block',
                    width: '50%',
                }}
                className='heading'
            >
                {linkdata.header}
            </div>
            <ul>
                <li>
                    <a href='/'>Karnataka Tours</a>
                </li>
                <li>
                    <a href='/'>Kerela Tours</a>
                </li>
                <li>
                    <a href='/'>Weekend Gateways</a>
                </li>
                <li>
                    <a href='/'>City Breaks</a>
                </li>
                <li>
                    <a href='/'>Coach Tours</a>
                </li>
            </ul>
        </div>
    )

    let data = [
        {
            label: "For foreign tourist's",
            key: 'forignkey',
            items: forign,
        },
        {
            label: "For Indian tourist's",
            key: 'indian',
            items: indian,
        },
        {
            label: 'Honeymoon packages',
            key: 'honey',
            items: Honeymoon,
        },
        {
            label: 'International',
            key: 'inter',
            items: International,
        },
        {
            label: 'Destination',
            key: 'desti',
            items: Destination,
        },
    ]

    return (
        <div style={{ backgroundColor: 'rgb(247, 247, 247)' }}>
            <ReactMegaMenu
                styleConfig={{
                    menuProps: {
                        style: {
                            width: '15em',
                            heading: '20em',
                            margin: '0',
                            backgroundColor: 'rgb(247, 247, 247)',
                        },
                    },
                    contentProps: {
                        style: {
                            width: '30em',
                            height: '20em',
                        },
                    },
                    menuItemProps: {
                        style: {
                            padding: '10px 25px 10px 25px',
                            backgroundColor: 'rgb(247, 247, 247)',
                            width: '100%',
                            textAlign: 'left',
                        },
                    },
                    menuItemSelectedProps: {
                        style: {
                            backgroundColor: 'rgb(204, 204, 204)',
                            padding: '10px 25px 10px 25px',
                            cursor: 'pointer',
                            width: '100%',
                            textAlign: 'left',
                        },
                    },
                    containerProps: {
                        style: {
                            height: '20em',
                            padding: '0',
                            margin: '0',
                            boxShadow: '1px 1px 15px #666',
                        },
                    },
                }}
                data={data}
            />
        </div>
    )
}
