import styled from "styled-components"
import {useState, useEffect} from "react"


const Company = () => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const fetchBlog = () => {
            fetch("https://jsonplaceholder.typicode.com/comments")
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
                    {
                        blogData.map( (post, index) => {
                            return (
                                <div key={index}>
                                    <h1>{post.name}</h1>
                                    <p>{post.email}</p>
                                    <p>{post.body}</p>
                                </div>
                            )
                        })
                    }
                </Blogs>
            </Wrapper>
        </Container>
    )
}

export default Company

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
// text-align: center;
box-sizing: border-box;
padding: 40px 0px 55px 0px;
margin-top: 58px;
margin-left: auto;
margin-right: auto;
/* overflow-x: hidden; */
`

const Wrapper = styled.div`
width: 85%;
display: flex;
/* align-items: center; */
justify-content: center;`

const TextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
    margin-bottom: 10px;
    color: rgb(64, 25, 109);
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

const Blogs = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 20px;
flex-wrap: wrap;
div{
    box-sizing: border-box;
    background-color: rgb(239, 241, 255);
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    border: 1px solid hsla(228, 7%, 87%, .5);
    border-radius: 10px;
    padding: 20px;
    margin: 0 auto;
    box-shadow: 15px 30px 40px rgba(64, 25, 109, .07);
}
h1{
    // border: 1px solid black;
    color: rgb(64, 25, 109);
    font-family: "Mulish", sans-serif;
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 900;
    margin-bottom: 20px;
}
h1 + p{
    margin-bottom: 10px;
    color: rgb(64, 25, 109);
    font-weight: 700;
}
p{
    // border: 1px solid black;
    font-family: "Mulish", sans-serif;
    font-size: .95rem;
    line-height: 1.5;
    font-weight: 400;
   
}`
