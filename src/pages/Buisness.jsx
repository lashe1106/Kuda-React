import {useState} from 'react'
import styled from 'styled-components'

const Business = () => {
    const [myNum, setMyNum] = useState(2)

    const increaseNum = () => {
        setMyNum(myNum + 1)
    }

    return(
        <Container>
            <Wrapper>
                <br />
                <br />
                <br />
                <h1>Counter</h1>
                <hr />
                <Holder>
                <button>Subtract</button>
                <h1> {myNum} </h1>
                <button onClick={increaseNum}>Add</button>
                </Holder> 
            </Wrapper>
          
        </Container>
    )
}

export default Business

const Container = styled.div`
    text-align: center;
`

const Wrapper = styled.div``

const Holder = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
button{
    color: white;
    background-color: rgb(64, 25, 109);
    font-family: "Mulish", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    height: 150px;
    width: 150px;
}
`