import api from "../API/api";
import axios from "axios";

export const likeCourse = async (item,token)=>{
    api.post('https://api.itedu.me/user/like-course', {
        courseId: item.id
    }, token).then(r =>{})
}
export const logOut = (dispatch)=>()=>{
    dispatch({type:'LOGOUT'})
}
export const login =(dispatch)=> (username, password) =>{
    axios.post('https://api.itedu.me/user/login', {
        email: username,  password:password
    }).then((response)=>{
        if(response.status===200){
            dispatch({type:'LOGIN_SUCCEEDED', data:response.data})
        }
        else{
            dispatch({type:'LOGIN_FAILED'})
        }
    }).catch((error)=>{
        dispatch({type:'LOGIN_FAILED'})
    });
}
export const changeAccountInfo = (dispatch)=>(name,avatar,phone,token)=>{
    api.put('https://api.itedu.me/user/update-profile',{name:name,avatar:avatar,phone:phone},token).then((response)=>{
        console.log('changeInfo',response)
        if(response.isSuccess){
            dispatch({type:'CHANGE_INFO_SUCCEEDED', data:response.data.payload})
        }
        else{
            console.log(response.error)
        }
    })
}
export const changePass = async (authentication,oldPassword,newPassword,setOk,setError)=>{
    api.post('https://api.itedu.me/user/change-password',{id: authentication.state.userInfo.id,
        oldPass: oldPassword,
        newPass: newPassword},authentication.state.token).then((response)=>{
        console.log(response)
        if(response.status===200){
            setOk(true)
        }
        else{
            setError(response.data)
        }
    })
}
export const checkOwnCourse =async (props,token,setState)=>{
    api.get(`https://api.itedu.me/user/check-own-course/${props.item.id}`,{},token)
        .then((response)=>{
            if(response.isSuccess){
                setState(response.data.payload.isUserOwnCourse)
            }})
        .catch((error)=>{console.log('error',error)})
}
export  const getContinueLearning =async (token,setState)=>{
    api.get(`https://api.itedu.me/user/get-process-courses`,{},token).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload)
        }
    })
}
export const getCourseLikeStatus =async(item,token,setState)=>{
    api.get(`https://api.itedu.me/user/get-course-like-status/${item.id}`,{},token)
        .then((response)=>{if(response.isSuccess){
            setState(response.data.likeStatus)
        }})
}
export  const getFavoriteCourses =async (token,setState)=>{
    api.get(`https://api.itedu.me/user/get-favorite-courses`,{},token).then((response)=>{

        if(response.isSuccess){
            setState(response.data.payload)
        }
    })
}
export const getProcess =async(item,token,setState)=> {
    api.get(`https://api.itedu.me/user/process-course/${item.id}`, {}, token)
        .then((response) => {
            if (response.isSuccess) {
                setState(response.data.payload)
            }
        })
}
export const getRecommendCourses =async (userInfo,setState)=>{
    api.get(`https://api.itedu.me/user/recommend-course/${userInfo.id}/10/0`,{},).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload)
        }
    })
}
export const getUserInfo=(token,setUserInfo)=>{
    api.get('https://api.itedu.me/user/me',{},token).then((response)=>{
        console.log('getUserInfo',response)
        if(response.isSuccess){
            setUserInfo(response.data.payload)
        }
        else{
            console.log(response.error)
        }
    })
}
export const resetPass=async (email,props,setError)=>{
    api.post('https://api.itedu.me/user/forget-pass/send-email',{email:email},).then((response)=>{
        if(response.isSuccess){
            props.navigation.navigate("Login")
        }
        else{
            setError(response.error.message)
        }
    })
}

