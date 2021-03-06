import React from 'react'
import searchStyle from './style.css'
import { FaClock, FaArrowRight } from 'react-icons/fa'
import ReactHtmlParser from 'react-html-parser';

let CustomCard = ({ pkgs, tourName }) => {

    pkgs = pkgs.map((pkg) => {
        return ((pkg.category[0].toLowerCase() === "experiences" && tourName === pkg.category[1]) ? pkg : null)
    })

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
                            Starts at: <b>₹ {pkg.priceStartsAt} </b>
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

            {pkgs && pkgs.length && !pkgCards.every(val => !val) ?
                <div>{pkgCards}</div>
                : <h3 className='text-info font-weight-normal'>No results found.</h3>}
        </div>
    )
}

export default CustomCard