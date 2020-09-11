import React, { useEffect } from 'react'
import SimpleBanner from '../simplebanner/simplebanner'
import BreadcrumComp from '../breadcrum/breadcrum'
import ScrollspyNav from 'react-scrollspy-nav'
import {
    FaBook,
    FaPhotoVideo,
    FaMoneyBill,
    FaEvernote,
    FaStethoscope,
    FaHotel,
} from 'react-icons/fa'
import style from './aboutus.module.css'
import EmailSub from '../emailsub/emailsub'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

        window.onscroll = (e) => {
            let sidebar = document.getElementById('side')
            if (sidebar !== null) {
                if (window.scrollY > 620) {
                    sidebar.style.height = '100vh'
                    sidebar.style.top = '0px'
                    sidebar.style.position = 'fixed'
                } else {
                    sidebar.style.position = 'relative'
                }

                if (window.scrollY > document.body.scrollHeight - 900) {
                    //sidebar.style.marginTop = '6500px'
                    sidebar.style.position = 'relative'
                    sidebar.style.height = '100vh'
                }
            }
        }
    }, [])

    let Management = ({ image, dec, head }) => {
        return (
            <div
                style={{
                    padding: '10px',
                    margin: '10px',
                    boxShadow: '1px 1px 15px #ddd',
                }}
                className={'container'}
            >
                <div className='row'>
                    <div className='col-3'>
                        <img src={image} alt='' />
                    </div>
                    <div className='col-9'>
                        <h4>{head}</h4>
                        <div>{dec}</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <SimpleBanner
                image={require('../asserts/images/WhyPeopleTravel_main.jpg')}
                name={'About us'}
            />
            <BreadcrumComp />

            <div
                style={{
                    margin: '0px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        padding: '0',
                        margin: '0',
                        backgroundColor: '#3e4094',
                    }}
                    className={style.sidebar}
                >
                    <div id={'side'}>
                        <div className={style.anchorPane}>
                            <ScrollspyNav
                                scrollTargetIds={[
                                    'aboutus',
                                    'management',
                                    'boardofdirector',
                                    'advisor',
                                    'csr',
                                    'pressrelease',
                                ]}
                                duration={'500'}
                                activeNavClass={style.dopeNav}
                            >
                                <ul>
                                    <li>
                                        <a
                                            className={style.navLink}
                                            href='#aboutus'
                                        >
                                            <FaBook /> About us
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#management'>
                                            <FaPhotoVideo /> Management
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#boardofdirector'>
                                            <FaMoneyBill /> Board of director
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#advisor'>
                                            <FaEvernote /> Advisor
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#csr'>
                                            <FaStethoscope /> CSR
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#pressrelease'>
                                            <FaHotel /> Press Release
                                        </a>
                                    </li>
                                </ul>
                            </ScrollspyNav>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        flex: '0 0 82%',
                        maxWidth: '100%',
                    }}
                >
                    <div style={{ padding: '10px' }}>
                        <div
                            style={{
                                padding: '20px',
                                margin: '20px',
                                boxShadow: '1px 1px 15px #ddd',
                            }}
                            id={'aboutus'}
                        >
                            <h3>About us</h3>
                            <p>
                                We are recognised by Ministry of Tourism, Govt.
                                of India as Inbound Tour Operator having Head
                                Office in Bangalore and Registered office in
                                Mysore, Karnataka and branches/associate offices
                                India. We are in travel business for last 25
                                years having management with travel trade
                                experience for 28 years. IATA Accredited, Active
                                Member of Indian Association of Tour Operators
                                (IATO), Travel Agent Federation of India (TAFI)
                                & Pacific Asia Travel Association (PATA).
                            </p>
                            <img
                                src={require('../asserts/images/about-us1.jpg')}
                                style={{
                                    width: '100%',
                                }}
                                alt=''
                            />
                            <p>
                                It is part of our policy to offer customers only
                                the very best, no matter which part of the world
                                they arrive from. Skyway currently serves FIT’s,
                                Families and small groups from UK, Germany,
                                France, Italy, Switzerland, Australia, New
                                Zealand and USA.
                            </p>
                            <p>
                                Managed by a set of professionals, supported by
                                perfectly maintained fleet, quality drivers,
                                well- mannered staff, best office
                                infrastructure, round the clock support and that
                                extra urge to ensure a hassle-free holiday to
                                make our guests feel comfortable and at home
                                while holidaying.
                            </p>
                            <p>
                                We are specialized in tour packages that include
                                Historical, Archaeological & Pilgrim, Preserved
                                Forest & Wildlife, Spectacular Mountains &
                                Beautiful Sceneries, Sun, Sand & Sea, Landscapes
                                filed with Flaura, Fauna & birds, Adventurous,
                                Ayurveda, Angling, Golf etc., as the list goes
                                on. Specialists in tailor-made holidays to
                                India, Skyway has grown to become one of the
                                leading and most respected tour operators in
                                India.
                            </p>
                            <b>Skyway represent as GSA:</b>
                            <p>
                                The Golden Chariot, the First Luxury Train in
                                South India from Karnataka Jungle Lodges &
                                Resorts, pioneers in managing Eco friendly
                                lodges in Karnataka
                            </p>
                        </div>
                        <div id={'management'}>
                            <h4>Management</h4>
                            <Management
                                dec={
                                    'Started the business during 1994 after obtaining Master of Commerce (M.Com) from Mysore University with 8 years trade experience in Travel and Hospitality. Formed the company during 1996 and expanded the business with Head Office at Bangalore, branches at Madikeri and Mangalore.'
                                }
                                head={
                                    'S.Mahalingaiah (Manu) - Founder Director'
                                }
                                image={require('../asserts/images/Manu-Sir-Director.jpg')}
                            />
                            <Management
                                dec={
                                    'Started the business along with Mr. S. Mahalingaiah during 1994 after obtaining Bachelor of Arts (B.A.) degree from Mangalore University.'
                                }
                                head={
                                    'Amaravathy M.M. (Vishal) - Co Founder-Managing Director'
                                }
                                image={require('../asserts/images/vishal-Madam.jpg')}
                            />
                            <Management
                                dec={
                                    'Bachelor of Arts Calicut University, joined Skyway during 2010 as Manager Administration & Online Marketing. He has 19 years experience in Travel & Tourism Sector.\n' +
                                    'Before joining with Skyway International Travels he had worked with Indian Association of Tour Operators, (IATO), New Delhi (8 years). Creative Travel Pvt. Ltd., New Delhi and Sita World Travel India Ltd, New Delhi now known as Kuoni Destination Management (10 years),\n' +
                                    'He is presently looking Administration of all offices (Mysore, Bangalore, Madikeri, and Mangalore. He is also responsible for all Online Marketing Activity of the company.'
                                }
                                head={
                                    'Venugopalan Nambiar - Sr. Manager and Head-Admin & OM'
                                }
                                image={require('../asserts/images/VENUGOPALAN.jpg')}
                            />
                            <Management
                                image={require('../asserts/images/Manjunath.jpg')}
                                dec={
                                    'Joined as Counter Assistance during 1996 and is now working as Manager Travel with Skyway, Mysore. He is working with the company for the last 15 years. He is in-charge of entire operations.'
                                }
                                head={'S.Manjunatha - Manager Operation'}
                            />
                            <Management
                                image={require('../asserts/images/Asha.jpg')}
                                dec={
                                    'Bachelor of Science from Mysore University joined Skyway during 2004 as Counter Assistance Tours. At present, Asst. Manager Tours. She is in-charge of Inbound and Domestic Tours.'
                                }
                                head={'Asha M.J. - Asst.Manager Tours'}
                            />
                        </div>
                        <div id={'boardofdirector'}>
                            <h2>Board of directors</h2>
                            <Management
                                image={require('../asserts/images/Manu-Sir-Director.jpg')}
                                head={
                                    'S.Mahalingaiah (Manu) - Founder Director'
                                }
                                dec={
                                    'Started the business during 1994 after obtaining Master of Commerce (M.Com) from Mysore University with 8 years trade experience in Travel and Hospitality. Formed the company during 1996 and expanded the business with Head Office at Bangalore, branches at Madikeri and Mangalore.'
                                }
                            />
                            <Management
                                image={require('../asserts/images/vishal-Madam.jpg')}
                                head={
                                    'Amaravathy M.M. (Vishal) - Co Founder-Managing Director'
                                }
                                dec={
                                    'Started the business along with Mr. S. Mahalingaiah during 1994 after obtaining Bachelor of Arts (B.A.) degree from Mangalore University.'
                                }
                            />
                            <Management
                                head={'Mr. M.U. Mandanna - Founder Director'}
                                dec={
                                    'Retired from Indian Army, joined the company and takes care of operations'
                                }
                                image={require('../asserts/images/Mr-Mudanna.jpg')}
                            />
                            <Management
                                image={require('../asserts/images/arun.jpg')}
                                head={'Mr Arun Soni'}
                                dec={'Director'}
                            />
                            <Management
                                head={'Ms. Monica Lindberg'}
                                image={require('../asserts/images/Monica-Lindberg.jpg')}
                                dec={'Director'}
                            />
                        </div>
                        <div id={'advisor'}>
                            <h3>Advisors</h3>
                            <div
                                style={{
                                    padding: '10px',
                                    margin: '20px',
                                    boxShadow: '1px 1px 15px #ddd',
                                }}
                                className='row'
                            >
                                <div className='col-3'>
                                    <img
                                        src={require('../asserts/images/Vittala-Murthy.jpg')}
                                        alt=''
                                    />
                                </div>
                                <div className='col-9'>
                                    <h3>I.M.Vittala Murthy, IAS - Advisor</h3>
                                    <div>
                                        I.M.Vittala Murthy, IAS, obtained
                                        Master’s Degree in Economics from
                                        Central College in 1974. He taught
                                        Economics at VV Puram college before
                                        joining administrative service as
                                        Assistant Commissioner in 1977. After
                                        working as a probationer in Dharwad and
                                        Belgaum districts was posted as
                                        Assistant Commissioner Gadag. He later
                                        worked in various capacities in Coorg,
                                        Hassan, Shimoga and Mangalore districts.
                                        He also served as a Director of Kannada
                                        and Culture for two terms and led a
                                        delegation of leading literary and
                                        cultural personalities from Karnataka to
                                        the Vishwa Kannada Sammelana held in
                                        Manchester in 1988.
                                    </div>
                                    <div>
                                        After being appointed to the Indian
                                        Administrative Service (IAS) in 1986 he
                                        served as Deputy Commissioner Bijapur as
                                        well as Tumkur districts. He also worked
                                        as CEO of Zilla Panchayat, Bellary and
                                        Bangalore Rural districts.
                                    </div>
                                    <div>
                                        Other important assignments held by him
                                        are:
                                    </div>
                                    <ul>
                                        <li>
                                            Managing Director, MSIL[State
                                            Government PSU];
                                        </li>
                                        <li>
                                            Commissioner of Tourism & Managing
                                            Director, KSTDC
                                        </li>
                                        <li>
                                            Commissioner for Transport,
                                            Transport Department;
                                        </li>
                                        <li>
                                            Managing Director, KSIIDC [State
                                            Government PSU].
                                        </li>
                                        <li>
                                            Secretary, Kannada, Culture,
                                            Information & Tourism Department
                                        </li>
                                        <li>
                                            Principal Secretary, Medical
                                            Education
                                        </li>
                                    </ul>
                                    <div>
                                        During his tenure as Managing Director,
                                        MSIL, Mr Vittala Murthy organized two
                                        major National Art camps at Chikmagalur
                                        and Hampi. He also help promote Kannada
                                        poetry as well as rural talent through
                                        Nityotsava, a singing contest on
                                        Doordarshan. As Commissioner of Tourism,
                                        he promoted Karnataka’s tourist
                                        destinations at various international
                                        travel marts and was instrumental in
                                        Karnataka getting its own luxury train,
                                        The Golden Chariot.
                                    </div>
                                    <div>
                                        Apart from this, in his private
                                        capacity, Mr Vittala Murthy has been a
                                        Consulting Producer for three award
                                        winning Kannada Feature Films: Kanooru
                                        Heggadithi, Mathadana and Hasina.
                                        Kanooru Heggadithi based on a novel by
                                        the Gnanapeeta Award Winner Kuvempu was
                                        directed by another Gnanapeeta Award
                                        Winner Mr Girish Karnad. Mathadana based
                                        on a novel by the well known writer Mr
                                        S.L.Byrappa was directed by Mr
                                        T.N.Seetharam. Hasina based on a novel
                                        by Ms. Banu Mustaq was directed by Mr
                                        Girish Kasaravalli.
                                    </div>
                                    <div>
                                        In his final assignment before retiring
                                        from service, Mr Vittala Murthy worked
                                        as Special Officer for Vishwa Kannada
                                        Sammelana, 2011 held at Belgaum.
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '10px',
                                    margin: '20px',
                                    boxShadow: '1px 1px 15px #ddd',
                                }}
                                className='row'
                            >
                                <div className='col-3'>
                                    <img
                                        src={require('../asserts/images/Nagpathi.jpeg')}
                                        alt=''
                                    />
                                </div>
                                <div className='col-9'>
                                    <h3>Prof. K.S. Nagapathi - Advisor</h3>
                                    <div>
                                        D.O.B. 10-08-1947. In a small village of
                                        Sorab Tq, Shimoga Dist. Primary
                                        Education at his village, B.Com at D.
                                        Banumaiah’s College of commerce and Arts
                                        Mysore and Masters of Commerce at
                                        Manasagangotri Mysore.Joined as a
                                        lecturer in D.Banumaiah’s College of
                                        commerce and Arts, Mysore and retired as
                                        professor and HOD of commerce in 2005
                                        after serving for 35 years. <br />{' '}
                                        <br /> He is Instrumental in developing
                                        a five years integrated course in
                                        tourism, first of its kind in India
                                        leading to Master of Tourism
                                        Administration and got the course
                                        instituted in the University of Mysore
                                        and started the course in 2007-08 in
                                        Mysore, affiliated to University of
                                        Mysore. <br /> <br /> He is instrumental
                                        in procuring funding for the
                                        establishment of the tourism courses
                                        from the department of Tourism, Govt of
                                        Karnataka. It is due to his effort that
                                        the State of the Art Campus- Mahajana
                                        Tourism Development Institute has come
                                        into existence, in Mysuru. He was its
                                        founder director and continued for 8
                                        years. He started one year Diploma in
                                        Hotel Management course in 2012-13 with
                                        financial support from department of
                                        tourism, Government of Karnataka. He is
                                        responsible for starting a two years’
                                        Masters program in Tourism and Air
                                        Travel Management, the first of its kind
                                        in Karnataka as a special program after
                                        getting Affiliation from the University
                                        of Mysore, from academic year 2014-15 .
                                        He has worked as a Member of Board of
                                        Studies (BOS) and Board of Examination
                                        (BOE) in Master of Tourism
                                        Administration of Bangalore, Karnatak
                                        and Mysore Universities.
                                    </div>
                                    <h4>
                                        He has authored the following books:
                                    </h4>
                                    <ul>
                                        <li>
                                            Karnataka –“A Delight for Tourists”
                                            – A comprehensive book on all aspect
                                            of Karnataka tourism -sponsored by
                                            Dept. of Tourism, Government of
                                            Karnataka. This book was released in
                                            2014. Rani Channamma University,
                                            Belagavi, has awarded D.Litt. degree
                                            (Highest Degree Awarded by any
                                            university in India) for this book.
                                            Its Kannada version
                                            “Karnataka-Pravasi Swarga” is
                                            released in 2015.
                                        </li>
                                        <li>
                                            He has written a book on principles
                                            and practices of tourism titled as
                                            “Tourism development- A new
                                            Approach”. This book was released in
                                            2012. Its Kannada version was
                                            released in 2013.
                                        </li>
                                        <li>
                                            His Book on Mysore Dasara “ MYSORE
                                            Dasara- A spectacular Cultural
                                            Extravaganza” is under print.
                                        </li>
                                        <li>
                                            He has organized more than a dozen
                                            National and State Level Seminars on
                                            different aspect of tourism.
                                        </li>
                                        <li>
                                            He has written a number of articles
                                            both in English and Kannada about
                                            Karnataka tourism, particularly
                                            developing sustainable tourism in
                                            Mysore region
                                        </li>
                                        <li>
                                            He is the Editor in Chief of “Mysore
                                            Guide”. A tourists’ guide for Mysore
                                            region.
                                        </li>
                                        <li>
                                            He has developed curriculum for
                                            comprehensive guide’s training for
                                            the department of tourism,
                                            Government of Karnataka, which is
                                            being implemented by the department
                                            in five regions of the State
                                            including Mysore.
                                        </li>
                                        <li>
                                            He has written a hand book on
                                            “Tourism and World Heritage”.
                                        </li>
                                        <li>
                                            Samskrithi- A book on heritage and
                                            cultural tourism -Edited.
                                        </li>
                                        <li>
                                            At present, he is working as a Chief
                                            coordinator of UGC tourism projects
                                            for organizing about 250 special
                                            lectures on different aspect of
                                            tourism under EMMRC of University of
                                            Mysore.
                                        </li>
                                        <li>
                                            He has completed a Research project
                                            on tourism of Mysore city as its
                                            coordinator conducted by the
                                            Ministry of Tourism, Government of
                                            India, in 2015
                                        </li>
                                        <li>
                                            His books on commerce and Management
                                            includes; Management Accounting &
                                            The Art of Entrepreneurship.
                                        </li>
                                        <li>
                                            He was given “ Mysore Tourism
                                            Promotion Award-2014” by Mysore
                                            Travel Agents Association and
                                            “Tataiah’s Award-2014’ by Tataiah’s
                                            Vichara Vedike.
                                        </li>
                                    </ul>
                                    <h4>
                                        As part of his civic duty, he is
                                        involved in several social activities:
                                    </h4>
                                    <ul>
                                        <li>
                                            Started Garbage Collection and
                                            disposal mechanism in Jayalakshmi
                                            Puram area of Mysore city by
                                            starting a Resident Welfare
                                            Association way back in 1996. It
                                            also carried on street sweeping.
                                            These activities were completely
                                            funded by residents of the locality.
                                            Both these activities have, since
                                            been taken over by MCC.
                                        </li>
                                        <li>
                                            Federation of Residents’ Welfare
                                            Associations named “Federation of
                                            MCC Ward Parliament” was started in
                                            association with Sri. D. Made Gowda,
                                            former MLC, and other residents
                                            which is carrying out Zero Waste
                                            Management in Ward no
                                            28-Kumbarkoppal for the last 7
                                            years. Wet waste is converted into
                                            organic manure and given to farmers
                                            directly. Dry waste is further
                                            segregated into 25 types and sent to
                                            re-cycling units.
                                        </li>
                                        <li>
                                            Developed Jayalakshmi Puram Park
                                            (Near Raghavendra Swamy Mutt) and
                                            maintained it for a decade, after
                                            which MCC took over and is
                                            maintaining it.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                padding: '10px',
                                margin: '20px',
                                boxShadow: '1px 1px 15px #ddd',
                            }}
                            id={'csr'}
                        >
                            <h3>CSR</h3>
                            <h4>
                                Annually Skyway helps children in Govt Primary
                                school , Basthihalli village, Mysore district by
                                distributing note books and pens towards CSR.
                            </h4>
                            <div className='row'>
                                <div className='col-6'>
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '300px',
                                        }}
                                        src={require('../asserts/images/skyway_helps_1.jpg')}
                                        alt=''
                                    />
                                </div>
                                <div className='col-6'>
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '300px',
                                        }}
                                        src={require('../asserts/images/skyway_helps_2.jpg')}
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div style={{ marginTop: '20px' }} className='row'>
                                <div className='col-6'>
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '300px',
                                        }}
                                        src={require('../asserts/images/skyway_helps_3.jpg')}
                                        alt=''
                                    />
                                </div>
                                <div className='col-6'>
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '300px',
                                        }}
                                        src={require('../asserts/images/skyway_helps_4.jpg')}
                                        alt=''
                                    />
                                </div>
                            </div>
                            <h3>Education</h3>
                            <ul>
                                <li>
                                    During the year 2011 Skyway donated a sum of
                                    Rs. 1, 00,000/- (Rupees one lakh only) to
                                    University of Mysore to award Gold Medal
                                    annually to the Rank holder in Master of
                                    Tourism Administration (MTA).
                                </li>
                                <li>
                                    Skyway has entered into a MoU with Tourism
                                    Development Institute, Mysore, which offers
                                    Master of Tourism Administration (MTA),
                                    Bachelor of Hotel Management (BHM) and
                                    various Diploma courses related to tourism
                                    industry. Under this MoUit s been agreed to
                                    assist and develop the courses,
                                    constructingthe new campusandto provide all
                                    practical training in different areas of
                                    travel and tourism management to students of
                                    MTA in their company.
                                </li>
                                <li>
                                    Skyway donated a sum of Rs. 1, 00,000/-
                                    (Rupees one lakh only) to Tourist
                                    Development Institute towards furnishing the
                                    library. Skyway has subscribed for all
                                    travel and tourism industry related
                                    publications for the library apart from
                                    donating books and cds.
                                </li>
                                <li>
                                    Mahajana Education Society, Mysore has named
                                    the Library block in Tourism Development
                                    Institute Skyway Block in recognition of
                                    theservices rendered by Skyway Management.
                                </li>
                            </ul>
                            <h3>Tourism Publications:</h3>
                            <ul>
                                <li>
                                    Skyway Tourism Education Trust has brought
                                    out the 2ndEdition of Mysore Guide which was
                                    released during July 2011. First edition was
                                    brought out during 2008 and 10,000 copies
                                    were sold out. Second edition is priced at
                                    Rs.120/- and the money collected goes for a
                                    charitable cause.
                                </li>
                                <li>
                                    Skyway Tourism Education Trust has brought
                                    out Mysore city Map which is available for
                                    sale at Rs.20/- and the money collected is
                                    used for a charitable cause.
                                </li>
                                <li>
                                    Skyway brings calendars annually based on
                                    destination in Karnataka, viz., Hampi- 2010,
                                    Coorg - 2011, Nagarahole 2012, North Canara
                                    -2013,
                                </li>
                            </ul>
                            <h3>Health</h3>
                            <ul>
                                <li>
                                    Skyway has an endowment with KRS Charitable
                                    Trust, Mysore which manages Pragati Visions
                                    Super Speciality Eye Hospital in Mysore. The
                                    endowment is for free cataract operation for
                                    5 patients in need, in and around Mysore
                                    every year.
                                </li>
                            </ul>
                            <h3>Sports:</h3>
                            <ul>
                                <li>
                                    Skyway was one of the co-sponsorers of
                                    Mountain Biking Corporate Challange
                                </li>
                                <li>
                                    Skyway was one of the co-sponsorers of the
                                    event Celebration Mysore Marathon held at
                                    Mysore on 2nd October 2011. 500 T-shirtswith
                                    company logo were distributed to
                                    participants apart from helping the
                                    organisers with Logistic support and guiding
                                    the participants about the event.
                                </li>
                                <li>
                                    Skyway sponsored Skyway AITA (All India
                                    Tennis Association) Talent Series event for
                                    Boys &amp; Girls U- 14 &amp;U-16, conducted
                                    by NagarajTennis Academy from
                                    21st-25thNovember 2011.Rotary Mysore, Mysore
                                    RI District 3180 joined us as
                                    co-sponsorer.Tournament was sinaugurated by
                                    International Tennis Player and Ekalavya
                                    AwardeeMiss.PoojashreeVenkatesha. On this
                                    occasion, Nagaraj Tennis Centre [NTC]
                                    felicitated Mr.Venkatesha, father of
                                    Miss.Poojashree, for his outstanding support
                                    to his daughter in becoming a Tennis player
                                    of National &amp; International repute.
                                    Ms.Poojashree is No.2 in the country.
                                    Rtn.S.Mahalingaiah, Director, Skyway
                                    International Travels did the honours and
                                    Rtn.T.K. Chittaranjan, President of Rotary
                                    Mysore was present on this occasion. Prize
                                    Distribution Ceremony held on 25th November
                                    2011 presided by Ms. M.M. Amaravathy,
                                    Managing Director, Skyway International
                                    Travels and Rtn.Chittaranjan, President
                                    Rotary Mysore did the honours.
                                    <b>
                                        The following are the results of the
                                        tournament:-AITA Skyway Talent Series.
                                    </b>
                                    Boys under - 16. Winner - S.D.PrajwalDev
                                    (KAR).Runners up -Sammud Sharma (TN). Boys
                                    under -14. Winner -C.Vasisht (KAR). Runners
                                    up - BabuPranesh (TN). Girls under -16.
                                    Winner - Varunya.C (KAR).Runners up-
                                    SaiAvantika (TN). Girls under - 14. Winner-
                                    SaiAvantika (TN).Runners up - PrernaKalwar
                                    (KAR).
                                    <b>State Ranking: -</b>
                                    Boys under -12. Winner -P.M.Pramukh
                                    (MYS).Runners up M.S.Darshan (MYS). Girls
                                    under - 12. Winner - SanahJaved (B
                                    lore).Runners up - Trupthi (MYS). Children
                                    under 10. Winner -P.Vishal (MYS). Runners up
                                    ShauryaPiplani (DEL)
                                </li>
                                <li>
                                    {' '}
                                    Eagles Golf Cup: Annual Golfing event
                                    organised by friends and well-wishers of our
                                    management in Mysore. Skyway sponsors
                                    T-Shirts and supports the event annually.
                                    Event was conducted during December 2011.
                                </li>
                            </ul>
                            <h3>Music & Arts</h3>
                            <img
                                src={require('../asserts/images/Socialresp.jpg')}
                                alt=''
                            />
                        </div>
                        <div
                            id='pressrelease'
                            style={{
                                padding: '10px',
                                margin: '20px',
                                textAlign: 'center',
                                boxShadow: '1px 1px 15px #ddd',
                            }}
                        >
                            <h3>Press Release</h3>
                            <img
                                src={require('../asserts/images/mountain-callling-02.jpg')}
                                alt=''
                            />
                            <img
                                src={require('../asserts/images/mountain-callling-01.jpg')}
                                alt=''
                            />
                            <h4>
                                Skyway co-sponsorers the Mountain Biking
                                Corporate Challange
                            </h4>
                            <img
                                src={require('../asserts/images/PR1.jpg')}
                                alt=''
                            />
                            <h4>Ms. Poojashree Venkatesh</h4>
                            <img
                                src={require('../asserts/images/PR2.jpg')}
                                alt=''
                            />
                            <h4>Skyway AITA Tennis in News paper</h4>
                            <img
                                src={require('../asserts/images/PR3.jpg')}
                                alt=''
                            />
                            <h4>
                                Skyway Block - Library Inauguration 29th July
                                2011
                            </h4>
                            <img
                                src={require('../asserts/images/PR4.jpg')}
                                alt=''
                            />
                            <h4>
                                Skyway Block Inagraul News in Incredible India
                                Magzine
                            </h4>
                            <img
                                src={require('../asserts/images/PR5.jpg')}
                                alt=''
                            />
                            <h4>Skyway Block Innagruation in Mysore</h4>
                            <img
                                src={require('../asserts/images/PR6.jpg')}
                                alt=''
                            />
                            <h4>Skyway Mysore Marathon Celebration</h4>
                            <img
                                src={require('../asserts/images/PR7.jpg')}
                                alt=''
                            />
                            <h4>Skyway Talent Series Tennis Tournament</h4>
                            <img
                                src={require('../asserts/images/PR8.jpg')}
                                alt=''
                            />
                            <h4>Skyway Tennis</h4>
                            <img
                                src={require('../asserts/images/PR9.jpg')}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
            <EmailSub />
        </div>
    )
}

export default AboutUs
