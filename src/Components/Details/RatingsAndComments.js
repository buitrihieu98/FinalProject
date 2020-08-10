import React, {useContext} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import api from "../../API/api";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import CommentsList from "./CommentsList";

const RatingsAndComments = (props) => {
    const list = props.route.params.comments
    const authentication = useContext(AuthenticationContext)

    return (
        <View style={styles.container}>
            <CommentsList list={list}></CommentsList>
        </View>
    );
};
const styles = StyleSheet.create({


});
export default RatingsAndComments;
