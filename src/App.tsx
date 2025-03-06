import React, { useState } from 'react';

import NameboxList from "./study"
import InputElement from "./inputElement"
import Infomation from './infomation/infomation';
function App() {
  //props 연습용
  const [name,setname] = useState("???")
  const [address, setAddress] = useState("아는곳")
  const addressChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setname("물음표")
  }
  return (
    <div className="App">
      <NameboxList name ={name} address={address} addressChange={addressChange}/>
      <InputElement/>
      <Infomation/>
    </div>
  );
}

export default App;
