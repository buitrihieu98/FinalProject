import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image, ScrollView, Text, ImageBackground} from 'react-native';
import SectionCourses from "./SectionCourses";
import PathList from "./PathList";
import AuthorList from "./AuthorList";
import {Avatar} from "react-native-elements";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {LocalDataContext} from "../../provider/localDataProvider";
import {ThemeContext} from "../../provider/ThemeProvider";
const Home = (props) => {
    props.navigation.setOptions({headerRight: () => (
            <Avatar
                style={{margin:5,marginRight:10,height:25,width:25}}
                onPress={() => props.navigation.navigate("Profile")}
                source={require("../../../assets/icon-avatar.png")}
            />
        ),})
    // const authorCoursesList=[{id:1, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
    //     {id:2, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
    //     {id:3, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
    //     {id:4, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,}]
    // const authorList=[
    //     {id:1,username:'Hai Pham',email:'thisisanemail@gmail.com', avatar:'', authorCoursesList:authorCoursesList},
    //     {id:2,email:'thisisanemail@gmail.com', username:'Hieu', avatar:'',authorCoursesList:authorCoursesList},
    //     {id:3,email:'thisisanemail@gmail.com', username:'Nam', avatar:'',authorCoursesList:authorCoursesList},
    //     {id:4,email:'thisisanemail@gmail.com', username:'Vi', avatar:'',authorCoursesList:authorCoursesList},
    //     {id:5,email:'thisisanemail@gmail.com', username:'Thy', avatar:'',authorCoursesList:authorCoursesList}]
    // //coursesList for testing
    // const coursesList=[
    //     {id:1, title: 'React Native', author: authorList , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
    //     {id:2, title: 'Java', author: authorList , level:'Beginner', releasedDate: 'July 2019', duration: '50 hours', rating : 5, ratingNumber: 709,},
    //     {id:3, title: 'Game Development', author: authorList , level:'Beginner', releasedDate: 'Sept 2019', duration: '50 hours', rating : 3, ratingNumber: 1307,}]
    // //pathList for testing
    // const pathList=[
    //     {id:1, title: 'React Native',coursesList:coursesList ,coursesNumber:12, progress:80},
    //     {id:2, title: 'Java',coursesList:coursesList, coursesNumber:25, progress:80},
    //     {id:3, title: 'PHP',coursesList:coursesList, coursesNumber:12, progress:80},]
    const dataContext = useContext(LocalDataContext)
    const {theme} = useContext(ThemeContext)
    const data=dataContext.data
    const {authentication, setAuthentication,favoritesList, setFavoritesList} = useContext(AuthenticationContext)
    const userInfo=authentication.userInfo
    const renderLoginStatus = (favoritesList)=>{
        if(favoritesList.length===0){
            return <View></View>
        }
        else{
            <SectionCourses navigation={props.navigation} list={favoritesList} title={'Favorites'}></SectionCourses>
        }
    }
    const fave = <SectionCourses navigation={props.navigation} list={favoritesList} title={'Favorites'}></SectionCourses>

  return (
      <View style={{...styles.container,backgroundColor:theme.background}}>
          {/*<View style={styles.titleContainer}>*/}
          {/*    <Text style={styles.title}>Home</Text>*/}
          {/*</View>*/}
          <ScrollView>
              <View >
                  <Text style={styles.intro}>Welcome to Exceed!</Text>
                  <Text style={styles.intro}>Exceed, it means to be greater than a number, an amount,
                      or to go past an allowed limit. With Exceed,
                      we hope you can improve your skills,
                      erase your knowledge's boundary by joining online courses.
                  </Text>
              </View>
              <SectionCourses navigation={props.navigation} list={userInfo.continueList} title={'Continue Learning'}></SectionCourses>
              <PathList navigation={props.navigation} list={data.pathList} title={'Path'}></PathList>
              <SectionCourses navigation={props.navigation} list={data.coursesList} title={'Software development'}></SectionCourses>
              {favoritesList.length>0?fave:<View></View>}
          </ScrollView>
      </View>

  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
    },
    intro:{
        color:'gray',
        fontSize: 20,
        margin:5,

    }
});


export default Home
