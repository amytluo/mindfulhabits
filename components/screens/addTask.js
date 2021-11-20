import React, { Component, useState } from 'react';
import { Text, TextInput, Picker, View,  StyleSheet, Pressable } from 'react-native';
//import {Picker} from '@react-native-picker/picker'

class AddTask extends Component {
    render () {
        //const [selectedType, setSelectedType] = useState();
        return (
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                placeholder="Enter a name for your task"
                ></TextInput>
                <View style={styles.picker}>
                <Picker
                  style={styles.picker}
                  itemStyle={styles.itemStyle}
                  mode='dropdown'>
                    <Picker.Item label="Timer Task" value="timer" />
                    <Picker.Item label="Checklist" value="checklist" />
                    <Picker.Item label="Reflection" value="reflection" />
                </Picker>
                </View>
                <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => {
                    this.props.navigation.navigate('AddTask')
                }}>
                    <Text style ={styles.add}>Add to routine</Text>
                </Pressable>
                </View>
            </View>
        );
    }
}

export default AddTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    picker: {
        width: 150,
        borderWidth: 1,
        margin: 12,
    },  
    itemStyle: {
        textAlign: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#161b33',
        height: 50,
        padding: 6,
        elevation: 10,
        borderRadius: 8,
        margin: 5,
    },
      bottom: {
        flex: 1,
        justifyContent: 'flex-end',
      },
      add: {
        color: 'white',
        fontSize: 24,
    },
});
