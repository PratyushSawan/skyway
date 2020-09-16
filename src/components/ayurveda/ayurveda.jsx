import React, { useState, useEffect } from 'react'
import SimpleBanner from '../simplebanner/simplebanner'
import { FaArrowRight } from 'react-icons/fa'
import { Divider } from 'antd'
import { MdLocationCity } from 'react-icons/md'
import EmailSub from '../emailsub/emailsub'
import BreadcrumComp from '../breadcrum/breadcrum'
import { Link } from 'react-router-dom'
import HolidayClub from '../holidayClub/holidayClub'
import PopularHoliday from '../popularHoliday/popularHoliday'
import axios from 'axios'

const Ayurveda = () => {

    const [pkgs, setpkgs] = useState([])
    async function packagesList() {
        const data = await axios.get("https://skyway-server.herokuapp.com/api/v1/packages/getAllPackages")
        let pkgs = data.data.map((pkg) => {
            return (pkg.category[0].toLowerCase() === "experiences" && "AYURVEDA RESORTS / PACKAGES" === pkg.category[1]) ? pkg : null
        })
        console.log(pkgs);
        setpkgs(pkgs)
    }


    useEffect(() => {
        packagesList()
        if (pkgs && pkgs.length) {
            setloading(false);
        }
    }, [pkgs])

    const [loading, setloading] = useState(true)
    const Loader = <div className='text-center align-content-center justify-content-center'><img width="500px" src={require("./loader.gif")} alt="" srcset="" /></div>

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
            <BreadcrumComp tourName='AYURVEDA RESORTS / PACKAGES' />
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
                    {loading ? 'LOADING' : pkgs && pkgs.length && !pkgs.every(pkg => pkg == null) ?
                        pkgs.map((pkg) => (
                            pkg ?
                                < CustomCard
                                    image={pkg.imageUrl}
                                    name={pkg.packageName}
                                    place={pkg.place}
                                    dec={pkg.description}
                                /> : null
                        )) : <h3 className='text-info font-weight-normal'>No packages found in "Ayurveda" yet.</h3>}
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
