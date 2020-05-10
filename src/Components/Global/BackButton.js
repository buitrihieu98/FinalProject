import React from 'react';
import {Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
const BackButton = () => {
    return (
        <TouchableOpacity style={styles.backButton}>
            <Image source={require('../../../assets/icon-back.png')} style={styles.icon}></Image>
            <Text style={styles.backText}>back</Text>
        </TouchableOpacity>

    )
};


const styles = StyleSheet.create({
    backButton:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        left: 10,
        width:50,
    },
    backText:{
        fontSize:15,
    },
    icon:{
        width:10,
        height:10
    }
});
export default BackButton
