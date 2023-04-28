// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-size: cover;
  height: 100vh;
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SubContainer = styled.div`
  background-color: #383a4e;
  height: 325px;
  width: 450px;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-weight: 500;
`

export const Para = styled.p`
  color: #edeeff;
  font-family: Roboto;
  font-weight: normal;
  font-size: 15px;
`
export const Input = styled.input`
  background-color: #ffffff;
  outline: none;
  border: 0;
  height: 30px;
  width: 300px;
  margin-top: 30px;
  padding: 10px;
`
export const ErrorPara = styled.p`
  color: #ef4444;
  font-size: 13px;
  font-family: Roboto;
`
