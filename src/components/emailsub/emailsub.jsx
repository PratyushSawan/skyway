import React, { useState } from 'react'
import "./emailstyle.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const EmailSub = () => {
    const [email, setEmail] = useState("")
    async function verifyEmail() {
        function toastAlert(msg, type) {
            toast(msg, {
                position: "top-center",
                autoClose: 5000,
                type,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
        }
        const mailregexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (email.match(mailregexp)) {
            let res = await axios.post("https://skyway-server.herokuapp.com//api/v1/email/findOne/" + email)
            toastAlert(res.data.message, res.data.type)
        } else {
            toastAlert(<p style={{ fontSize: "1.25em" }}>"Please enter a valid email!</p>, "error")
        }
    }

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
            <ToastContainer />

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
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                type='button'
                onClick={() => verifyEmail()}
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
