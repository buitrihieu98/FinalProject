import React from 'react';
import {Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
const SeeAllButton = () => {
    return (
        <TouchableOpacity style={styles.Button}>
            <Text style={styles.Text}>See all</Text>
            <Image source={require('../../../assets/icon-next.png')} style={styles.icon}></Image>
        </TouchableOpacity>

    )
};
const styles = StyleSheet.create({
    Button:{
        alignSelf:"flex-end",
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        right: 10,

    },
    Text:{
        fontSize:15,
    },
    icon:{
        width:10,
        height:10
    }
});
export default SeeAllButton
