import styled from "styled-components"
import HeroImage from '../assets/png/active-hero.png'

const Active = () => {
    return(
        <Container>
            <Wrapper>
                <TextBox>
                    <TextWrapper>
                        <h1>The money app for Africans.</h1>
                        <p>
                            Save, spend, send and invest money across borders
                        </p>
                    </TextWrapper>
                    <Button>
                        <JoinBtn >Join Kuda</JoinBtn>
                    </Button>
                </TextBox>
                <ImageBox>
                    <img src={HeroImage} alt="Hero" />
                </ImageBox>
            </Wrapper>
        </Container>
    )
}

export default Active

const Container = styled.div`
max-width: 1280px;
width: 100%;
margin-left: auto;
margin-right: auto;
padding: 0px 10px;
display: flex;
justify-content: center;
/* margin-top: 12.5%; */
border: 1px solid black;

@media (max-width: 768px) {
    margin-top: 120px;
}`

const Wrapper = styled.div`
width: 85%;

box-sizing: border-box;
background-color: rgb(239, 241, 255);
display: flex;
/* flex-direction: ${(props) => props.direction || "row"}; */
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
border: 1px solid hsla(228, 7%, 87%, .5);
border-radius: 5px;
box-shadow: 15px 30px 40px rgba(64, 25, 109, .07);
overflow: hidden;
padding: 60px 88px 76px;

@media (max-width: 991px) {
    flex-direction: column;
    gap: 40px;
}

@media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
}
`

const TextBox = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid black;

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

const Button = styled.div`
display: flex;
align-items: center;
/* margin-left: auto; */

@media (max-width: 768px) {
    display: none;
}

@media (max-width: 991px) {
    display: none;

        /* ${(props) => props.$sidebar && css`
            height: 40px;
            display: flex;
            justify-content: center;
            position: fixed;
            top: 64px;
            left: 0px;
            width: 100%;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid black;
        `} */
}
`

const JoinBtn = styled.div`
width: 136px;
height: 43px;
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
line-height: 14px;
background-color: rgb(64, 25, 109);
/* margin: 0px 25px; */
cursor: pointer;

@media (max-width: 768px) {

    /* ${(props) => props.$sidebar && css`
        max-width: 115px;
        width: 100%;
        font-size: 13px;
        line-height: 1;
        padding: 20px;
        height: 0px;
        margin: 0px;
    `} */
}

@media (max-width: 991px) {
    
    /* ${(props) => props.$sidebar && css`
        max-width: 135px;
        width: 100%;
        font-size: 13px;
        line-height: 1;
        height: 0px;
        padding: 20px;
        margin: 0px;
    `} */
}`

const ImageBox = styled.div`
box-sizing: border-box;
width: 50%;
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
