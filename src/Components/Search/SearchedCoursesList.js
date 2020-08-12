import React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import ListCoursesItem from "../ListCourses/ListCoursesItem";
import AuthorItems from "../Home/AuthorItems";

const SearchedCoursesList = (props) => {
    return (
        <View style={styles.container}>
            {props.noCourses===true?<Text style={{alignSelf:'center'}}>Nothing found</Text>:
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.title}>Courses</Text>
                        <Text style={styles.result}>{props.list.length} result(s)</Text>
                    </View>
                    <FlatList  data={props.list}
                               renderItem={({item, index, separators}) => (<ListCoursesItem navigation={props.navigation} item={item}></ListCoursesItem>)}/>
                </View>
                }
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
