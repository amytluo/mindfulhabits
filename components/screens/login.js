import React, { Component } from 'react';
import { Text, Button, View} from "react-native";

class Login extends Component {
    render () {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Button title="Login" onPress={() => {
                    this.props.navigation.navigate('Home')
                }}></Button>
                <Button title="Login" onPress={() => {
                    this.props.navigation.navigate('Home')
                }}></Button>
            </View>
        );
    }
}

export default Login;