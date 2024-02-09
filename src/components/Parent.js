import React,{useState} from "react";
import Child from "./Child";
const Parent = () =>{
    const [showmodel,setshowmodel] = useState(false)
    return(
        <div>
            <div className="parent">
            <h1>Parent Component</h1>
            </div>
            <Child  value={showmodel}
              setvalue={setshowmodel}/>
        </div>
    )
}
export  default Parent;