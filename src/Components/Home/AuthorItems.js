import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Avatar} from "react-native-elements";
import {ThemeContext} from "../../provider/ThemeProvider";

const AuthorItems = (props) => {
    const onPressItem=()=>{
        props.navigation.push("AuthorDetail", {item:props.item.instructorId})
    }
    const {theme} = useContext(ThemeContext)
  return (
      // <TouchableOpacity style={{...styles.container,backgroundColor:theme.background}} onPress={onPressItem}>
      //     {<Avatar rounded={true} avatarStyle={styles.avatar} source={require('../../../assets/icon-avatar.png')
      //     }></Avatar>}
      //     <Text style={styles.username}>{props.item.username}</Text>
      // </TouchableOpacity>
      <TouchableOpacity onPress={onPressItem} style={{...styles.button,backgroundColor:theme.itemBackground}}>
          <Text style={styles.username}>{props.item.instructorName}</Text>
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
     button:{
         marginLeft: 10,
         paddingHorizontal: 10,
         paddingVertical:5,
         backgroundColor: 'white',
         borderRadius: 25,
         justifyContent:'center',
         alignItems:'center',
     },
     avatar:{
         height: 40,
         width:40,
     },
     username:{
         margin:5,
         fontSize: 20,
         fontWeight: 'bold',
     },
 });


export default AuthorItems
