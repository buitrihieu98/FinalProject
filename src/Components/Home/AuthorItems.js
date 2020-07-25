import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Avatar} from "react-native-elements";
import {ThemeContext} from "../../provider/ThemeProvider";

const AuthorItems = (props) => {
    const onPressItem=()=>{
        props.navigation.push("AuthorDetail", {item:props.item})
    }
    const {theme} = useContext(ThemeContext)
    if(props.item["user.avatar"]!==undefined){
        return (
            <TouchableOpacity style={{...styles.container,backgroundColor:theme.background}} onPress={onPressItem}>
                {/*<Avatar rounded={true} avatarStyle={styles.avatar} source={{uri:props.item["user.avatar"]}*/}
                {/*}></Avatar>*/}
                {props.item["user.avatar"]?<Image style={styles.avatar} source={{uri:props.item["user.avatar"]}}></Image>:<View></View>}
                {props.item["user.name"]?<Text style={styles.username}>{props.item["user.name"]}</Text>:<Text style={styles.username2}>{props.item.instructorName}</Text>}
            </TouchableOpacity>)
    }
    else{
        return (<TouchableOpacity onPress={onPressItem} style={{...styles.button,backgroundColor:theme.itemBackground}}>
            <Text style={styles.username2}>{props.item.instructorName}</Text>
        </TouchableOpacity>)
    }


};

 const styles = StyleSheet.create({
     container:{
         margin:5,
         height:100,
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
         height: 60,
         width: 60,
     },
     username:{
         margin:5,
         fontSize: 15,
         fontWeight: 'bold',
     },
     username2:{
         margin:5,
         fontSize: 20,
         fontWeight: 'bold',
         alignSelf:'center'

     }
 });


export default AuthorItems
