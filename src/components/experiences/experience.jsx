import React, { useState, useEffect } from 'react'
import BreadcrumComp from '../breadcrum/breadcrum'
import SimpleBanner from '../simplebanner/simplebanner'
import { Divider } from 'antd'

import { Form } from 'react-bootstrap'
import axios from 'axios'
import CustomCard from './CustomCard';

let Experience = ({ tourName }) => {

    const [pkgs, setpkgs] = useState([])
    async function packagesList() {
        const data = await axios.get("http://localhost:4545/api/v1/packages/getAllPackages")
        setpkgs(data.data)
    }

    useEffect(() => {
        packagesList()
        if (pkgs && pkgs.length) {
            setloading(false);
        }
    }, [pkgs, tourName])

    const [loading, setloading] = useState(true)
    const Loader = (
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
            <SimpleBanner
                image={
                    require('../assets/images/carlous-img1.jpg')
                }
                name='Experiences'
            />
            <BreadcrumComp tourName={tourName} />
            <div className='container'>

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

                        {
                            loading ? Loader : <CustomCard pkgs={pkgs} tourName={tourName} />
                        }
                        <br />

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Experience
