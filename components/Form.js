import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Form = ({navigation}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = value => {
    setName(value);
  };

  const handleSubmitDetails = e => {
    navigation.navigate('Logout');
    userDocument();
  };
  const userDocument = () => {
    firestore()
      .collection('User')
      .add({
        name: name,
        number: number,
        email: email,
        address: address,
      })
      .then(() => {
        console.info('User added!!');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fill Your Deatils</Text>
      <Text style={styles.title}>Enter Full Name</Text>
      <TextInput
        style={styles.input}
        keyboardType={'text'}
        onChangeText={handleNameChange}
        value={name}
      />
      <Text style={styles.title}>Enter Mobile Number</Text>
      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        maxLength={10}
        onChangeText={text => setNumber(text)}
        value={number}
      />
      <Text style={styles.title}>Enter Email</Text>
      <TextInput
        style={styles.input}
        keyboardType={'email'}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text style={styles.title}>Enter Address</Text>
      <TextInput
        style={styles.input}
        keyboardType={'text'}
        onChangeText={text => setAddress(text)}
        value={address}
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
