import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login.js';
import Form from './components/Form.js';
import Logout from './components/Logout';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

function App() {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuth);

    return subscriber;
  }, []);
  function handleAuth(user) {
    if (user && navigationRef.isReady()) {
      navigationRef.reset({
        index: 0,
        routes: [{name: 'Form'}],
      });
    }
    console.log('====user====', user);
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Form" component={Form} options={{title: 'Form'}} />
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{title: 'Logout'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
