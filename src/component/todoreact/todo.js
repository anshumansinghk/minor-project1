// import React,{ useState,useEffect} from 'react'
 import "./style2.css"
// const getLocalData=()=>{
//     const lists =localStorage.getItem("mytodolist")
//     if(lists){
//         return JSON.parse(lists)
//     }else{
//         return [];
//     }
// }
// const Todo = () => {
//     const [inputdata,setInputData]=useState("")
//     const [items, setItems] = useState(getLocalData())
//     const [isEditItem,setIsEditItem]=useState("")
//     const [toggleButton,setToggleButton]=useState(false)
//     const addItem=()=>{
//         if(!inputdata){
//             alert('Please Fill the data')
//         }else if(inputdata && toggleButton){
//             setItems(
//                 items.map((curElem)=>{
//                         if(curElem.id===isEditItem){
//                         return {...curElem,name:inputdata}
//                         }
//                         return curElem
//                     })
//             )
        
//         setInputData("")
//     setIsEditItem(null)
//     setToggleButton(false)
// }
//         else {
//             const myNewInputData={
//                 id:new Date().getTime().toString(),
//                 name:inputdata,
//             }
//             setItems([...items,myNewInputData])
//             setInputData("");
//         }
//     }
//     const editItem=(index)=>{
//         const item_todo_edited=items.find((curElem)=>{
//             return curElem.id===index
//         })
//         setInputData(item_todo_edited.name)
//     setIsEditItem(index)
//     setToggleButton(true)
//     }
//     // how to delete item
//     const deleteItem=(index)=>{
//         const updatedItem=items.filter((curElem)=>{
//             return curElem.id!==index
//         })
//         setItems(updatedItem)
//     }
//     const removeAll=()=>{
//         setItems([])
//     }
//     useEffect(()=>{
//         localStorage.setItem("mytodolist",JSON.stringify(items))
//     },[items])
//     return (
//         <>
//         <div className="main-div">
//         <div className="child-div">
//             <figure>
//             <img src="../images/todo.jpg" alt="todologo"></img>
//             <br/>
//             <figcaption> Add your List here👌</figcaption>
//             <br/>
//             </figure>
//             <div className="add Items">
//             <input type="text"
//                 placeholder="📄Add Items"
//                 className="form-control"
//                 value={inputdata }
//                 onChange={(event)=>setInputData(event.target.value)}
               
//             />
//             {toggleButton?(<i class="fa fa-edit add-btn" onClick={addItem}></i>):
//             (<i class="fa fa-plus add-btn" onClick={addItem}></i>)}
             
//             </div>
//             <div className="showItems">
//             {
//                 items.map((curElem)=>{
//                     return(
//                         <div className="eachItem" key={curElem.id}>
//                     <h3>{curElem.name}</h3>
//                     <div className="todo-btn">
//                         <i className="far fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
//                         <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
//                     </div>
//                 </div>
//                     )

//                 })
//             }
                
//             </div>
//             <div className="showItems">
//                 <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
//                     <span>CHECK LIST</span>
//                 </button>
//             </div>
//         </div>
//         </div>
            
//         </>
//     )
// }

// export default Todo

import React,{useState,useEffect}from 'react'
const getLocalData=()=>{
    const list=localStorage.getItem("mytodolist");
    if(list){
        return JSON.parse(list)
    }else{
        return [];
    }
}
const Todo = () => {
    const [inputdata,setInputData]=useState("");
    const [items,setItems]=useState(getLocalData());
    const [isEditedItem,setIsEditedItem]=useState("");
    const [toggleButton,setToggleButton]=useState(false);

    const addItem=()=>{
        if(!inputdata){
            alert('pls fill the data')
        }
        else if(inputdata && toggleButton){
            setItems(
                items.map((curElem)=>{
                    if(curElem.id===isEditedItem)
                    {
                        return {
                            ...curElem,name:inputdata
                        }
                    }
                    return curElem;
                })
            )
            setInputData("");
            setIsEditedItem("");
            setToggleButton(false);
        }
        else{
            const myNewInputData={
                id:new Date().getTime().toString(),
                name:inputdata,
            }
            setItems([...items,myNewInputData])
            setInputData("");
        }
    }
    const deleteItem=(index)=>{
        const updatedItem=items.filter((curElem)=>{
                return curElem.id !== index;
        })
        setItems(updatedItem);
    }   
    const removeAll=()=>{
        setItems([]);
    }
    const editItem=(index)=>{
            const item_todo_edited=items.find((curElem)=>{
                    return curElem.id===index;
            })
            setInputData(item_todo_edited.name);
            setIsEditedItem(index);
            setToggleButton(true);
    }

    // adding local storage
    useEffect(() => {
        
        localStorage.setItem("mytodolist",JSON.stringify(items));
    }, [items]);
     return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.jpg" alt="todologo"/>
                        <figcaption>Add your List here👌</figcaption>
                    </figure>
                    <div className="addItems">
                         <input type="text"
                 placeholder="📄Add Items"
                 className="form-control"
                 value={inputdata}
                 onChange={(event)=>setInputData(event.target.value)}
               
                   />{
                       toggleButton?(<i className="fa fa-edit add-btn" onClick={addItem}></i>):
                       (<i className="fa fa-plus add-btn" onClick={addItem}></i>)
                   }
                 
                    </div>
                    <div className="showItems">
                    {
                        items.map((curElem)=>{
                            return (
                            <div className="eachItem" key={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <div className="todo-btn">
                        <i className="fa fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
                        <i className="fa fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                        </div>
                        </div>
                            )
                        })
                    }
                        
                    </div>
                    <div className="showitems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>Check list</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
