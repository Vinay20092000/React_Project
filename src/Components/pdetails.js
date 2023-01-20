import React from "react";
import { useState,useRef } from "react";
import dataServiceObj from "./precipes_dataService";
import { Link, useParams } from 'react-router-dom';

function Details(props)
{
    
    // const[prodArray,setProductsArray]=useState([]);
    const{id}=useParams();
    const[name,setName]  =useState("");
    const[type,setType]  =useState("");
    const typev=useRef(null);
    const typenv=useRef(null);
    const typeeg=useRef(null);
    const[description,setDescription]= useState("");
    const[ingredients,setIngredients]=useState("");
    const[directions,setDirections]=useState("");
    const[image,setImage]=useState("");

    dataServiceObj.getDatabyID(id).then(resData=>
        {
            let productObj=resData.data;
            setName(productObj.name);
            setType(getRecipeType(productObj.type));
            setDescription(productObj.description);
            setIngredients(productObj.ingredients);
            setDirections(productObj.directions);
            setImage(productObj.image);
            // setProductsArray(resData.data);
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
      function getIngredients(ingredients)
      {
          let svarr = ingredients.split("/");
          let resIngredients=svarr.map(item=><li>{item}</li>);
          return resIngredients;
      }
      function getDirections(directions)
      {
          let varr=directions.split("/");
          let resDirections=varr.map(item=><li>{item}</li>);
          return resDirections;
      }
    

        // let resObj=prodArray.map(item=>
        
        

    return(
        <>
        <div className="resultDiv" style={{marginLeft:"15%"}}>
        <span style={{fontSize:"250%",fontWeight:"600"}}>{name}</span>&nbsp;&nbsp;&nbsp;
        <span>
            { getRecipeType(type) }
        </span>
        <p className="description">{description}</p>
        <img align="middle" style={{height:"400px",width:"400px"}} src={image}/><br/><br/>
        <label style={{fontSize:"200%",fontWeight:"500"}}>Ingredients</label><br/>
        <ol type="1">{getIngredients(ingredients)}</ol>
        <label style={{fontSize:"200%",fontWeight:"500"}}>Directions</label><br/>
        <ol type="1">{getDirections(directions)}</ol>
        <Link style={{textDecoration:"none",color:"grey"}}  to="/">Back to Home</Link>
    </div>
            
        </>
    );
}
export default Details;