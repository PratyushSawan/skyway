import React, { useState, useEffect } from 'react'
import BreadcrumComp from '../breadcrum/breadcrum'
import SimpleBanner from '../simplebanner/simplebanner'
import { Divider } from 'antd'
import { useParams, useHistory } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import CustomCard from './CustomCard';

let PackageGroup = () => {

    const [pkgs, setpkgs] = useState([])
    const [bannerIMG, setBannerIMG] = useState("")
    const [loading, setLoading] = useState(true)
    const [found, setFound] = useState(false)

    let { groupId, category } = useParams()
    let history = useHistory();

    history.listen((location) => {
        setLoading(true)
        setFound(false)
        setpkgs([])
    })

    async function packagesList() {
        const data = await axios.get("https://skyway-server.herokuapp.com/api/v1/packages/getAllPackages")
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
                setFound(true);
                setLoading(false)
            }
            else {
                setFound(false)
                setpkgs([])
                setLoading(false)
            }
        }

    }

    useEffect(() => {
        console.log("--top", pkgs);
        packagesList()
        if (found && pkgs) {
            setBannerIMG(pkgs[0].imageUrl)
        }
    }, [pkgs, groupId])

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
                    <div>
                        {bannerIMG ? <SimpleBanner
                            image={
                                bannerIMG
                            }
                            name='DISCOVER INDIA TOURS - INDIA TOUR PACKAGES'
                        /> : null}

                        <BreadcrumComp category="HOLIDAY" subcat1={category.replace('-', ' ')} tourName={groupId.toUpperCase()} />
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
                                            <h4>Filter</h4>
                                            <h5>LOCATION</h5>
                                            <Form.Group controlId='exampleForm.ControlTextarea1'>
                                                <Form.Control as='textarea' />
                                            </Form.Group>
                                            <button className={'btn btn-primary'}>
                                                Submit
                                    </button>
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
                                            Packages found (0)
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
                                        <CustomCard pkgs={pkgs} category={category.replace('-', ' ')} group={groupId.replace('-', ' ')} /> : null
                                    }
                                    <br />

                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div className="text-center py-5 my-5">
                        <h1 className="text-danger">NO PACKAGES FOUND IN:</h1>
                        <h3 className='text-info'>{category.replace('-', ' ')} - {groupId}</h3>
                    </div>
            }


        </div>
    )

}

export default PackageGroup
