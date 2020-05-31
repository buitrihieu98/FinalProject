export const login = (username,password) =>{
    if(username.toLowerCase()==='hieu'){
        if(password.toLowerCase()==='thao'){
            return {status: 200, userInfo:{username,email:'buitrihieu@gmail.com'}}
        }
        else {
            return {status:404, errorString: 'Wrong password'}
        }
    }
    else
        {
            return {status:404, errorString: 'This username is not existed '}
        }

}
