import React, {useContext} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {Rating} from 'react-native-elements'
import {ThemeContext} from "../../provider/ThemeProvider";

const MyRating = (props) => {
    const {theme} = useContext(ThemeContext)
  return (
      <View style={{...styles.container,backgroundColor:theme.background}}>
          <Rating imageSize={30} tintColor={theme.background} readonly={true}
                  ratingBackgroundColor={theme.foreground} type={'custom'}
                  ratingCount={5}  startingValue={props.item.contentPoint} style={styles.rating} />
          {/*<Text style={{color:'darkgray',fontSize:15}}>({props.item.ratingNumber})</Text>*/}
          {/*<Rating imageSize={20} tintColor={theme.background} readonly={true}*/}
          {/*        ratingCount={5}  startingValue={props.item.ratedNumber} style={styles.rating} />*/}
      </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:20,
    },
    icon:{
        width:15,
        margin:2,
        height:15,
    },
    rating:{
        alignSelf:'center',
    },
});


export default MyRating
