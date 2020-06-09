import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ListCourses from "../ListCourses/ListCourses";
import {LocalDataContext} from "../../provider/localDataProvider";
import {ThemeContext} from "../../provider/ThemeProvider";

const Recommended = (props) => {
    const dataContext = useContext(LocalDataContext)
    const data=dataContext.data
    const {theme} = useContext(ThemeContext)
    return (
        <View style={{...styles.container,backgroundColor:theme.background}}>
            <ListCourses navigation={props.navigation} list={data.recommendList}></ListCourses>
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


export default Recommended
