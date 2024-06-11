import React, { useEffect, useState } from "react";
import {styled} from "styled-components";


const InputElement : React.FC = ()=> {
    const [userId,setUserId] = useState("")
    const [userPassWord, setUserPassword] = useState("")
    const [toggleDiv, settoggleDiv]  = useState(true)
    
    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
      }
      
    const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
      setUserPassword(e.target.value)
    }
    // 회원가입 창 Toggle 기능 구현
    const togleFunction = () => {
      if(toggleDiv === true) {
        settoggleDiv(false)
      } else {
        settoggleDiv(true)
      }
    }

    useEffect(() => {
        console.log(userId)
        console.log(userPassWord)
      }, [userId, userPassWord])


    return(<>
    <input onChange={onChangeId}></input>
    <input onChange={onChangePassword} ></input>
    <button type="submit" >로그인</button>
    <button type="button" onClick={togleFunction}>회원가입</button>
    <SignupBox display={toggleDiv}>
      <p>회원가입 안녕하세요</p>
      <input></input>
      <input></input>
    </SignupBox>
    </>)
}


export interface divProps {
  display : boolean;
}

const SignupBox = styled.div<divProps>`
display : ${(props) => (props.display ? "block" : "none")}

`

export default InputElement