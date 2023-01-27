import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {StyleSheet} from 'react-native';
const Logout = () => {
  const handleLogout = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your details Saved Successfully</Text>
      <Button title="Logout" onPress={() => handleLogout()} />
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
