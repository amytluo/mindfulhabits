import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';


// if there are no tasks, create a message: press add activity to start
// adding to your routine!
class Home extends Component {
    state = {taskList: [{title: 'Task 1', key: 'task1', description: 'description', type: 'timer', timer: 2}, 
    {title: 'Task 2', key: 'task2', description: 'description', type: 'reflection'},
    {title: 'Task 3', key: 'task3', description: 'description', type: 'untimed'},], }
    setTaskList = (taskList) => {
      this.setState({ taskList: taskList })
    }
    renderItem = ({ item, drag}) => (
        <View>
          <TouchableOpacity 
          style={styles.item}
          onLongPress={drag}
          onPress={() => this.props.navigation.navigate('EditTask')}>
            <Text>{item?.title}</Text>
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
        color: 'floralwhite',
        fontSize: 24,
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