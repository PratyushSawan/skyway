import React from 'react'
import BreadcrumComp from '../breadcrum/breadcrum'
import SimpleBanner from '../simplebanner/simplebanner'
import { Divider, Slider, Select, Input } from 'antd'
import searchStyle from './search.module.css'
import { FaClock, FaArrowRight } from 'react-icons/fa'

const { Option } = Select
const { TextArea } = Input

let CustomCard = () => {
    return (
        <div className={searchStyle.customCard}>
            <div className='row'>
                <div className='col-md-5'>
                    <img
                        className={searchStyle.cardImage}
                        src={require('../asserts/images/carlous-img1.jpg')}
                        alt=''
                    />
                </div>
                <div className='col-md-7'>
                    <div className={searchStyle.content}>
                        <h2>GOLDENTRIANGLE TOUR PACKAGE</h2>
                        <div className={searchStyle.duration}>
                            <FaClock /> 6 Nights / 7 days
                        </div>
                        <div className={searchStyle.places}>
                            Delhi , Agra , Jaipur
                        </div>
                        <div style={{ float: 'left' }}>
                            Starts at
                            <div className={searchStyle.price}>₹ 1926</div>
                        </div>
                    </div>
                    <button
                        style={{ float: 'right', marginRight: '20px' }}
                        className={'btn btn-primary'}
                    >
                        View Detail <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

class Search extends React.Component {
    componentDidMount() {
        window.onscroll = (e) => {
            let sidebar = document.getElementById('makesticky')
            if (sidebar !== null) {
                if (window.scrollY > 700) {
                    sidebar.style.top = '0px'
                    sidebar.style.position = 'fixed'
                } else {
                    sidebar.style.position = 'relative'
                }

                if (window.scrollY > document.body.scrollHeight - 900) {
                    //sidebar.style.marginTop = '6500px'
                    sidebar.style.position = 'relative'
                }
            }
        }
    }

    render() {
        return (
            <div>
                <SimpleBanner
                    image={require('../asserts/images/carlous-img1.jpg')}
                    name='DISCOVER INDIA TOURS - INDIA TOUR PACKAGES'
                />
                <BreadcrumComp />
                <div className='container'>
                    <p style={{ padding: '20px', fontSize: '14pt' }}>
                        India is a vast country, perhaps the seventh largest
                        country in the world. A country of this size seeks
                        visitors to spend at least 2 weeks to acquaint oneself
                        with the glimpses of India. It is a country of mystical
                        significance, filled with awe and fascination. All these
                        India tour packages are hand- picked and would be a
                        source of enjoyment, both for first time India tour
                        travelers as well as repeat foreign clients. Listed
                        below are 30 tour packages which cover all attractions
                        in India, to choose based on your interest to travel to
                        India.
                    </p>
                    <Divider />
                    <div style={{ margin: '0px' }}>
                        <div className={'row'}>
                            <div className='col-4'>
                                <div>
                                    <div id='makesticky'>
                                        <div
                                            style={{
                                                backgroundColor: 'white',
                                                boxShadow: '1px 1px 15px #ddd',
                                                padding: '30px',
                                                width: '340px',
                                                marginTop: '50px',
                                            }}
                                        >
                                            <h5>PRICE LEVEL</h5>
                                            <Slider
                                                range
                                                defaultValue={[0, 146899]}
                                            />
                                            <h5>NO. OF DAYS</h5>
                                            <div className='row'>
                                                <div className='col-4'>
                                                    Up To.
                                                </div>
                                                <div className='col-8'>
                                                    <Select
                                                        defaultValue='Select ..'
                                                        style={{ width: 120 }}
                                                    >
                                                        <Option value='4'>
                                                            4
                                                        </Option>
                                                        <Option value='5'>
                                                            5
                                                        </Option>
                                                        <Option value='6'>
                                                            6
                                                        </Option>
                                                        <Option value='7'>
                                                            7
                                                        </Option>
                                                        <Option value='8'>
                                                            8
                                                        </Option>
                                                        <Option value='9'>
                                                            9
                                                        </Option>
                                                        <Option value='10'>
                                                            10
                                                        </Option>
                                                        <Option value='11'>
                                                            11
                                                        </Option>
                                                        <Option value='12'>
                                                            12
                                                        </Option>
                                                        <Option value='13'>
                                                            13
                                                        </Option>
                                                        <Option value='14'>
                                                            14
                                                        </Option>
                                                        <Option value='15'>
                                                            15
                                                        </Option>
                                                        <Option value='16'>
                                                            16
                                                        </Option>
                                                        <Option value='17'>
                                                            17
                                                        </Option>
                                                        <Option value='18'>
                                                            18
                                                        </Option>
                                                        <Option value='19'>
                                                            19
                                                        </Option>
                                                        <Option value='20'>
                                                            20
                                                        </Option>
                                                        <Option value='21'>
                                                            21
                                                        </Option>
                                                    </Select>
                                                </div>
                                            </div>

                                            <h5>DESTINATION</h5>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <TextArea
                                                        placeholder='Select your destination'
                                                        style={{ height: 50 }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <button
                                                        style={{
                                                            margin: '10px',
                                                            width: '100%',
                                                        }}
                                                        className={
                                                            'btn btn-primary'
                                                        }
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={'col-8'}>
                                <div
                                    style={{
                                        width: '40%',
                                        padding: '10px',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: '14pt',
                                        }}
                                    >
                                        Package found (4)
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
                                <CustomCard />
                                <CustomCard />
                                <CustomCard />
                                <CustomCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
