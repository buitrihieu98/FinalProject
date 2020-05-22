import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import SectionCourses from "../Home/SectionCourses";
import PathList from "../Home/PathList";
import AuthorList from "../Home/AuthorList";
import ListCourses from "../ListCourses/ListCourses";

const Download = (props) => {
    //authorList for testing
    const authorCoursesList=[{id:1, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
        {id:2, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
        {id:3, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
        {id:4, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,}]
    const authorList=[
        {id:1,username:'Hai Pham',email:'thisisanemail@gmail.com', avatar:'', authorCoursesList:authorCoursesList},
        {id:2,email:'thisisanemail@gmail.com', username:'Hieu', avatar:'',authorCoursesList:authorCoursesList},
        {id:3,email:'thisisanemail@gmail.com', username:'Nam', avatar:'',authorCoursesList:authorCoursesList},
        {id:4,email:'thisisanemail@gmail.com', username:'Vi', avatar:'',authorCoursesList:authorCoursesList},
        {id:5,email:'thisisanemail@gmail.com', username:'Thy', avatar:'',authorCoursesList:authorCoursesList}]
    //coursesList for testing
    const coursesList=[
        {id:1, title: 'React Native', author: authorList , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
        {id:2, title: 'Java', author: authorList , level:'Beginner', releasedDate: 'July 2019', duration: '50 hours', rating : 5, ratingNumber: 709,},
        {id:3, title: 'Game Development', author: authorList , level:'Beginner', releasedDate: 'Sept 2019', duration: '50 hours', rating : 3, ratingNumber: 1307,}]
    //pathList for testing
    const pathList=[
        {id:1, title: 'React Native',coursesList:coursesList ,coursesNumber:12, progress:80},
        {id:2, title: 'Java',coursesList:coursesList, coursesNumber:25, progress:80},
        {id:3, title: 'PHP',coursesList:coursesList, coursesNumber:12, progress:80},]

    const removeAll=()=>{
        //clear list
    }

  return (
      <View style={styles.container}>
          <View style={styles.subTitleContainer}>
              <TouchableOpacity style={styles.rmAllButton} onPress={removeAll}>
                  <Text style={styles.rmAllText}>Remove all</Text>
              </TouchableOpacity>
          </View>
          <ListCourses navigation={props.navigation} list={coursesList}></ListCourses>
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
        alignItems:'center',
        justifyContent:'center',
        height: 40,
        backgroundColor: 'beige',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
    },
    subTitleContainer:{
        flexDirection:'row',
        height: 40,
        alignItems:'center',
    },
    subTitle:{
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold',
    },
    rmAllButton:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        right: 10,
        width:80,
    },
    rmAllText:{
        fontSize:13,
        color:'blue',

    }
});


export default Download
