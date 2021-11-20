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
                    /** 
                     *   // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}**/
                    this.props.navigation.navigate('Home')
                }}></Button>
            </View>
        );
    }
}

export default Login;