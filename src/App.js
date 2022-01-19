import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Wrapper from "./components/wrapper.jsx"
import Header from "./components/header.jsx";
import Basket from "./components/basket.jsx";
const App = ()=>{
    return (
        <div className="app">
            <BrowserRouter>
             
                <Header></Header>
                <Routes>
                    <Route exact path="/" element={<Wrapper />}/>
                    
                    <Route path="/basket" element={<Basket />}/>
                       
                   
                </Routes>
               
            </BrowserRouter>
            
        </div>
    )
}
export default App;
