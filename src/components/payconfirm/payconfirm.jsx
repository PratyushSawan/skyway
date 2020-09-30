import React from "react";
import style from "./payconfirm.module.css";
import {
    FaCalendar,
    FaMoneyBill,
    FaPhone,
    FaAddressBook,
    FaArrowRight,
} from "react-icons/fa";

import { GiPerson } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import { NotificationManager } from "react-notifications";
import EmailSub from "../emailsub/emailsub";
import Brands from "../brands/brands";

const PayConfirm = () => {
    let [bookingInfo, setBookingInfo] = useState(null);

    let [packageDetail, setPackageDetail] = useState(null);

    let { bookingId } = useParams();

    let fetchBookingInfo = async () => {
        fetch(
            `https://skyway-server.herokuapp.com/api/v1/booking/getBookingInfo/${bookingId}`
        )
            .then((res) => {
                return res.json();
            })
            .then((bookingInfo) => {
                setBookingInfo(bookingInfo);
                fetchPackageDetail(bookingInfo.packageId);
            });
    };

    let fetchPackageDetail = async (packageId) => {
        fetch(`https://skyway-server.herokuapp.com/api/v1/packages/getPackage/${packageId}`)
            .then((res) => {
                return res.json();
            })
            .then((resData) => {
                if (resData.packageName !== undefined) {
                    setPackageDetail(resData);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchBookingInfo();
        fetchPackageDetail();
    }, []);

    let LoadingJSX = (
        <div
            style={{
                width: "100vw",
                height: "600px",
                display: "flex",
                backgroundColor: "#f1f2f3",
                justifyContent: "center",
            }}
        >
            <img
                src={require("../asserts/animated/Pulse-1s-200px.svg")}
                alt=""
            />
        </div>
    );

    if (packageDetail !== null) {
        return (
            <div>
                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <div className={style.lcard}>
                        <h3>Review your Booking</h3>
                        <div>
                            <FaCalendar /> {bookingInfo.fromDate}
                        </div>
                        <div>
                            <GiPerson /> {bookingInfo.firstName}
                        </div>
                        <div>
                            <FaMoneyBill /> {bookingInfo.emailId}
                        </div>
                        <div>
                            <FaPhone /> {bookingInfo.mobileNum}
                        </div>
                        <div>
                            <FaAddressBook /> {bookingInfo.address}
                        </div>
                        <br />
                        <h3>Payment details</h3>
                        <table border={"1"}>
                            <tbody>
                                <tr>
                                    <td>Package Price</td>
                                    <td>₹ {bookingInfo.payableAmount}</td>
                                </tr>
                                <tr>
                                    <td>GST (5%)</td>
                                    <td>
                                        ₹{" "}
                                        {(5 / 100) *
                                            parseInt(bookingInfo.payableAmount)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Total Price</td>
                                    <td>
                                        ₹{" "}
                                        {parseInt(bookingInfo.payableAmount) +
                                            (5 / 100) *
                                            parseInt(
                                                bookingInfo.payableAmount
                                            )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <h3>Package Details</h3>
                        <b>Package Name : </b> {packageDetail.packageName}{" "}
                        <br />
                        <b>Duration : </b> {packageDetail.duration} <br />
                        No. of Persons
                        <table border={"1"}>
                            <tbody>
                                <tr>
                                    <td>Adults</td>
                                    <td>{bookingInfo.adults}</td>
                                </tr>
                                <tr>
                                    <td>Children above 6</td>
                                    <td>{bookingInfo.childrenAbove6}</td>
                                </tr>
                                <tr>
                                    <td>Children below 6</td>
                                    <td>{bookingInfo.childrenBelow6}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={style.rcard}>
                        <h5>Pay via Credit card / Debit card / Netbanking</h5>
                        <h3>Choose payment type : </h3>
                        <img
                            src={require("../asserts/images/pay.png")}
                            alt=""
                            srcSet=""
                        />
                        <br />
                        You will be re-directed to our secure payment gateway
                        page where you can either enter your credit/debit card
                        details or select your Netbanking bank to complete the
                        payment.
                        <br />
                        <br /> <br />
                        <div
                            onClick={() => {
                                NotificationManager.success(
                                    "Done",
                                    "Your payment was done successfully"
                                );
                            }}
                            className={"btn btn-warning"}
                        >
                            Pay Now <FaArrowRight />{" "}
                        </div>
                    </div>
                </div>

                <EmailSub />
                <Brands />
            </div>
        );
    } else {
        return LoadingJSX;
    }
};

export default PayConfirm;
