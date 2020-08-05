import api from "../API/api";

export const getTopicDetail =async (item,setState)=>{
    api.post('https://api.itedu.me/course/search',{
        keyword: "",
        opt: {
            sort: {
                attribute: "price",
                rule: "ASC"
            },
            category: [item.id
            ], time: [
            ], price: [
            ]
        },
        limit: 10,
        offset: 1
    }).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload.rows)
        }
    })
}
