import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login.js';
import VerifyOtp from './components/VerifyOtp.js';
import Form from './components/Form.js';
import Logout from './components/Logout.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="VerifyOTP"
          component={VerifyOtp}
          options={{title: 'Verify OTP'}}
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
