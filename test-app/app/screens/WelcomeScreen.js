import React from 'react';

import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native'

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <Text>Do what you want boo</Text>
            </View>
            <View className='hello' style={styles.loginButton}></View>
            <View className='hello' style={styles.registerButton}></View>
        </ImageBackground>
    );      
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65"
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50,
    },  
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },  
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4"
    },
})

export default WelcomeScreen;