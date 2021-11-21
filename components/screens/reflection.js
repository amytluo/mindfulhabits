import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable } from 'react-native';
class Reflection extends Component {


    render () {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        );
    }
}

export default Reflection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        alignContent: 'center',
    },
});
