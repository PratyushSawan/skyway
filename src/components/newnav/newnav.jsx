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
    function packagesList() {
        axios.get("https://skyway-server.herokuapp.com/api/v1/packages/getAllPackages")
            .then((res) => {
                setpkgs(res.data)
            }).catch((err) => {
                console.log(err);
            });
    }

    console.log(pkgs);

    useEffect(() => {
        console.log("newnav");
        packagesList();
    }, [])

    let [indiapkgs, setindiapkgs] = useState(0)

    return (

        <div className={style.newnav}>
            <div>
                <b>Discover India Tours for Foreign tourist's visiting India</b>
                {pkgs && pkgs.length ? pkgs.map((pkg, i) => {
                    indiapkgs++
                    return (pkg.category[1].toLowerCase() === "Discover India Tours for Foreign tourists visiting India".toLowerCase() && indiapkgs < 7) ?
                        (
                            <div className="pb-2" key={pkg.pkgcode}>
                                <a href={'/packages/' + (pkg.pkgcode)}>
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
                <span style={{ width: "auto", background: 'white' }}>
                    <b>International</b>
                    <div className="pb-2" onClick={() => {
                        slideAccordion(1)
                    }}>
                        <button className={style.accordion}>Asia <FaAngleDoubleDown /></button>
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
                    <div className="pb-2" onClick={() => {
                        slideAccordion(2)
                    }}>
                        <button className={style.accordion}>Africa <FaAngleDoubleDown /></button>
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
                    <div className="pb-2">
                        <a href='/holidays/International/Australia-and-New-zealand'>Australia & New Zealand</a>
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
                        <a href='/holidays/Destination/Kerala-Tours'>Kerala Tours</a>
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
