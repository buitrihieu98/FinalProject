import React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import AuthorItems from "../Home/AuthorItems";
import SectionCoursesItem from "../Home/SectionCoursesItem";
import SearchedAuthorItem from "./SearchedAuthorItem";

const SearchedAuthorList = (props) => {
    // const renderAuthorList =(List) =>{
    //     let Array=[]
    //     Array=Array.concat(List)
    //     return Array.map(item=> <AuthorItems item={item}></AuthorItems>)
    // }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.title}>Authors</Text>
                <Text style={styles.result}>{props.list.length} result(s)</Text>
            </View>
            {/*<ScrollView horizontal={true}>*/}
            {/*    {renderAuthorList(props.authorList)}*/}
            {/*</ScrollView>*/}
            <FlatList  data={props.list}
                      renderItem={({item, index, separators}) => (<SearchedAuthorItem item={item}></SearchedAuthorItem>)}/>
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
