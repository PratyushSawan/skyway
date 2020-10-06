import React, { useEffect, useState } from 'react'
import style from './newnav.module.css'
import axios from 'axios'
import { FaAngleDoubleDown } from 'react-icons/fa'

const NewNav = () => {

    const [accordionPanelClass1, setaccordionPanelClass1] = useState('')
    const [accordionPanelClass2, setaccordionPanelClass2] = useState('')

    function slideAccordion(e) {
        if (e === 1) {
            if (accordionPanelClass1) {
                setaccordionPanelClass1('');
            } else {
                setaccordionPanelClass1(style.panel);
            }
        } else if (e === 2) {
            if (accordionPanelClass2) {
                setaccordionPanelClass2('');
            } else {
                setaccordionPanelClass2(style.panel);
            }
        }
    }

    const [pkgs, setpkgs] = useState([])
    const [loading, setLoading] = useState(true)
    async function packagesList() {
        const Res = await axios.get("https://skyway-server.herokuapp.com/api/v1/packages/getAllPackages")
        setpkgs(Res.data.filter((pkg) => {
            return ((pkg.category[1].toUpperCase() === "Discover India Tours for Foreign tourists visiting India".toUpperCase()) ? pkg : null)
        }))
        setLoading(false)
    }

    useEffect(() => {
        packagesList()
    }, [])

    let LoadingJSX = (
        <div
            style={{
                width: 'auto',
                height: '100px',
                display: 'flex',
                backgroundColor: '#f1f2f3',
                justifyContent: 'center',
            }}
        >
            <img
                style={{
                    width: 'auto',
                    height: '100px',
                    display: 'flex',
                    backgroundColor: '#f1f2f3',
                    justifyContent: 'center',
                }}
                src={require('../assets/animated/Pulse-1s-200px.svg')}
                alt=''
            />
        </div>)

    console.log(loading);


    return (

        <div className={style.newnav}>
            <div className="navSec border-right">
                <div>
                    <b>Discover India Tours for Foreign tourist's visiting India</b>
                    {loading ? LoadingJSX : pkgs && pkgs.length ?
                        <div>
                            {pkgs.map((pkg, i) => {
                                return i < 6 ? (

                                    <a className="pb-2" href={'/packages/' + (pkg.pkgcode)} key={pkg.pkgcode}>
                                        {pkg.packageName}
                                    </a>
                                ) : null
                            })}
                        </div>
                        : <p>No Packages in This Group Yet!</p>}
                </div>
                <a href="/holidays/Tours-for-Foreign-tourists" style={{ color: ' #3E4094' }}>See More</a>
                <img className="push_bottom" src={require('../assets/images/taj.png')} alt='' />
                <div></div>
            </div>
            <div className="nav-sec border-right">
                <div>
                    <b>India Tours for indian tourists to travel within India</b>
                    <div>
                        <a className="pb-2" href={"/holidays/travel-within-india/Central-India"}>Central India</a>
                    </div>
                    <div>
                        <a className="pb-2" href={'/holidays/travel-within-india/East-India'}>East India</a>
                    </div>
                    <div>
                        <a className="pb-2" href={'/holidays/travel-within-india/North-India'}>North India</a>
                    </div>
                    <div>
                        <a className="pb-2" href={'/holidays/travel-within-india/South-India'}>South India</a>
                    </div>
                    <div>
                        <a className="pb-2" href={'/holidays/travel-within-india/West-India'}>West India</a>
                    </div>

                    <b>Honeymoon Packages</b>
                    <div>
                        <a className="pb-2" href={'/holidays/Honeymoon-Packages/India'}>India</a>
                    </div>
                    <div>
                        <a className="pb-2" href={'/holidays/Honeymoon-Packages/International'}>International</a>
                    </div>
                </div>
                <img src={require('../assets/images/menu2.png')} alt='' />
            </div>
            <div className="nav-sec border-right">
                <div style={{ width: "auto", background: 'white' }}>
                    <b>International</b>
                    <div onClick={() => {
                        slideAccordion(1)
                    }}>
                        <button className={style.accordion}><a className="pb-2">Asia <FaAngleDoubleDown /></a></button>
                        <div className={accordionPanelClass1} style={{
                            maxHeight: 0,
                            paddingLeft: "10px",
                            overflow: "hidden",
                            transition: 'max-height 0.2s ease-out'
                        }}>
                            <a className="pb-2" href='/holidays/International/Asia/Bali'>Bali</a>
                            <a className="pb-2" href='/holidays/International/Asia/Bhutan'>Bhutan</a>
                            <a className="pb-2" href='/holidays/International/Asia/Cambodia'>Cambodia</a>
                            <a className="pb-2" href='/holidays/International/Asia/China'>China</a>
                            <a className="pb-2" href='/holidays/International/Asia/Dubai'>Dubai</a>
                            <a className="pb-2" href='/holidays/International/Asia/Malaysia'>Malaysia</a>
                            <a className="pb-2" href='/holidays/International/Asia/Maldives'>Maldives</a>
                            <a className="pb-2" href='/holidays/International/Asia/Nepal'>Nepal</a>
                            <a className="pb-2" href='/holidays/International/Asia/Singapore'>Singapore</a>
                            <a className="pb-2" href='/holidays/International/Asia/Sri-Lanka'>Sri Lanka</a>
                            <a className="pb-2" href='/holidays/International/Asia/Thailand'>Thailand</a>
                            <a className="pb-2" href='/holidays/International/Asia/Vietnam'>Vietnam</a>
                        </div>
                    </div>
                    <div onClick={() => {
                        slideAccordion(2)
                    }}>
                        <button className="pb-2" className={style.accordion}><a className="pb-2">Africa <FaAngleDoubleDown /></a></button>
                        <div className={accordionPanelClass2} style={{
                            maxHeight: 0,
                            paddingLeft: "10px",
                            overflow: "hidden",
                            transition: 'max-height 0.2s ease-out'
                        }}>
                            <a className="pb-2" href='/holidays/International/Africa/Kenya'>Kenya</a>
                            <a className="pb-2" href='/holidays/International/Africa/Mauritius'>Mauritius</a>
                            <a className="pb-2" href='/holidays/International/Africa/South-Africa'>South Africa</a>
                        </div>
                    </div>
                    <div>
                        <a className="pb-2" href='/holidays/International/Australia-and-New-zealand'>Australia & New Zealand</a>
                    </div>
                    <div>
                        <a className="pb-2" href='/holidays/International/Europe'>Europe</a>
                    </div>
                    <div >
                        <a className="pb-2" href='/holidays/International/North-and-south-america'>North and south america</a>
                    </div>
                    <div >
                        <a className="pb-2" href='/holidays/International/Honeymoon-Packages'>Honeymoon Packages</a>
                    </div>
                </div>
                <img src={require('../assets/images/menu3.png')} alt='' />
            </div >
            <div className="nav-sec">
                <div>
                    <b>Destination</b>
                    <div>
                        <a className="pb-2" href='/holidays/Destination/Karnataka-Tours'>Karnataka Tours</a>
                    </div>
                    <div>
                        <a className="pb-2" href='/holidays/Destination/Kerala-Tours'>Kerala Tours</a>
                    </div>
                    <div>
                        <a className="pb-2" href='/holidays/Destination/Weekend-Gateways'>Weekend Gateways</a>
                    </div>
                    <div>
                        <a className="pb-2" href='/holidays/Destination/City-Breaks'>City Breaks</a>
                    </div>
                    <div>
                        <a className="pb-2" href='/holidays/Destination/Coach-Tours'>Coach Tours</a>
                    </div>
                </div>
                <img src={require('../assets/images/menu5.png')} alt='' />
            </div>
        </div >
    )
}

export default NewNav
