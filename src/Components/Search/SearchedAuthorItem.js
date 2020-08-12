import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Avatar} from "react-native-elements";
import {ThemeContext} from "../../provider/ThemeProvider";

const SearchedAuthorItem = (props) => {
    const onPressItem=()=>{
        props.navigation.push("AuthorDetail",{item:props.item})
    }
    const {theme} = useContext(ThemeContext)
    return (
        <TouchableOpacity style={{...styles.container,backgroundColor:theme.itemBackground}} onPress={onPressItem}>
            <Avatar rounded={true} size={'large'}  source={{uri:props.item.avatar}}></Avatar>
            <Text style={styles.username}>{props.item.name}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:5,
        height:100,
        backgroundColor:'linen',
        alignItems: 'center',
        paddingLeft:10,
    },
    avatar:{
        height: 40,
        width:40,
    },
    username:{
        margin:10,
        fontSize: 20,
        alignItems: 'center',
        fontWeight: 'bold',
    },
});


export default SearchedAuthorItem
