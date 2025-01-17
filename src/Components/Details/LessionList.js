import React, {useContext} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import api from "../../API/api";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {getDetailLesson, getVideo} from "../../Services/lesson-service";

const LessonList = (props) => {
    const authentication = useContext(AuthenticationContext)
    const onPressLesson = (content)=>{
        getDetailLesson(props, content, authentication.state.token).then(r  =>{})
        api.get(`https://api.itedu.me/lesson/video/${props.courseId}/${content.id}`,{},authentication.state.token).then((response)=>{
            if(response.isSuccess){
                props.setState(response.data.payload)
            }
        })
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={props.item}
                renderItem={({item}) =>
                    <View style={styles.containerLesson}>
                        <View style={styles.containerLessonInfo}>
                            <Text style={styles.titleLesson}>{item.name}</Text>
                        </View>
                        <View style={styles.containerContentList}>
                            {
                                item.lesson.map((content) =>
                                    <TouchableOpacity onPress={()=>{onPressLesson(content)}}  style={styles.containerContent}>
                                        <Text >{content.name}</Text>
                                        <Text >{`${content.hours} hours` }</Text>
                                    </TouchableOpacity>)
                            }
                        </View>
                    </View>}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    containerLesson: {
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    download:{
        paddingTop: 5,
        height:15,
        width:15,
    },
    containerLessonInfo: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerContentList: {
        marginLeft: 10,
    },
    containerContent: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleLesson:{
        fontSize:15,
        fontWeight:'bold'
    },

});
export default LessonList;
