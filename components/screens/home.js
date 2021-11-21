import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import DraggableFlatList from 'react-native-draggable-flatlist';


// if there are no tasks, create a message: press add activity to start
// adding to your routine!
class Home extends Component {
    state = {taskList: [{title: 'Mindful Breathing', key: 'task1', description: 'Sit comfortably. Relax, and start counting your breaths from 1 to 5. Count on the exhale. Breathe normally. Gradually start becoming aware of your breathing.', type: 'timer', timer: 2}, 
    {title: 'Mental Noting', key: 'task2', description: 'Find a comfortable place where you will not be disturbed. Notice what you are thinking about at the moment and write it down. Use the form "I am thinking about X".', type: 'reflection'},
    {title: 'Negative Judgments', key: 'task3', description: 'In this exercise we are going to note down when we have negative judgments over the course of the day. Briefly describe the situation. Write down what you were thinking about. Write down the exact words that crossed your mind. Write down how you felt when you were judging the situation. What did you do after the situation?', type: 'untimed'},], }
    setTaskList = (taskList) => {
      this.setState({ taskList: taskList })
    }
    renderItem = ({ item, drag}) => (
        <View>
          <TouchableOpacity 
          style={styles.item}
          onLongPress={drag}
          onPress={() => this.props.navigation.navigate('EditTask')}>
            <Text style= {styles.taskText}>{item?.title}</Text>
          </TouchableOpacity>
        </View>
      );
    

    render () {
        return (
            <View style = {styles.container}>
                <DraggableFlatList
                  data={this.state.taskList}
                  keyExtractor={(item) => item.key}
                  renderItem={this.renderItem}
                  onDragEnd={({ data }) => this.setTaskList(data)}>
                </DraggableFlatList>
                <View style={styles.bottom}>
                <Pressable style={styles.startRoutine} onPress={() => {
                    this.props.navigation.navigate('CurrentRoutine', {taskList: this.state.taskList, num: this.state.taskList.length - 1})
                }}>
                    <Text style ={styles.startText}>Start Routine!</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => {
                    this.props.navigation.navigate('AddTask')
                }}>
                    <Text style ={styles.addText}>Add Task</Text>
                </Pressable>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
      marginBottom: 80,
    },
    startRoutine: {
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
    container: {
        flex: 1,
        backgroundColor: '#FAE9CC',
    },
    startText: {
        color: '#FAE9CC',
        fontSize: 24,
    },
    addText: {
        color: '#161b33',
        fontSize: 24,
    },
    task: {
        height: 100,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    taskText: {
        color: '#161b33',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    item: {
        backgroundColor: 'white',
        marginTop: 10,
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
      },
});

export default Home;