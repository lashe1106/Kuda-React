import styled from "styled-components"
import Brand from "../assets/png/brand.png"
import { FaApple } from "react-icons/fa"
import {HiGlobeAlt} from "react-icons/hi2"
import PlayStore from "../assets/png/playstore.png"
import KWhite from "../assets/png/kwhite.png"
import {RiTwitterXLine} from "react-icons/ri"
import { PiInstagramLogoLight } from "react-icons/pi"
import { RiFacebookFill } from "react-icons/ri"
import { AiFillYoutube } from "react-icons/ai"
import { ImLinkedin2 } from "react-icons/im"

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <FooterNav>
                    <LogoNav>
                        <img src= {Brand} alt="" />
                    </LogoNav>
                    <Nav>
                        <p>Personal</p>
                        <p>Discover Personal</p>
                        <p>Transfer & Spend</p>
                        <p>Save</p>
                        <p>Investments</p>
                        <p>Kuda Card</p>
                    </Nav>
                    <Nav>
                        <p>Buisness</p>
                        <p>Discover Buisness</p>
                        <p>Buisness Registration</p>
                        <p>softPOS</p>
                        <p>Invoicing</p>
                        <p>POS Machine</p>
                        <p>Buisness Loan</p>
                        <p>Buisness API</p>
                        <p>Join Kuda Buisness</p>
                    </Nav>
                    <Nav>
                        <p>Company</p>
                        <p>Blog</p>
                        <p>Press</p>
                        <p>Join Our Team</p>
                        <p>About Us</p>
                    </Nav>
                    <Nav>
                        <p>Help</p>
                        <p>Get Help</p>
                        <p>Scam Awareness</p>
                        <p>FAQs</p>
                        <p>Security</p>
                        <p>Contact Us</p>
                        <p>Self Help</p>
                    </Nav>
                    <Nav>
                        <p>Transperency</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Information Securit Policy</p>
                        <p>Cookie Policy</p>
                        <p>Whistleblowing Policy</p>
                    </Nav>
                </FooterNav>
                <FooterBtns>
                    <Buttons>
                        <button> <FaApple size={25} />
                            <div>
                                <span>Download on the</span>
                                <h1>App Store</h1>
                            </div>
                        </button>
                        <button>
                            <img src= {PlayStore} alt="" />
                            <div>
                                <span>GET IT ON</span>
                                <h1>Google Play</h1>
                            </div> 
                        </button>
                        <button>
                            <main>
                                <HiGlobeAlt size={12} />
                            </main>
                            <div>
                                <span>Sign in to   <img src= {KWhite} alt="" /> Kuda.</span>
                                <h1>On The Web</h1>
                            </div> 
                        </button>
                    </Buttons>
                </FooterBtns>
                <FooterText>
                    <p>Products may vary by country or market.</p>
                </FooterText>
                <FooterContact>
                    <Contact>
                        <h1>Contact</h1>
                        <a href="">help@kuda.com</a>
                        <ContactMedia>
                            <Media>
                                <RiTwitterXLine />
                            </Media>
                            <Media>
                                <PiInstagramLogoLight/>
                            </Media>
                            <Media>
                                <RiFacebookFill/>
                            </Media>
                            <Media>
                                <AiFillYoutube/>
                            </Media>
                            <Media>
                                <p>M</p>
                            </Media>
                            <Media>
                                <ImLinkedin2/>
                            </Media>
                        </ContactMedia>
                    </Contact>
                    <Contact>
                        <h1>Lagos</h1>
                        <p>1-11 Commercial Avenue, Yaba,</p>
                        <p>Lagos,</p>
                        <p>Nigeria</p>
                    </Contact>
                    <Contact>
                        <h1>London</h1>
                        <p>5 New Street Square,</p>
                        <p>London, EC4A 3TW,</p>
                        <p>United Kingdom</p>
                    </Contact>
                    <Contact>
                        <h1>Cape Town</h1>
                        <p>146 Campground Road,</p>
                        <p>Snakepit Building, Level 4,</p>
                        <p>Newlands, Cape Town</p>
                    </Contact>
                    <Contact>
                        <h1>Canada</h1>
                        <p>3080 Yonge Street,</p>
                        <p>Suite 6060, Toronto,</p>
                        <p>Ontario M4N 3N1</p>
                    </Contact>
                </FooterContact>
                <FooterInfo>
                    {/* <InfoText>
                        <p>*Kuda Customers get 25 free transfer to other banks every month. Extra transfers to other banks cost ₦10 each.</p>
                        <p>**Kuda account holders can deposit money in over 10,000 branches across Nigeria for free.</p>
                    </InfoText> */}
                    <p>© 2024 Kuda Technologies Ltd (Company No.11472232). All rights reserved.</p>
                    <p>If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975) with registered address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).</p>
                    <p>UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street Square, London, EC4A 3TW, United Kingdom.</p>
                    <p>Canada services will be provided by Kuda Canada Technologies Limited, an Ontario corporation registered under number 1000286176, with its registered address located at 3080 Yonge Street, Suite 6060, Toronto, Ontario M4N 3N1. Kuda Canada Technologies Limited is duly registered with The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a money service business, bearing registration number M23163015.</p>
                </FooterInfo>   
            </Wrapper>
        </Container>
    )
}

export default Footer

const Container = styled.div`
border-top: 1px solid rgba(223, 227, 255, .5);
margin-top: 80px;
margin-bottom: 3rem;
padding-top: 5%;
padding-bottom: 1.5rem;
max-width: 1280px;
margin-left: auto;
margin-right: auto;
display: flex;
/* align-items: center; */
justify-content: center;
`

const Wrapper = styled.div`
width: 85%;
padding: 0px 60px;

@media (max-width: 768px) {
    padding: 0px 20px;
    width: 100%;
}`

const FooterNav = styled.div`
display: flex;
justify-content: space-between;
`

const LogoNav = styled.div`
/* width: 100px; */
height: 24px;
img{
    width: 99px;
    /* height: 20px; */
}`

// const NavWrapper = styled.div`
// display: flex;
// justify-content: space-between;`

const Nav = styled.div`

p{
    font-family: "Mulish", sans-serif;
    font-size: 12.25px;
    font-weight: 400;
    line-height: 15.925px;
    margin-bottom: 20px;

}
p:first-child{
    color: rgb(64, 25, 109);
    font-family: "Mulish", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
}
`

const FooterBtns = styled.div`
margin-bottom: 1.5rem;
padding-bottom: 0.5rem;`

const Buttons = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-top: 4.5rem;
button{
    box-sizing: border-box;
    padding: 8px 10px 8px 10px;
    background-color: black;
    border: none;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    div{
        box-sizing: border-box;
        /* border: 1px solid white; */
        display: flex;
        flex-direction: column;
        align-items: start;
        h1{
            color: white;
            font-family: "Mulish", sans-serif;
            font-size: 16px;
            font-weight: 500;
            margin: 0px;
            line-height: 14px;
        }
        span{
            /* border: 1px solid white; */
            color: white;
            font-family: "Mulish", sans-serif;
            font-size: 8.45px;
            font-weight: 300;
            line-height: 10px;
        }

    }
    img{
        height: 25px;
    }
}
button:first-child{
    border-radius: 7px;
    padding: 8px 10px 8px 5px;
}
button:last-child{
    background-color: rgb(64, 25, 109);
    color: rgb(64, 25, 109);
    padding: 8px 10px 8px 10px;
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(223, 227, 255);
        box-sizing: border-box;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: none;
    }
    h1{
        color: rgb(223, 227, 255);
        font-size: 12.5px;
        /* line-height:  13px; */
    }
    span{
        color: rgb(223, 227, 255);
        display: flex;
        align-items: center;
        word-spacing: 1px;
        img{
            height: 8.45px;
        }
    }
    
}`

const FooterText = styled.div`
p{
    color: rgb(64, 25, 109);
    font-family: "Mulish", sans-serif;
    font-size: .9rem;
    font-style: normal;
    font-weight: 400;
    text-align: center;
}`

const FooterContact = styled.div`
margin: 4.3rem 0px;
display: flex;
justify-content: space-between;
`

const Contact = styled.div`
a{
    color: rgb(64, 25, 109);
    font-family: "Mulish", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    margin-top: 15px;
}
h1{
    color: rgb(64, 25, 109);
    font-family: "Mulish", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    margin-bottom: 15px;
}
p{
    font-family: "Mulish", sans-serif;
    font-size: 12.25px;
    font-weight: 400;
    line-height: 18.375px;
}
`

const ContactMedia = styled.div`
display: flex;
justify-content: center;
margin-top: 23px;`

const Media = styled.div`
height: 31px;
width: 29px;
border-radius: 50%;
color: rgb(64, 25, 109);
border: 1px solid rgb(64, 25, 109);
background-color: rgb(223, 227, 255);
display: flex;
justify-content: center;
align-items: center;
margin-right: 15px;
p{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
}
`

const FooterInfo = styled.div`
p{
    color: rgb(99, 99, 105);
    font-family: "Mulish", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
}`

// const InfoText = styled.div``