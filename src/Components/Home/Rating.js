import React from 'react';
import {Image, View, StyleSheet } from 'react-native';

const Rating = (props) => {
    const yellowStar = <Image source={require('../../../assets/icon-yellowStar.png')} style={styles.icon}></Image>
    const whiteStar = <Image source={require('../../../assets/icon-whiteStar.png')} style={styles.icon}></Image>
    const renderStars=(rating)=>{
        let stars=[]
        let yellowPoint =rating
        let whitePoint=5-yellowPoint
        for(let i=0;i<yellowPoint;i++){
            stars=stars.concat(true)
        }
        for(let j=0;j<whitePoint;j++){
            stars=stars.concat(false)
        }
        return stars.map(value => value===true?yellowStar:whiteStar)
    }
  return (
      <View style={styles.container}>
          {renderStars(props.rate)}
      </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:15,
    },
    icon:{
        width:15,
        margin:2,
        height:15,
    },
});


export default Rating
