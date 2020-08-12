import React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import AuthorItems from "./AuthorItems";

const AuthorList = (props) => {
    return (
        <View>
            <View style={{justifyContent:'center'}}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <FlatList horizontal={true} data={props.list} renderItem={({item, index, separators}) => (<AuthorItems navigation={props.navigation} item={item}></AuthorItems>)}/>
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        marginLeft:5,
        fontWeight:'bold',
        fontSize:20,
    }

});




export default AuthorList
