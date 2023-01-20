import {useState,useRef} from "react";
import dataServiceObj from "./precipes_dataService";


function ProdCRUD()
{
    const[prodArray,setProductsArray]=useState([]);
    const[id,setId]      =useState("");
    const[name,setName]  =useState("");
    const[type,setType]  =useState("");
    const typev=useRef(null);
    const typenv=useRef(null);
    const typeeg=useRef(null);
    const[description,setDescription]= useState("");
    const[ingredients,setIngredients]=useState("");
    const[directions,setDirections]=useState("");
    const[image,setImage]=useState("");

    const [errors, setErrors] = useState({  
        id  :  "",            
        name  :  "",            
        description :  "",
        ingredients:"",
        directions:"",
        image:""
    });

    function getData_click()
    {
        dataServiceObj.getData().then(resData=>
            {
                setProductsArray(resData.data);
            });
    }
    function addData_click()
    {
        let productObj={};
        productObj.id=id;
        productObj.name=name;
        productObj.type=type;
        productObj.description=description;
        productObj.ingredients=ingredients;
        productObj.directions=directions;
        productObj.image=image;

        dataServiceObj.addData(productObj).then(resData=>
            {
                getData_click();
            });
        setId("");
        setName("");
        typev.current.checked=false;
        typenv.current.checked=false;
        typeeg.current.checked=false;
        setDescription("");
        setDirections("");
        setImage("");
        setIngredients("");
    }
    function deleteData_click(id)
    {
        dataServiceObj.deleteData(id).then(resData=>
            {
                getData_click();
            });
    }
    function selectData_click(id)
    {
        dataServiceObj.getDatabyID(id).then(resData=>
            {
                let productObj=resData.data;
                setId(productObj.id);
                setName(productObj.name);
                setType(productObj.type);
                setDescription(productObj.description);
                setIngredients(productObj.ingredients);
                setDirections(productObj.directions);
                setImage(productObj.image);
            });
    }
    function updateData_click(event)
    {
        event.preventDefault();
        let tempErrorObj=Object.assign({},errors);
        tempErrorObj.id=(id.length==0)?"ID is required.":"";
        tempErrorObj.name=(name.length==0)?"Name is required.":"";
        tempErrorObj.description=(description.length==0)?"Description is required.":"";
        tempErrorObj.ingredients=(ingredients.length==0)?"Ingredients is required.":"";
        tempErrorObj.directions=(directions.length==0)?"Directions is required.":"";
        tempErrorObj.image=(image.length==0)?"Image Source is required.":"";
        setErrors(tempErrorObj);

        let productObj={};
        productObj.id=id;
        productObj.name=name;
        productObj.type=type;
        productObj.description=description;
        productObj.ingredients=ingredients;
        productObj.directions=directions;
        productObj.image=image;


        dataServiceObj.updateData(productObj).then(resData=>
            {
                getData_click();
                typev.current.checked=false;
                typenv.current.checked=false;
                typeeg.current.checked=false;
            });
        
        setId("");
        setName("");
        setDescription("");
        setDirections("");
        setImage("");
        setIngredients("");
    }
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

    let result=prodArray.map(item=>
        <div className="resultDiv">
            <span style={{fontSize:"250%",fontWeight:"600"}}>{item.name}</span>&nbsp;&nbsp;&nbsp;
            <span>
                { getRecipeType(item.type) }
            </span>
            <p className="description">{item.description}</p>
            <img align="middle" style={{height:"400px",width:"400px"}} src={item.image}/><br/><br/>
            <label style={{fontSize:"200%",fontWeight:"500"}}>Ingredients</label><br/>
            <ol type="1">{getIngredients(item.ingredients)}</ol>
            <label style={{fontSize:"200%",fontWeight:"500"}}>Directions</label><br/>
            <ol type="1">{getDirections(item.directions)}</ol>
            
            <p align="center" >
                <a style={{color:"black",textDecoration:"none"}} href="javascript:void(0);" onClick={ ()=>
                {
                    const confirmBox = window.confirm("Do you really want to delete this Crumb?")
                    if (confirmBox === true) 
                    {
                        deleteData_click(item.id)
                    }
                }}>Delete</a>&nbsp;| 
                 &nbsp;<a style={{color:"black",textDecoration:"none"}} href="#cruddiv" onClick={()=>selectData_click(item.id)}>Select</a>
            </p>
        </div>
    );

    return(
        <div >
            {/* input area */}
            
            <div className="container" bp="grid" style={{width:"100%"}}  >
                <img style={{position:"absolute",zIndex:"-1",width:"100%",height:"100%"}} src="productsBG.png"/>
            
            <label style={{marginTop:"50px" }} className="label" bp="2" id="cruddiv">ID :</label><input bp="9" style={{height:"40px",marginTop:"50px"}}  autoFocus className="input" placeholder="ID" value={id} onChange={e=>setId(e.target.value)}/><span className="error">{errors.id}</span>
            
            
            <label className="label" bp="2">Name :</label><input bp="9" style={{height:"40px"}}  className="input" placeholder="Name" value={name}   onChange={e=>setName(e.target.value)}/><span className="error">{errors.name}</span>
           
            <label className="label" bp="2">Type :</label>
            <div bp="9">
            <input type="radio" className="radio" name="radio" value="Vegetarian" ref={typev} checked={type=="Vegetarian"}  onClick={e=>setType(e.target.value)}/>Vegetarian
            <input type="radio" className="radio" name="radio" value="Non-Vegetarian" ref={typenv} checked={type=="Non-Vegetarian"} onClick={e=>setType(e.target.value)}/>Non-Vegetarian
            <input type="radio" className="radio" name="radio" value="Eggetarian" ref={typeeg} checked={type=="Eggetarian"} onClick={e=>setType(e.target.value)}/>Eggetarian
            </div>

            <label className="label" bp="2"> Description : </label> <textarea bp="9"  className="input" 
            style={{width:"100%",height:"80px"}} placeholder="Description" value={description}  onChange={e=>setDescription(e.target.value)}/><span className="error">{errors.description}</span>

            <label className="label" bp="2"> Ingredients : </label> <textarea bp="9" className="input" style={{width:"100%",height:"80px"}} placeholder="Ingredients" value={ingredients} 
             onChange={e=>setIngredients(e.target.value)}/><span className="error">{errors.ingredients}</span>

            <label className="label" bp="2"> Directions : </label> <textarea bp="9" className="input" style={{width:"100%",height:"80px"}} placeholder="Directions" value={directions} 
             onChange={e=>setDirections(e.target.value)}/><span className="error">{errors.directions}</span>

            <label className="label" bp="2">Image Source :</label><textarea bp="9"  className="input" style={{width:"100%",height:"40px"}}  placeholder="Image Source" value={image} 
             onChange={e=>setImage(e.target.value)}/><span className="error">{errors.image}</span>
            </div><br/><br/><br/>
            <div style={{paddingLeft:"2%"}}>
                <strong>Note : </strong><span>Use "/" for separating the Ingredients or steps in Directions. Avoid "/" if already present in Ingredients or Directions.</span>
            </div>
            <br/><br/><br/>
            <div className="btn-group">
            <a href="#result"><input type="button" style={{backgroundColor:"Green"}} className="button" value="Get Data" onClick={getData_click}/></a>
            <a href="#result"><input type="button" style={{backgroundColor:"Yellow"}} className="button" value="Add Data" onClick={addData_click} /></a>
            <a href="#result"><input type="button" style={{backgroundColor:"orange"}} className="button" value="Update Data" onClick={updateData_click} /></a> 
            </div>

            <br/><br/><br/><br/>
        
                {result}        
        </div>
    )
}

export default ProdCRUD;