import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import add from './components/screens/addTask';
import edit from './components/screens/editTask';
import home from './components/screens/home';
import login from './components/screens/login';
import user from './components/screens/userProfile';
import register from './components/screens/register';

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Login"
          component={login} />
        <stack.Screen
          name="Home"
          component={home}
          options={{
            headerTitle: 'Mindful Routine',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#a7cdbd',
              height: 85,
            },
            headerTitleStyle: {
              color: '#161b33',
              fontSize: 35,
              fontWeight: 'bold',
            },
          }} /> 
        <stack.Screen
          name="AddTask"
          component={add}
          options={{
            headerTitle: 'New Action',
            headerStyle: {
              backgroundColor: '#FAE9CC',
              height: 85,
            },
            headerTitleStyle: {
              color: '#161b33',
              fontSize: 30,
              fontWeight: 'bold',
            },
          }} />
        <stack.Screen
          name="EditTask"
          component={edit} />
        <stack.Screen
          name="UserProfile"
          component={user} />
        <stack.Screen
          name="Register"
          component={register} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
