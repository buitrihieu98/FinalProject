import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import SectionCourses from "../Home/SectionCourses";
import PathList from "../Home/PathList";
import AuthorList from "../Home/AuthorList";
import ListCourses from "../ListCourses/ListCourses";

const Download = () => {
    //coursesList for testing
    const coursesList=[
        {
            id:1,
            title: 'React Native',
            author: 'Hai Pham' ,
            level:'Advance',
            releasedDate: 'July 2019',
            duration: '50 hours',
            rating : 4,
            ratingNumber: 406,
        },
        {
            id:2,
            title: 'Java',
            author: 'Hai Pham' ,
            level:'Beginner',
            releasedDate: 'July 2019',
            duration: '50 hours',
            rating : 5,
            ratingNumber: 709,
        },
        {
            id:3,
            title: 'Game Development',
            author: 'ABC' ,
            level:'Beginner',
            releasedDate: 'Sept 2019',
            duration: '50 hours',
            rating : 3,
            ratingNumber: 1307,
        },
        {
            id:4,
            title: 'Machine Learning',
            author: 'ABC' ,
            level:'Beginner',
            releasedDate: 'Sept 2019',
            duration: '50 hours',
            rating : 3,
            ratingNumber: 1307,
        },
        {
            id:5,
            title: 'Game Development',
            author: 'ABC' ,
            level:'Beginner',
            releasedDate: 'Sept 2019',
            duration: '50 hours',
            rating : 3,
            ratingNumber: 1307,
        },
        {
            id:6,
            title: 'Game Development',
            author: 'ABC' ,
            level:'Beginner',
            releasedDate: 'Sept 2019',
            duration: '50 hours',
            rating : 3,
            ratingNumber: 1307,
        }
    ]

  return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>Downloads</Text>
          </View>
          <View style={styles.subTitleContainer}>
              <Text style={styles.subTitle}>Downloads</Text>
              <TouchableOpacity style={styles.rmAllButton}>
                  <Text style={styles.rmAllText}>Remove all</Text>
              </TouchableOpacity>
          </View>
          <ListCourses list={coursesList}></ListCourses>
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
