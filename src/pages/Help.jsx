import styled from "styled-components"
import {useState} from "react"

const Help = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")
    const [studentData, setStudentData] = useState([{username, email, bio}])

    const postData = () => {
        setStudentData(...studentData)
    }

    console.log(studentData);
    

    return (
        <Container>
            <Wrapper>
                <TextBox>
                    <h1>Application</h1>
                    <h2>Student Form</h2> 
                </TextBox>
                <FormBox>
                    <form action="" onSubmit={postData}>
                        <div>
                            <label htmlFor="">Name: </label>
                            <input type="text" placeholder="Enter your username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                        </div>
                
                        <div>
                            <label htmlFor="">Email: </label>
                            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        
                        <div>
                            <label htmlFor="">Bio: </label>
                            <textarea type="text" placeholder="Enter your bio" value={bio} onChange={(e) => { setBio(e.target.value) }} />
                        </div>

                        <button>Submit</button>
                    </form>
                </FormBox>
            </Wrapper>
            
        </Container>
    )
}

export default Help

const Container = styled.div`
    text-align: center;
    box-sizing: border-box;
    padding: 40px 0px 55px 0px;
    margin-top: 58px;
    margin-left: auto;
    margin-right: auto;
`

const Wrapper = styled.div``

const TextBox = styled.div`
h1{
    margin-bottom: 20px;
}`

const FormBox = styled.div`
margin-top: 20px;
form{
    display: block;
    div{
        margin-bottom: 20px;
    }

}`


