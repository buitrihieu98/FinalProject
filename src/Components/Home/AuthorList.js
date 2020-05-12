import React from 'react';
import {Text, View, StyleSheet, ScrollView } from 'react-native';
import AuthorItems from "./AuthorItems";

const AuthorList = (props) => {
    const renderAuthorList =(authorList) =>{
        let authorListArray=[]
        authorListArray=authorListArray.concat(authorList)
        return authorListArray.map(item=> <AuthorItems item={item}></AuthorItems>)
    }
    return (
        <View>
            <View style={{justifyContent:'center'}}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <ScrollView horizontal={true}>
                {renderAuthorList(props.authorList)}
            </ScrollView>
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
