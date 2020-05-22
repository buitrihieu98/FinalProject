import React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import ListCoursesItem from "../ListCourses/ListCoursesItem";
import AuthorItems from "../Home/AuthorItems";

const SearchedCoursesList = (props) => {
    // const renderList =(List) =>{
    //     let Array=[]
    //     Array=Array.concat(List)
    //     return Array.map(item=> <ListCoursesItem item={item}></ListCoursesItem>)
    // }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.title}>Courses</Text>
                <Text style={styles.result}>{props.list.length} result(s)</Text>
            </View>
            {/*<ScrollView>*/}
            {/*    {renderList(props.List)}*/}
            {/*</ScrollView>*/}
            <FlatList  data={props.list}
                       renderItem={({item, index, separators}) => (<ListCoursesItem navigation={props.navigation} item={item}></ListCoursesItem>)}/>
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        marginLeft:5,
        fontWeight:'bold',
        fontSize:20,
    },
    result:{
        position:'absolute',
        right:10,
    },
    container:{
        justifyContent:'center',
    }

});

export default SearchedCoursesList
