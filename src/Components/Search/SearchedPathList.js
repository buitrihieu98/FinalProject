import React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';

import SearchedPathItem from "./SearchedPathItem";


const SearchedPathList = (props) => {

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.title}>Paths</Text>
                <Text style={styles.result}>{props.list.length} result(s)</Text>
            </View>
            {/*<ScrollView horizontal={true}>*/}
            {/*    {renderList(props.list)}*/}
            {/*</ScrollView>*/}
            <FlatList  data={props.list}
                       renderItem={({item, index, separators}) => (<SearchedPathItem navigation={props.navigation} item={item}></SearchedPathItem>)}/>
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
