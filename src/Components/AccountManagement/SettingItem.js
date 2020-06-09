import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {ThemeContext} from "../../provider/ThemeProvider";


const SettingItem = (props) => {
    const {theme} = useContext(ThemeContext)
  return (
      <TouchableOpacity style={{...styles.container,backgroundColor:theme.background}}>
          <Text style={styles.itemName}>{props.name}</Text>
          <Image source={require('../../../assets/icon-next.png')} style={styles.icon}></Image>
      </TouchableOpacity>


  )
};


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
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
        width:20,
        height:20,
        position:'absolute',
        right: 10,
    }

});


export default SettingItem
