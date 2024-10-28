import styled from "styled-components";
import Service from "./Service";
import {IoIosArrowForward} from "react-icons/io";
import Simpler from "../assets/png/simpler.png";
import Manage from "../assets/png/manage.png";
import Save from "../assets/png/save.png";
import Safety from "../assets/png/safety.png";
import Help from "../assets/png/help.png";
import Fees from "../assets/png/fees.png";

const Section = () => {
    return(
        <Container>
            <Service content="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves." text="Open An Account in Minutes" icon={<IoIosArrowForward color="rgb(64, 25, 109)" size={14} />} image= {Simpler} />
            <Service heading= "It’s your money, we just help you manage it." content="Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that." image={Manage} direction="row-reverse" ter= "center" /> 
            <Service heading="Save money as you spend it, seriously." content="You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow." text="See all our Savings" icon={<IoIosArrowForward color="rgb(64, 25, 109)" size={14} />} image={Save} $imagejustify= "center" />
            <Service heading="Turn off access, turn on safety." content="Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try." text="Learn more about Cards" icon={<IoIosArrowForward color="rgb(64, 25, 109)" size={14} />} image={Safety} direction= "row-reverse" />
            <Service heading="We’re always happy to help you." content="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy." text="Get Help" icon={<IoIosArrowForward color="rgb(64, 25, 109)" size={14} />} image={Help} $tify= "center" />
            <Service heading="Fees as clear as glass." content="We’re serious about free banking, and we will never, ever charge you for anything without your consent." text="See all our fees" icon={<IoIosArrowForward color="rgb(64, 25, 109)" size={14} />} image={Fees} direction= "row-reverse" />
        </Container>
    )
}

export default Section

const Container = styled.div``