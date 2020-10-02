import React from 'react'
import SimpleBanner from '../simplebanner/simplebanner'
import HolidayClub from '../holidayClub/holidayClub'
import PopularHoliday from '../popularHoliday/popularHoliday'
import { FaQuoteLeft } from 'react-icons/fa'
import BreadcrumComp from '../breadcrum/breadcrum'
import EmailSub from '../emailsub/emailsub'
import Sticky from 'react-sticky-el'

const HappyCustomers = () => {
    return (
        <div>
            <SimpleBanner
                image={require('../asserts/images/ballooners.jpg')}
                name={'Happy Customers'}
            />
            <BreadcrumComp />

            <div className='container-fluid' style={{ margin: '20px 0px' }}>
                <div className='row'>
                    <div className='col-md-9'>
                        <div
                            style={{
                                padding: '20px',
                                boxShadow: '1px 1px 15px #ddd',
                            }}
                        >
                            <h3>
                                A few words from our many happy customers around
                                the world about our service and support
                            </h3>
                            <div className='row'>
                                <div className='col-1'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='col-md-11'>
                                    Here is the feedback from my trip, Asha. I
                                    will just do quick bullet points for you.{' '}
                                    <br />
                                    <br />
                                    1) Whole trip was magnificent. Especially
                                    stunning were the Yakshagana festival, all
                                    the Karnataka monuments are so beautiful and
                                    Ellora, Ajanta. <br />
                                    <br />
                                    Also thank goodness you gave me 500 dollars
                                    in Indian money. I would have been really
                                    stuck and would have had to spend a lot of
                                    time and worry about failed cards and
                                    getting money if you had not helped me with
                                    this. <br />
                                    <br />
                                    Eg Airport exchanges were only giving 85
                                    dollars equals 5000 rupees. I would have had
                                    a much less pleasant holiday if you had not
                                    helped me out with that 500 dollars.
                                    <br />
                                    <br />
                                    2) I was particularly impressed with the way
                                    you gave me all the contact numbers and
                                    vouchers at each stop. This was excellent
                                    and all the drivers were magnificent and all
                                    showed up exactly when needed. This was the
                                    most flawless trip I have ever done for all
                                    the connections being so correct and on
                                    time.
                                    <br />
                                    <br />
                                    Special mention for Ashok from Mysore who is
                                    such a friendly and kind driver and also
                                    himself interested in all the places we
                                    visited, so it was a real pleasure to be
                                    taken around by him....nothing was too much
                                    for him. I couldn't imagine a more suitable
                                    driver for when I went off the normal
                                    tourist routes, such as at the dance center.
                                    Also Akbar the Aurangabad driver was great,
                                    too.
                                    <br />
                                    <br />
                                    <strong>3) Hotels</strong>
                                    <br />
                                    <br />
                                    a) Taj Gateway excellent. This would be my
                                    preferred hotel in central Bangalore I think
                                    in future.
                                    <br />
                                    <br />
                                    b) Panjim Inn superb...loved it.
                                    <br />
                                    <br />
                                    c) Krishna Heritage Hotel in Badami
                                    excellent. Very happy with it...huge
                                    rooms...just would have liked a bit more
                                    choice of menu outside the normal meal
                                    times, by way of a sandwich or snack.
                                    <br />
                                    <br />
                                    d) Bijapur...perfectly fine room. Did not
                                    like the restaurant so much as it is very
                                    male, but I found a lovely coffee shop the
                                    other side of Bijapur to get my meals.
                                    <br />
                                    <br />
                                    e) Royal Orchid Hospet, superb. Really
                                    enjoyed this hotel.
                                    <br />
                                    <br />
                                    f) Grand Magrath. I would prefer not to stay
                                    here again as the hotel has a few smells,
                                    like cigarettes, drains and cockroach
                                    insecticide in the room and restaurant. But
                                    the people working there are so very nice
                                    and especially the restaurant manager who
                                    worked so hard and was always on duty. Also
                                    the location is very good. It is a shame
                                    about the smells in the place.
                                    <br />
                                    <br />
                                    g) Delight Homestay superb, I loved it
                                    there. Also a favourite restaurant had
                                    opened up just 3 doors away from it.
                                    <br />
                                    <br />
                                    h) Mumbai Marine Plaza...very nice room
                                    indeed and superb location, but I found the
                                    amenities there to be a bit annoying. E.g.
                                    the coffee shop was not working, the top
                                    swimming pool area was taken over by a
                                    function, I could not get soft drinks in the
                                    restaurant. The restaurant was fully booked
                                    out due to Valentines Day and I had to fight
                                    hard for a place there. I felt like they
                                    might prefer guests from outside who just
                                    pop in for a meal, or hotel guests who
                                    actually eat outside the hotel!!!
                                    <br />
                                    <br />
                                    i) Aurangabad Taj Vivanta was superb on all
                                    counts.
                                    <br />
                                    <br />
                                    j) Hilton Garden Inn, I love it (just not
                                    many TV channels!!)
                                    <br />
                                    <br />
                                    I think that is about it Asha and thanks
                                    again to you all for arranging this trip. I
                                    hope to use you again in the future for
                                    another trip (less complicated) and will
                                    request Ashok as driver if possible.
                                    <br />
                                    <br />
                                    <em>
                                        <strong>
                                            Very best wishes from Anne
                                        </strong>
                                    </em>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='col-11'>
                                    Our journey across Karnata was a really
                                    wonderful experience and due to Harini's
                                    excellent planning and caring support we had
                                    absolute relaxed holidays. We were very
                                    lucky to have Mohan as our driver, we felt
                                    safe all the time. He was so kind, so caring
                                    and last but least the best driver in the
                                    world. Sometimes we would have appreciated
                                    to get more informations about cultural
                                    issues which was not always easy because of
                                    linguistic limitations. All the hotels were
                                    great except of Sanskruti Resort. We did not
                                    feel welcome there, the staff at the
                                    reception was not friendly at all and the
                                    rooms far from "deluxe". There was no room
                                    service, we had to clean the room and to
                                    make our beds by ourselfs, apart from the
                                    fact that most of the food and drinks
                                    according to the offered list were not
                                    available. The second accommodation we did
                                    not like very much was Club Mahindra in
                                    Madikeri. The very busy "Club" was not what
                                    we would have choosen, but all the staff
                                    there was friendliy and supportive. But as
                                    mentioned before all the other hotels were
                                    perfect and we thank you for organising all
                                    so well. It was a pity that the guide in
                                    Hampi did not provide much information about
                                    this fascinating site. And we are very glad
                                    that we had Mr. Rameesh in Hassan - it was a
                                    great pleasure to listen all his interesting
                                    explanations. That was first-class-guiding!
                                    It was our first journey to India and
                                    hopefully not our last. We think about
                                    coming back an we would highly appreciate to
                                    book via Skyway again. We thank you so much
                                    - you made our journey to India to an
                                    unforgettable and precious memory.
                                    <br />
                                    <br />
                                    <br />
                                    With best regards <br />
                                    <b>Angelika + Franz Feichtner</b>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col-md-1'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='col-md-11'>
                                    Dear Mr Mahalingaiah,
                                    <br />
                                    <br />
                                    We have been very happy by our trip in
                                    Karnatakata. Efficacity and professionalism
                                    of your team in Mysore, who â€“ after end of
                                    your prestations â€“ helped us one more time
                                    by finding a car with driver for the last
                                    day in Bangalore. All was nicely donne, and
                                    I have been very happy with our driver Ashok
                                    during the week of safaris. A plus : we were
                                    able to see three tigers, one leopard, and
                                    many other animals. I would certainly
                                    recommand your team .
                                    <br />
                                    <br />
                                    Sincerely yours,
                                    <br />
                                    <em>
                                        <strong>Mr Marc REITER</strong>
                                    </em>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col-md-1'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='col-md-11'>
                                    Dear Dinesh,
                                    <br />
                                    <br />
                                    We landed in Paris yesterday night, and
                                    thanks to you everything went fine. We have
                                    had a wonderful trip - beautiful hotels
                                    Serai and Windflower-, visited nice places,
                                    travelled through various landscapes, all of
                                    them very different so that we could have an
                                    idea of the beauty of Karnataka.
                                    <br />
                                    <br />
                                    Also I would like you to know how much we
                                    apreciated spending this week with Shekar
                                    which is a skilled driver and a good
                                    companion, discrete, never exhausted and
                                    always happy. We asked him many questions
                                    that he could always answer with a great
                                    knowledge of nature and his country. He was
                                    our chief ! Can you thank him again ? We
                                    have learned this morning that low-lying
                                    coastal districts of Andhra Pradesh were in
                                    the path of a cyclonic storm. All our
                                    thoughts are with you for these hard times
                                    you're going through.
                                    <br />
                                    <br />
                                    I hope we'll meet again one day.
                                    <br />
                                    With all my best regards.
                                    <br />
                                    <em>
                                        <strong>Alix</strong>
                                    </em>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col-md-1'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='col-md-11'>
                                    Dear Mr. Dinesh
                                    <br />
                                    <br />
                                    Many thanks for the excellent service and
                                    the skilled driver hired by you who took it
                                    as a challenge to drop us off right at the
                                    Hotel. Thank you very much for your patience
                                    and support, without which it would not have
                                    been possible. Please let us know the
                                    balance amount payable to Skyway Tours.
                                    <br />
                                    <br />
                                    Look forward to associate with Skyway Tours.
                                    <br />
                                    Thanks and regards,
                                    <br />
                                    <em>
                                        <strong>Nalini Krishnamurthy</strong>
                                    </em>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col-md-1'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='col-md-11'>
                                    Hello Dinesh
                                    <br />
                                    <br />
                                    Just a note to say we made it home safely
                                    from our trip to India and as well as to
                                    thank you and Revathi for organizing a good
                                    sightseeing trip to Hassan, Mysore and Ooty.
                                    We were pleased with the hotel
                                    accommodation, car as well as a good driver
                                    who not only drove us safely, but was a good
                                    tour guide as well. The only person he was
                                    chatty with was my husband! If you have a
                                    survey you want us to fill, we will be happy
                                    to do so.
                                    <br />
                                    <br />
                                    Please do keep in touch. My husband and I
                                    want to visit Thailand and Malaysia, or
                                    Kenya sometime. We would love to do it with
                                    a tour group from India. Let me know if
                                    there is a group going and if possible to
                                    meet up with them there rather than having
                                    to travel to India. Just a thought. Take
                                    care Dinesh and our regards to you and
                                    Revathi.
                                    <br />
                                    <br />
                                    <em>
                                        <strong>Joyce David</strong>
                                    </em>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col-md-1'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='col-md-11'>
                                    Dear Dinesh
                                    <br />
                                    <br />
                                    I have just arrived home from work and
                                    looked closely at the trip itinerary and
                                    hotels that you selected for us. I would
                                    just like to thank you so much on behalf of
                                    my wife and myself for doing an excellent
                                    job of organising what looks like a
                                    fantastic trip with excellent hotels
                                    included, flights and car driver with
                                    transfers etc. I will have no hesitation in
                                    using your services or recommending you in
                                    future and your professionalism for both
                                    this trip and Kabini has been very well
                                    appreciated by us by. The end product of
                                    which will give us both fond memories for
                                    many years to come.
                                    <br />
                                    <br />
                                    I cannot thank you enough. My wife is only
                                    here with me till 4th August and I wanted to
                                    give her a lovely experience. With your
                                    assistance I have achieved this. So thank
                                    you. My wife will return for one week in
                                    October and November and we hope to do some
                                    more trips together then. So I will
                                    definitely be in touch and will advise as
                                    many people as I can at work to use your
                                    services.
                                    <br />
                                    <br />
                                    Thanks Again
                                    <br />
                                    <em>
                                        <strong>Graham Kilby</strong>
                                    </em>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col-md-1'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='col-md-11'>
                                    Dear Mr.Dinesh,
                                    <br />
                                    <br />
                                    Sorry for the delay, but after holidays
                                    there is …work, so I and my hausband have
                                    been for some weeks far from house just for
                                    work. I enclose the Service Tracker and
                                    thank again for your exelent services: we'll
                                    surely reccomend Skyway to our friends and
                                    you can use my name as reference in Italy.
                                    Greetings from Italy also to the driver.
                                    <br />
                                    <br />
                                    With best regards.
                                    <br />
                                    <em>
                                        <strong>
                                            Marisa e Massimo Gerosa, Italy
                                        </strong>
                                    </em>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col-md-1'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='col-md-11'>
                                    Dear Asha and colleagues,
                                    <br />
                                    <br />
                                    Thank you from all of us for a great
                                    experience, and for taking good care of us.
                                    We have all been thrown in to the deep end
                                    of busy work lives again but every now and
                                    then we pause and laugh about something that
                                    happened while we were in India.
                                    <br />
                                    <br />
                                    We appreciate your professional and
                                    efficient service and look forward to
                                    dealing with you in the future.
                                    <br />
                                    <br />
                                    Warmest regards
                                    <br />
                                    <em>
                                        <strong>
                                            Van, Gabi, Heinz and Inge, Ireland
                                        </strong>
                                    </em>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col-md-1'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='col-md-11'>
                                    Dear Asha,
                                    <br />
                                    <br />
                                    We have had a great trip in South India,
                                    thank you for your help. We also would like
                                    to state that Madeu Swamy is a very good
                                    driver, we felt save and were happy to have
                                    him with us. Can you please express our
                                    thanks to him. Enclosed a photo which I
                                    promised to send to Madeu.
                                    <br />
                                    <br />
                                    With warm greetings,
                                    <br />
                                    <em>
                                        <strong>
                                            Haaye and Lili Boonstra, The
                                            Netherlands
                                        </strong>
                                    </em>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <Sticky>
                            <HolidayClub />
                            <PopularHoliday />
                        </Sticky>
                    </div>
                </div>
            </div>
            <EmailSub className={'emailSub'} />
        </div>
    )
}

export default HappyCustomers
