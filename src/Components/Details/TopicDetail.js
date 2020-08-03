import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SectionCourses from "../Home/SectionCourses";
import PathList from "../Home/PathList";
import AuthorList from "../Home/AuthorList";
import {ThemeContext} from "../../provider/ThemeProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import api from "../../API/api";
import SearchedCoursesList from "../Search/SearchedCoursesList";

const TopicDetail = (props) => {
    let item=props.route.params.item
    const {theme} = useContext(ThemeContext)
    const [result,setResult]=useState([])
    useEffect(()=>{
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
                setResult(response.data.payload.rows)
            }
        })
    },[])

  return (
      <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
          <SearchedCoursesList navigation={props.navigation} list={result}></SearchedCoursesList>
      </ScrollView>
  )
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    title:{
        marginLeft:5,
        fontWeight:'bold',
        fontSize:20,
    },
});
export default TopicDetail
