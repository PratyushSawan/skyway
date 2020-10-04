import React, { useState, useEffect } from 'react'
import BreadcrumComp from '../breadcrum/breadcrum'
import SimpleBanner from '../simplebanner/simplebanner'
import { Divider } from 'antd'
import { useParams, useHistory } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import CustomCard from './CustomCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let PackageGroup = () => {

    const [pkgs, setpkgs] = useState([])
    const [loading, setLoading] = useState(true)
    const [found, setFound] = useState(false)

    let { groupId, category, subgroup } = useParams()
    groupId = groupId ? groupId.replace(/-/g, ' ') : null;
    category = category ? category.replace(/-/g, ' ') : null;
    subgroup = subgroup ? subgroup.replace(/-/g, ' ') : null;
    let history = useHistory();

    history.listen(() => {
        setLoading(true)
        setFound(false)
        setpkgs([])
        setBkupPkg([])
    })

    async function packagesList() {
        if (["asia", "africa"].includes(groupId.toLowerCase()) && !subgroup) {
            setFound(false);
            setTimeout(() => {
                setLoading(false);
            }, 750);
        }
        else if (category && subgroup) {
            const data = await axios.get("http://localhost:4545/api/v1/packages/getAllPackages")
            if (data.data && data.data.length) {
                let allpkgs = data.data;
                let temppkgs = [];
                allpkgs.forEach((pkg) => {
                    if (pkg.category[3].toLowerCase() === subgroup.toLowerCase()) {
                        setFound(true)
                        temppkgs.push(pkg);
                    }
                })
                if (temppkgs.length) {
                    setpkgs(temppkgs);
                    setBkupPkg(temppkgs)
                    setFound(true);
                    setLoading(false)
                }
                else {
                    setFound(false)
                    setpkgs([])
                    setBkupPkg([])
                    setLoading(false)
                }
            }
        } else {
            const data = await axios.get("http://localhost:4545/api/v1/packages/getAllPackages")
            if (data.data && data.data.length) {
                let allpkgs = data.data;
                let temppkgs = [];
                allpkgs.forEach((pkg) => {
                    if (pkg.category[0].toLowerCase() === "holidays"
                        && pkg.category[2].toLowerCase() === groupId.toLowerCase()) {
                        setFound(true)
                        temppkgs.push(pkg);
                    }
                })
                if (temppkgs.length) {
                    setpkgs(temppkgs);
                    setBkupPkg(temppkgs)
                    setFound(true);
                    setLoading(false)
                }
                else {
                    setFound(false)
                    setpkgs([])
                    setBkupPkg([])
                    setLoading(false)
                }
            }
        }
    }

    useEffect(() => {
        packagesList()
    }, [groupId, category, subgroup])

    const [filterOptions, setFilterOptions] = useState({ price: '', location: "" })
    const [bkupPkg, setBkupPkg] = useState([])

    async function filter() {
        let fl = filterOptions;
        let flPkgs;
        let noResult = true;
        if (fl.price) {
            flPkgs = bkupPkg.filter((pkg) => {
                return Number(bkupPkg.priceStartsAt) >= Number(fl.price) ? pkg : null
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
        } else {
            flPkgs = bkupPkg;
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
                toastAlert(message, "info", 5000)
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
    return (
        <div>
            {loading ?
                <div style={{ background: "white", position: 'fixed', width: "100vw", height: '100vh', zIndex: 5000, top: 0, left: 0 }}>
                    <div style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}>
                        <img style={{ width: "400px" }} src={require("./loader.gif")} alt="" />
                    </div>
                </div>
                :
                found ?
                    <div >
                        <ToastContainer />
                        <SimpleBanner
                            image={
                                bkupPkg[0].galleryImagesUrls[0]
                            }
                            name={subgroup ? subgroup.toUpperCase() + " TOURS" : groupId.toUpperCase() + " TOURS"}
                        />

                        <BreadcrumComp category="HOLIDAY" tourName={subgroup ? subgroup.toUpperCase() : groupId.toUpperCase()} />
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
                                    <div
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            padding: '10px',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: '14pt',
                                            }}
                                        >
                                            Packages found ({pkgs.length})
                                </div>
                                        <div
                                            style={{
                                                border: '1px solid #aaa',
                                                padding: '5px',
                                            }}
                                        >
                                            Filter
                                </div>
                                    </div>
                                    {pkgs && pkgs.length ?
                                        <CustomCard subgroup={subgroup} pkgs={pkgs} category={category} group={groupId} /> : null
                                    }
                                    <br />

                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div className="text-center py-5 my-5">
                        <h1 className="text-danger">NO PACKAGES FOUND HERE</h1>
                        {/* <h3 className='text-info'>{category} - {groupId}</h3> */}
                    </div>
            }


        </div>
    )

}

export default PackageGroup
