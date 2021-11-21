import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable, Image, Button } from 'react-native';

class UserProfile extends Component {
    render () {
        return (
            <View style={styles.container1}>
            <Text style={styles.nameText}>{"Jackson"}</Text>
            <Image style={styles.profileImage}
            
                source = {require('./images/userprofile.png')}/>
                
                <Text style ={styles.addText2}>You are on a 5 day streak! 🔥 </Text>
                <Text style ={styles.addText2}> Keep it up!</Text>

                <View style={styles.bottom}>
                <Pressable style={styles.startRoutine} onPress={() => {
                    this.props.navigation.navigate('CurrentRoutine')
                }}>
                    <Text style ={styles.startText}>History</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Login')
                }}>
                    <Text style ={styles.addText}>Log Out</Text>
                </Pressable>
                </View>
     
      </View>

            
        );
    }
}
const styles = StyleSheet.create({
    addText2: {
        color: '#161b33',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
        marginTop: 80,
        fontWeight: 'bold',
        fontSize: 24,
    },
    addText: {
        color: '#161b33',
        fontSize: 24,
    },
    container2:{
        height: 45,
        padding: 1,
        elevation: 10,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF595E',
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
    container1: {
        flex: 1,
        backgroundColor: '#FAE9CC',
    },
    viewHistory:{
        flex:1,
    },
    add: {
        color: '#FAE9CC',
        fontSize: 24,
    },
    task: {
        height: 100,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        height: 50,
      padding: 1,
      elevation: 10,
    },
    profileImage:{
        width: 160,
        height: 160,
        borderRadius: 160 / 2,
        marginTop: 10,
        marginLeft: 100,
        padding: 1,

    },
    startRoutine: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#161b33',
        height: 50,
        padding: 10,
        elevation: 10,
        borderRadius: 8,
        margin: 5,
        
      },
    startText: {
        color: '#FAE9CC',
        fontSize: 24,
    },
   
});
export default UserProfile;

