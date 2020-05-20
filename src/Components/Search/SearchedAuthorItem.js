import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Avatar} from "react-native-elements";

const SearchedAuthorItem = (props) => {
    const onPressItem=()=>{
        props.navigation.push("AuthorDetail",{item:props.item})
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPressItem}>
            {<Avatar rounded={true} avatarStyle={styles.avatar} source={require('../../../assets/icon-avatar.png')
            }></Avatar>}
            <Text style={styles.username}>{props.item.username}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:5,
        height:60,
        backgroundColor:'linen',
        //width: 100,
        //justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:10,
    },
    avatar:{
        height: 40,
        width:40,
    },
    username:{
        margin:10,
        fontSize: 15,
        fontWeight: 'bold',
    },
});


export default SearchedAuthorItem
