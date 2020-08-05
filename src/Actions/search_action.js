import api from "../API/api";

export const search = async(keyword, setState)=>{
    api.post('https://api.itedu.me/course/search',{
        keyword: keyword,
        opt: {
            sort: {
                attribute: "price",
                rule: "ASC"
            },
            category: [
            ], time: [
            ], price: [
            ]
        },
        limit: 10,
        offset: 0
    }).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload.rows)
        }
    })
}
