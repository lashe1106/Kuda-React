import styled from 'styled-components'
import {css} from "styled-components"
import {MdArrowDropDown} from 'react-icons/md';
import Brand from "../assets/png/brand.png"
import Flag from "../assets/svg/flag.svg"
import { IoReorderTwoOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5"
// import { IoMdArrowDropright } from "react-icons/io"
import {Link} from "react-router-dom"
// import SideBar from "./SideBar"
import { useState } from 'react';


const Header = () => {
    // const [toggle, setToggle] = useState(false)
    const [sideBar, setSideBar] = useState(false)

    // const handleSetToggle = () => {
    //     setToggle(!toggle) 
    // }

    const toggleSideBar = () => {
        setSideBar(!sideBar) 
    }

    return(
        <>
            <Container $sidebar = {sideBar}>
                <Wrapper $sidebar={sideBar}>
                    <LogoNav>
                        <Logo>
                            <img src= {Brand} alt="" />
                        </Logo>
                        <Nav $sidebar={sideBar}>
                            <Link style={{ textDecoration: "none" }} to="/">
                                <nav>
                                    <span>Personal</span>
                                    <MdArrowDropDown size={20} color='rgb(64, 25, 109)'/>
                                </nav>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/buisness">
                                <nav>
                                    <span>Buisness</span>
                                    <MdArrowDropDown size={20} color='rgb(64, 25, 109)' />
                                </nav>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/company">
                                <nav>
                                    <span>Company</span>
                                    <MdArrowDropDown size={20} color='rgb(64, 25, 109)' />
                                </nav>
                            </Link>
                            <Link style={{textDecoration: "none"}} to="/help">
                                <nav>
                                    <span>Help</span>
                                    <MdArrowDropDown size={20} color='rgb(64, 25, 109)' />
                                </nav>
                            </Link>
                        </Nav>
                    </LogoNav>
                    <Buttons $sidebar={sideBar}>
                        <SignBtn $sidebar={sideBar}>Sign In</SignBtn>
                        <JoinBtn $sidebar={sideBar}>Join Kuda</JoinBtn>
                    </Buttons>
                    <FlagBtn $sidebar={sideBar}>
                        <img src= {Flag} alt="" /> 
                    </FlagBtn>
                    <SideNav onClick={toggleSideBar}>
                        {sideBar === false ? <IoReorderTwoOutline /> : <IoCloseOutline />}
                        
                    </SideNav>
                </Wrapper>
            </Container>
            {/* {toggle === false ? null : <SideBar toggle = {toggle} setToggle = {setToggle} />} */}
        </>
        
    )
}

export default Header

const Container = styled.div`
background-color: white;
height: 58px;
box-shadow: 0 4px 13px rgba(0, 0, 0, .05);
position: fixed;
top: 0px;
left: 0px;
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
z-index: 1000;

${(props) => props.$sidebar && css`
    height: 100vh;
    /* overflow-y: scroll; */
    /* bottom: 0px; */
    align-items: flex-start;
`}
`

const Wrapper = styled.div`
/* border: 1px solid black; */
margin: 0 auto; 
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 0px 60px;

${(props) => props.$sidebar && css`
    /* height: 100vh; */
    /* flex-direction: column; */
    box-sizing: border-box;
    height: 64px;
    padding: 20px;
    width: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

`}

    @media (max-width: 1024px) {
        padding: 0px 40px;
    }

    @media (max-width: 768px) {
        padding: 0px 20px;
    }
`

const LogoNav = styled.div`
display: flex;
align-items: center;`

const Logo = styled.div`
min-width: 100px;
display: flex;
align-items: center;
/* height: 20px; */
img{
    width: 81px;
    /* height: 20px; */
}`

const Nav = styled.div`
display: flex;
margin-left: 8%;
align-items: center;

nav{
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    color: rgb(64, 25, 109);
    margin-right: 42px;
    
    span{
        /* margin-right: 3px; */
        font-family: "Mulish", sans-serif;
        font-size: 12.25px;
        font-weight: 700;
        line-height: 18.375px;
    }
}

@media (max-width: 768px) {
    display: ${(props) => props.$sidebar ? "block" : "none"}
}

@media (max-width: 991px) {
    display: ${(props) => props.$sidebar ? "block" : "none"};
}`

const Buttons = styled.div`
display: flex;
align-items: center;
margin-left: auto;

@media (max-width: 768px) {
    display: none;
}

@media (max-width: 991px) {
    display: none;

    ${(props) => props.$sidebar && css`
        height: 40px;
        display: flex;
        /* justify-content: center; */
        position: fixed;
        top: 64px;
        left: 0px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid black;
    `}
}
`

const SignBtn = styled.div`
background-color: transparent;
border: none;
outline: none;
font-family: "Mulish", sans-serif;
font-size: 12.25px;
font-weight: 700;
line-height: 12.25px;
color: rgb(64, 25, 109);
cursor: pointer;

@media (max-width: 768px) {

    ${(props) => props.$sidebar && css`
        background-color: rgb(223, 227, 255);
        max-width: 115px;
        width: 100%;
        align-items: center;
        display: flex;
        font-size: 13px;
        font-weight: 700;
        justify-content: center;
        line-height: 1;
        padding: 15px;
        margin-right: 1rem;
        border-radius: 10px;
    `}
}

@media (max-width: 991px) {
    
    ${(props) => props.$sidebar && css`
        background-color: rgb(223, 227, 255);
        max-width: 135px;
        width: 100%;
        align-items: center;
        display: flex;
        font-size: 13px;
        font-weight: 700;
        justify-content: center;
        line-height: 1;
        padding: 15px;
        border-radius: 10px;
        margin-right: 1rem;
    `}
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
margin: 0px 25px;
cursor: pointer;

@media (max-width: 768px) {

    ${(props) => props.$sidebar && css`
        max-width: 115px;
        width: 100%;
        font-size: 13px;
        line-height: 1;
        padding: 20px;
        height: 0px;
        margin: 0px;
    `}
}

@media (max-width: 991px) {
    
    ${(props) => props.$sidebar && css`
        max-width: 135px;
        width: 100%;
        font-size: 13px;
        line-height: 1;
        height: 0px;
        padding: 20px;
        margin: 0px;
    `}
}`

const FlagBtn = styled.div`
box-sizing: border-box;
background-color: rgb(178, 219, 202);
outline: none;
border: none;
height: 30px;
width: 30px;
border-radius: 50%;
padding: 5px;
display: ${(props) => props.$sidebar ? "none" : "flex"};
justify-content: center;
align-items: center;
/* margin-right: 50px; */

@media (max-width: 991px) {
    margin-left: auto;
    margin-right: 17px;
}

img{
    width: 100%;
    border-radius: 30%;
    
}`

const SideNav = styled.div`
display: none;
font-size: 30px;

@media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
}

@media (max-width: 991px) {
    display: flex;
    align-items: center;
    cursor: pointer;
}`