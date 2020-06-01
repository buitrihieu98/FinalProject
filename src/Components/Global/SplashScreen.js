import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';

const SplashScreen = (props) => {
    // const [loading, setLoading] = useState(0)
    //
    // useEffect(()=>{
    //     this._timer=setInterval(()=>{
    //         setLoading(loading+5)
    //         console.log("tic")
    //     },100);
    // },[])
    //
    // useEffect(()=> {
    //     console.log(loading)
    //     if (loading > 100) {
    //         props.navigation.navigate("Login")
    //     }
    //     return ()=>{
    //         clearInterval(this._timer)
    //     }
    //     }, [loading])


    return (
        <View source={require('../../../assets/background.jpg')} style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}>
            </Image>
        </View>
        )
}

const styles = StyleSheet.create({
    logo:{
        width: 250,
        height: 250,
    },
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default SplashScreen
