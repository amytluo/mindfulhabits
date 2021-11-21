import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, Button, View, Pressable} from "react-native";

class Register extends Component {
    render () {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>

                    <TextInput
                    style={styles.item}
                    placeholder="Enter your email"
                    ></TextInput>
                    <TextInput
                    style={styles.item}
                    placeholder="Enter your password"
                    ></TextInput>

                <View style={styles.bottom}>
                    <Pressable style={styles.button} onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}>
                        <Text style ={styles.addText}>Register</Text>
                    </Pressable>
                </View>
            </View>
        );
    }
}

export default Register;

const styles = StyleSheet.create({
    addText: {
        color: '#161b33',
        fontSize: 24,
      },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a7cdbd',
        height: 50,
        padding: 6,
        elevation: 10,
        borderRadius: 8,
        margin: 5,
        borderWidth: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#FAE9CC',
    },
    input: {
        flex: 0.05,
        margin: 6,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#FAE9CC',
    },
    item: {
        //backgroundColor: 'white',
        marginTop: 10,
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
      },
    startText: {
        color: '#FAE9CC',
        fontSize: 24,
    }
});