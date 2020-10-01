import React from 'react'
import { FaClock, FaArrowRight } from 'react-icons/fa'
import ReactHtmlParser from 'react-html-parser';
import searchStyle from './jungle.module.css'

let CustomCard = ({ pkgs, tourName }) => {
    const costStartsAt = (packageDetails) => {
        let prices = [];

        if (packageDetails.category[0] === "JUNGLE LODGES") {
            packageDetails.pricing.forEach(price => {
                if (price.cost.singleOcc.weekday != 0) {
                    prices.push(price.cost.singleOcc.weekday)
                }
            });
        }
        else {
            packageDetails.pricing.forEach(price => {
                if (price.cost.standard != 0) {
                    prices.push(price.cost.standard)
                }
            });

        }

        let minPrice = Math.min(...prices)

        return minPrice;
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
                            Starts at: <b>₹ {costStartsAt(pkg)} </b>
                        </div>
                    </div>
                    <a href={"/packages/" + pkg.pkgcode}>
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

    const nbPkgsFound = () => {
        let nb = 0;
        pkgCards.forEach(pkg => {
            if (pkg && pkg.length) {
                nb++
            }
        });
        return nb
    }

    return (
        <div className={searchStyle.customCard}>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    padding: '10px',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        fontSize: '20pt',
                    }}
                >
                    Packages found ({nbPkgsFound()})
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

            {pkgs && pkgs.length ?
                <div>{pkgCards}</div>
                : <h3 className='text-info font-weight-normal'>No packages found in "{tourName}" yet.</h3>}
        </div>
    )
}

export default CustomCard