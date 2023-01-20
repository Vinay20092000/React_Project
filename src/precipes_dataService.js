import axios from 'axios';

let dataServiceObj={};

let url="http://localhost:3500/recipes/";

dataServiceObj.getData=function()
{
    return axios.get(url);
}
dataServiceObj.getDatabyID=function(id)
{
    return axios.get(url + id);
}
dataServiceObj.addData=function(productObj)
{
    return axios.post(url,productObj);
}
dataServiceObj.updateData=function(productObj)
{
    return axios.put(url+productObj.id,productObj);
}
dataServiceObj.deleteData=function(id)
{
    return axios.delete(url+id);
}

export default dataServiceObj;