import React, { useReducer } from 'react'
import "./style1.css";

const reduser=(state,action)=>{
    if(action.type==="INCR"){
        state=state+1;
    }
    if(state>0 && action.type==="DECR"){
        state=state-1;
    }
    return state;
}

const UseReducer = () => {
    // const initialData=10;
    // const [myNum,setMyNum]=React.useState(initialData)
    const intialData=10;
    const [state, dispatch]=useReducer(reduser,intialData)
    return (
        <>
        <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={()=>dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div class="button2" onClick={()=>dispatch({type:"DECR"})}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
        </div>      
        </div>
        </>
    )
}

export default UseReducer