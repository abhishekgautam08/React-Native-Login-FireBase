import React, {useState, useEffect} from 'react';
import {Button, TextInput} from 'react-native';
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
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={handleMobileNumberChange}
          value={mobileNumber}
          maxLength={10}
        />
        <Button title="Login" onPress={signInWithPhoneNumber} />
      </>
    );
  }

  return (
    <>
      <TextInput
        value={code}
        keyboardType="numeric"
        onChangeText={handleOtpChange}
        maxLength={6}
        style={styles.input}
      />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   padding: 60,

  //   textAlign: 'center',
  // },
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
