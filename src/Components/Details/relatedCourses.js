import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ListCourses from "../ListCourses/ListCourses";
import api from "../../API/api";

const RelatedCourses = (props) => {
    let item=props.route.params.item
    const [result,setResult]=useState([])

    useEffect(()=>{
        api.post('https://api.itedu.me/course/search',{
            keyword: "",
            opt: {
                sort: {
                    attribute: "price",
                    rule: "ASC"
                },
                category: item
                , time: [
                ], price: [
                ]
            },
            limit: 10,
            offset: 1
        }).then((response)=>{
            if(response.isSuccess){
                setResult(response.data.payload.rows)
            }
        })
    },[])




    return (
        <View style={styles.container}>
            <ListCourses navigation={props.navigation} list={result}></ListCourses>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    title:{
        fontSize:20,
        margin:10,
        fontWeight:'bold',
    }
});


export default RelatedCourses
