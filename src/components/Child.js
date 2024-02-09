import React  from "react";

const Child = ({value,setvalue}) =>{
    function Incre(){
        setvalue(!value)
    }
   return(
    <div className="child">
        <h1>Child Component</h1>
        <button onClick={Incre}>Show Model</button>
        {
            value===true && ( <div>
                <h1>Model content</h1>
            <p>This is the model content</p>
            </div>
            )
        
        }
    </div>
   )
}
export default Child;