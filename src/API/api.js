import axios from "axios";

class BaseApi{
    baseMethod = async(method, pathName, body, authorizationToken) =>{
        const headers = authorizationToken?{Authorization: `Bearer ${authorizationToken}`}:null
        return axios({
            method,
            url:pathName,
            data:body,
            headers
        })
            .then((response)=>{
                if(response.status===200){
                     return {isSuccess: true, data:response.data, status:response.status}
                }
                else{console.log('faileddddd',response.status)}
            })
            .catch((error)=>{
                 return{isSuccess: false, error:error.response.data}
            })
    }
    get=(pathName,body=undefined,token=undefined)=>
        this.baseMethod('GET',pathName,body,token)
    post=(pathName,body=undefined,token=undefined)=>
        this.baseMethod('POST',pathName,body,token)
    put=(pathName,body=undefined,token=undefined)=>
        this.baseMethod('PUT',pathName,body,token)
    patch=(pathName,body=undefined,token=undefined)=>
        this.baseMethod('PATCH',pathName,body,token)
    delete=(pathName,body=undefined,token=undefined)=>
        this.baseMethod('DELETE',pathName,body,token)
}

const api=new BaseApi()

export default api
