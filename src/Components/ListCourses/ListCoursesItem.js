import React, {useContext} from 'react';
import {TouchableOpacity, Image, View, StyleSheet,Text } from 'react-native';
import {Rating} from "react-native-elements";
import {ThemeContext} from "../../provider/ThemeProvider";

const ListCoursesItem = (props) => {
    const onItemPress=()=>{
        props.navigation.push("CourseDetail", {item:props.item})
    }
    const {theme} = useContext(ThemeContext)
    return (
        <TouchableOpacity style={{...styles.container,backgroundColor:theme.itemBackground}} onPress={onItemPress}>
            <Image style={styles.image}
                   source={require('../../../assets/icon-courses.png')}>
            </Image>
            <View style={{margin:5}}>
                <Text style={styles.coreInfo}>{props.item.title}</Text>
                <Text style={styles.coreInfo}>{props.item.author.length===1?props.item.author[0].username:`${props.item.author[0].username}+${props.item.author.length-1}`}</Text>
                <Text style={styles.subInfo}>{`${props.item.level} . ${props.item.releasedDate}`}</Text>
                <Text style={styles.subInfo}>{props.item.duration}</Text>
                {/*<Rating rate={props.item.rating}></Rating>*/}
                <View style={{flexDirection:'row'}}>
                    <Rating imageSize={18} tintColor={theme.itemBackground} readonly={true} ratingCount={5}  startingValue={props.item.rating} style={styles.rating} />
                    <Text style={{color:'darkgray',fontSize:15}}>({props.item.ratingNumber})</Text>
                </View>
            </View>

            {/*<Image style={styles.video}*/}
            {/*       source={{uri: props.item.imageUrl}}>*/}
            {/*</Image>*/}
            {/*<View style={{margin:5}}>*/}
            {/*    <Text style={styles.coreInfo}>{props.item.title}</Text>*/}
            {/*    <Text style={styles.coreInfo}>{props.item.instructorName}</Text>*/}
            {/*    <Text style={styles.subInfo}>{`${props.item.price}$ . ${props.item.createdAt}`}</Text>*/}
            {/*    <Text style={styles.subInfo}>{`${props.item.totalHours} hours`}</Text>*/}
            {/*    <View style={{flexDirection:'row'}}>*/}
            {/*        <Rating imageSize={18} tintColor={theme.itemBackground} readonly={true} ratingCount={5}  startingValue={props.item.ratedNumber} style={styles.rating} />*/}
            {/*    </View>*/}
            {/*</View>*/}
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    container:{
        margin:5,
        backgroundColor:'linen',
        flexDirection:'row',
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
    },
    rating:{
      marginTop:2,
    }
});
export default ListCoursesItem
