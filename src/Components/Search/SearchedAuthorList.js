import React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';

import SearchedAuthorItem from "./SearchedAuthorItem";


const SearchedAuthorList = (props) => {
    return (
        <View style={styles.container}>
            {props.noAuthors===true?<Text style={styles.notFound}>No author found</Text>:
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.title}>Authors</Text>
                        <Text style={styles.result}>{props.list.length} result(s)</Text>
                    </View>
                    <FlatList  data={props.list}
                               renderItem={({item, index, separators}) => (<SearchedAuthorItem navigation={props.navigation} item={item}></SearchedAuthorItem>)}/>
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        marginLeft:5,
        fontWeight:'bold',
        fontSize:20,
    },
    notFound:{
        alignSelf:'center',
        fontSize: 15,
    },
    result:{
        position:'absolute',
        right:10,
    },
    container:{
        justifyContent:'center',
    }

});

export default SearchedAuthorList
