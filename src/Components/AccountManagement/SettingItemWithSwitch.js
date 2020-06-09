import React, {useContext, useState} from 'react';
import {View,Text, Switch, StyleSheet} from 'react-native';
import {ThemeContext} from "../../provider/ThemeProvider";


const SettingItemWithSwitch = (props) => {
    const {theme} = useContext(ThemeContext)
    const [isEnabled,setIsEnabled] = useState(true)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{...styles.container,backgroundColor:theme.background}}>
            <Text style={styles.itemName}>{props.name}</Text>
            <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onChange={toggleSwitch}
                value={isEnabled}
            />
        </View>


    )
};


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width: '100%',
        height: 50,
        borderBottomWidth:2,
        justifyContent:'center',
    },
    itemName:{
        margin:5,
        marginLeft:10,
        fontSize:20,

    },
    switch:{
        width:80,
        height:50,
        position:'absolute',
        right: 10,
    }

});


export default SettingItemWithSwitch
