import React from 'react'
import { Breadcrumb } from 'antd'
import { FaHome, FaTripadvisor, FaGlassCheers } from 'react-icons/fa'
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
                    <span>{props.category}</span>
                </Breadcrumb.Item>
                {props.subcat1 ? < Breadcrumb.Item >
                    <span>{props.subcat1}</span>
                </Breadcrumb.Item> : null}

                <Breadcrumb.Item>
                    {/* <FaTripadvisor
                        style={{
                            position: 'relative',
                            bottom: '2px',
                            fontSize: '18pt',
                            marginRight: '5px',
                        }}
                    /> */}
                    <span>{props.tourName}</span>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div >
    )
}

export default BreadcrumComp
