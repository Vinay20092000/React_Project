import './App.css';
import React from 'react';
import {useState,useRef} from "react";
import dataServiceObj from "./Components/precipes_dataService";
import { Link } from 'react-router-dom';

function App() {
  const[prodArray,setProductsArray]=useState([]);
  
      dataServiceObj.getData().then(resData=>
          {
              setProductsArray(resData.data);
          });
  function getRecipeType(type)
    {
        if (type=="Vegetarian")
        {
            return(<img className="typeIcon" src="Rv.png"/>);
        }
        if (type=="Non-Vegetarian")
        {
            return(
            <img className="typeIcon" src="Rn.png"/>);
        }
        if (type=="Eggetarian")
        {
            return(<img className="typeIcon" src="Re.png"/>);
        }
    }

  
  let result=prodArray.map(item=>
    <div className="resultHomeDiv">
        <span style={{fontSize:"150%",fontWeight:"500"}}>{item.name}</span>&nbsp;&nbsp;&nbsp;
        <span>
            { getRecipeType(item.type) }
        </span><br/><br/>
        
        <img align="middle" style={{height:"150px",width:"150px",borderRadius:"10px"}} src={item.image}/><br/><br/>
        <Link style={{textDecoration:"none",color:"grey"}} to={"/Details/"+item.id}>Read More . . .</Link>         
    </div>
  )

  return (
   <div>
   
   <div className='home1stparaDiv' >
        Food, glorious food…The way to a man’s heart is through his stomach…An army marches on its stomach….and there are so many other cliches that all centre around one of life’s necessities – Eating. Here is a collection of Indian food recipes which would bring out the food diversity spread across the entire country. Indian cooking is an amalgation of vegetarian fare from the south, the meaty traditions of the Mughals, the tandoori food from Punjab and the Anglo Indian fusion food of former colonies. Lets explore the Indian cuisine through its recipes.
        <hr></hr>
   </div>
    <div style={{fontSize:"300%",textAlign:"center"}}>The Library</div>
    {result}<br/>
   </div>
  );
}

export default App;
