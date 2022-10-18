import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import bg from './assets/bg.jpg'
//ultilizando de css em escopo

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export const Box = styled.div`
 background-image: url(${bg});
 width: 100%;
 height: 100vh;
 background-size:cover;
`

export const Caixa = styled.nav`
 width: 100%;
 height: 11vh;
 display: flex;
 text-transform: uppercase;
 border-bottom: 1px solid #9b7c4f;
 font-family: 'League Gothic', sans-serif;
 font-size: 1.5em;

 img{
    width: 23vw;
    height: 6.7vh;
    margin:20px 0  0 40px;
 }

 ul{
    width: 60vw;
    height: 12vh;
    display:flex;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
    margin-left: auto;

    li :any-link{
        text-decoration-line: none;
        color:#9b7c4f;
        letter-spacing: 3px;

        :hover{
            text-shadow:3px 3px 10px #E5D09A;
            transition: 1s;
        }
    }
 }
 
`
export const Quote = styled.p`
 color: #E5D09A;
 text-shadow: 3px 3px 5px black;
 width: 35vw;
 text-transform: uppercase;
 font-family: 'Allerta', sans-serif;
 text-align: right;
 word-spacing: 0.5em;
 font-size: small;
`;
 export const BoxDois = styled.div`
 width: auto;
 height: 80vh; 
 display: flex;
 justify-content: flex-end;
 align-items: center;
 margin-right: 13%;
 `