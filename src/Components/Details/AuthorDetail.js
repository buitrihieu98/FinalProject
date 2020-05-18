import React from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import BackButton from "../Global/BackButton";
import {Avatar} from "react-native-elements";
import ViewMoreText from "react-native-view-more-text";
import ListCourses from "../ListCourses/ListCourses";


const AuthorDetail = (props) => {
  return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <BackButton></BackButton>
              <Text style={styles.title}>Profile</Text>
          </View>
          <View style={styles.avatarContainer}>
              {<Avatar rounded={true} avatarStyle={styles.avatar} source={require('../../../assets/icon-avatar.png')
              }></Avatar>}
              <Text style={styles.username}>{props.item.username}</Text>
              <Text style={styles.email}>{props.item.email}
              </Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Sign out</Text>
          </TouchableOpacity>
          <View style={{marginLeft:10}}>
              <ViewMoreText numberOfLines={3} textStyle={styles.subInfo}>
                  <Text>Introduction of this course test test testtesttesttesttesttesttest test test testv  test test  test test test
                      Introduction of this course test test testtes ttesttesttesttest test test test testv  test test  test test test
                      Introduction of this course test test testt esttest t es tt esttesttest test test testv  test test  test test test
                      Introduction of this course test test testtestt e sttestte sttesttest test test testv  test test  test test test
                      Introduction of this course test test testtesttesttestte sttesttest test test testv  test test  test test test
                      Introduction of this course test test testt esttesttesttesttesttest test test testv  test test  test test test
                  </Text>
              </ViewMoreText>
          </View>
          <Text style={styles.subTitle}> Path Courses
          </Text>
          <ListCourses list={props.item.coursesList}></ListCourses>
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
    avatarContainer:{
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar:{
        marginTop:10,
        height: 100,
        width:100,
    },
    username:{
        margin:5,
        fontSize: 30,
        fontWeight: 'bold',
    },
    email:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    followButton:{
        alignSelf:'center',
        height: 50,
        marginTop:60,
        backgroundColor: 'deepskyblue',
        width:'80%',
        borderRadius: 25,
        alignItems:'center',
        justifyContent:'center'
    },
    followText:{
        fontSize: 30,
        fontWeight:'bold',
        color:'white'
    },
});


export default AuthorDetail
