import styled from 'styled-components'
import {MdArrowDropDown} from 'react-icons/md';
import Brand from "../assets/png/brand.png"
import Flag from "../assets/svg/flag.svg"
import { IoReorderTwoOutline } from "react-icons/io5";
import {Link} from "react-router-dom"

const Header = () => {
    return(
        <Container>
            <LogoNav>
                <Logo>
                    <img src= {Brand} alt="" />
                </Logo>
                <Nav>
                    <Link to="/">
                        <nav>
                            <span>Personal</span>
                            <MdArrowDropDown size={20} color='rgb(64, 25, 109)'/>
                        </nav>
                    </Link>
                    <Link to="/buisness">
                        <nav>
                            <span>Buisness</span>
                            <MdArrowDropDown size={20} color='rgb(64, 25, 109)' />
                        </nav>
                    </Link>
                    <Link to="/company">
                        <nav>
                            <span>Company</span>
                            <MdArrowDropDown size={20} color='rgb(64, 25, 109)' />
                        </nav>
                    </Link>
                    <Link to="/help">
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
                <FlagBtn>
                    <img src= {Flag} alt="" />
                </FlagBtn>
                <SideNav>
                    <IoReorderTwoOutline />
                </SideNav>
            </Buttons>
        </Container>
    )
}

export default Header

const Container = styled.div`
height: 65px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding: 0px 60px;
/* position: fixed;
width: 100%; */

@media (max-width: 1024px) {
    padding: 0px 40px;
}

@media (max-width: 768px) {
    padding: 0px 20px;
}`

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
margin-left: 81px;
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
}`

const Buttons = styled.div`
display: flex;
align-items: center;`

const SignBtn = styled.div`
background-color: transparent;
border: none;
outline: none;
font-family: "Mulish", sans-serif;
font-size: 12.25px;
font-weight: 700;
line-height: 12.25px;
color: rgb(64, 25, 109);

@media (max-width: 768px) {
    display: none;
}`

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

@media (max-width: 768px) {
    display: none;
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
display: flex;
justify-content: center;
align-items: center;
/* margin-right: 50px; */
img{
    width: 100%;
    border-radius: 30%;
    
}`

const SideNav = styled.div`
display: none;
font-size: 30px;
margin-left: 20px;

@media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
}
`