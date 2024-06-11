import React, { useEffect, useState } from "react";
import dummy from "../data.json"
import styled from "styled-components";
import { divProps } from "../inputElement"
interface info {
    id : number
    name : string
    password : number
}


const Infomation : React.FC = () => {

    const [wordList,setWordList] = useState<info[]>([])
    const [inputChange, setinputChange] = useState("")
    const [upDateId,setupDateId] = useState("")
    const [toggleDiv, settoggleDiv]  = useState(false)
    const [userId,setUserId] = useState("")
    const [useEffectBool,setuseEffectBool] = useState(false)
    const [useEffectBool2,setuseEffectBool2] = useState(false)

    const onChangeinfomation = (e:React.ChangeEvent<HTMLInputElement>) => {
        setinputChange(e.target.value)
      }
      const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
      }
    const Effectfunction = () => {
        setuseEffectBool(!useEffectBool)
    }
    const effectFunction2 = () => {
        setuseEffectBool2(!useEffectBool2)
    }
    useEffect(()=> {
        setWordList(dummy.infomation)
        if(useEffectBool === true) {
            Effectfunction()
        }
        if(useEffectBool2 === true) {
            effectFunction2()
        }
        
    },[])

    const togleFunction = () => {
        if(toggleDiv === false) {
          settoggleDiv(true)
        } else {
          settoggleDiv(false)
        }
      }

    const updateId = () => {

    }
    
    return(
        <>
        <ul>
            {wordList.map(info =>{
                return(
                <>
                
                <li key={info.id}>{info.name}{info.password}</li>
            
                <button onClick={()=> {
                    setWordList(wordList.filter(a => a.id !== info.id));
                    }}>클릭시 삭제</button>

                <button onClick={()=> {
                    let idName : string= String(info.id)
                        sessionStorage.setItem("number", idName)
                        togleFunction()
                        //wordList.map(info3 => {if(info3.id == Number(idName)){info3.name =""}})
                    }}>수정</button>
                    
                    
            </>)
            
            })}
        </ul>
        <UpdateBox display={toggleDiv} onClick={() => {
            let infoId : Number = Number(sessionStorage.getItem("number"))
                        wordList.map(info => {if(info.id === infoId) {
                            info.name = userId;
                            
                        }})
                        Effectfunction();
                        
                    }}>변경</UpdateBox>
                <UpdateIdbox display={toggleDiv} onChange={onChangeId}/>
        <button onClick={()=>{wordList.push({ id: Date.now() , name : inputChange, password :13567});
                console.log(wordList);
                // setinputChange("");
                effectFunction2();
        }}>생성</button>
        <input onChange={onChangeinfomation}></input>
        </>
    )
}

export default  Infomation

const UpdateIdbox = styled.input<divProps>`
    display : ${(props) => (props.display ? "block" : "none")}
`
const UpdateBox = styled.button<divProps>`
    display : ${(props) => (props.display ? "block" : "none")}
`


// const name = "김모씨3"
    // const wordList = dummy.infomation.filter(info => (info.name === name));
    // console.log(wordList)
    //let wordList : dummytype [] = dummy.infomation;

     // useEffect (()=>{
    //     fetch('/path/to/data.json')
    //     .then(response => response.json())
    //     .then(data => setwordList(dummy))
    //     .catch(error => console.error("Error fetching data",error))
    // },[])
