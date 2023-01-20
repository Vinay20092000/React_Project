import React from "react";
import  ReactDOM  from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import dataServiceObjCredentials from "./pcredentials_data";



function Register()
{
  const[email,setEmail]=useState("");
  const[fullname,setFullname]=useState("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState(""); 
  const [errors, setErrors] = useState({  
    email  :  "",            
    fullname  :  "",            
    username :  "",
    password:""
  }); 
  
  function SignUp_click(event)
  {
    event.preventDefault();
    let tempErrorObj=Object.assign({},errors);
    tempErrorObj.email=(email.length==0)?"*":"";    
    tempErrorObj.fullname=(fullname.length==0)?"*":"";    
    tempErrorObj.username=(username.length==0)?"*":"";    
    tempErrorObj.password=(password.length==0)?"*":"";
    setErrors(tempErrorObj);
    
    let productObj={};
    productObj.email=email;
    productObj.fullname=fullname;
    productObj.username=username;
    productObj.password=password;

    dataServiceObjCredentials.addData(productObj);

    setEmail("");
    setFullname("");
    setUsername("");
    setPassword("");

  }

  return (
    < >
      <fieldset style={{border:"1px solid lightgray",borderRadius:"4px",marginLeft:"35%",marginRight:"35%",marginTop:"3%", textAlign:"center",backgroundColor:"white"}}>
      <img style={{width:"200px"}} src="logo.png"/><br/>
      <p style={{fontSize:"130%"}}>Sign Up to add Recipes.</p>

      <input style={{height:"40px",width:"80%",border:"0.4px solid lightgray",borderRadius:"2px",padding:"10px",backgroundColor:"rgb(243, 245, 250) "}} placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/><span style={{color:"red"}}>{errors.email}</span> <br/>
      
      <input style={{height:"40px",marginTop:"3%" ,width:"80%",border:"0.4px solid lightgray",borderRadius:"2px",padding:"10px",backgroundColor:"rgb(243, 245, 250) "}} placeholder="Full Name" value={fullname} onChange={e=>setFullname(e.target.value)}/><span style={{color:"red"}}>{errors.fullname}</span><br/>

      <input style={{height:"40px",marginTop:"3%" ,width:"80%",border:"0.4px solid lightgray",borderRadius:"2px",padding:"10px",backgroundColor:"rgb(243, 245, 250) "}} placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/><span style={{color:"red"}}>{errors.username}</span><br/>

      <input type="password" style={{height:"40px",marginTop:"3%" ,width:"80%",border:"0.4px solid lightgray",borderRadius:"2px",padding:"10px",backgroundColor:"rgb(243, 245, 250) "}} placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/><span style={{color:"red"}}>{errors.password}</span><br/>

      <p style={{fontSize:"70%",color:"grey",marginLeft:"10%",marginRight:"10%"}}>By signing up, you agree to our <span style={{color:"rgb(47, 109, 175) "}}>Terms</span>, <span style={{color:"rgb(47, 109, 175) "}}>Privacy Policy</span> and <span style={{color:"rgb(47, 109, 175) "}}>Cookies Policy</span>.</p>
      <Link to="/Login" style={{textDecoration:"NONE"}}><input type="button" style={{marginTop:"7%",marginBottom:"7%" ,backgroundColor:"rgb(38, 110, 188)",color:"whitesmoke",border:"0.4px solid lightgray",borderRadius:"2px",height:"33px",width:"80%",fontSize:"100%"}} value="Sign Up" onClick={SignUp_click}/></Link>
      </fieldset>

      <fieldset style={{border:"1px solid lightgray",borderRadius:"4px",marginLeft:"35%",marginRight:"35%",marginTop:"1%", textAlign:"center",backgroundColor:"white"}}>
        <p>
          Have an account?&nbsp;
          <Link to="/Login" style={{color:"rgb(38, 110, 188)",textDecoration:"NONE"}}>Log in</Link> 
        </p>
      </fieldset>

    </>
  );
}

export default  Register;