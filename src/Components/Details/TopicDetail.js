import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {ThemeContext} from "../../provider/ThemeProvider";
import SearchedCoursesList from "../Search/SearchedCoursesList";
import {getTopicDetail} from "../../Services/category-service";


const TopicDetail = (props) => {
    let item=props.route.params.item
    const {theme} = useContext(ThemeContext)
    const [result,setResult]=useState([])
    useEffect(()=>{
        getTopicDetail(item, setResult).then(r =>{})
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
