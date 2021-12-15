
import React,{useState} from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from './MenuCard'
const Resturant = () => {
    const [menuData,setMenuData]=useState(Menu)


    const filterItem=(category)=>{
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
        })

        
        setMenuData(updatedList)

    }
    return (
        <>
        <div >
            
            <a className="card-tag subtle" href="/logout">CreateAccount</a>
            <a className="card-tag subtle" href="/login">Login</a>
        </div>
        <nav className="navbar">
            <div className="btn-group">
            
                 <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
                 <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
                 <button className="btn-group__item" onClick={()=>filterItem("evening")}>Evening</button>
                 <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button>
                 <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>
                 
            </div>
        </nav>
    
          <MenuCard  menuData={menuData}/>
        </>
    )
}

export default Resturant