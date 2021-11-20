import React, { Component } from 'react';
import { Text, Button, View} from "react-native";

class Register extends Component {
    render () {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Button title="Sign Up" onPress={() => {
                    this.props.navigation.navigate('Home')
                }}></Button>
                <Button title="Login" onPress={() => {
                    this.props.navigation.navigate('Home')
                }}></Button>
            </View>
        );
    }
}

export default Register;