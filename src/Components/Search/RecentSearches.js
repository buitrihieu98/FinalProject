import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RecentSearchesItem from "./RecentSearchesItem";


const RecentSearches = (props) => {
    const renderRecentSearchesList =(List) =>{
        let Array=[]
        Array=Array.concat(List)
        return Array.map(item=> <RecentSearchesItem item={item}></RecentSearchesItem>)
    }

  return (
      <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Recent searches</Text>
          <TouchableOpacity style={styles.rmAllButton}>
              <Text style={styles.rmAllText}>Remove all</Text>
          </TouchableOpacity>
          <ScrollView style={styles.container}>
              {renderRecentSearchesList(props.rSList)}
          </ScrollView>
      </View>


  )
};



const styles = StyleSheet.create({
    container:{
    },
    subTitleContainer:{
        flex:1,
    },
    subTitle:{
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold',
    },
    rmAllButton:{
        position:'absolute',
        right: 5,
        top:5,
        width:80,
    },
    rmAllText:{
        fontSize:13,
        color:'blue',
    }
});




export default RecentSearches
