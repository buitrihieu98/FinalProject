import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

import ListCourses2 from "../ListCourses/ListCourses2";

const SeeAllCourses2 = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.route.params.title}</Text>
            <ListCourses2 navigation={props.navigation} list={props.route.params.list}></ListCourses2>
        </View>

    )
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    title:{
        fontSize:20,
        margin:10,
        fontWeight:'bold',
    }
});


export default SeeAllCourses2
