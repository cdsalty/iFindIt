import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import startTabs from './startTabs';

class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(
            () => {
                startTabs()
            }, 2000
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../images/logo.png')}
                />
                <Text style={styles.logo}>Giving You Control</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C3048',
    },
    logo: {
        color: '#F9F9F9',
        fontSize: 25
    }
})

export default SplashScreen;