import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const SplashScreen = () => {
  return (
      <View source={require('../../../assets/background.jpg')} style={styles.container}>
          <Image source={require('../../../assets/logo.png')} style={styles.logo}>
          </Image>
      </View>

  )
};

const styles = StyleSheet.create({
    logo:{
        width: 250,
        height: 250,
    },
    container:{
        flex:1,
        backgroundColor:'azure',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default SplashScreen
