import api from "../API/api";
export const getProcess =async(item,token,setState)=> {
    api.get(`https://api.itedu.me/user/process-course/${item.id}`, {}, token)
        .then((response) => {
            if (response.isSuccess) {
                setState(response.data.payload)
            }
        })
}
