import PlayStore from "../assets/png/playstore.png"
import { FaApple } from "react-icons/fa"
import styled from "styled-components"
import HeroImage from '../assets/png/hero3.png'
import Cbn from '../assets/png/cbn.png'
import Ndic from '../assets/png/ndic.png'

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <TextBox>
                    <TextWrapper>
                        <h1>The money app for Africans.</h1>
                        <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                        <Buttons>
                            <button> <FaApple size={25}/>
                                <div>
                                    <span>Download on the</span>
                                    <h1>App Store</h1>
                                </div> 
                            </button>
                            <button>
                                <img src={PlayStore} alt="" /> 
                                <div>
                                    <span>GET IT ON</span>
                                    <h1>Google Play</h1>
                                </div> 
                            </button>
                        </Buttons>
                        <SubText>
                            <div>
                                <p>Fully Licensed by the CBN</p>
                                <img src= {Cbn} alt="" />
                            </div>
                            <div>
                                <p>Deposits Insured by</p>
                                <img src={Ndic} alt="" />
                            </div>
                        </SubText>
                    </TextWrapper>
                    
                </TextBox>
                <ImageBox>
                    <img src={HeroImage} alt="Hero" />
                </ImageBox>

            </Wrapper>

        </Container>
    )
}

export default Hero


const Container = styled.div`
max-width: 1280px;
margin-left: auto;
margin-right: auto;
padding: 0px 10px;
min-height: calc(100vh - 58px);
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 85%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}
`
const TextBox = styled.div`
width: 48%;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
}`

const TextWrapper = styled.div`
max-width: 344px;

@media (max-width: 768px) {
    width: 100%;
    text-align: center;
}

h1{
    color: rgb(64, 25, 109);
    font-family: "Mulish", sans-serif;
    font-size: 42px;
    font-weight: 900;
    line-height: 48.3px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 2.5rem;
        line-height: 1.33;
    }
}
p{
    font-family: "Mulish", sans-serif;
    font-size: 17.5px;
    font-weight: 600;
    line-height: 26.25px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
}
`
const Buttons = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 20px;
padding-top: 14px;

@media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
}

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
            font-size: 8px;
            font-weight: 300;
            line-height: 10px;
        }

    }
    img{
        height: 25px
    }
}
button:first-child{
    border-radius: 7px;
    padding: 8px 10px 8px 5px;  
}

@media (max-width: 768px) {
    margin-bottom: 10px;
}
`

const SubText = styled.div`
display: flex;
align-items: center;
gap: 20px;

@media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
}

div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    p{
        color: rgb(90, 99, 105);
        font-family: "Mulish", sans-serif;
        font-size: 10px;
        font-weight: 300;
        line-height: 10px;
        margin: 0px;
    }
    img{
        height: 18px;
    }
}
`

const ImageBox = styled.div`
box-sizing: border-box;
width: 52%;
@media (max-width: 768px) {
    width: 100%;
    max-width: 420px;
}
img{
    width:100%;
    @media (max-width: 768px) {
        width: 100%;
        padding-top: 30px;
    }
}
`

