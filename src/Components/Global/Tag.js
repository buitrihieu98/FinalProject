import React, {useContext} from 'react';
import {Text, StyleSheet,TouchableOpacity } from 'react-native';
import {ThemeContext} from "../../provider/ThemeProvider";


const Tag = (props) => {
    const {theme} = useContext(ThemeContext)
    const onPressItem=()=>{
        props.navigation.push("TopicDetail",{item:props.item})
    }
  return (
      <TouchableOpacity onPress={onPressItem} style={{...styles.button,backgroundColor:theme.itemBackground}}>
          <Text>{props.item.name}</Text>
      </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    button:{
        marginLeft: 10,
        paddingHorizontal: 20,
        paddingVertical:10,
        backgroundColor: 'white',
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
