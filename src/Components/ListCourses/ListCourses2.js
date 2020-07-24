import React from 'react';
import {FlatList, View, StyleSheet, ScrollView} from 'react-native';
import SectionCoursesItem from "../Home/SectionCoursesItem";
import ListCoursesItem from "./ListCoursesItem";
import ListCoursesItem2 from "./ListCoursesItem2";

const ListCourses2 = (props) => {
    return (
        <FlatList data={props.list} renderItem={({item, index, separators}) => (<ListCoursesItem2 navigation={props.navigation} item={item}></ListCoursesItem2>)}/>
    )
};

const styles = StyleSheet.create({

});


export default ListCourses2
