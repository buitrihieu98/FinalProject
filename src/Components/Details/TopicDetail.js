import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SectionCourses from "../Home/SectionCourses";
import PathList from "../Home/PathList";
import AuthorList from "../Home/AuthorList";

const TopicDetail = () => {
    //authorList for testing
    const authorList=[{id:1, username:'Hai Pham', avatar:''}, {id:2, username:'Hieu', avatar:''}, {id:3, username:'Nam', avatar:''},
        {id:4, username:'Vi', avatar:''}, {id:5, username:'Thao', avatar:''}, {id:6, username:'Thy', avatar:''},]
    //coursesList for testing
    const coursesList=[
        {id:1, title: 'React Native', author: 'Hai Pham' , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
        {id:2, title: 'Java', author: 'Hai Pham' , level:'Beginner', releasedDate: 'July 2019', duration: '50 hours', rating : 5, ratingNumber: 709,},
        {id:3, title: 'Game Development', author: 'ABC' , level:'Beginner', releasedDate: 'Sept 2019', duration: '50 hours', rating : 3, ratingNumber: 1307,}]
    //pathList for testing
    const pathList=[
        {id:1, title: 'React Native', coursesNumber:12},
        {id:2, title: 'Java', coursesNumber:25},
        {id:3, title: 'PHP', coursesNumber:12},]
  return (
      <ScrollView style={styles.container}>
          <PathList list={pathList} title={'Path'}></PathList>
          <SectionCourses list={coursesList} title={'IT Operation'}></SectionCourses>
          <SectionCourses list={coursesList} title={'Software development'}></SectionCourses>
          <SectionCourses list={coursesList} title={'Data professional'}></SectionCourses>
          <AuthorList list={authorList}></AuthorList>
      </ScrollView>
  )
};


const styles = StyleSheet.create({
    container:{
        backgroundColor:'azure',
        marginTop:24,
    }
});


export default TopicDetail
