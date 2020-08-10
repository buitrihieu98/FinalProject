import React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import AuthorItems from "../Home/AuthorItems";
import SectionCoursesItem from "../Home/SectionCoursesItem";
import SearchedAuthorItem from "./SearchedAuthorItem";

const SearchedAuthorList = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.title}>Authors</Text>
                <Text style={styles.result}>{props.list.length} result(s)</Text>
            </View>
            <FlatList  data={props.list}
                      renderItem={({item, index, separators}) => (<SearchedAuthorItem navigation={props.navigation} item={item}></SearchedAuthorItem>)}/>
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

export default SearchedAuthorList
