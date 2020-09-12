import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import style from './package.module.css'
import ScrollspyNav from 'react-scrollspy-nav'
import { Table } from 'react-bootstrap'
import { Steps } from 'antd'

import {
    FaArrowRight,
    FaBook,
    FaPhotoVideo,
    FaMoneyBill,
    FaEvernote,
    FaHotel,
    FaStickyNote,
} from 'react-icons/fa'

import ReactHtmlParser from 'react-html-parser';

import CompBanner from './compBanner'
import BreadcrumComp from '../breadcrum/breadcrum'
import Banner from '../banner/banner'
import EmailSub from '../emailsub/emailsub'
import Brands from '../brands/brands'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const { Step } = Steps

let Packages = () => {
    let [packageDetails, setPackageDetails] = useState([])
    let { packageId } = useParams()

    let [photoIndex, setPhotoIndex] = useState(0)
    let [isOpen, setIsOpen] = useState(false)

    let LoadingJSX = (
        <div
            style={{
                width: '100vw',
                height: '600px',
                display: 'flex',
                backgroundColor: '#f1f2f3',
                justifyContent: 'center',
            }}
        >
            <img
                src={require('../asserts/animated/Pulse-1s-200px.svg')}
                alt=''
            />
        </div>
    )

    let history = useHistory()

    let makeSidebarSticky = () => {
        window.scrollTo(0, 0)

        window.onscroll = (e) => {
            let sidebar = document.getElementById('sidebar')
            if (sidebar !== null) {
                if (window.scrollY > 620) {
                    sidebar.style.top = '0px'
                    sidebar.style.width = '16.66%'
                    sidebar.style.position = 'fixed'
                    document.getElementById('btns').hidden = false
                } else {
                    sidebar.style.position = 'relative'
                    sidebar.style.width = '100%'
                    document.getElementById('btns').hidden = true
                }

                if (window.scrollY > document.body.scrollHeight - 1100) {
                    //sidebar.style.marginTop = '6500px'
                }
            }
        }
    }

    useEffect(() => {
        //Fetching the packages
        fetch(`https://skyway-server.herokuapp.com/api/v1/packages/getPackage/${packageId}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setPackageDetails(data)
            })

        //scrollFix
        makeSidebarSticky()
    }, [packageId])

    return packageDetails.length === 0 ? (
        LoadingJSX
    ) : (
            <div className={style.package}>
                <div>
                    <Banner
                        image={packageDetails.imageUrl}
                        duration={packageDetails.duration}
                        places={packageDetails.place}
                        pricingAt={packageDetails.pricing[0].cost.standard}
                    />
                    <BreadcrumComp />
                    <div className='row'>
                        <div
                            style={{
                                padding: '0px',
                                margin: '0px',
                            }}
                            className={'col-md-2'}
                        >
                            <div id={'sidebar'} className={style.sideBar}>
                                <ScrollspyNav
                                    scrollTargetIds={[
                                        'section_1',
                                        'section_2',
                                        'section_3',
                                        'section_4',
                                        'section_5',
                                        'section_6',
                                        'section_7',
                                    ]}
                                    duration={'500'}
                                    offset={200}
                                    activeNavClass={style.currentlyActive}
                                >
                                    <ul>
                                        <li>
                                            <a href='#section_1'>
                                                <FaBook />
                                            Overview
                                        </a>
                                        </li>
                                        <li>
                                            <a href='#section_2'>
                                                <FaPhotoVideo /> Gallery
                                        </a>
                                        </li>
                                        <li>
                                            <a href='#section_3'>
                                                <FaMoneyBill />
                                            Pricing
                                        </a>
                                        </li>
                                        <li>
                                            <a href='#section_4'>
                                                <FaEvernote />
                                            Include Exclude
                                        </a>
                                        </li>
                                        <li>
                                            <a href='#section_5'>
                                                <FaHotel />
                                            Itinerary
                                        </a>
                                        </li>

                                        <li>
                                            <a href='#section_6'>
                                                <FaHotel />
                                            Hotels
                                        </a>
                                        </li>
                                        <li>
                                            <a href='#section_7'>
                                                <FaStickyNote />
                                            Description
                                        </a>
                                        </li>
                                    </ul>
                                </ScrollspyNav>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#fafafa' }} className='col-md-10' >
                            <CompBanner pkgname={packageDetails.packageName} places={packageDetails.place} duration={packageDetails.duration} />

                            <div id={'section_1'}>
                                <div id='overview' style={{ padding: '20px' }}>
                                    <h2>OVERVIEW</h2>
                                    {ReactHtmlParser(packageDetails.overview)}
                                </div>
                            </div>
                            <div id={'section_2'}>
                                <div
                                    id='mygallery'
                                    style={{ padding: '20px', width: '100%' }}
                                >
                                    <h2>Gallery</h2>

                                    {isOpen && (
                                        <Lightbox
                                            mainSrc={
                                                packageDetails.galleryImagesUrls[
                                                photoIndex
                                                ]
                                            }
                                            nextSrc={
                                                packageDetails.galleryImagesUrls[
                                                (photoIndex + 1) %
                                                packageDetails
                                                    .galleryImagesUrls
                                                    .length
                                                ]
                                            }
                                            prevSrc={
                                                packageDetails.galleryImagesUrls[
                                                (photoIndex +
                                                    packageDetails
                                                        .galleryImagesUrls
                                                        .length -
                                                    1) %
                                                packageDetails
                                                    .galleryImagesUrls
                                                    .length
                                                ]
                                            }
                                            onCloseRequest={() => setIsOpen(false)}
                                            onMovePrevRequest={() =>
                                                setPhotoIndex(
                                                    (photoIndex +
                                                        packageDetails
                                                            .galleryImagesUrls
                                                            .length -
                                                        1) %
                                                    packageDetails
                                                        .galleryImagesUrls
                                                        .length
                                                )
                                            }
                                            onMoveNextRequest={() =>
                                                setPhotoIndex(
                                                    (photoIndex + 1) %
                                                    packageDetails
                                                        .galleryImagesUrls
                                                        .length
                                                )
                                            }
                                        />
                                    )}

                                    <div className={'row'}>
                                        {packageDetails.galleryImagesUrls ? (
                                            packageDetails.galleryImagesUrls.map(
                                                (url, idx) => {
                                                    return (
                                                        <div className={'col'}>
                                                            <img
                                                                onClick={() => {
                                                                    setPhotoIndex(
                                                                        idx
                                                                    )
                                                                    setIsOpen(true)
                                                                }}
                                                                src={url}
                                                                width={'170'}
                                                                alt=''
                                                            />
                                                        </div>
                                                    )
                                                }
                                            )
                                        ) : (
                                                <></>
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div id={'section_3'}>
                                <div
                                    id='pricing'
                                    style={{ padding: '20px', width: '100%' }}
                                >
                                    <h2>Pricing</h2>
                                    <Table striped bordered hover>
                                        <thead>
                                            <th>No of guests</th>
                                            <th>Standard</th>
                                            <th>Deluxe</th>
                                            <th>Luxury</th>
                                        </thead>
                                        <tbody>
                                            {packageDetails.pricing ? (
                                                packageDetails.pricing.map(
                                                    (plan) => {
                                                        return (
                                                            <tr>
                                                                <td>{plan.name}</td>
                                                                <td>
                                                                    {plan.cost
                                                                        .standard !==
                                                                        'free' ? (
                                                                            <>₹</>
                                                                        ) : null}
                                                                    {
                                                                        plan.cost
                                                                            .standard
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {plan.cost
                                                                        .deluxe !==
                                                                        'free' ? (
                                                                            <>₹</>
                                                                        ) : null}
                                                                    {
                                                                        plan.cost
                                                                            .deluxe
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {plan.cost
                                                                        .luxury !==
                                                                        'free' ? (
                                                                            <>₹</>
                                                                        ) : null}
                                                                    {
                                                                        plan.cost
                                                                            .luxury
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                )
                                            ) : (
                                                    <></>
                                                )}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div id={'section_4'}>
                                <div
                                    id='includeexclude'
                                    style={{ padding: '20px' }}
                                >
                                    <h2>Includes and excludes</h2>
                                    <h4>Includes</h4>
                                    <ul className={'container'}>
                                        {packageDetails.includeExclude ? (
                                            packageDetails.includeExclude.include.map(
                                                (include) => {
                                                    return <li>{include}</li>
                                                }
                                            )
                                        ) : (
                                                <></>
                                            )}
                                    </ul>
                                    <h4>Excludes</h4>
                                    <ul className={'container'}>
                                        {packageDetails.includeExclude ? (
                                            packageDetails.includeExclude.exclude.map(
                                                (exclude) => {
                                                    return <li>{exclude}</li>
                                                }
                                            )
                                        ) : (
                                                <></>
                                            )}
                                    </ul>
                                </div>
                            </div>
                            <div id={'section_5'}>
                                <div id='itinerary' style={{ padding: '20px' }}>
                                    <h2>Itinerary</h2>
                                    <Steps
                                        direction='vertical'
                                        current={
                                            packageDetails.itinerary
                                                ? packageDetails.itinerary.length
                                                : 1
                                        }
                                    >
                                        {packageDetails.itinerary ? (
                                            packageDetails.itinerary.map((it) => (
                                                <Step
                                                    title={it.place}
                                                    description={it.dec}
                                                />
                                            ))
                                        ) : (
                                                <></>
                                            )}
                                    </Steps>
                                </div>
                            </div>
                            <div id={'section_6'}>
                                <div id='hotels' style={{ padding: '20px' }}>
                                    <h2>Hotels</h2>
                                    <Table striped bordered hover>
                                        <thead>
                                            <th>Place</th>
                                            <th>Standard</th>
                                            <th>Deluxe</th>
                                            <th>Luxury</th>
                                        </thead>
                                        <tbody>
                                            {packageDetails.hotels ? (
                                                packageDetails.hotels.map(
                                                    (hotel) => {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    {hotel.place}
                                                                </td>
                                                                <td>
                                                                    {hotel.standard.map(
                                                                        (htl) => {
                                                                            return (
                                                                                <>
                                                                                    {
                                                                                        htl
                                                                                    }
                                                                                    <br />
                                                                                </>
                                                                            )
                                                                        }
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {hotel.deluxe.map(
                                                                        (htl) => {
                                                                            return (
                                                                                <>
                                                                                    {
                                                                                        htl
                                                                                    }
                                                                                    <br />
                                                                                </>
                                                                            )
                                                                        }
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {hotel.luxury.map(
                                                                        (htl) => {
                                                                            return (
                                                                                <>
                                                                                    {
                                                                                        htl
                                                                                    }
                                                                                    <br />
                                                                                </>
                                                                            )
                                                                        }
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                )
                                            ) : (
                                                    <></>
                                                )}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div id={'section_7'}>
                                <div id='description' style={{ padding: '20px' }}>
                                    <h2>Description</h2>
                                    {ReactHtmlParser(packageDetails.description)}
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '-20px',
                                    position: 'relative',
                                    left: '-20px',
                                }}
                            >
                                <EmailSub />
                                <Brands />
                            </div>
                        </div>
                    </div>
                </div>
                <div hidden id={'btns'}>
                    <div
                        onClick={() => {
                            window.scrollTo(0, 0)
                        }}
                        className={style.goToTop}
                    >
                        Go to Top
                </div>
                    <div
                        onClick={() => {
                            history.push('/booking_details/' + packageId)
                        }}
                        className={style.bookNowBtn}
                    >
                        Book Now <FaArrowRight />
                    </div>
                </div>
            </div>
        )
}

export default Packages
