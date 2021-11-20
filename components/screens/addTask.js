import React, { Component, useState } from 'react';
import { Text, TextInput, View,  StyleSheet, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';


class AddTask extends Component {
    state = {taskType: 'timer', time: '1'}
    updateTaskType = (taskType) => {
      this.setState({ taskType: taskType })
   }
   updateTime = (time) => {
       this.setState({time: time})
   }
    render () {
        //const [selectedType, setSelectedType] = useState();
        return (
            <View style={styles.container}>
                <Text style={styles.name}>Name</Text>
                <TextInput
                style={styles.input}
                placeholder="Enter a name for your task"
                ></TextInput>
                <Text style={styles.type}>Task type</Text>
                <View style={styles.horizBox}>
                <View style={styles.picker}>
                    <Picker
                  style={styles.picker}
                  itemStyle={styles.itemStyle}
                  mode='dropdown'
                  selectedValue = {this.state.taskType}
                  onValueChange = {this.updateTaskType}>
                    <Picker.Item label="Timer Task" value="timer" />
                    <Picker.Item label="Untimed Task" value="untimed" />
                    <Picker.Item label="Reflection" value="reflection" />
                    </Picker>
                </View>
                {this.state.taskType == 'timer' && <View styles={styles.timeArea}>
                    <View style={styles.min}>
                    <TextInput
                    style={styles.timeInput}
                    placeholder="1"
                    keyboardType="numeric"
                    value={this.state.time}
                    onChangeText={time => this.updateTime(time)}
                    />
                    </View>
                    <Text style={styles.m}>minute(s)</Text>
                </View>}
                </View>
                <Text style={styles.descriptionTitle}>Description</Text>
                <TextInput
                style={styles.description}
                placeholder="Enter a description for your task. (optional)"
                ></TextInput>
                <View style={styles.bump}>

                </View>
                <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => {
                    // add logic to add task to routine in backend
                    this.props.navigation.navigate('Home')
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
        backgroundColor: '#FAE9CC',
    },
    input: {
        flex: 1,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
    picker: {
        borderWidth: 1,
        margin: 12,
        borderRadius: 8,
        flex: 3,
        height: 80,
        textAlign: 'center',
        backgroundColor: '#FAE9CC',
    },  
    itemStyle: {
        textAlign: 'center',
        backgroundColor: '#FAE9CC',
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
    },
      bottom: {
        flex: 1,
        justifyContent: 'flex-end',
      },
      add: {
        color: '#161b33',
        fontSize: 24,
    },
    min: {
        height: 50,
        width: 75,
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: 'center',
        margin: 12,
    },
    horizBox: {
        flex: 2,
        flexDirection: "row",
        alignItems: 'center',
    },
    timeInput: {
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        height: 50,
    },
    m: {
        marginTop: -8,
        marginLeft: 18,
    },
    description: {
        flex: 5,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        textAlignVertical: 'top'
    },
    bump: {
        flex: 6,
    },
    timeArea: {
        flexDirection: "row",
    },
    name: {
        marginLeft: 12,
        marginTop: 12,
        marginBottom: -8,
        color: '#161b33',
    },
    type: {
        marginBottom: 12,
        marginLeft: 12,
        color: '#161b33',
    },
    descriptionTitle: {
        marginLeft: 12,
        marginTop: 18,
        marginBottom: -8,
        color: '#161b33',
    }
});
