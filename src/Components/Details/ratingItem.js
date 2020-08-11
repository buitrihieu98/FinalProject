import React, {useContext} from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Avatar, Rating} from 'react-native-elements'
import {ThemeContext} from "../../provider/ThemeProvider";

const RatingItem = (props) => {
    let item=props.item
    const {theme} = useContext(ThemeContext)
    return (
        <View style={{...styles.container,backgroundColor:theme.background}}>
            <View style={{justifyContent:'center',alignItems:'center',width:'30%'}}>
                {props.item.user.avatar?<Avatar rounded={true} size={'large'}source={{uri:item.user.avatar}}></Avatar>:<View></View>}
                {props.item.user.name?<Text style={{fontSize:20}}>{item.user.name}</Text>:<View></View>}
            </View>
            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',width:'70%'}} >
                <Rating imageSize={30} tintColor={theme.background} readonly={true}
                        ratingBackgroundColor={theme.foreground} type={'custom'}
                        ratingCount={5}  startingValue={item.contentPoint} style={styles.rating} />
                <Text style={{fontSize:20}}>{item.content}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        paddingBottom:10,
        flex:1,
        flexDirection:'row',
        width:'100%'
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


export default RatingItem

