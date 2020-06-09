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
