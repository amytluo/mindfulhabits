import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import add from './components/screens/addTask';
import edit from './components/screens/editTask';
import home from './components/screens/home';
import login from './components/screens/login';
import user from './components/screens/userProfile';
import register from './components/screens/register';
import reflection from './components/screens/reflection';
import { TouchableHighlight } from 'react-native';
import { Text, Button, View, Image} from "react-native";
import { USERPROFILE } from './images/index';
import routine from './components/screens/currentRoutine';

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen
          name="Login"
          component={login}
          options={{
            headerTitle: 'Login',
            headerStyle: {
              backgroundColor: '#a7cdbd',
              height: 100,
              borderRadius: 2,
              elevation: 10,
            },
            headerTitleStyle: {
              color: '#161b33',
              fontSize: 35,
              fontWeight: 'bold',
            },
            }}
          />
          
          <stack.Screen 
            name="Register"
            component={register}
            options={{
              headerTitle: 'Register',
              headerStyle: {
              backgroundColor: '#a7cdbd',
              height: 100,
              borderRadius: 2,
              elevation: 10,
            },
            headerTitleStyle: {
              color: '#161b33',
              fontSize: 35,
              fontWeight: 'bold',
            },
            }}
          />
        <stack.Screen
          name="Home"
          component={home}
          options={({navigation}) => ({
            headerTitle: 'Mindful Habits',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#a7cdbd',
              height: 95,
              borderRadius: 8,
              elevation: 10,
            },
            headerTitleStyle: {
              
              color: '#161b33',
              fontSize: 35,
              fontWeight: 'bold',
            },
            headerRight: () => (
              <TouchableHighlight
              style={{  
                width: 60,
                height: 60,
                borderRadius: 100 / 2,
                overflow: "hidden",
                borderWidth: 0,
                marginRight: 8,
                borderColor: "red",
                resizeMode: 'contain'}}
              onPress={() =>navigation.navigate('UserProfile')} >
             <Image 
             style={{
              height: 60,
              width: 60,
             
             }}
                source = {USERPROFILE}/>
              </TouchableHighlight>
             ),
            })}
            />
        <stack.Screen
          name="AddTask"
          component={add}
          options={{
            headerTitle: 'New Task',
            headerStyle: {
              backgroundColor: '#a7cdbd',
              height: 100,
              borderRadius: 2,
              elevation: 10,
            },
            headerTitleStyle: {
              color: '#161b33',
              fontSize: 30,
            },
          }} />
        <stack.Screen
          name="EditTask"
          component={edit}
          options={{
            headerTitle: 'Edit Task',
            headerStyle: {
              backgroundColor: '#a7cdbd',
              height: 100,
              borderRadius: 2,
              elevation: 10,
            },
            headerTitleStyle: {
              color: '#161b33',
              fontSize: 30,
            },
          }} />
        <stack.Screen
          name="UserProfile"
          component={user} 
          options={{
            headerTitle: 'User Profile',
            headerStyle: {
              backgroundColor: '#a7cdbd',
              height: 100,
              borderRadius: 2,
              elevation: 10,
            },
            headerTitleStyle: {
              color: '#161b33',
              fontSize: 30,
            },
          }}/>
        <stack.Screen
          name="Reflection"
          component={reflection} />
        <stack.Screen
          name="CurrentRoutine"
          component={routine}
          options={{
            headerTitle: 'Active Routine',
            headerStyle: {
              backgroundColor: '#a7cdbd',
              height: 100,
              borderRadius: 2,
              elevation: 10,
            },
            headerTitleStyle: {
              color: '#161b33',
              fontSize: 30,
            },
          }} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
