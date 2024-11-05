import styled from "styled-components"

const Service = (props) => {
    return(
        <Container>
            <Wrapper direction={props.direction}>
                <TextBox aligncenter={props.aligncenter}>
                    <TextWrapper>
                        <h1>{props.heading ? (props.heading) : (<>Your phone +<br/>
                        our app +<br />
                        a debit card =<br/>
                        a simpler life.</>)}</h1>
                        <p>{props.content}
                        </p>
                        <GoTo>
                            <a href="">{props.text}</a>
                            {props.icon}
                        </GoTo>
                    </TextWrapper>
                </TextBox>
                <ImageBox>
                    <ImageWrapper $imagejustify={props.$imagejustify}>
                        <img src= {props.image} alt="" />
                    </ImageWrapper>
                </ImageBox>
                
            </Wrapper>
        </Container>
    )
}

export default Service

const Container = styled.div`
max-width: 1280px;
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
display: flex;
flex-direction: ${(props) => props.direction ||"row"};
flex-wrap: wrap;
justify-content: space-between;
align-items: center;

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
width: 45%;
/* border: 1px solid black; */
/* display: flex;
flex-direction: column;
align-items: ${(props) => props.aligncenter || "normal"}; */

@media (max-width: 991px) {
    width: 100%;
}

@media (max-width: 768px) {
    width: 100%;
}`

const TextWrapper = styled.div`
display: flex;
flex-direction: column;

@media (max-width: 991px) {
    align-items: center;
    text-align: center;
}

@media (max-width: 768px) {
    align-items: center;
    text-align: center;
}

h1{
    color: rgb(64, 25, 109);
    font-family: "Mulish", sans-serif;
    font-size: 32px;
    font-weight: 900;
    line-height: 43px;
    margin-bottom: 20px;
    max-width: 420px;
}
p{
    font-family: "Mulish", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    max-width: 350px;
}`

const ImageBox = styled.div`
box-sizing: border-box;
width: 55%;

@media (max-width: 991px) {
    width: 100%;   
}

@media (max-width: 768px) {
    width: 100%;    
}`

const ImageWrapper = styled.div`
width: 100%;
height: 100%;
margin: 0px auto;
outline: none;
/* display: flex;
justify-content: ${(props) => props.$imagejustify || "flex-start"}; */
/* align-items: center; */
/* border: 1px solid black; */
@media (max-width: 991px) {
    width: 100%; 
    display: flex;
    justify-content: center;   
}

@media (max-width: 768px) {
    width: 100%; 
    display: flex;
    justify-content: center;      
}

img{
    max-width: 500px;
    height: auto;
    width: 100%;

    @media (max-width: 768px) {
        width: 100%;
    }
}
`

const GoTo = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
a{
    color: rgb(64, 25, 109);
    font-family: "Mulish", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    margin-right: 5px;
}`