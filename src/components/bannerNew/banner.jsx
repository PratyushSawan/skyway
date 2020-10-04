import React, { useEffect } from 'react'

let BannerNew = () => {
    let images = [
        require('../assets/images/142302.jpg'),
        require('../assets/images/travel.jpeg'),
        require('../assets/images/carlous-img2.jpg'),
        require('../assets/images/carlous-img3.jpg'),
        require('../assets/images/carlous-img4.jpg'),
    ]

    useEffect(() => {
        let count = 0
        setInterval(() => {
            if (document.getElementById('back') != null) {
                document.getElementById(
                    'back'
                ).style.backgroundImage = `url("${images[count]}")`

                count += 1

                if (count === 4) {
                    count = 0
                }
            }
        }, 3000)

        return () => {
            clearInterval()
        }
    }, [])

    return (
        <div
            style={{ marginTop: '0px', padding: '10px' }}
            className='container-fluid'
        >
            {console.log('test')}

            <div className='row' style={{ width: '100%' }}>
                <div className='col-md-6' style={{ padding: '10px' }}>
                    <div
                        id='back'
                        style={{
                            backgroundImage: `url("${images[0]}")`,
                            backgroundSize: 'cover',
                            width: '97%',
                            transitionDuration: '0.75s',
                            height: '72vh',
                            marginLeft: '10px',
                        }}
                    ></div>
                </div>
                <div className='col-md-6' style={{ padding: '5px' }}>
                    <div className='row'>
                        <div className='col-6' style={{ padding: '5px' }}>
                            <div
                                style={{
                                    backgroundImage: `url(${images[1]})`,
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '35vh',
                                }}
                            ></div>
                        </div>
                        <div className='col-6' style={{ padding: '5px' }}>
                            <div
                                style={{
                                    backgroundImage: `url(${images[2]})`,
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '35vh',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6' style={{ padding: '5px' }}>
                            <div
                                style={{
                                    backgroundImage: `url(${images[3]})`,
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '35vh',
                                }}
                            ></div>
                        </div>
                        <div className='col-6' style={{ padding: '5px' }}>
                            <div
                                style={{
                                    backgroundImage: `url(${images[4]})`,
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '35vh',
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerNew
