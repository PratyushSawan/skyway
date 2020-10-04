import React, { useState, useEffect } from 'react'
import BreadcrumComp from '../breadcrum/breadcrum'
import SimpleBanner from '../simplebanner/simplebanner'
import { Divider } from 'antd'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import CustomCard from "./CustomCard"

let ForeignTouristsGroup = () => {
    const [pkgs, setpkgs] = useState([])
    async function packagesList() {
        const Res = await axios.get("http://localhost:4545/api/v1/packages/getAllPackages")
        setpkgs(Res.data.filter((pkg) => {
            return ((pkg.category[1].toUpperCase() === "Discover India Tours for Foreign tourists visiting India".toUpperCase()) ? pkg : null)
        }))
    }

    useEffect(() => {
        packagesList()
        if (pkgs && pkgs.length) {
            setloading(false);
        }
    }, [])

    const [loading, setloading] = useState(true)
    const LOADER = <div className='text-center align-content-center justify-content-center'><img width="500px" src={require("./loader.gif")} alt="" srcSet="" /></div>

    return (
        <div>
            <SimpleBanner
                image={
                    'https://www.skywaytour.com/static/images/packages/cover_img/golden_triangle_5n_6d_delhi.jpg'
                }
                name='DISCOVER INDIA TOURS - INDIA TOUR PACKAGES'
            />
            <BreadcrumComp category="HOLIDAYS" tourName={"DISCOVER INDIA TOURS - INDIA TOUR PACKAGES"} />
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
                        {loading ? LOADER : pkgs && pkgs.length ? <CustomCard pkgs={pkgs} tourName="JUNGLE LODGES" /> : <h3 className='text-info font-weight-normal'>No packages found in "JUNGLE LODGES" yet.</h3>}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ForeignTouristsGroup
