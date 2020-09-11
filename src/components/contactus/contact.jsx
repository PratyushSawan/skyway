import React from 'react'

import { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import EmailSub from '../emailsub/emailsub'

class Map extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    state = {
        viewport: {
            width: 400,
            height: 250,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8,
        },
    }

    render() {
        return (
            <ReactMapGL
                mapboxApiAccessToken='pk.eyJ1IjoiamF5cHJha2FzaHBhdGhhayIsImEiOiJja2JrbGNrbnoxMDBoMnlsc2diYWxtNG1kIn0.0zeFUEg9Vtc5dEJgDbUhCA'
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
            />
        )
    }
}

let Contact = () => {
    let ContactCard = ({ branch, address, tel, email }) => {
        return (
            <div
                style={{
                    width: '100%',
                    margin: '20px',
                    boxShadow: '1px 1px 15px #ddd',
                }}
            >
                <div className='row'>
                    <div
                        className='col-8'
                        style={{
                            padding: '20px',
                        }}
                    >
                        <h5>{branch}</h5>
                        <div>
                            {address} <br /> <b>Tel. </b> {tel} <br />{' '}
                            <b>Email</b> {email}{' '}
                        </div>
                    </div>
                    <div className='col-4'>
                        <Map />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div
                style={{
                    padding: '50px',
                }}
            >
                <div>
                    IATA Accredited, Active Member of Indian Association of Tour
                    Operators (IATO) & Travel Agent Federation of India (TAFI),
                    an ISO 9001-2015 Certified Travel Company
                </div>
                <h3>Skyway International Travels</h3>
                <b>Unit of Vagjiani Travel Co.Pvt. Ltd.</b>
                <ContactCard
                    branch={'Head Office'}
                    tel={'+91-8884 467 467 / 9845187717'}
                    email={'blr@skywaytour.com'}
                    address={
                        'Tourism House,#8, Papanna Lane St. Marks Road, Bangalore - 560 001'
                    }
                />

                <ContactCard
                    branch={'Regd. Office'}
                    address={'370/4, J.L.B Road, Mysore-570005,\n' + 'India.'}
                    tel={'+91-821-2426222'}
                    email={' mys@skywaytour.com'}
                />

                <ContactCard
                    branch={'Madikeri'}
                    address={
                        'Hotel Mayura Valley View, Raja Seat Road,Madikeri – 571 201'
                    }
                    tel={' +91-8272-223999'}
                    email={'madikeri@skywaytour.com'}
                />
            </div>
            <EmailSub />
        </>
    )
}

export default Contact
