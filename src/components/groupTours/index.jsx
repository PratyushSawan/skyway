import React, { useState, useEffect } from 'react'
import BreadcrumComp from '../breadcrum/breadcrum'
import { Divider } from 'antd'
import axios from 'axios'
import CustomCard from "./CustomCard"

let GroupTour = ({ tourName }) => {
    const [pkgs, setpkgs] = useState([])
    const [tour, settour] = useState(tourName)
    const [loading, setloading] = useState(true)
    const LOADER = <div className='text-center align-content-center justify-content-center'><img width="500px" src={require("./loader.gif")} alt="" srcSet="" /></div>

    async function packagesList() {
        const Res = await axios.get("https://skyway-server.herokuapp.com//api/v1/packages/getAllPackages")
        setpkgs(Res.data.filter((pkg) => {
            return ((pkg.category[0].toUpperCase() === "GROUP TOURS" && tourName.toUpperCase() === pkg.category[1].toUpperCase()) ? pkg : null)
        }))
        setloading(false);
    }

    useEffect(() => {
        if (tourName != tour) {
            setpkgs([])
            setloading(true)
            settour(tourName);
        }
        packagesList()
        console.log(tourName, pkgs);

    }, [pkgs, tourName])

    return (
        <div>
            <br /> <br /> <br />
            <BreadcrumComp category='GROUP TOURS' tourName={tourName.toUpperCase()} />
            <div className='container'>

                <Divider />
                <div style={{ margin: '0px' }} className='row'>
                    <div className={'col-md-8'}>
                        {loading ? LOADER : pkgs && pkgs.length ? <CustomCard pkgs={pkgs} tourName={tourName} /> : <h3 className='text-info font-weight-normal'>No packages found in "{tourName}" yet.</h3>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupTour
