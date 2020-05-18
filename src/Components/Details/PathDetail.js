import React from 'react';
import {View, StyleSheet, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import ViewMoreText from "react-native-view-more-text";
import ListCourses from "../ListCourses/ListCourses";

const PathDetail = (props) => {
  return (
      <ScrollView style={styles.container}>
          <View style={styles.titleContainer}>
              <Image style={styles.image}
                     source={require('../../../assets/icon-video.png')}>
              </Image>
              <View style={{margin:5}}>
                  <Text style={styles.title}>{props.item.title}</Text>
                  <Text style={styles.subInfo}>{`${props.item.coursesNumber} courses`}</Text>

              </View>
          </View>
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
          <Text style={styles.subTitle}>{`Your Progress: ${props.item.progress}%`}
          </Text>
          <Text style={styles.subTitle}> Path Courses
          </Text>
          <ListCourses list={props.item.coursesList}></ListCourses>
      </ScrollView>
  )
};

const styles = StyleSheet.create({
    container:{
        marginTop:24,
        flex:1,
        backgroundColor:'azure',
    },
    courseTitle:{
        fontSize:25,
        margin:5,
        fontWeight:'bold'
    },
    titleContainer:{
        flexDirection: 'row',
        marginLeft:10,
    },
    title:{
        fontSize:40,
        fontWeight: 'bold',
    },
    subInfoContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:80,
        height: 80,
        margin:10,
    },
    subInfo:{
        fontSize: 15,
        color:'darkgray'
    },
    subTitle:{
        fontSize:20,
        margin:5,
        fontWeight:'bold'
    },
});


export default PathDetail
