import React, { useEffect, useState } from 'react'
import style from './newnav.module.css'
import axios from 'axios'

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
    async function packagesList() {
        const data = await axios.get("https://skyway-server.herokuapp.com/api/v1/packages/getAllPackages")
        setpkgs(data.data)
    }
    useEffect(() => {
        packagesList();
    }, [pkgs])

    return (

        <div className={style.newnav}>
            <div>
                <b>Discover India Tours for Foreign tourist's visiting India</b>
                {pkgs && pkgs.length ? pkgs.map((pkg, i) => {
                    return (i < 7 && pkg.category[1].toLowerCase() === "Discover India Tours for Foreign tourists visiting India".toLowerCase()) ?
                        (
                            <div key={pkg._id}>
                                <a href={'/packages/' + pkg._id}>
                                    {pkg.packageName}
                                </a>
                            </div>
                        )
                        : null
                }) : <p>No Packages in This Group Yet!</p>}
                <a href="/holidays/Tours-for-Foreign-tourists" style={{ color: 'blue' }}>See More</a>
                <img src={require('../asserts/images/taj.png')} alt='' />
            </div>
            <div>
                <b>India Tours for indian tourists to travel within India</b>
                <div>
                    <a href={"/holidays/travel-within-india/Central-India"}>Central India</a>
                </div>
                <div>
                    <a href={'/holidays/travel-within-india/East-India'}>East India</a>
                </div>
                <div>
                    <a href={'/holidays/travel-within-india/North-India'}>North India</a>
                </div>
                <div>
                    <a href={'/holidays/travel-within-india/South-India'}>South India</a>
                </div>
                <div>
                    <a href={'/holidays/travel-within-india/West-India'}>West India</a>
                </div>

                <b>Honeymoon Packages</b>
                <div>
                    <a href={'/holidays/Honeymoon-Packages/India'}>India</a>
                </div>
                <div>
                    <a href={'/holidays/Honeymoon-Packages/International'}>International</a>
                </div>
                <img src={require('../asserts/images/menu2.png')} alt='' />
            </div>
            <div>
                <span id="international">
                    <b>International</b>
                    <div className="pb-2" onClick={() => {
                        slideAccordion(1)
                    }}>
                        <button className={style.accordion}>Asia</button>
                        <div className={accordionPanelClass1} style={{
                            maxHeight: 0,
                            paddingLeft: "10px",
                            overflow: "hidden",
                            transition: 'max-height 0.2s ease-out'
                        }}>
                            <a className="pb-2" href='/holidays/International/Australia'>Bali</a>
                            <a className="pb-2" href='/holidays/International/Australia'>Bhutan</a>
                            <a className="pb-2" href='/holidays/International/Australia'>Cambodia</a>
                            <a className="pb-2" href='/holidays/International/Australia'>China</a>
                            <a className="pb-2" href='/holidays/International/Australia'>Dubai</a>
                            <a className="pb-2" href='/holidays/International/Australia'>Malaysia</a>
                            <a className="pb-2" href='/holidays/International/Australia'>Maldives</a>
                            <a className="pb-2" href='/holidays/International/Australia'>Nepal</a>
                            <a className="pb-2" href='/holidays/International/Australia'>Singapore</a>
                            <a className="pb-2" href='/holidays/International/Australia'>Sri Lanka</a>
                            <a className="pb-2" href='/holidays/International/Australia'>Thailand</a>
                            <a className="pb-2" href='/holidays/International/Australia'>Vietnam</a>
                        </div>
                    </div>
                    <div className="pb-2" onClick={() => {
                        slideAccordion(2)
                    }}>
                        <button className={style.accordion}>Africa</button>
                        <div className={accordionPanelClass2} style={{
                            maxHeight: 0,
                            paddingLeft: "10px",
                            overflow: "hidden",
                            transition: 'max-height 0.2s ease-out'
                        }}>
                            <a className="pb-2" href='/holidays/International/Australia'>Kenya</a>
                            <a className="pb-2" href='/holidays/International/Australia'>Mauritius</a>
                            <a className="pb-2" href='/holidays/International/Australia'>South Africa</a>
                        </div>
                    </div>
                    <div className="pb-2">
                        <a href='/holidays/International/Australia'>Australia</a>
                    </div>
                    <div className="pb-2">
                        <a href='/holidays/International/Europe'>Europe</a>
                    </div>
                    <div className="pb-2">
                        <a href='/holidays/International/North-and-south-america'>North and south america</a>
                    </div>
                    <div className="pb-2">
                        <a href='/holidays/International/Honeymoon-Packages'>Honeymoon Packages</a>
                    </div>
                </span>
                <img src={require('../asserts/images/menu3.png')} alt='' />
            </div >
            <div>
                <span>
                    <b>Destination</b>
                    <div>
                        <a href='/holidays/Destination/Karnataka-Tours'>Karnataka Tours</a>
                    </div>
                    <div>
                        <a href='/holidays/Destination/Kerela-Tours'>Kerela Tours</a>
                    </div>
                    <div>
                        <a href='/holidays/Destination/Weekend-Gateways'>Weekend Gateways</a>
                    </div>
                    <div>
                        <a href='/holidays/Destination/City-Breaks'>City Breaks</a>
                    </div>
                    <div>
                        <a href='/holidays/Destination/Coach-Tours'>Coach Tours</a>
                    </div>
                </span>
                <img src={require('../asserts/images/menu5.png')} alt='' />
            </div>
        </div >
    )
}

export default NewNav
