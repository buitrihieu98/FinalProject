import React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import PathItem from "../Home/PathItem";
import SearchedPathItem from "./SearchedPathItem";


const SearchedPathList = (props) => {
    // const renderList =(List) =>{
    //     let Array=[]
    //     Array=Array.concat(List)
    //     return Array.map(item=> <SearchedPathItem item={item}></SearchedPathItem>)
    // }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.title}>Path</Text>
                <Text style={styles.result}>{props.list.length} result(s)</Text>
            </View>
            {/*<ScrollView horizontal={true}>*/}
            {/*    {renderList(props.list)}*/}
            {/*</ScrollView>*/}
            <FlatList  data={props.list}
                       renderItem={({item, index, separators}) => (<SearchedPathItem item={item}></SearchedPathItem>)}/>
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

export default SearchedPathList
