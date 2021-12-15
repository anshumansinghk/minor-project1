// import React from "react";
// import Resturent from "./component/Besics/Resturant";
// import Usestate from "./component/hooks/Usestate";
// import Todo from "./component/todoreact/todo"
// import Effect from "./component/hooks/Effect";
// import UseReducer from "./component/hooks/useReducer";
// import Navbar from "./component/Besics/Navbar";
   

// import Temp from "./component/weather/temp";
// import Header from "./component/project/Header";
// import Navbar from "./component/project/reactproject";
// import Howwork from "./component/project/howwork"
// import Aboutus from "./component/project/aboutus";
// import Servises from "./component/project/Servises"
// import Contect from "./component/project/Contect";
// import Footer from "./component/project/footer";
//  import Home from './Home'
// import About from "./pages/about";
// import {Route, Router,Switch } from "react-router"
// import Contact from "./pages/Contact";
// import Service from "./pages/Service";
// import Error from "./pages/Error";
// const App = () => {
//   return(
//     <>
//     <Switch>
//     <Route exact path="/" component={Home}></Route>
//     <Route path="/about" component={About}></Route>
//     <Route path="/contact" component={Contact}></Route>
//     <Route path="/service" component={Service}></Route>
//     <Route component={Error}></Route>
//     </Switch>
    
    
//    </>
//   )
  
// };
// import Temp from "./component/weather/temp"
// import Todoreact from "./component/todoreact/todo"
// import Effect from "./component/hooks/Effect"
// import Usestate from "./component/hooks/Usestate"
// import UseReducer from "./component/hooks/useReducer"
// import { useReducer } from "react"
// import Todo from "./component/todoreact/todo"

import Resturant from "./component/Besics/Resturant";
import {Route, Router,Switch } from "react-router"
import Order from "./component/Besics/order"
import Login from './component/Besics/login';
import Logout from './component/Besics/logout';
// import Damy from "./practis/Damy"
const App = () => {
  return (
    <>
    <Switch>
    <Route exact path="/" component={Resturant}></Route>
      <Route exact path="/Order" component={Order}></Route>
      <Route exact path="/Logout" component={Logout}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/Resturant" component={Resturant}></Route>
    </Switch>
    {/* <Damy/> */}
    {/* <Todo/> */}
    
    </>
  ) 
  
}

export default App;




