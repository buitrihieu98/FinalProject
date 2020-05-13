import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Tile} from "react-native-elements";

import PathList from "../Home/PathList";
import AuthorList from "../Home/AuthorList";
import Tag from "../Global/Tag";

const Browse = () => {
    //authorList for testing
    const authorList=[{id:1, username:'Hai Pham', avatar:''},
        {id:2, username:'Hieu', avatar:''}, {id:3, username:'Nam', avatar:''},
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
    //tagList for testing
    const tagList = ['JavaScript','C#','C++','PHP','Python','Java']
  return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>Browse</Text>
          </View>
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
                      {tagList.map(value => <Tag name={value}></Tag> )}
                  </ScrollView>
              </View>
              <PathList list={pathList} title={'Paths'}></PathList>
              <AuthorList list={authorList} title={'Top authors'}></AuthorList>
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
