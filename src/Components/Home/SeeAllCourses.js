import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ListCourses from "../ListCourses/ListCourses";

const SeeAllCourses = (props) => {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>{props.route.params.title}</Text>
          <ListCourses navigation={props.navigation} list={props.route.params.list}></ListCourses>
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


export default SeeAllCourses
