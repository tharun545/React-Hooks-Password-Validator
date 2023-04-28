// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  SubContainer,
  Heading,
  Para,
  Input,
  ErrorPara,
} from './styledComponents'

const PasswordValidator = () => {
  //   const [isValidPassword, setIsValidPassword] = useState(true)
  const [password, setPassword] = useState('')

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <MainContainer>
      <SubContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your Password</Para>
        <Input type="password" onChange={onChangePassword} value={password} />
        <ErrorPara>
          {password.length >= 8
            ? ''
            : 'Your Password must be at least 8 Characters'}
        </ErrorPara>
      </SubContainer>
    </MainContainer>
  )
}

export default PasswordValidator
