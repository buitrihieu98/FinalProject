import React from 'react';
import {FlatList, View, StyleSheet, ScrollView} from 'react-native';
import SectionCoursesItem from "../Home/SectionCoursesItem";
import ListCoursesItem from "./ListCoursesItem";

const ListCourses = (props) => {
  return (
      <FlatList data={props.list} renderItem={({item, index, separators}) => (<ListCoursesItem navigation={props.navigation} item={item}></ListCoursesItem>)}/>
  )
};

const styles = StyleSheet.create({

});


export default ListCourses
