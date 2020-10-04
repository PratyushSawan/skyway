import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-notifications/lib/notifications.css'

import { NotificationContainer } from 'react-notifications'

//Components
import 'antd/dist/antd.css'
import Homepage from './components/homepage/homepage'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Package from './components/packages/packages'
import Search from './components/search/search'
import Experiences from './components/experiences/experience'
import PayOnline from './components/payonline/payonline'
import Page404 from './components/404page/404'
import BookNow from './components/booknow/booknow'
import PayConfirm from './components/payconfirm/payconfirm'
import Ayurveda from './components/ayurveda/ayurveda'
import Jungle from './components/jungle/jungle'
import AboutUs from './components/aboutus/absoutus'
import Contact from './components/contactus/contact'
import Career from './components/career/career'
import FeedBack from './components/feedback/feedback'
import HappyCustomers from './components/happyCustomers/happyCustomers'
import HotelResort from './components/hotelResort/hotelResort'
import AboutIndia from './components/aboutIndia/aboutIndia'
import FAQPage from './components/faq/faq'
import PhotoGallery from './components/photoGallery/photoGallery'
import PressRelease from './components/pressRelease/pressRelease'
import HolidayClubPage from './components/holidayClubPage/holidayClubPage'
import RoadRoutes from './components/roadRoutes/roadRoutes'
import VisaAssistance from './components/visaAssistance/visa'
import ThingsToKnow from './components/thingsToKnow/thingsToKnow'
import TermsAndCondition from './components/termscondition/termscondition'
import BookingCondition from './components/bookingConditions/bookingCondition'
import PackageGroup from './components/packageGroups/PackageGroup'
import ForeignTouristsGroup from './components/foreignTouristsGroup'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={Homepage} />
                <Route
                    exact
                    path={'/packages/:packageId'}
                    component={Package}
                />
                <Route
                    exact
                    path={'/holidays/Tours-for-Foreign-tourists'}
                    component={ForeignTouristsGroup}
                />
                <Route
                    exact
                    path={'/holidays/:category/:groupId'}
                    component={PackageGroup}
                />
                <Route
                    exact
                    path={'/holidays/:category/:groupId/:subgroup'}
                    component={PackageGroup}
                />
                <Route exact path={'/search'} component={Search} />
                <Route exact path={'/experiences'} render={(props) => <Experiences {...props} tourName={``} />} /> />
                <Route exact path={'/payOnline'} component={PayOnline} />
                <Route
                    exact
                    path={'/pay_confirm/:bookingId'}
                    component={PayConfirm}
                />
                <Route
                    exact
                    path={'/booking_details/:pacId'}
                    component={BookNow}
                />
                {/* experiences section */}
                <Route exact path={'/experiences/ayurveda'} component={Ayurveda} />
                <Route exact path={'/experiences/DayTrip-Excursions'} render={(props) => <Experiences {...props} tourName={`DAY TRIPS / EXCURSIONS`} />} />
                <Route exact path={'/experiences/indiancitytours'} render={(props) => <Experiences {...props} tourName={`INDIAN CITY TOURS`} />} /> />
                <Route exact path={'/experiences/mysore-dasara-tours'} render={(props) => <Experiences {...props} tourName={`MYSORE DASARA TOURS`} />} /> />
                <Route exact path={'/experiences/trupati-special-darshan'} render={(props) => <Experiences {...props} tourName={`TIRUPATI SPECIAL DARSHAN TOURS`} />} /> />
                <Route exact path={'/experiences/weekend-gateways'} render={(props) => <Experiences {...props} tourName={`WEEKEND GETAWAYS`} />} /> />
                {/*  */}
                <Route exact path={'/jungle'} component={Jungle} />
                <Route exact path={'/aboutus'} component={AboutUs} />
                <Route exact path={'/career'} component={Career} />
                <Route exact path={'/contact'} component={Contact} />
                <Route exact path={'/feedback'} component={FeedBack} />
                <Route exact path={'/hotels'} component={HotelResort} />
                <Route exact path={'/about-india'} component={AboutIndia} />
                <Route exact path={'/faqs'} component={FAQPage} />
                <Route exact path={'/photoGallery'} component={PhotoGallery} />
                <Route exact path={'/pressRelease'} component={PressRelease} />
                <Route exact path={'/roadRoutes'} component={RoadRoutes} />
                <Route
                    exact
                    path={'/booking_conditions'}
                    component={BookingCondition}
                />
                <Route
                    exact
                    path={'/things-to-know'}
                    component={ThingsToKnow}
                />
                <Route
                    exact
                    path={'/termsandcondition'}
                    component={TermsAndCondition}
                />
                <Route
                    exact
                    path={'/visa-requirements'}
                    component={VisaAssistance}
                />
                <Route
                    exact
                    path={'/holiday-club'}
                    component={HolidayClubPage}
                />
                <Route
                    exact
                    path={'/happy-customers'}
                    component={HappyCustomers}
                />
                <Route default component={Page404} />
            </Switch>
            <Footer />
            <Navbar />
            <NotificationContainer />
        </Router>
    )
}

export default App
