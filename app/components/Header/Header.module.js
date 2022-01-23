import styled from 'styled-components'

export const Navbar = styled.header`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px;
  background: #000;
  color: #fff;
  position: top;
  @media (max-width: 600px){
    padding: 0 20px;
  }
`

export const Title = styled.h1`
  cursor: pointer;
`
export const SubTitle = styled.h2`
  cursor: pointer;
`