import styled from 'styled-components';
import img from '../img/bg.png';
import Questions from '../game/Questions';



export default function Home(){
    return (
        <Background>
            <Div>
                <Questions />
            </Div>
        </Background>
    )
}


const Background = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 70%;
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100vw;
    height: 100vh;

`
const H1 = styled.h1`

`
const Div = styled.div`
    background-color: lightgray;
    width: 55%;
    height: 50%;
    margin: 20px;
    /* background-color: lightgray; */
    border: 2px solid black;
    @media (max-width: 1150px) {
        width: 55%;
        height: 60%;
    }
    @media (max-width: 700px) {
        margin: 10%;
        padding: 10%;
        width: 80%;
        height: 80%;
    }


`