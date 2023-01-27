import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
const Form = ({navigation}) => {
  //   const handleDetailsChange = value => {};

  const handleSubmitDetails = value => {
    navigation.navigate('Logout');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fill Your Deatils</Text>
      <Text style={styles.title}>Enter Full Name</Text>
      <TextInput
        style={styles.input}
        keyboardType="text"
        // onChangeText={handleDetailsChange}
        // value={}
      />
      <Text style={styles.title}>Enter Mobile Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        // onChangeText={handleDetailsChange}
        // value={}
      />
      <Text style={styles.title}>Enter Email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email"
        // onChangeText={handleDetailsChange}
        // value={}
      />
      <Text style={styles.title}>Enter Address</Text>
      <TextInput
        style={styles.input}
        keyboardType="text"
        // onChangeText={handleOtpChange}
        // value={}
      />
      <Button title="Submit" onPress={handleSubmitDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 60,
    textAlign: 'center',
  },
  heading: {
    padding: 10,
    textAlign: 'center',
    fontSize: 30,
  },
  title: {
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Form;
