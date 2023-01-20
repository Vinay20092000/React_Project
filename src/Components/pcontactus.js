import React from "react";
import  ReactDOM  from "react-dom";
import { useState } from "react";

function Contact()
{   
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[contact,setContact]=useState("");
    const[message,setMessage]=useState("");

    function submitData_click()
    {
        setName("");
        setEmail("");
        setContact("");
        setMessage("");
    }
  
    return(
    <>
        <div style={{width:"75%",paddingLeft:"15%",paddingTop:"3%",marginLeft:"3px solid black"}}>
        <label className="aboutLabel" style={{}}>Contact Us</label><br/><br/>
        To contact Allrecipes magazine, email feedback@armagazine.com <br/><br/>
        For help with your Allrecipes magazine subscription, visit our online help page, email us at alrcustserv@cdsfulfillment.com, or call 800-837-9017.<br/><br/>
        For digital help with our site, please visit our Help Center.<br/><br/><br/>

        <label className="aboutLabel">Work With Us</label><br/><br/>
        Join our team of enthusiastic editors, designers, programmers, recipe developers, and more as we build out the world's largest food site. ​​View job openings here.<br/><br/><br/>

        <label className="aboutLabel">Write for Us</label><br/><br/>
        Allrecipes is always on the lookout for talented new writers, recipe developers, equipment reviewers, and photographers who love cooking to join our team of contributors. We're currently accepting pitches for recipes, news and trending articles, and features (especially personal essays and food histories). Please submit pitches or inquire about potential assignments by sharing a short bio and your relevant experience in our pitch form.<br/><br/><br/>
        </div><br/>

        <div bp="grid">
          <div style={{paddingLeft:"12%"}}  bp="5">
            <label style={{fontSize:"200%",fontWeight:"400"}}>Contact Us</label><br/><br/>
                <div  bp="grid">
                <div  bp="1">
                <span className="bi bi-geo-alt"></span>
                </div>
                <div  bp="11">
                <span style={{fontSize:"150%",fontWeight:"400"}}>Visit Us</span><br/>
                <span>155, Shah & Nahar Industrial Estate (A1), Dhanraj Mills Compound, Sitaram Jadhav Marg, Lower Parel, Mumbai- 400 013</span><br/><br/>
                </div>
                </div>

                <div bp="grid">
                    <div  bp="1">
                    <span className=" bi bi-envelope"></span>
                    </div>
                    <div  bp="11">
                        <span style={{fontSize:"150%",fontWeight:"400"}} >Email Us</span><br/>
                        <a style={{color:"grey",textDecoration:"none"}} href="mailTo:feedback@armagazine.com "> feedback@armagazine.com </a> <br/>
                        <a style={{color:"grey",textDecoration:"none"}} href="mailTo:alrcustserv@cdsfulfillment.com ">alrcustserv@cdsfulfillment.com</a> <br/><br/>
                    </div>
                </div>

                <div  bp="grid">
                    <div bp="1">
                    <span className="bi bi-telephone"></span>
                    </div>
                    <div  bp="11">
                        <span style={{fontSize:"150%",fontWeight:"400"}}>Call Us</span><br/>
                        <span>+91-800-837-9017.</span>
                    </div>
                </div>


          </div>
          <div style={{paddingLeft:"7%",paddingRight:"10%"}}  bp="7">
            <label style={{fontSize:"200%",fontWeight:"400"}}>Fill the Contact Form</label><br/><br/>
            <form method="get" action="form.php">
              <input value={name} type="text" placeholder="Name" style={{width:"100%",height:"40px",backgroundColor:"whitesmoke",border:"none",borderRadius:"5px"}} required onChange={e=>setName(e.target.value)} autoFocus/><br/><br/>
              <input value={email} type="email" placeholder="Email" style={{width:"100%",height:"40px",backgroundColor:"whitesmoke",border:"none",borderRadius:"5px"}} required onChange={e=>setEmail(e.target.value)}/><br/><br/>
              <input value={contact} type="text" placeholder="Contact" style={{width:"100%",height:"40px",backgroundColor:"whitesmoke",border:"none",borderRadius:"5px"}} required onChange={e=>setContact(e.target.value)}/><br/><br/>
              <input value={message} type="text" placeholder="Message"  style={{width:"100%",height:"40px",backgroundColor:"whitesmoke",border:"none",borderRadius:"5px"}} required onChange={e=>setMessage(e.target.value)}/><br/><br/>
              <button  style={{width:"100px",height:"40px",borderRadius:"10px",border:"1px solid grey"}} type="button" onClick={submitData_click}><label style={{fontSize:"150%"}}>Submit</label></button>
            </form>
          </div>
        </div>
    </>
    )
}



export default Contact;