import styled from 'styled-components'

export const Cards = styled.div`
    width: 20vw;
    height: 40vh;
    border-radius: 5px;
    background: green;
    display: flex;
    flex-direction: column;
    margin: 20px 30px;
    @media (max-width: 600px){
        width: 40vw; 
        margin: 10px 20px;
        height: 30vh;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 70%;
`

export const NamePrice = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
    height: 30px;
    border-radius 5px;
    cursor: pointer;
`
