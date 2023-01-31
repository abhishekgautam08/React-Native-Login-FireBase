import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  BackHandler,
  View,
} from 'react-native';
import {StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Form = ({navigation}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmitDetails = () => {
    if (!name.trim()) {
      alert('Please Enter Name');
      return;
    }

    if (!number.trim()) {
      alert('Please Enter Number');
      return;
    }
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!address.trim()) {
      alert('Please Enter Address');
      return;
    }
    navigation.navigate('Logout');
    userDocument();
    alert('Your Details Saved');
  };
  // useFocusEffect get called each time when screen comes in focus
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        alert('Your Already  Logged in');
        // navigation.navigate('Login');
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

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
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Fill Your Deatils</Text>
        <Text style={styles.title}>Enter Full Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setName(text);
          }}
          value={name}
          placeholder="Full Name"
        />

        <Text style={styles.title}>Enter Mobile Number</Text>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          maxLength={10}
          onChangeText={text => {
            setNumber(text);
          }}
          value={number}
          placeholder="Phone Number"
        />

        <Text style={styles.title}>Enter Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setEmail(text);
          }}
          value={email}
          placeholder="E-mail"
        />
        <Text style={styles.title}>Enter Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setAddress(text);
          }}
          value={address}
          placeholder="Address"
        />

        <Button title="Submit" onPress={handleSubmitDetails} />
      </View>
    </SafeAreaView>
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
