import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import SectionCourses from "./SectionCourses";
import PathList from "./PathList";
import SeeAllButton from "../Global/SeeAllButton";

const Home = () => {
  return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>Home</Text>
          </View>
          <ScrollView style={styles.scrollView}>
              <SectionCourses title={'Continue Learning'}></SectionCourses>
              <PathList title={'Path'}></PathList>
              <SectionCourses title={'Channel'}></SectionCourses>
              <SectionCourses title={'Bookmarks'}></SectionCourses>
          </ScrollView>
      </View>

  )
};

const styles = StyleSheet.create({
    scrollView:{

    },
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
