import { Link } from "react-router-dom"
import styled from "styled-components"
import KBrand from "../assets/png/brand.png"
import {IoCloseOutline} from "react-icons/io5"
import {IoMdArrowDropright} from "react-icons/io"

const SideBar = ({toggleSideMenu}) => {
    return (
        <Container>
            <Wrapper>
                <Header>
                    <HeaderWrapper>
                        <Logo>
                            <img src= {KBrand} alt="" />
                        </Logo>
                        <CloseNav onClick={toggleSideMenu} >
                            <IoCloseOutline size={30} />
                        </CloseNav>
                    </HeaderWrapper>
                </Header>
                <Buttons>
                    <JoinBtn>Join Kuda</JoinBtn>
                    <SignBtn>Sign In</SignBtn>
                </Buttons>
                <NavWrapper>
                    <Link style={{ textDecoration: "none" }} to="/" onClick={toggleSideMenu}>
                        <Nav>
                            <nav>Personal</nav>
                            <IoMdArrowDropright size={17} />
                        </Nav>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/buisness" onClick={toggleSideMenu}>
                        <Nav>
                            <nav>Business</nav>
                            <IoMdArrowDropright size={17} />
                        </Nav>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/company" onClick={toggleSideMenu}>
                        <Nav>
                            <nav>Company</nav>
                            <IoMdArrowDropright size={17} />
                        </Nav>
                    </Link>
                    <Link style={{ textDecoration: "none" }} >
                        <Nav>
                            <nav>Developers</nav>
                        </Nav>
                    </Link>
                    <Link style={{ textDecoration: "none" }} >
                        <Nav>
                            <nav>Contact Us</nav>
                        </Nav>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/help" onClick={toggleSideMenu}>
                        <Nav>
                            <nav>Help</nav>
                            <IoMdArrowDropright size={17} />
                        </Nav>
                    </Link>
                </NavWrapper>
            </Wrapper>
        </Container>
    )
}

export default SideBar

const Container = styled.div`
display: none;

@media (max-width: 768px) {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    height: 100vh;
    background-color: white;
    z-index: 1000;
    position: fixed;
    top: 0px;
    left: 0px;

}
`

const Wrapper = styled.div`
/* border: 1px solid black; */
width: 100%;
display: flex;
flex-direction: column;
`

const Header = styled.div`
/* border: 1px solid black; */
width: 100%;
` 

const HeaderWrapper = styled.div`
/* border: 1px solid black; */
box-sizing: border-box;
height: 64px;
padding: 20px;
width: 100%;
margin: 0px auto;
display: flex;
align-items: center;
justify-content: space-between;
`

const Logo = styled.div`
/* border: 1px solid black; */
min-width: 100px;
display: flex;
align-items: center;
img{
    width: 72px;
}`

const CloseNav = styled.div`
/* border: 1px solid black; */
display: flex;
align-items: center;
`

const Buttons = styled.div`
/* border: 1px solid black; */
box-sizing: border-box;
display: flex;
align-items: center;
margin-left: auto;
margin-right: auto;
padding: 20px;
width: 100%;`

const SignBtn = styled.div`
box-sizing: border-box;
background-color: transparent;
height: 40px;
width: 100%;
max-width: 115px;
padding: 15px;
border: none;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
font-family: "Mulish", sans-serif;
font-size: 13px;
font-weight: 700;
line-height: 1;
color: rgb(64, 25, 109);
background-color: rgb(223, 227, 255);
cursor: pointer;
`

const JoinBtn = styled.div`
box-sizing: border-box;
background-color: transparent;
height: 40px;
width: 100%;
max-width: 115px;
padding: 15px;
margin-right: 1rem;
border: none;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
font-family: "Mulish", sans-serif;
font-size: 13px;
font-weight: 700;
line-height: 1;
color: #fff;
background-color: rgb(64, 25, 109);
cursor: pointer;
`

const NavWrapper = styled.div`
box-sizing: border-box;
padding: 0px 20px;
margin-top: 25px;
width: 100%;
display: flex;
flex-direction: column;
/* border: 1px solid black; */
`

const Nav = styled.div`
/* border: 1px solid black; */
box-sizing: border-box;
border-bottom: 1px solid hsla(228, 7%, 87%, .5);
;
color: rgb(64, 25, 109);
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0px;
cursor: pointer;

&:last-child{
    border-bottom: none;
}

nav{
    box-sizing: border-box;
    font-family: "Mulish", sans-serif;
    font-size: 16.1px;
    font-weight: 700;
    line-height: 24.15px;
    color: rgb(64, 25, 109);
    cursor: pointer;
}
`