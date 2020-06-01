import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ListCourses from "../ListCourses/ListCourses";
import {LocalDataContext} from "../../provider/localDataProvider";

const NewRelease = (props) => {
    const dataContext = useContext(LocalDataContext)
    const data=dataContext.data
    return (
        <View style={styles.container}>
            <ListCourses navigation={props.navigation} list={data.newList}></ListCourses>
        </View>

    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    title:{
        fontSize:20,
        margin:10,
        fontWeight:'bold',
    }

});


export default NewRelease
