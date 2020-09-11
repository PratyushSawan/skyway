import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { Card, Button, Form, Col, Alert } from 'react-bootstrap'
import SelectCountry from './selectCountry'
import SelectPhoneCode from './selectPhoneCode'
import { FaLocationArrow } from 'react-icons/fa'
import NumBtn from './numBtn'
import moment from 'moment'
import EmailSub from '../emailsub/emailsub'
import Brands from '../brands/brands'
import { DatePicker } from 'antd'

let BookNow = () => {
    //----------------------States -----------------------------
    let { pacId } = useParams()

    let history = useHistory()

    let [data, setData] = useState(null)

    let [stay, setStay] = useState({
        standard: true,
        deluxe: false,
        luxury: false,
    })

    let [adultsPrice, setAdultsPrice] = useState(0)

    let [childrenAb6Price, setNoChildrenAb6Price] = useState(0)

    let [childrenBe6Price, setNoChildrenBe6Price] = useState(0)

    let [noAdults, setAdults] = useState(2)

    let [noChildrenAb6, setNoChildrenAb6] = useState(0)

    let [noChildrenBe6, setNoChildrenBe6] = useState(0)

    let [showAccOpt, setShowAccOpt] = useState(false)

    let [accomodationChecked, setAccomodationChecked] = useState({
        firstOne: true,
        secondOne: false,
    })

    let [selectedDate, setSelectedDate] = useState('')

    let [accmodation, setAccmodation] = useState(`1 Double / Twin Room`)

    //-----------------------------------------------------------

    let btnStyle = {
        padding: '10px',
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold',
        width: '50px',
        textAlign: 'center',
    }

    let [bookingInfo, setBookingInfo] = useState({
        fromDate: '',
        toDate: '',
        packageId: pacId,
        stay: 'standard',
        typeAndRoom: '',
        firstName: '',
        lastName: '',
        address: '',
        country: 'India',
        state: '',
        city: '',
        zipcode: '',
        mobileNum: '+91 India',
        telephoneNum: '',
        emailId: '',
        additionalInfo: '',
    })

    let bookPackage = async () => {
        try {
            let totalAmount = adultsPrice + childrenAb6Price + childrenBe6Price
            let res = await fetch(
                '/api/v1/booking/bookPackage',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        ...bookingInfo,
                        adults: noAdults.toString(),
                        childrenAbove6: noChildrenAb6.toString(),
                        childrenBelow6: noChildrenBe6.toString(),
                        date: new Date().toLocaleDateString(),
                        paymentStatus: 'not paid',
                        payableAmount: totalAmount.toString(),
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            let tData = await res.json()

            if (tData.result === true) {
                history.push(`/pay_confirm/${tData.id}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetch(`/api/v1/packages/getPackage/${pacId}`)
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.packageName !== undefined) {
                    setData(resData)
                    setAdultsPrice(
                        parseInt(resData.pricing[0].cost.standard) * 2
                    )
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [pacId])

    function update(type, nums, idx = 404, st = 'no', opt) {
        let price = 0
        let index = 404

        if (idx === 404) {
            if (type === 'adult') {
                if (nums === 3) {
                    setShowAccOpt(true)

                    if (opt === 1) {
                        index = 1
                    } else {
                        index = 3
                    }
                } else {
                    setShowAccOpt(false)
                    index = 0
                }
            } else if (type === 'chiAb6') {
                index = 4
            } else if (type === 'chiBe6') {
                index = 5
            }
        } else {
            index = idx
        }

        if (index !== 404) {
            if (st === 'no') {
                if (stay.standard) {
                    price = parseInt(data.pricing[index].cost.standard) * nums
                } else if (stay.deluxe) {
                    price = parseInt(data.pricing[index].cost.deluxe) * nums
                } else if (stay.luxury) {
                    price = parseInt(data.pricing[index].cost.luxury) * nums
                }
            } else {
                if (st === 'st') {
                    price = parseInt(data.pricing[index].cost.standard) * nums
                } else if (st === 'de') {
                    price = parseInt(data.pricing[index].cost.deluxe) * nums
                } else if (st === 'lu') {
                    price = parseInt(data.pricing[index].cost.luxury) * nums
                }
            }
        }
        if (type === 'adult') {
            setAdultsPrice(price)
        } else if (type === 'chiAb6') {
            setNoChildrenAb6Price(price)
        } /*else if(fr === "chiBe6"){
            setNoChildrenBe6(price)
        }*/
    }

    function updateAll(st) {
        update('adult', noAdults, 404, st)
        update('chiAb6', noChildrenAb6, 404, st)
    }

    let LoadingJSX = (
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
                src={require('../asserts/animated/Pulse-1s-200px.svg')}
                alt=''
            />
        </div>
    )

    if (data !== null) {
        return (
            <div>
                <div style={{ padding: '20px' }}>
                    <div className='row'>
                        <div className='col-8'>
                            <Card style={{ width: '100%', marginTop: '20px' }}>
                                <Card.Body>
                                    <h3>Booking Details</h3>
                                    <Form>
                                        <div style={{ marginBottom: '20px' }}>
                                            <b>Step 1: Select Departure Date</b>
                                        </div>

                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                controlId={'formGridDate'}
                                            >
                                                <Form.Label>
                                                    From date *
                                                </Form.Label>
                                                <br />
                                                <DatePicker
                                                    format={'DD-MM-YYYY'}
                                                    style={{ width: '100%' }}
                                                    min={moment()
                                                        .add(2, 'd')
                                                        .format('YYYY-MM-DD')}
                                                    onChange={(
                                                        date,
                                                        dateString
                                                    ) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            fromDate: dateString,
                                                            toDate: moment(date)
                                                                .add(
                                                                    parseInt(
                                                                        data.duration.split(
                                                                            ' '
                                                                        )[2]
                                                                    ),
                                                                    'd'
                                                                )
                                                                .format(
                                                                    'DD-MM-YYYY'
                                                                ),
                                                        })
                                                        setSelectedDate(
                                                            moment(date)
                                                                .add(
                                                                    parseInt(
                                                                        data.duration.split(
                                                                            ' '
                                                                        )[2]
                                                                    ),
                                                                    'd'
                                                                )
                                                                .format(
                                                                    'YYYY-MM-DD'
                                                                )
                                                        )
                                                    }}
                                                ></DatePicker>
                                            </Form.Group>

                                            <Form.Group
                                                as={Col}
                                                controlId={'formGridDate'}
                                            >
                                                <Form.Label>
                                                    To date *
                                                </Form.Label>
                                                <Form.Control
                                                    value={selectedDate}
                                                    disabled
                                                    type={'date'}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Form.Row>
                                        <div style={{ marginBottom: '20px' }}>
                                            <b>Step 2: Pick your stay</b>
                                        </div>
                                        <Form.Row>
                                            <Col>
                                                <Form.Check
                                                    checked={stay.standard}
                                                    type='radio'
                                                    label={'Standard-3 ✯'}
                                                    name={'stay'}
                                                    onClick={(e) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            stay: 'standard',
                                                        })

                                                        setStay({
                                                            standard: true,
                                                            deluxe: false,
                                                            luxury: false,
                                                        })
                                                        updateAll('st')
                                                    }}
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Check
                                                    checked={stay.deluxe}
                                                    type='radio'
                                                    label={'Deluxe-4 ✯'}
                                                    name={'stay'}
                                                    onClick={(e) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            stay: 'deluxe',
                                                        })

                                                        setStay({
                                                            standard: false,
                                                            deluxe: true,
                                                            luxury: false,
                                                        })
                                                        updateAll('de')
                                                    }}
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Check
                                                    checked={stay.luxury}
                                                    type='radio'
                                                    label={'Luxury-5 ✯'}
                                                    name={'stay'}
                                                    onClick={(e) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            stay: 'luxury',
                                                        })

                                                        setStay({
                                                            standard: false,
                                                            deluxe: false,
                                                            luxury: true,
                                                        })
                                                        updateAll('lu')
                                                    }}
                                                />
                                            </Col>
                                        </Form.Row>
                                        <div style={{ margin: '20px 0px' }}>
                                            <b>Step 3: Enter travellers</b>
                                        </div>
                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                controlId={'formGridDate'}
                                            >
                                                <Form.Label>Adults</Form.Label>
                                                <NumBtn
                                                    min={2}
                                                    type={'adult'}
                                                    max={4}
                                                    num={noAdults}
                                                    setnum={setAdults}
                                                    update={update}
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                controlId={'formGridDate'}
                                            >
                                                <Form.Label>
                                                    Children (6 to 12 Yrs.)
                                                </Form.Label>
                                                <NumBtn
                                                    min={0}
                                                    type={'chiAb6'}
                                                    max={2}
                                                    num={noChildrenAb6}
                                                    setnum={setNoChildrenAb6}
                                                    update={update}
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                controlId={'formGridDate'}
                                            >
                                                <Form.Label>
                                                    Children (below 5)
                                                </Form.Label>
                                                <NumBtn
                                                    min={0}
                                                    type={'chiBe6'}
                                                    max={2}
                                                    num={noChildrenBe6}
                                                    setnum={setNoChildrenBe6}
                                                    update={update}
                                                />
                                            </Form.Group>
                                        </Form.Row>
                                        {showAccOpt ? (
                                            <Form.Row>
                                                <Col>
                                                    <Form.Check
                                                        checked={
                                                            accomodationChecked.firstOne
                                                        }
                                                        type='radio'
                                                        label={
                                                            'Option 1 : Staying in 1 Triple Room'
                                                        }
                                                        name={'acc'}
                                                        onClick={(event) => {
                                                            setAccmodation(
                                                                'Staying in 1 Triple Room'
                                                            )
                                                            setAccomodationChecked(
                                                                {
                                                                    secondOne: false,
                                                                    firstOne: true,
                                                                }
                                                            )
                                                            update(
                                                                'adult',
                                                                3,
                                                                404,
                                                                'no',
                                                                1
                                                            )
                                                        }}
                                                    />
                                                    <br />
                                                    <Form.Check
                                                        checked={
                                                            accomodationChecked.secondOne
                                                        }
                                                        type='radio'
                                                        label={
                                                            'Option 2 : Staying in 1 Double Room and 1 Single Room'
                                                        }
                                                        name={'acc'}
                                                        onClick={(event) => {
                                                            setAccmodation(
                                                                'Staying in 1 Double Room and 1 Single Room'
                                                            )
                                                            setAccomodationChecked(
                                                                {
                                                                    secondOne: true,
                                                                    firstOne: false,
                                                                }
                                                            )
                                                            update(
                                                                'adult',
                                                                3,
                                                                404,
                                                                'no',
                                                                2
                                                            )
                                                        }}
                                                    />
                                                </Col>
                                            </Form.Row>
                                        ) : null}
                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                controlId={'nameInfo'}
                                            >
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type={'text'}
                                                    onChange={(event) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            firstName:
                                                                event.target
                                                                    .value,
                                                        })
                                                    }}
                                                ></Form.Control>
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                controlId={'nameInfo'}
                                            >
                                                <Form.Label>
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control
                                                    type={'text'}
                                                    onChange={(event) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            lastName:
                                                                event.target
                                                                    .value,
                                                        })
                                                    }}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                controlId={'nameInfo'}
                                            >
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control
                                                    as='textarea'
                                                    aria-label='With textarea'
                                                    onChange={(event) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            address:
                                                                event.target
                                                                    .value,
                                                        })
                                                    }}
                                                />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                controlId={'nameInfo'}
                                            >
                                                <Form.Label>Country</Form.Label>
                                                <SelectCountry
                                                    setInfo={setBookingInfo}
                                                    info={bookingInfo}
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                controlId={'nameInfo'}
                                            >
                                                <Form.Label>State</Form.Label>
                                                <Form.Control
                                                    onChange={(event) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            state:
                                                                event.target
                                                                    .value,
                                                        })
                                                    }}
                                                    type={'text'}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                controlId={'nameInfo'}
                                            >
                                                <Form.Label>City</Form.Label>
                                                <Form.Control
                                                    onChange={(event) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            city:
                                                                event.target
                                                                    .value,
                                                        })
                                                    }}
                                                    type={'text'}
                                                ></Form.Control>
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                controlId={'nameInfo'}
                                            >
                                                <Form.Label>
                                                    Zip Code
                                                </Form.Label>
                                                <Form.Control
                                                    onChange={(event) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            zipcode:
                                                                event.target
                                                                    .value,
                                                        })
                                                    }}
                                                    type={'text'}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Col key={5}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        Select country code
                                                    </Form.Label>
                                                    <SelectPhoneCode />
                                                </Form.Group>
                                            </Col>
                                            <Col key={7}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        Phone number
                                                    </Form.Label>
                                                    <Form.Control
                                                        onChange={(event) => {
                                                            setBookingInfo({
                                                                ...bookingInfo,
                                                                mobileNum:
                                                                    event.target
                                                                        .value,
                                                            })
                                                        }}
                                                        type={'number'}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                controlId={'nameInfo'}
                                            >
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type={'email'}
                                                    onChange={(event) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            emailId:
                                                                event.target
                                                                    .value,
                                                        })
                                                    }}
                                                ></Form.Control>
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                controlId={'nameInfo'}
                                            >
                                                <Form.Label>
                                                    Telephone Number
                                                </Form.Label>
                                                <Form.Control
                                                    type={'number'}
                                                    onChange={(event) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            telephoneNum:
                                                                event.target
                                                                    .value,
                                                        })
                                                    }}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                controlId={'nameInfo'}
                                            >
                                                <Form.Label>
                                                    Additional Info
                                                </Form.Label>
                                                <Form.Control
                                                    onChange={(event) => {
                                                        setBookingInfo({
                                                            ...bookingInfo,
                                                            additionalInfo:
                                                                event.target
                                                                    .value,
                                                        })
                                                    }}
                                                    as='textarea'
                                                    aria-label='With textarea'
                                                />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Col>
                                                <Form.Check type={'checkbox'} />
                                                I agree to the{' '}
                                                <Link to={'/termsandcondition'}>
                                                    Terms And Conditions
                                                </Link>{' '}
                                                and have reviewed the{' '}
                                                <Link
                                                    to={'/booking_conditions'}
                                                >
                                                    Booking Conditions
                                                </Link>{' '}
                                                and Cancellation Rules.
                                            </Col>
                                        </Form.Row>
                                        <Button
                                            className={'mt-3'}
                                            variant={'info'}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                bookPackage()
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-4'>
                            <Card style={{ width: '24rem', marginTop: '20px' }}>
                                <Card.Img variant='top' src={data.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{data.packageName}</Card.Title>
                                    <b style={{ color: 'blue' }}>
                                        <FaLocationArrow /> {data.duration}
                                    </b>
                                    <br />
                                    <b>Type : </b> Standard <br />
                                    <b>No of Rooms and type : </b> {accmodation}{' '}
                                    <br />
                                    <br />
                                    <b>Price : </b>
                                    <span
                                        style={{
                                            color: 'blue',
                                            fontSize: '24pt',
                                        }}
                                    >
                                        ₹{' '}
                                        {adultsPrice +
                                            childrenAb6Price +
                                            childrenBe6Price}
                                    </span>
                                    <br />
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <EmailSub />
                <Brands />
            </div>
        )
    } else {
        return LoadingJSX
    }
}

export default BookNow
