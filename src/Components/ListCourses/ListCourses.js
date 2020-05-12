import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SectionCoursesItem from "../Home/SectionCoursesItem";
import ListCoursesItem from "./ListCoursesItem";

const ListCourses = (props) => {
    const renderCoursesList =(courses) =>{
        let coursesListArray=[]
        coursesListArray = coursesListArray.concat(courses)
        return coursesListArray.map(item=> <ListCoursesItem item={item}></ListCoursesItem>)
    }
  return (
      <ScrollView>
          {renderCoursesList(props.list)}
      </ScrollView>

  )
};

const styles = StyleSheet.create({

});


export default ListCourses
