import React from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const LessonList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props.item}
                renderItem={({item}) =>
                    <View style={styles.containerLesson}>
                        <View style={styles.containerLessonInfo}>
                            <Text style={styles.titleLesson}>{item.name}</Text>
                            {/*<Text style={styles.titleLesson}>{item.totalTime}</Text>*/}
                        </View>
                        <View style={styles.containerContentList}>
                            {
                                item.lesson.map((content) =>
                                    <TouchableOpacity style={styles.containerContent}>
                                        <Text >{content.name}</Text>
                                        <Text >{content.hours}</Text>
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
