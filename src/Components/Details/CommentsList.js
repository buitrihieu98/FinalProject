import React, {useContext} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RatingItem from "./ratingItem";

const CommentsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList  data={props.list}
                      renderItem={({item, index, separators}) => (<RatingItem item={item}></RatingItem>)}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

});
export default CommentsList;
