import React from 'react';
import {Text,ScrollView, View, StyleSheet } from 'react-native';
import SectionCoursesItem from "./SectionCoursesItem";
import ListCoursesItem from "../ListCourses/ListCoursesItem";
import SeeAllButton from "../Global/SeeAllButton";


const SectionCourses = (props) => {
    //coursesList for testing
    const courses=[
        {
            id:1,
            title: 'React Native',
            author: 'Hai Pham' ,
            level:'Advance',
            releasedDate: 'April 2020',
            duration: '50 hours',
            rating : 4,
        },
        {
            id:2,
            title: 'Java',
            author: 'Hai Pham' ,
            level:'Beginner',
            releasedDate: 'April 2020',
            duration: '50 hours',
            rating : 5,
        },
        {
            id:3,
            title: 'Game Development',
            author: 'ABC' ,
            level:'Beginner',
            releasedDate: 'April 2020',
            duration: '50 hours',
            rating : 3,
        }
    ]

    const renderCoursesList =(courses) =>{
        return courses.map(item=> <SectionCoursesItem item={item}></SectionCoursesItem>)
        //test ListCoursesItem
        //return courses.map(item=> <ListCoursesItem item={item}></ListCoursesItem>)
    }
  return (
      <View>
          <View style={{justifyContent:'center'}}>
            <Text style={styles.title}>{props.title}</Text>
              <SeeAllButton></SeeAllButton>
          </View>
          <ScrollView horizontal={true}>
            {renderCoursesList(courses)}
          </ScrollView>
      </View>
  )
};

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:20,
    }

});


export default SectionCourses
