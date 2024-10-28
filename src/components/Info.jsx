import styled from "styled-components"
import {IoMdCard} from  "react-icons/io";
import {BiPieChartAlt} from "react-icons/bi";
import {ImTree} from "react-icons/im";
import {FaPiggyBank} from "react-icons/fa";
import {IoIosSend} from "react-icons/io";

const Info = () => {
    const cardArray = [
        {
            icon: <IoMdCard color="rgb(64, 25, 109)"/>,
            info: "Order a Kuda card on the app with pickup and delivery options."
        },
        {
            icon: <BiPieChartAlt color="rgb(64, 25, 109)"/>,
            info: "Enjoy cashless payment options online and offline."
        },
        {
            icon: <ImTree color="rgb(64, 25, 109)"/>,
            info: "Pay your essential bills and buy gift cards easily."
        }
    ]

    const subCardArray = [
        {
            icon: <IoIosSend color="rgb(64, 25, 109)"/>,
            info: "Get 25 free transfers to Nigerian banks every month."
        },
        {
            icon: <FaPiggyBank color="rgb(64, 25, 109)"/>,
            info: "Save money automatically any time you spend."
        }
    ]

    return(
        <Container>
            <Wrapper>
                <InfoTop>
                    {cardArray.map((card, i) => (
                        <InfoCard key={i}>
                            <Icon>
                            {card.icon}
                            </Icon>
                            <p>{card.info}</p>
                        </InfoCard>
                    ))}
                </InfoTop>
                
                <InfoBottom>
                    {subCardArray.map((card, i) => (
                        <InfoCard key={i}>
                            <Icon>
                                {card.icon}
                            </Icon>
                            <p>{card.info}</p>
                        </InfoCard>
                    ))}
                </InfoBottom>
            </Wrapper>
        </Container>
    )
}

export default Info

const Container = styled.div`
box-sizing: border-box;
padding: 0px, 10px;
max-width: 1280px;
margin-right: auto;
margin-left: auto;
margin-top: 50px;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 85%;
`

const InfoTop = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
div{
    margin-bottom: 20px;
}
`

const InfoBottom = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-top: 20px;

@media (max-width: 768px) {
    flex-wrap: wrap;
}
`

const InfoCard = styled.div`
box-sizing: border-box;
background-color: white;
padding: 22px 25px;
border: none;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 25px 0px;
width: calc(33.3% - 13px) ;
p{
    color: rgb(64, 25, 109);
    font-family: "Mulish", sans-serif;
    font-size: 13.65px;
    font-weight: 900;
    line-height: 20.475px;
    /* border: 1px solid black; */
}

@media (max-width: 768px) {
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    p{
        margin-left: 18px;
        font-size: 0.975rem;
        line-height: 1.5; 
    }
}`

const Icon = styled.div`
box-sizing: border-box;
background-color: rgb(223, 227, 255);
width: 30px;
height: 30px;
border-radius: 50%;
margin-bottom: 12px;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
    box-sizing: border-box;
    width: 37px;
    height: 40px;
    margin-bottom: 0px;
}`