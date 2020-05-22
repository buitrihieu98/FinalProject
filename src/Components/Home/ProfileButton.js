import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Avatar} from "react-native-elements";

const ProfileButton = (props) => {
    const onPressItem=()=>{
        props.navigation.push("Profile")
    }
  return (
      <Avatar onPress={onPressItem} rounded={true} avatarStyle={styles.avatar} source={require('../../../assets/icon-avatar.png')
    }>
      </Avatar>
  )
};

const styles = StyleSheet.create({
    avatar:{
        height:20,
        width:20,
    }
});


export default ProfileButton
