import React from 'react'
import { Form, Button } from 'react-bootstrap'
import BreadcrumComp from '../breadcrum/breadcrum'
import SimpleBanner from '../simplebanner/simplebanner'
import HolidayClub from '../holidayClub/holidayClub'
import PopularHoliday from '../popularHoliday/popularHoliday'

let Input = ({ type, label }) => {
    return (
        <Form>
            <Form.Group controlId='ctrlName'>
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} placeholder={label}></Form.Control>
            </Form.Group>
        </Form>
    )
}

const FeedBack = () => {
    return (
        <div>
            <SimpleBanner
                image={require('../assets/images/macbook-pro-beside-papers-669619.jpg')}
                name={'FEEDBACK'}
            />
            <BreadcrumComp />
            <div className='container-fluid' style={{ margin: '20px 0px' }}>
                <div className='row'>
                    <div className='col-md-9'>
                        <div
                            style={{
                                padding: '20px',
                                boxShadow: '1px 1px 15px #ddd',
                            }}
                        >
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col'>
                                    <Input label={'Name'} type={'text'} />
                                </div>
                                <div className='col'>
                                    <Input label={'Email'} type={'email'} />
                                </div>
                                <div className='col'>
                                    <Input label={'Mobile'} type={'text'} />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col'>
                                    <Input label={'Agent Name'} type={'text'} />
                                </div>
                                <div className='col'>
                                    <Input
                                        label={'INVOICE / QUOTETION NO'}
                                        type={'text'}
                                    />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col'>
                                    <Form.Group controlId='exampleForm.ControlTextarea1'>
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as='textarea' rows='3' />
                                    </Form.Group>
                                </div>
                            </div>
                            <br />
                            <br />
                            <Button variant={'primary'}>Submit</Button>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <HolidayClub />
                        <PopularHoliday />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedBack
