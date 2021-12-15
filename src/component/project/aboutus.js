import React,{useState} from 'react'
import howToUseApp from './howtouse'
const Aboutus = () => {
   const [aboutData,setaboutData] = useState(howToUseApp)
    return (
        <>

<section className="common-section our-services">
        <div className="container mb-5">
        <div className="row">
        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
        <img src="./images/onlinepayment.jpg" alt="aboutimage"></img>
        </div>
        <div className="col-12 col-lg-7 our-services-list">
        <h3 className="mini-title">
          --Available @ Google And ios store only
        </h3>
        <h1 className="main-heading">
        How to use the app?

        </h1>
        {
          aboutData.map((curElem)=>{
            const {id,title,info}=curElem
              return (<>
              <div className="row our-services-info" key={id}>
        <div className="col-1 our-services-number">{id}</div>
        <div className="col-10 our-services-data">
        <h2>
          {title} </h2>
          <p className="main-hero-para">
               {info}
          </p>
         </div>
        </div>
              </>
              )
          })
        }
        
        
        <br/>
        <button className="btn-style btn-style-border">Learn More

        </button>

        </div>
        </div>

        </div>

        

        </section>


        <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
        <div className="row">
        
        <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
        <h3 className="mini-title">
          --Available @ Google And ios store only
        </h3>
        <h1 className="main-heading">
        World Class support is
        <br/>
        Available 24/7

        </h1>
        {
          aboutData.map((curElem)=>{
            const {id,title,info}=curElem
              return (<>
              <div className="row our-services-info" key={id}>
        <div className="col-1 our-services-number">{id}</div>
        <div className="col-10 our-services-data">
        <h2>
          {title} </h2>
          <p className="main-hero-para">
               {info}
          </p>
         </div>
        </div>
        
              </>
              )
          })
        }
        
        
        <br/>
        
        <button className="btn-style btn-style-border">Learn More

        </button>
    
        </div>
        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
        <img src="./images/call2.jpg" alt="aboutimage"></img>
        </div>
        </div>
        </div>

        

        

        </section>
        </>
    )
}

export default Aboutus
