import axios from 'axios';

let dataServiceObjCredentials={};

let url=" http://localhost:4444/credentials";

dataServiceObjCredentials.isvaliduser=function(username,password)
{
    let newurl=" http://localhost:4444/credentials?username=" + username + "&password=" + password;
    return axios.get(newurl);
}
dataServiceObjCredentials.addData=function(productObj)
{
    return axios.post(url,productObj);
}
 export default dataServiceObjCredentials;