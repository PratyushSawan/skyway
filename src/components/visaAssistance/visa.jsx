import React from 'react'
import SimplePage from '../layouts/simplePage'
import { Form, Row, Col } from 'react-bootstrap'

const VisaAssistance = () => {
    return (
        <SimplePage
            title={'VISA ASSISTANCE'}
            image={require('../asserts/images/about-india.jpg')}
        >
            <p>
                <b>
                    The cumbersome process of getting visas done by one self can
                    be difficult, expansive and time consuming.{' '}
                </b>
                It is essential that you apply for visas early. Given the
                security concerns and cautious approach adopted by embassies and
                consulates, visa processing can take quite long. Hence it is of
                utmost importance that you submit the documents required to
                process your visa well in advance of your date of travel.
                <br />
                Skyways visa team are well connected, well versed with
                processing and liaising with all major visa issuing countries,
                and would therefore be in a position to render assistance in a
                cost effective manner. Contact Skyway for your visa needs.
            </p>
            <hr />
            <h2>Send Enquiry</h2>
            <div className='container'>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>SALUTATION</Form.Label>
                                <Form.Control as={'select'}>
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Ms.</option>
                                    <option>Dr.</option>
                                    <option>Prof.</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>FIRST NAME *</Form.Label>
                                <Form.Control type={'text'} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>LAST NAME *</Form.Label>
                                <Form.Control type={'text'} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>MOBILE *</Form.Label>
                                <Form.Control type={'text'} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>EMAIL *</Form.Label>
                                <Form.Control type={'email'} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </SimplePage>
    )
}

export default VisaAssistance
