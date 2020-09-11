import React from 'react'

const EmailSub = () => {
    return (
        <div
            style={{
                display: 'flex',
                textAlign: 'center',
                width: '100%',
                padding: '50px',
                justifyContent: 'center',
                background: 'linear-gradient(90deg , blue, skyblue)',
            }}
        >
            <div
                style={{
                    fontSize: '22pt',
                    color: 'white',
                    marginRight: '10px',
                }}
            >
                Looking for some amazing travel deals?
            </div>
            <input
                style={{
                    backgroundColor: 'transparent',
                    border: '2px solid white',
                    borderRadius: '25px',
                    width: '300px',
                    padding: '0px 10px 0px 10px',
                    color: 'white',
                    height: '40px',
                }}
                type='text'
                placeholder='Enter your email'
            />
            <button
                style={{
                    marginLeft: '20px',
                    height: '40px',
                }}
                className={'btn btn-primary'}
            >
                Subscribe
            </button>
        </div>
    )
}

export default EmailSub
