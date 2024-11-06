import styled from 'styled-components'
// import {css} from "styled-components"
import {MdArrowDropDown} from 'react-icons/md';
import Brand from "../assets/png/brand.png"
import Flag from "../assets/svg/flag.svg"
import { IoReorderTwoOutline } from "react-icons/io5";
// import { IoCloseOutline } from "react-icons/io5"
// import { IoMdArrowDropright } from "react-icons/io"
import {Link} from "react-router-dom"
import SideBar from "./SideBar"
import { useState, useEffect } from 'react';


const Header = () => {
    const [sideMenu, setSideMenu] = useState(false)

    const toggleSideMenu = () => {
        setSideMenu(!sideMenu) 
    }

    useEffect(() => {
        if (sideMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return(() => {
            document.body.style.overflow = "auto"
        })
    }, [sideMenu])

    return(
        <>
            <Container>
                <Wrapper>
                    <LogoNav>
                        <Logo>
                            <img src= {Brand} alt="" />
                        </Logo>
                        <Nav>
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
                    <Buttons>
                        <SignBtn>Sign In</SignBtn>
                        <JoinBtn>Join Kuda</JoinBtn>
                    </Buttons>
                    <FlagBtn >
                        <img src= {Flag} alt="" /> 
                    </FlagBtn>
                    <SideNav onClick={toggleSideMenu}>
                        <IoReorderTwoOutline size={30} /> 
                    </SideNav>
                </Wrapper>
            </Container>
            
            {sideMenu  === false ? null : <SideBar toggleSideMenu={toggleSideMenu} />}
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
`

const Wrapper = styled.div`
/* border: 1px solid black; */
margin: 0 auto; 
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 0px 60px;

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
    display: none;
}

@media (max-width: 991px) {
    display: none;
}
`

const Buttons = styled.div`
display: flex;
align-items: center;
margin-left: auto;

@media (max-width: 768px) {
    display: none;
}

@media (max-width: 991px) {
    display: none;
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
`

const FlagBtn = styled.div`
box-sizing: border-box;
background-color: rgb(178, 219, 202);
outline: none;
border: none;
height: 30px;
width: 30px;
border-radius: 50%;
padding: 5px;
display: flex;
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