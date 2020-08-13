import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native';
import api from "../../API/api";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import CommentsList from "./CommentsList";
import {Rating} from "react-native-elements";
import {ThemeContext} from "../../provider/ThemeProvider";
import {getComments, rateCourse} from "../../Services/courses-service";

const RatingsAndComments = (props) => {
    let item = props.route.params.item
    const authentication = useContext(AuthenticationContext)
    const {theme} = useContext(ThemeContext)
    const [rating,setRating]=useState(2.5)
    const [comment,setComment]=useState('')
    const [comments,setComments]=useState([])
    const [canSend,setCanSend]=useState(false)
    const onPressSend=()=>{
        if(comment!==''){
            rateCourse(item.id, rating, comment, authentication.state.token,setComment).then(r  =>{})
        }
    }
    useEffect(()=>{
        getComments(item, setComments).then(r =>{})
    },[])
    useEffect(()=>{
        if(comment.length>=5){
            setCanSend(true)
        }
        else{setCanSend(false)}
    },[comment])

    return (
        <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
            {item.imageUrl?<Image style={styles.video} source={{uri: item.imageUrl}}></Image>:<Image style={styles.video} source={{uri: item.courseImage}}></Image>}
            <Text style={styles.courseTitle}>{item.courseTitle}</Text>
            <Text style={styles.loginText}>Rate this course</Text>
            <Rating imageSize={40} tintColor={theme.background} readonly={false}
                    onFinishRating={(rating)=>{setRating(rating)}}
                    ratingBackgroundColor={theme.foreground} type={'custom'}
                    ratingCount={5}  startingValue={2.5} />
            <TextInput onChangeText={text => setComment(text)} defaultValue={comment} style={{...styles.input,backgroundColor:theme.background}} placeholder= {'Write a comment'}/>
            {!canSend?<Text style={{alignSelf:'center',color:'red'}}>Comment must have more than 4 characters</Text>:<View></View>}
            <TouchableOpacity disabled={!canSend} style={styles.button} onPress={onPressSend
            }>
                <Text style={styles.loginText}>Send</Text>
            </TouchableOpacity>
            <Text style={styles.loginText}>{`Comments (${comments.length})`}</Text>
            <CommentsList list={comments}></CommentsList>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    video:{
        height:200,
        width:'100%',
    },
    courseTitle:{
        fontSize:25,
        margin:5,
        fontWeight:'bold'
    },
    input:{
        margin: 10,
        height: 100,
        backgroundColor: 'white',
        fontSize: 20,
    },
    container:{
        flex:1,
        backgroundColor:'white',
    },
    button:{
        alignSelf:'center',
        marginTop:30,
        marginBottom:10,
        height: 50,
        width: '40%',
        backgroundColor: 'deepskyblue',
        borderRadius: 25,
        alignItems:'center',
        justifyContent:'center'
    },
    loginText:{
        fontSize: 25,
        fontWeight:'bold',
        alignSelf: 'center',
    },
});
export default RatingsAndComments;
