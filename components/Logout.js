import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
const Logout = ({navigation}) => {
  const handleLogout = () => {
    // navigation.replace('Login');
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your details Saved Successfully</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    alignItems: 'center',
  },
  title: {
    padding: 20,
  },
});
export default Logout;
