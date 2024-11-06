import styled from "styled-components"
import HeroImage from '../assets/png/active-hero-2.png'
import PlayStore from "../assets/png/playstore.png"
import { FaApple } from "react-icons/fa"

const Active = () => {
    return(
        <Container>
            <Wrapper>
                <TextBox>
                    <TextWrapper>
                        <h1>The money app for Africans.</h1>
                        <p>
                            Save, spend, send and invest money across borders.
                        </p>
                    </TextWrapper>
                    <Button>
                        <JoinBtn >Join Kuda</JoinBtn>
                        <button> <FaApple size={25} />
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
                    </Button>
                </TextBox>
                <ImageBox>
                    <div>
                        <img src={HeroImage} alt="Hero" />
                    </div>
                </ImageBox>
            </Wrapper>
        </Container>
    )
}

export default Active

const Container = styled.div`
box-sizing: border-box;
max-width: 1280px;
width: 100%;
margin-left: auto;
margin-right: auto;
padding: 0px 10px;
display: flex;
justify-content: center;
margin-top: 12.5%;
/* border: 1px solid black; */

@media (max-width: 768px) {
    margin-top: 120px;
}`

const Wrapper = styled.div`
width: 85%;
margin-top: -3%;
box-sizing: border-box;
background-color: rgb(239, 241, 255);
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
border: 1px solid hsla(228, 7%, 87%, .5);
border-radius: 5px;
box-shadow: 15px 30px 40px rgba(64, 25, 109, .07);
overflow: hidden;
padding: 60px 88px 76px;
position: relative;

@media (max-width: 1280px) {
    padding-left: 65px;
    padding-right: 65px;
}

@media (max-width: 991px) {
    justify-content: center;
}

@media (max-width: 768px) {
    padding: 35px 20px;
}
`

const TextBox = styled.div`
box-sizing: border-box;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
/* border: 1px solid black; */

@media (max-width: 991px) {
    width: 100%;
    align-items: center;
    text-align: center;
}`

const TextWrapper = styled.div`
box-sizing: border-box;
max-width: 423px;
/* border: 1px solid black; */

@media (max-width: 991px) {
    width: 100%;
}

h1{
    color: rgb(64, 25, 109);
    font-family: "Mulish", sans-serif;
    font-size: 2.2rem;
    line-height: 1.38;
    font-weight: 900;
    margin-bottom: 10px;

    /* @media (max-width: 991px) {
        font-size: 2.5rem;
        line-height: 1.33;
    } */

    @media (max-width: 991px) {
        font-size: 1.7rem;
        /* line-height: 1.33; */
    }
}
p{
    font-family: "Mulish", sans-serif;
    font-size: .95rem;
    line-height: 1.5;
    font-weight: 400;
    /* margin-bottom: 32px; */

    /* @media (max-width: 768px) {
        margin-bottom: 10px;
    } */
}
`

const Button = styled.div`
width: 100%;
max-width: 423px;
/* border: 1px solid black; */

@media (max-width: 991px) {
    display: flex;
    justify-content: center;
    gap: 10px;
} 

button{
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
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
        margin-top: 2rem;
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
}
  
`

const JoinBtn = styled.div`
box-sizing: border-box;
max-width: 152px;
width: 100%;
height: 42px;
margin-top: 2rem;
padding: 15px;
border-radius: 10px;
outline: none;
border: none;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-family: "Mulish", sans-serif;
font-size: 14px;
font-weight: 700;
line-height: 1;
background-color: rgb(64, 25, 109);
/* margin: 0px 25px; */
cursor: pointer;

& + button{
    border-radius: 7px;
    padding: 8px 10px 8px 5px;
 
}

@media (max-width: 768px) {
    display: none;

} 
`

const ImageBox = styled.div`
box-sizing: border-box;
width: 50%;
/* position: absolute;
right: 30px;
top: 10px; */
/* border: 1px solid black; */

@media (max-width: 991px) {
    width: 100%;
    /* max-width: 420px; */
}

div{
    width: 100%;
    /* border: 1px solid black; */
    /* display: flex;
    justify-content: flex-end; */
    /* position: absolute;
    right: 30px;
    top: 10px; */
    img{
        /* border: 1px solid black; */
        height: auto;
        min-width: 435px;
        position: absolute;
        right: 30px;
        bottom: 0px;
        width: 45%;

        @media (max-width: 1280px) {
            min-width: 370px;
        }

        @media (max-width: 991px) {
            display: none;
        }
    }
}

`
