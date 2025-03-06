
import React from "react";

export interface NameBox {
    name : string
    address : string
    addressChange : (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const NameboxList : React.FC<NameBox>= ({name,address,addressChange}) => {
    
    return (<>
    <div>{name}</div>
    <div>{address}</div>
    <button onClick={addressChange}>클릭하면 바뀜</button>
    
    </>)
}


export default NameboxList