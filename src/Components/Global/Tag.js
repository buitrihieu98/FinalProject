import React from 'react';
import {Text, StyleSheet,TouchableOpacity } from 'react-native';


const Tag = (props) => {
    const onPressItem=()=>{
        props.navigation.push("TopicDetail",{item:props.item})
    }
  return (
      <TouchableOpacity onPress={onPressItem} style={styles.button}>
          <Text>{props.item.name}</Text>
      </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    button:{
        marginLeft: 10,
        paddingHorizontal: 20,
        paddingVertical:10,
        backgroundColor: 'cornsilk',
        borderRadius: 25,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        flex:1,
        fontSize:15,
    }
});


export default Tag
