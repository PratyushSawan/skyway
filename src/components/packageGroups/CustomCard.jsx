import React from 'react'
import searchStyle from './style.css'
import { FaClock, FaArrowRight } from 'react-icons/fa'

let CustomCard = ({ pkgs, group, category, subgroup }) => {
    const costStartsAt = (pricing) => {
        let prices = [];

        pricing.forEach(price => {
            if (price.cost.standard !== 0) {
                prices.push(price.cost.standard)
            }
        });

        let minPrice = Math.min(...prices)

        return minPrice;
    }
    if (subgroup) {
        pkgs = pkgs.map((pkg) => {
            return (pkg.category[3].toLowerCase() === subgroup.toLowerCase() ? pkg : null)
        })
    } else {
        pkgs = pkgs.map((pkg) => {
            return (pkg.category[2].toLowerCase() === group.toLowerCase() ? pkg : null)
        })
    }


    let pkgCards = pkgs.map((pkg, i) => {

        return (pkg ? (
            <div className='row py-3' key={"key-" + i}>
                <div className='col-md-5'>
                    <img
                        style={{ width: '100%' }}
                        src={pkg.imageUrl}
                        alt=''
                    />
                </div>
                <div className='col-md-7'>
                    <div className={searchStyle.content}>
                        <h4>{pkg.packageName}</h4>
                        <div className={searchStyle.duration}>
                            <FaClock /> {pkg.duration}
                        </div>
                        <div className={searchStyle.places}>{pkg.place}</div>
                        <div style={{ float: 'left' }}>
                            Starts at: <b>₹ {costStartsAt(pkg.pricing)} </b>
                        </div>
                    </div>
                    <a href={"/packages/" + pkg._id}>
                        <button
                            style={{
                                float: 'right',
                                position: 'relative',
                                right: '10px',
                                top: '20px',
                            }}
                            className={'btn btn-primary'}
                        >
                            View Detail <FaArrowRight />
                        </button></a>
                </div>
            </div>
        ) : "")
    })

    return (
        <div className={searchStyle.customCard}>
            {pkgs && pkgs.length ?
                <div>{pkgCards}</div>
                : ""}
        </div>
    )
}

export default CustomCard