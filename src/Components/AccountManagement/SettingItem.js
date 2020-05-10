import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';


const SettingItem = (props) => {
  return (
      <TouchableOpacity style={styles.container}>
          <Text style={styles.itemName}>{props.name}</Text>
          <Image source={require('../../../assets/icon-next.png')} style={styles.icon}></Image>
      </TouchableOpacity>


  )
};


const styles = StyleSheet.create({
    container:{
        backgroundColor:'whitesmoke',
        width: '100%',
        height: 50,
        borderBottomWidth:2,
        justifyContent:'center',
    },
    itemName:{
        margin:5,
        marginLeft:10,
        fontSize:20,

    },
    icon:{
        width:10,
        height:10,
        position:'absolute',
        right: 10,
    }

});


export default SettingItem
