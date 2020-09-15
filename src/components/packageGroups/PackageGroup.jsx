import React, { useState, useEffect } from 'react'
import BreadcrumComp from '../breadcrum/breadcrum'
import SimpleBanner from '../simplebanner/simplebanner'
import { Divider } from 'antd'

import { Form } from 'react-bootstrap'
import axios from 'axios'
import CustomCard from './CustomCard';

let PackageGroup = () => {

    const [pkgs, setpkgs] = useState([])
    async function packagesList() {
        const data = await axios.get("https://skyway-server.herokuapp.com/api/v1/packages/getAllPackages")
        setpkgs(data.data)
    }

    useEffect(() => {
        packagesList()
    }, [pkgs])

    return (
        <div>
            <SimpleBanner
                image={
                    'https://media-cdn.tripadvisor.com/media/photo-s/01/f8/85/e5/temple-tiger-jungle-lodge.jpg'
                }
                name='JUNGLE LODGES & RESORTS'
            />
            <BreadcrumComp />
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
                        <CustomCard pkgs={pkgs} />
                        <br />

                    </div>
                </div>
            </div>
        </div>
    )

}

export default PackageGroup
