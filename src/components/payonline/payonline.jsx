import React from 'react'
import SimpleBanner from '../simplebanner/simplebanner'
import BreadcrumComp from '../breadcrum/breadcrum'
import { Tabs, Tab } from 'react-bootstrap'

let PayOnline = () => {
    return (
        <div>
            <SimpleBanner
                image={require('../asserts/images/cardback1.jpg')}
                name={'PAY ONLINE'}
            />
            <BreadcrumComp />
            <h1>RTGS/NEFT:</h1>
            <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
                <Tab eventKey='home' title='Banglore Branch'></Tab>
                <Tab eventKey='profile' title='Mysore Branch'></Tab>
            </Tabs>
        </div>
    )
}

export default PayOnline
