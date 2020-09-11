import React from "react";
import SimplePage from "../layouts/simplePage";

let ThingsToKnow = () => {
    return (
        <SimplePage image={require('../asserts/images/142302.jpg')}>
            <div className="">
                <strong>DO’S</strong>
                <ul>
                    <li>It is advisable to avail pre-paid taxis/autorikshaws (three-wheeler taxis), wherever available
                        at the airports and railway stations. For metered taxis insist on paying by meter or ask for a
                        fare chart.
                    </li>
                    <li>Shop at Government emporia/fixed price shops as far as possible. This ensures good quality
                        products at reasonable prices. Insist on proper receipts and bills of purchase.
                    </li>
                    <li>Keep your valuables in hotel lockers / safe deposit vaults.</li>
                    <li>India Tourism has a system of approving travel agents/tour operators who confirm to prescribe
                        standards of service and quality. Always book your tours through such agencies.
                    </li>
                    A list of approved travel agents/tour operators is available at the local India Tourism.
                    <li>For guiding services, hire a Government approved tourist guide who always carries an identity
                        card issued by India Tourism and Archaeological survey of India.</li>
                    <li>Change money only at authorised foreign exchange outlets/banks/hotels and insist on a proper
                        receipt.
                    </li>
                    <li>Contact the nearest India Tourism office/State Government Tourist Office for authentic
                        information. All these offices supply guide maps/brochures free of charge/or at a nominal cost.
                    </li>
                    <li>Confirm/reconfirm hotel bookings yourself</li>
                    <li>Buy train tickets from the Railway Booking Counters or through authorised travel agents.</li>
                </ul>
                <strong>DON’TS</strong>
                <ul>
                    <li>Don’t fall for tempting exchange rates offered by unauthorised people</li>
                    <li>Don’t allow any unauthorised person to act on your behalf</li>
                    <li>Don’t purchase air/bus/train tickets through strangers, touts and unauthorised travel agencies
                    </li>
                    <li>Don’t accept lavish hospitality extended by strangers/unknown persons especially while shopping
                        for jewellery and expensive items
                    </li>
                    <li>Don’t travel in a taxi carrying any person other than the driver</li>
                    <li>Don’t deal with unauthorised persons. Stay away from touts</li>
                </ul>
            </div>
        </SimplePage>
    )
}

export  default ThingsToKnow