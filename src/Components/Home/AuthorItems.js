import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Avatar} from "react-native-elements";
import {ThemeContext} from "../../provider/ThemeProvider";

const AuthorItems = (props) => {
    const onPressItem=()=>{
        props.navigation.push("AuthorDetail", {item:props.item})
    }
    const {theme} = useContext(ThemeContext)
  return (
      <TouchableOpacity style={{...styles.container,backgroundColor:theme.background}} onPress={onPressItem}>
          {<Avatar rounded={true} avatarStyle={styles.avatar} source={require('../../../assets/icon-avatar.png')
          }></Avatar>}
          <Text style={styles.username}>{props.item.username}</Text>
      </TouchableOpacity>
  )
};

 const styles = StyleSheet.create({
     container:{
         margin:5,
         //height:100,
         width: 100,
         justifyContent: 'center',
         alignItems: 'center',
     },
     avatar:{
         height: 40,
         width:40,
     },
     username:{
         margin:5,
         fontSize: 15,
         fontWeight: 'bold',
     },
 });


export default AuthorItems
