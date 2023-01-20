import React from "react";
import  ReactDOM  from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import dataServiceObjCredentials from "./pcredentials_data";

function Login()
{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[result,setResult]=useState("");

    function login_click()
    {
        
        dataServiceObjCredentials.isvaliduser(username,password).then(resData=>
            {   
                console.log(resData.data);
                if(resData.data.length==1)
                {
                    window.location.replace("/ProdCRUD");
                }
                else
                {
                    setResult("Invalid Username or Password.");
                }
            });        
    }
  
    return(
        <>
            <fieldset style={{border:"1px solid lightgray",borderRadius:"4px",marginLeft:"35%",marginRight:"35%",marginTop:"3%", textAlign:"center",backgroundColor:"white"}}>
                <img style={{width:"200px"}} src="logo.png"/><br/>
                <p style={{fontSize:"130%"}}>Hey Chef, Log in and add some Recipes..</p>
                <input style={{height:"40px",marginTop:"3%" ,width:"80%",border:"0.4px solid lightgray",borderRadius:"2px",padding:"10px",backgroundColor:"rgb(243, 245, 250) "}} placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/><br/>
                <input type="password" style={{height:"40px",marginTop:"3%" ,width:"80%",border:"0.4px solid lightgray",borderRadius:"2px",padding:"10px",backgroundColor:"rgb(243, 245, 250) "}} placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/><br/>
                <input type="button" style={{marginTop:"7%",marginBottom:"7%" ,backgroundColor:"rgb(38, 110, 188)",color:"whitesmoke",border:"0.4px solid lightgray",borderRadius:"2px",height:"33px",width:"80%",fontSize:"100%"}} onClick={login_click} value="Log in"/><br/>
                <div style={{color:"red"}}>{result}</div>
            </fieldset>
            <fieldset style={{border:"1px solid lightgray",borderRadius:"4px",marginLeft:"35%",marginRight:"35%",marginTop:"1%", textAlign:"center",backgroundColor:"white"}}>
                <p>
                    Don't have an account?&nbsp;
                    <Link to="/Register" style={{color:"rgb(38, 110, 188)",textDecoration:"NONE"}}>Sign up</Link> 
                </p>
                <br/>
                
            </fieldset>
        </>
    )
}



export default Login;