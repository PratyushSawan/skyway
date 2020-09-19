import React from 'react'
import { Link } from 'react-router-dom'
import footerStyle from './footer.module.css'

let FooterLink = (props) => {
    return (
        <div className={footerStyle.foot_link}>
            {<Link to={props.to}>{props.text}</Link>}
        </div>
    )
}

class Footer extends React.Component {
    render() {
        return (
            <div className={`${footerStyle.footer} block`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className={footerStyle.row_head_txt}>
                                EXPLORE US
                            </div>
                            <FooterLink to={'/aboutus'} text='About us' />
                            <FooterLink to={'/career'} text='Career' />
                            <FooterLink to={'/contact'} text='Contact us' />
                            <FooterLink to={'/faqs'} text="FAQ'S" />
                            <FooterLink to={'/feedback'} text='Feedback' />
                            <FooterLink
                                to={'/happy-customers'}
                                text='Happy Customers'
                            />
                            <FooterLink
                                to={'/hotels'}
                                text='Hotel / Resorts List'
                            />
                            <FooterLink
                                to={'/photoGallery'}
                                text='Photo Gallery'
                            />
                            <FooterLink to={'/pressRelease'} text='Press' />
                            <FooterLink
                                to={'/holiday-club'}
                                text='Skyway Holiday Club'
                            />
                        </div>
                        <div className='col'>
                            <div className={footerStyle.row_head_txt}>
                                INFORMATION
                            </div>
                            <FooterLink
                                to={'/about-india'}
                                text='About India'
                            />
                            <a
                                style={{ color: '#000' }}
                                href='https://blog.skywaytour.com/'
                            >
                                Blog
                            </a>
                            <FooterLink to={''} text='Guide Services' />
                            <FooterLink
                                to={'/roadRoutes'}
                                text='Indian Road Routes'
                            />
                            <FooterLink text='Indian visa requirements' />
                            <FooterLink
                                to={'/things-to-know'}
                                text='Things to know'
                            />
                            <FooterLink text='Travelling from India' />
                            <FooterLink text='Travelling to India' />
                            <FooterLink text='Visit India Information' />
                            <FooterLink text='Weather and rainfall' />
                        </div>

                        <div className='col'>
                            <div className={footerStyle.row_head_txt}>
                                USEFUL LINKS
                            </div>
                            <FooterLink text='Accommodation' />
                            <FooterLink text='Blog' />
                            <FooterLink text='Disclaimer' />
                            <FooterLink text='Download Brochure' />
                            <FooterLink text='Pay Online' />
                            <FooterLink text='Payment Security' />
                            <FooterLink text='Privacy Policy' />
                            <FooterLink text='Refund Policy' />
                            <FooterLink text='Sitemap' />
                            <FooterLink text='Terms & Conditions' />
                            <FooterLink text='User Agreement' />
                        </div>

                        <div className='col'>
                            <div className={footerStyle.row_head_txt}>
                                PARTNER RESORTS
                            </div>
                            <FooterLink text='Bandipur Safari Lodge' />
                            <FooterLink text='Black Buck Resort' />
                            <FooterLink text='Bheemeshwari Adventure & Nature Camp' />
                            <FooterLink text='Devbagh Beach Resort' />
                            <FooterLink text='Dubare Elephant Camp' />
                            <FooterLink text='Galibore Nature Camp' />
                            <FooterLink text='Hampi Heritage & Wilderness Resort' />
                            <FooterLink text='Kabini River Lodge' />
                            <FooterLink text='Kali Adventure Camp' />
                            <FooterLink text='River Tern Lodge' />
                            <FooterLink text='Show more ...' />
                        </div>

                        <div className='col'>
                            <div className={footerStyle.row_head_txt}>
                                DESTINATION
                            </div>
                            <a
                                href='https://www.bangalorecitytour.com'
                                rel='noopener noreferrer'
                                target='_blank'
                                style={{
                                    color: 'black',
                                    marginTop: '5px',
                                }}
                            >
                                Bangalore
                            </a>{' '}
                            <br />
                            <a
                                href='https://www.bandipurnationalpark.in'
                                rel='noopener noreferrer'
                                target='_blank'
                                style={{
                                    color: 'black',
                                    marginTop: '5px',
                                }}
                            >
                                Bandipur National Park
                            </a>{' '}
                            <br />
                            <a
                                href='https://www.coorgtour.com'
                                rel='noopener noreferrer'
                                target='_blank'
                                style={{
                                    color: 'black',
                                    marginTop: '5px',
                                }}
                            >
                                Coorg
                            </a>{' '}
                            <br />
                            <a
                                href='https://www.dandeliwildlife.com'
                                rel='noopener noreferrer'
                                target='_blank'
                                style={{
                                    color: 'black',
                                    marginTop: '5px',
                                }}
                            >
                                Dandeli Wildlife Sanctuary
                            </a>{' '}
                            <br />
                            <a
                                href='https://www.karnatakatravel.com'
                                rel='noopener noreferrer'
                                target='_blank'
                                style={{
                                    color: 'black',
                                    marginTop: '5px',
                                }}
                            >
                                Karnataka
                            </a>{' '}
                            <br />
                            <a
                                href='https://www.mudumalainationalpark.com'
                                rel='noopener noreferrer'
                                target='_blank'
                                style={{
                                    color: 'black',
                                    marginTop: '5px',
                                }}
                            >
                                Mudumalai National Park
                            </a>{' '}
                            <br />
                            <a
                                href='https://www.mysorecitytour.com'
                                rel='noopener noreferrer'
                                target='_blank'
                                style={{
                                    color: 'black',
                                    marginTop: '5px',
                                }}
                            >
                                Mysore
                            </a>{' '}
                            <br />
                            <a
                                href='https://www.nagarahole.com'
                                rel='noopener noreferrer'
                                target='_blank'
                                style={{
                                    color: 'black',
                                    marginTop: '5px',
                                }}
                            >
                                Nagarahole National Park
                            </a>{' '}
                            <br />
                        </div>
                    </div>
                    <div className={footerStyle.footer_line1}>
                        Head Office : Tourism House, #8, Papanna Lane, St. Marks
                        Road, Bangalore - 560 001, Tel: + 91-8884 467467 |
                        blr@skywaytour.com
                    </div>
                    <div className={footerStyle.footer_line2}>
                        Copyright © Skyway International Travels, India 2020
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
