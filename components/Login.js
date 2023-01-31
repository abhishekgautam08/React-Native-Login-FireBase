import React, {useState, useEffect} from 'react';
import {Button, TextInput, Text, View, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {StyleSheet} from 'react-native';
function Login({navigation}) {
  // If null, no SMS has been sent
  const [mobileNumber, setMobileNumber] = useState();
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  // Handle the input login
  const handleMobileNumberChange = mobileNumber => {
    setMobileNumber(mobileNumber);
    value => setTextInputName(value);
  };

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(
      '+91' + mobileNumber.trim(''),
    );
    setConfirm(confirmation);
  }

  // Handle the input verify
  const handleOtpChange = value => {
    setCode(value);
  };

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      navigation.replace('Form');
    } catch (error) {
      Alert.alert('Invalid OTP');
    }
  }

  if (!confirm) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Enter your Mobile Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={handleMobileNumberChange}
          value={mobileNumber}
          maxLength={10}
        />
        <Button title="Login" onPress={signInWithPhoneNumber} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your OTP</Text>
      <TextInput
        value={code}
        keyboardType="numeric"
        onChangeText={handleOtpChange}
        maxLength={6}
        style={styles.input}
      />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
}

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
    padding: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Login;
