import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

function Home({navigation}) {
  const [mobileNumber, setMobileNumber] = useState();
  const [confirm, setConfirm] = useState(null);
  // const [textInputName, setTextInputName] = useState('');

  const handleMobileNumberChange = mobileNumber => {
    setMobileNumber(mobileNumber);
    value => setTextInputName(value);
  };
  useEffect(() => {
    if (confirm) {
      navigation.navigate('VerifyOTP', {
        confirm: confirm,
      });
    }
  }, [confirm]);

  const handleSendOtp = async () => {
    // if (!textInputName.trim()) {
    //   alert('Please Enter Number');
    //   return;
    // }
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        '+91' + mobileNumber.trim(''),
      );
      setConfirm(confirmation);
    } catch (error) {
      console.error('Error in sending otp: error:', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Mobile Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={handleMobileNumberChange}
          value={mobileNumber}
        />
        <Button title="Send OTP" onPress={handleSendOtp} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    textAlign: 'center',
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
export default Home;
