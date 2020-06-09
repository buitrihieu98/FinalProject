import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {ThemeContext} from "../../provider/ThemeProvider";

const PathItem = (props) => {
    const {theme} = useContext(ThemeContext)
    const onPressItem=()=>{
        props.navigation.push("PathDetail",{item:props.item})
    }
  return (
    <TouchableOpacity style={{...styles.container,backgroundColor:theme.itemBackground}} onPress={onPressItem}>
          <Image style={styles.image}
                 source={require('../../../assets/icon-video.png')}>
          </Image>
          <View style={{margin:5}}>
              <Text style={styles.coreInfo}>{props.item.title}</Text>
              <Text style={styles.subInfo}>{`${props.item.coursesNumber} courses`}</Text>

          </View>
      </TouchableOpacity>

  )
};

const styles = StyleSheet.create({
    container:{
        margin:5,
        width:200,
        height:150,
        backgroundColor:'linen',
    },
    image:{
        width:'60%',
        height: '60%',
    },
    coreInfo:{
        fontSize:15,
    },
    subInfo:{
        fontSize: 15,
        color:'darkgray'
    }
});

export default PathItem
