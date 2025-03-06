import React, { useEffect, useState } from "react";
import dummy from "../data.json"
import information from "../data.json"
import styled from "styled-components";
import { divProps } from "../inputElement"

interface info {
    id : number
    name : string
    password : number
    complete : boolean
}
interface infomation2 {
    id : number
    name : string
    password : number
}


const Infomation : React.FC = () => {

    const [wordList,setWordList] = useState<info[]>([])
    
    const [infomation2,setinfomation2] = useState<infomation2[]>([])

    const [inputChange, setinputChange] = useState("")
    const [upDateId,setupDateId] = useState("")
    const [toggleDiv, settoggleDiv]  = useState(false)
    const [userId,setUserId] = useState("")
    const [useEffectBool,setuseEffectBool] = useState(false)
    const [useEffectBool2,setuseEffectBool2] = useState(false)

    const [updateText2,setupdateText2] = useState(false)
    const [updatedText, setUpdatedText] = useState<string>("");

    const [updateToggle, setUpdateTollge] = useState(true);
    const onChangeinfomation = (e:React.ChangeEvent<HTMLInputElement>) => {
        setinputChange(e.target.value)
      }
      const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
      }

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setUpdatedText(e.target.value);
      };
      
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


    return(
        <>
        <ul>
            {wordList.map(info =>{
                return(
                <>
                
                {/* <li key={info.id}>{info.name}{info.password}</li> */}

                <div>{info.complete ? (<li key={info.id}>{info.name}{info.password}
                    <div>
                        <UpdateBox2 display={updateToggle} onClick={()=> {
                        // 리렌더링 함으로써 info.complete = false가 페이지에 작동하도록 한다.
                        // setupdateText2(true)
                        setUpdateTollge(false)
                        info.complete = false
                   

               }}>수정2</UpdateBox2>
               
                </div>
                </li>) : 
                (<div><input key={info.id} type="text" value={updatedText} onChange={handleInputChange}></input>
                <button onClick={() =>{
                    // 리렌더링 함으로써 info.complete = false가 페이지에 작동하도록 한다.
                    // setupdateText2(false)
                    setUpdateTollge(true)
                    info.name = updatedText
                    info.complete = true
                    setUpdatedText("")
                }}>수정완료
                </button>
                </div>)}</div>
            
               
                <button onClick={()=> {
                    setWordList(wordList.filter(a => a.id !== info.id));
                    settoggleDiv(false)
                    }}>클릭시 삭제</button>

                <button onClick={()=> {
                    let idName : string= String(info.id)
                        sessionStorage.setItem("number", idName)
                        togleFunction()
                        
                        //wordList.map(info3 => {if(info3.id == Number(idName)){info3.name =""}})
                    }}>수정</button>
                {/* <div>{!updateText ? (<li key={info.id}>{info.name}{info.password}</li>) : (<input key={info.id} type="text" value={updatedText} onChange={handleInputChange}>{info.name}{info.password}</input>)}</div> */}

                

                
                    
                    
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
        <button onClick={()=>{wordList.push({ id: Date.now() , name : inputChange, password :13567, complete:true});
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
const UpdateBox2 = styled.button<divProps>`
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
