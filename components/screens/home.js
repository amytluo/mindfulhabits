import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

// if there are no tasks, create a message: press add activity to start
// adding to your routine!
class Home extends Component {
    render () {
        const { navigate } = this.props.navigation
        return (
            <View style = {styles.container}>
                <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => {
                    this.props.navigation.navigate('AddTask')
                }}>
                    <Text style ={styles.add}>Add Action</Text>
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
});

export default Home;