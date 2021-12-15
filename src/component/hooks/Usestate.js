import React from 'react'
// import "./style1.css";

// const Usestate = () => {
//     const initialData=10;
//     const [myNum,setMyNum]=React.useState(initialData)
//     return (
//         <>
//         <div className="center_div">
//         <p>{myNum}</p>
//         <div class="button2" onClick={()=>setMyNum(myNum+1)}>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//             INCR
//         </div>
//         <div class="button2" onClick={()=>(myNum>0 ?setMyNum(myNum-1):setMyNum(0))}>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         DECR
//         </div>      
//         </div>
//         </>
//     )
// }

// export default Usestate

const Usestate = () => {
    const intialdata=10;
    const [mynum,setmynum]=React.useState(intialdata);
    return (
        <>
        
            <h1>{mynum}</h1>
          <button onClick={()=>setmynum(mynum+1)}>incrm</button>
          <button onClick={()=>mynum>0 ?setmynum(mynum-1):setmynum(0)}>DECR</button>

        </>
    )
}

export default Usestate
