import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Pressable, Image} from "react-native";


class Login extends Component {
    render () {
        const { navigate } = this.props.navigation
        return (
            <View style = {styles.container}>
               
                <View style={styles.bottom}>
                  <Pressable style={styles.button} onPress={() => {
                      this.props.navigation.navigate('Register')
                  }}>
                      <Text style ={styles.addText}>Register</Text>
                  </Pressable>
                  <Pressable style={styles.button} onPress={() => {
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
                  }}>
                      <Text style ={styles.addText}>Login</Text>
                  </Pressable>
                </View>
            </View>
        );
    }
}


export default Login;

const styles = StyleSheet.create({
image:{
width: 100,
height: 100,

},
  addText: {
    color: '#161b33',
    fontSize: 24,
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a7cdbd',
    height: 50,
    padding: 6,
    elevation: 10,
    borderRadius: 8,
    margin: -50,
    borderWidth: 1,
    marginBottom: 80,
    marginLeft: 20,
    marginRight: 20,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#FAE9CC',
  },
  startText: {
    color: '#FAE9CC',
    fontSize: 24,
  }
});