import React from 'react';
import {Text, View, StyleSheet, ScrollView } from 'react-native';
import PathItem from "../Home/PathItem";

const SearchedPathList = (props) => {
    const renderList =(List) =>{
        let Array=[]
        Array=Array.concat(List)
        return Array.map(item=> <PathItem item={item}></PathItem>)
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.title}>Path</Text>
                <Text style={styles.result}>{props.List.length} result(s)</Text>
            </View>
            <ScrollView horizontal={true}>
                {renderList(props.List)}
            </ScrollView>
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
