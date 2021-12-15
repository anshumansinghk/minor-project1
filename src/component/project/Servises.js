import React,{useState} from 'react'
import Servisesapi from "./servisapi"
const Servises = () => {

    const [ServisData,setservis] = useState(Servisesapi)
    return (
        <>
         <section className="service-main-container">
         <div className="conatainer service-container">
         <h1 className="main-heading text-center fw-bold">
         How To Send Money</h1>
        <div className="row">
        {
            Servisesapi.map((curElem)=>{
                const {id,logo,title,info}=curElem
                return (
                    <>
                <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv key={id}">
             <i className={`fontawesome-style ${logo}`}></i>
             <h2 className="sub-heading">{title}</h2>
             <p className="main-hero-para">
             {info}
             </p>
             </div>    
                </>
                )
            })
        }
         

         </div>

         </div>

         </section>
        </>
    )
}

export default Servises
