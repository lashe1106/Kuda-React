// import { Link } from "react-router-dom"
import styled from "styled-components"
import {useState} from "react"
import Brand from "../assets/png/brand.png"
import {IoCloseOutline} from "react-icons/io5"
import {IoMdArrowDropright} from "react-icons/io"
import Personal from "../pages/Personal"

const Sidebar = () => {
    const [sideBar, setSideBar] = useState(true)
    const [closeMenu, setCloseMenu] = useState(false)

    const handleSideBar = () => {
        setSideBar(!sideBar)
    }

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu)
        console.log("closing menu");
        
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Header>
                        <HeaderWrapper>
                            <Logo>
                                <img src= {Brand} alt="" />
                            </Logo>
                            <CloseNav onClick={handleCloseMenu}>
                                <IoCloseOutline size={23} />
                            </CloseNav>
                        </HeaderWrapper>
                    </Header>
                    <Buttons>
                        <SignBtn>Sign In</SignBtn>
                        <JoinBtn>Join Kuda</JoinBtn> 
                    </Buttons>
                    <NavWrapper>
                        <Nav onClick={handleSideBar}>
                            <nav>Personal</nav>
                            <IoMdArrowDropright />
                        </Nav>
                        <Nav onClick={handleSideBar} >
                            <nav>Business</nav>
                            <IoMdArrowDropright />
                        </Nav>
                        <Nav onClick={handleSideBar}>
                            <nav>Company</nav>
                            <IoMdArrowDropright />
                        </Nav>
                        <Nav onClick={handleSideBar}>
                            <nav>Developers</nav>
                        </Nav>
                        <Nav onClick={handleSideBar}>
                            <nav>Contact Us</nav>
                        </Nav>
                        <Nav onClick={handleSideBar}>
                            <nav>Help</nav>
                            <IoMdArrowDropright />
                        </Nav>
                    </NavWrapper>
                </Wrapper>
            </Container>
            {closeMenu === false ? null : <Personal closeMenu = {closeMenu} setCloseMenu = {setCloseMenu}/>}
        </>
        
    )
}

export default Sidebar

const Container = styled.div`
width: 100%;
box-sizing: border-box;
/* border: 1px solid black; */
`

const Wrapper = styled.div`
width: 100%;
/* min-height: calc(100vh - 80px); */
height: 100vh;
/* overflow-x: hidden; */
background-color: white;
z-index: 1000;
position: fixed;
top: 0px;
left: 0px;
align-items: flex-start;
display: flex;
flex-direction: column;
margin-left: auto;`

const Header = styled.div`
/* box-shadow: 0 4px 13px rgba(0, 0, 0, .05); */
/* height: 58px; */
/* left: 0;
position: fixed;
top: 0; */
width: 100%;
/* z-index: 99;
display: flex;
align-items: center;*/
` 

const HeaderWrapper = styled.div`
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
min-width: 100px;
display: flex;
align-items: center;
/* height: 20px; */
img{
    width: 72px;
    /* height: 20px; */
}`

const CloseNav = styled.div`
height: 20px`

const Buttons = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
padding: 20px 20px 0px 20px;
width: 100%;`

const SignBtn = styled.div`
background-color: transparent;
border: none;
outline: none;
font-family: "Mulish", sans-serif;
font-size: 12.25px;
font-weight: 700;
line-height: 12.25px;
color: rgb(64, 25, 109);

/* @media (max-width: 768px) {
    display: none;
}

@media (max-width: 991px) {
    display: none;
} */
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
margin: 0px 25px;

/* @media (max-width: 768px) {
    display: none;
}


@media (max-width: 991px) {
    display: none;
} */
`

const NavWrapper = styled.div`
padding: 20px;
margin-top: 25px;
width: 100%;`

const Nav = styled.div`
box-sizing: border-box;
border-bottom: 1px solid rgba(228, 7%, 87%, .5);
color: rgb(64, 25, 109);
/* display: flex;
justify-content: space-between; */
align-items: center;
padding: 20px 0px;
cursor: pointer;
`