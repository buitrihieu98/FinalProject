import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

const SearchedPathItem = (props) => {
    return (<TouchableOpacity style={styles.container}>
            <Image style={styles.image}
                   source={require('../../../assets/icon-video.png')}>
            </Image>
            <View style={{margin:5, justifyContent:'center',marginLeft:20}}>
                <Text style={styles.coreInfo}>{props.item.title}</Text>
                <Text style={styles.subInfo}>{`${props.item.coursesNumber} courses`}</Text>

            </View>
        </TouchableOpacity>

    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:5,
        height:100,
        backgroundColor:'linen',
    },
    image:{
        width:100,
        height:100,
    },
    coreInfo:{
        fontSize:15,
    },
    subInfo:{
        fontSize: 15,
        color:'darkgray'
    }
});

export default SearchedPathItem
