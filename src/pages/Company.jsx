import styled from "styled-components"
import {useState, useEffect} from "react"


const Company = () => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const fetchBlog = () => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(arrive => arrive.json())
                .then(data => {
                    console.log(data)
                    setBlogData(data)
                })
        }
        fetchBlog()

    }, [])

    return (
        <Container>
            <Wrapper>
                <TextWrapper>
                    <h1>Blogs</h1>
                    <p>Check out our blogs</p>
                    <button>Click Here!</button>
                </TextWrapper>
                <Blogs>
                    {blogData}
                </Blogs>
            </Wrapper>
        </Container>
    )
}

export default Company

const Container = styled.div`
text-align: center;
box-sizing: border-box;
padding: 40px 0px 55px 0px;
margin-top: 58px;
margin-left: auto;
margin-right: auto;
`

const Wrapper = styled.div``

const TextWrapper = styled.div`
h1{
    margin-bottom: 10px;
}
p{
    margin-bottom: 20px;
}
button{
    background-color: rgb(64, 25, 109);
    color: white;
    padding: 15px;
    border: none;
    border-radius: 8px;
}
`

const Blogs = styled.div``
