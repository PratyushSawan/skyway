import React from 'react'
import { Breadcrumb } from 'antd'
import { FaHome, FaTripadvisor } from 'react-icons/fa'
import breadCrumStyle from './breadcrum.module.css'

let BreadcrumComp = (props) => {
    return (
        <div className={breadCrumStyle.breadCrum}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <FaHome
                        style={{
                            position: 'relative',
                            bottom: '2px',
                            fontSize: '18pt',
                            marginRight: '5px',
                        }}
                    />
                    <span>DISCOVER INDIA TOUR | INDIA TOUR PACKAGES</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <FaTripadvisor
                        style={{
                            position: 'relative',
                            bottom: '2px',
                            fontSize: '18pt',
                            marginRight: '5px',
                        }}
                    />
                    <span>GOLDEN TRIANGLE TOUR PACKAGE</span>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default BreadcrumComp
