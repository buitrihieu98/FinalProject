import React from 'react';
import {Text,ScrollView, View, StyleSheet } from 'react-native';
import SectionCoursesItem from "./SectionCoursesItem";
import ListCoursesItem from "../ListCourses/ListCoursesItem";
import SeeAllButton from "../Global/SeeAllButton";
const SectionCourses = (props) => {

    const renderCoursesList =(courses) =>{
        let coursesListArray=[]
        coursesListArray = coursesListArray.concat(courses)
        return coursesListArray.map(item=> <SectionCoursesItem item={item}></SectionCoursesItem>)
    }
  return (
      <View>
          <View style={{justifyContent:'center'}}>
            <Text style={styles.title}>{props.title}</Text>
              <SeeAllButton></SeeAllButton>
          </View>
          <ScrollView horizontal={true}>
            {renderCoursesList(props.coursesList)}
          </ScrollView>
      </View>
  )
};

const styles = StyleSheet.create({
    title:{
        marginLeft:5,
        fontWeight:'bold',
        fontSize:20,
    }

});


export default SectionCourses
