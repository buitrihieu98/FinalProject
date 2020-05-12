import React from 'react';
import {View, StyleSheet,Image, ScrollView, Text} from 'react-native';
import SectionCourses from "./SectionCourses";
import PathList from "./PathList";
import AuthorList from "./AuthorList";
const Home = () => {
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
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>Home</Text>
          </View>
          <ScrollView>
              <SectionCourses coursesList={coursesList} title={'Continue Learning'}></SectionCourses>
              <PathList pathList={pathList} title={'Path'}></PathList>
              <SectionCourses coursesList={coursesList} title={'IT Operation'}></SectionCourses>
              <SectionCourses coursesList={coursesList} title={'Software development'}></SectionCourses>
              <SectionCourses coursesList={coursesList} title={'Data professional'}></SectionCourses>
          </ScrollView>
      </View>

  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'azure',
    },
    titleContainer:{
        flexDirection:'row',
        marginTop:24,
        alignItems:'center',
        justifyContent:'center',
        height: 40,
        backgroundColor: 'beige',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
    },
});


export default Home
