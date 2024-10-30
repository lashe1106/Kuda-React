import styled from "styled-components"
import Hero from "../components/Hero"
import Info from "../components/Info"
import Section from "../components/Section"

const Personal = () => {
    return (
        <Container>  
            <Hero />
            <Info />
            <Section />
        </Container>
    )
}

export default Personal

const Container = styled.div`
box-sizing: border-box;
padding: 40px 0px 55px 0px;
margin-top: 58px;
margin-left: auto;
margin-right: auto;

@media (max-width: 768px) {
    padding-top: 70px;
}
`
