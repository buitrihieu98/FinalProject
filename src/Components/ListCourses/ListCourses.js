import React from 'react';
import {FlatList, View, StyleSheet, ScrollView} from 'react-native';
import SectionCoursesItem from "../Home/SectionCoursesItem";
import ListCoursesItem from "./ListCoursesItem";

const ListCourses = (props) => {
    // const renderCoursesList =(courses) =>{
    //     let coursesListArray=[]
    //     coursesListArray = coursesListArray.concat(courses)
    //     return coursesListArray.map(item=> <ListCoursesItem item={item}></ListCoursesItem>)
    // }
  return (
      // <ScrollView>
      //     {renderCoursesList(props.list)}
      // </ScrollView>
      <FlatList data={props.list} renderItem={({item, index, separators}) => (<ListCoursesItem item={item}></ListCoursesItem>)}/>
  )
};

const styles = StyleSheet.create({

});


export default ListCourses
