import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Tile} from "react-native-elements";

import PathList from "../Home/PathList";
import AuthorList from "../Home/AuthorList";
import Tag from "../Global/Tag";

const Browse = (props) => {
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
    const tagList = ['JavaScript','C#','C++','PHP','Python','Java']
  return (
      <View style={styles.container}>
          <ScrollView>
              <View style={styles.tileContainer}>
                  <Tile containerStyle={styles.tile}
                      title={'New Release'} featured={true} height={100} titleStyle={styles.tileTitle}
                        imageSrc={require('../../../assets/background-3.jpg')}>
                  </Tile>
                  <Tile containerStyle={styles.tile}
                      title={'Recommended for you'} featured={true} titleNumberOfLines={2} height={100} titleStyle={styles.tileTitle}
                        imageSrc={require('../../../assets/background-2.jpg')}>
                  </Tile>
              </View>
              <Text style={styles.subtitle}>Popular skills</Text>
              <View style={{flexDirection: 'row', margin:5}}>
                  <ScrollView horizontal={true}>
                      {tagList.map(value => <Tag navigation={props.navigation} name={value}></Tag> )}
                  </ScrollView>
              </View>
              <PathList navigation={props.navigation} list={pathList} title={'Paths'}></PathList>
              <AuthorList navigation={props.navigation} list={authorList} title={'Top authors'}></AuthorList>
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
        alignItems:'center',
        justifyContent:'center',
        height: 40,
        backgroundColor: 'beige',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
    },
    subtitle:{
        fontSize:20,
        fontWeight:'bold',
        color: 'black',
        marginLeft:10,
    },
    tile:{
        margin:10,
    },
    tileTitle:{
        fontSize:20,
        fontWeight:'bold',
        color: 'white',
    },
    tileContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    }
});


export default Browse
