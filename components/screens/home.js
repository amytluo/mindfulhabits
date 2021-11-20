import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import DraggableFlatList from 'react-native-draggable-flatlist';

// if there are no tasks, create a message: press add activity to start
// adding to your routine!
class Home extends Component {
    state = {taskList: [{title: 'Task', key: 'task1'}]}
    updateTaskType = (taskType) => {
      this.setState({ taskType: taskType })
   }
    render () {
        return (
            <View style = {styles.container}>
                <FlatList
                  data={this.state.taskList}
                  renderItem={({item, index, separators}) => (
                    <TouchableHighlight
                    key={item.key}
                    onPress={() => this.props.navigation.navigate('EditTask')}>
                        <View style={{backgroundColor: '#FAE9CC'}}>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableHighlight>)}>
                </FlatList>
                <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => {
                    this.props.navigation.navigate('AddTask')
                }}>
                    <Text style ={styles.add}>Add Task</Text>
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
    add: {
        color: '#FAE9CC',
        fontSize: 24,
    },
    task: {

    },
});

export default Home;