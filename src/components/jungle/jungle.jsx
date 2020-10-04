import React, { useState, useEffect } from 'react'
import BreadcrumComp from '../breadcrum/breadcrum'
import SimpleBanner from '../simplebanner/simplebanner'
import { Divider } from 'antd'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import CustomCard from "./CustomCard"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let Jungle = () => {
    const [pkgs, setpkgs] = useState([])
    async function packagesList() {
        const Res = await axios.get("https://skyway-server.herokuapp.com/api/v1/packages/getAllPackages")
        let data = Res.data.filter((pkg) => {
            return ((pkg.category[0].toUpperCase() === "JUNGLE LODGES") ? pkg : null)
        })
        setpkgs(data)
        setBkupPkg(data)
        setloading(false);
    }

    useEffect(() => {
        packagesList()
        if (pkgs && pkgs.length) {
            setloading(false);
        }
    }, [])

    const [filterOptions, setFilterOptions] = useState({ price: '', location: "" })
    const [bkupPkg, setBkupPkg] = useState([])

    async function filter() {
        let fl = filterOptions;
        let flPkgs;
        let noResult = true;
        if (fl.price) {
            flPkgs = bkupPkg.filter((pkg) => {
                return Number(pkg.priceStartsAt) <= Number(fl.price) ? pkg : null
            })
            noResult = flPkgs.length ? false : true
        } else {
            flPkgs = bkupPkg;
        }
        if (fl.location) {
            flPkgs = flPkgs.filter((pkg) => {
                let places = pkg.place.split('/')
                places = places.map(place => { return place.trim().toLowerCase() })
                return places.includes(fl.location.trim().toLowerCase()) ? pkg : null
            })
            noResult = flPkgs.length ? false : true
        }

        setpkgs(flPkgs);

        let message = "";
        for (const filter in filterOptions) {
            if (filterOptions.hasOwnProperty(filter)) {
                const value = filterOptions[filter];
                if (value) {
                    message += filter + ": " + value + "/";
                }
            }
        }
        if (message) {
            if (noResult) {
                message = message.split("/").reverse()
                message.shift()
                message = "No packages found for the filter(s): \n  " + message.join("\n  ")
                toastAlert(<pre style={{ color: "white", padding: "2px", margin: 0, fontFamily: "arial serif" }}>{message}</pre>, "info", 5000)
            }
        } else {
            toastAlert("No filter options were entered", "error", 2500)
        }
    }

    function toastAlert(msg, type, autoClose) {
        toast(msg, {
            position: "top-center",
            autoClose,
            type,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })
    }

    const [loading, setloading] = useState(true)
    const LOADER = (
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
                src={require('../assets/animated/Pulse-1s-200px.svg')}
                alt=''
            />
        </div>
    )
    return (
        <div>
            <ToastContainer />

            <SimpleBanner
                image={
                    'https://media-cdn.tripadvisor.com/media/photo-s/01/f8/85/e5/temple-tiger-jungle-lodge.jpg'
                }
                name='JUNGLE LODGES & RESORTS'
            />
            <BreadcrumComp category="EXPERIENCES" tourName={"JUNGLE LODGES"} />
            <div className='container'>
                <p style={{ padding: '20px', fontSize: '14pt' }}>
                    The promoters of the property are the Govt. Of Karnataka
                    .These theme based properties are situated in National
                    Parks, Wildlife Sanctuaries, Reserved Forest, Beaches
                    and Heritage sites spread over the length and breadth of
                    the state. In most resorts two options can be provided,
                    first the overnight stay and those wanting a shorter
                    stay can opt for a day visit. Skyway International
                    Travels with about 25 years of experience in the trade
                    are the Sales and Marketing associates of JLR. Guests
                    booking a JLR package will qualify for a preferential
                    transport tariff, when the booking is routed through the
                    company.
                    </p>
                <Divider />
                <div style={{ margin: '0px' }} className='row'>
                    <div className={'col-md-4'}>
                        <div>
                            <div
                                style={{
                                    backgroundColor: 'white',
                                    boxShadow: '1px 1px 15px #ddd',
                                    padding: '20px',
                                    width: '100%',
                                }}
                            >
                                <form onSubmit={e => e.preventDefault()}>
                                    <h4 className="py-1">Filter</h4>
                                    <h5 className="py-1">LOCATION</h5>
                                    <input value={filterOptions.location} className="form-control" type="text" onChange={(e) => setFilterOptions({ ...filterOptions, location: e.target.value })} />
                                    <h5 className="py-1">PRICE <small> <i>(in INR)</i> </small></h5>
                                    <input className="form-control" type="number" value={filterOptions.price} onChange={(e) => setFilterOptions({ ...filterOptions, price: e.target.value })} />
                                    <button onClick={(e) => { e.preventDefault(); filter() }} className="my-2 btn btn-primary">
                                        Submit
                                                </button>
                                </form>
                                <br />
                                <h5>TYPE</h5>
                                <Form.Check
                                    type={'checkbox'}
                                    label={`Beach Resort`}
                                />
                                <Form.Check
                                    type={'checkbox'}
                                    label={`National Parks`}
                                />
                                <Form.Check
                                    type={'checkbox'}
                                    label={`Wildlife Sanctuary`}
                                />
                                <Form.Check
                                    type={'checkbox'}
                                    label={`Natural Camps`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-8'}>
                        {loading ? LOADER : pkgs && pkgs.length ? <CustomCard pkgs={pkgs} tourName="JUNGLE LODGES" /> : <h3 className='text-info font-weight-normal'>No results found.</h3>}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Jungle
