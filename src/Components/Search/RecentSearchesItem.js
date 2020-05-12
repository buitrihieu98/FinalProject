import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';


const RecentSearchesItem = (props) => {
  return (
      <TouchableOpacity style={styles.container}>
          <Image style={styles.iconRecent} source={require('../../../assets/icon-recent.png')}></Image>
          <Text style={styles.value}>{props.item.value}</Text>
          {/*<Image style={styles.iconRemove} source={require('../../../assets/icon-recent.png')}></Image>*/}
      </TouchableOpacity>

  )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        height:40,
        margin:2,
    },
    value:{
        marginLeft:10,
        fontSize:20,
    },
    iconRecent:{
        height: 20,
        width: 20,
        marginLeft:5,
    },
    iconRemove:{
        position:'absolute',
        height: 20,
        width: 20,
        right:10,
    }

});


export default RecentSearchesItem
