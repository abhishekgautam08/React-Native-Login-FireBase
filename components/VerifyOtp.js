import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
export default function VerifyOtp({navigation, route}) {
  const [otp, setOtp] = useState();

  const {confirm} = route.params;
  console.log({
    confirm,
  });
  const handleOtpChange = value => {
    setOtp(value);
  };

  const handleVerifyOtp = async () => {
    const result = await confirmCode(otp);
    console.info('== result: ====', result);
    navigation.navigate('Form');
  };
  function confirmCode(otp) {
    try {
      return confirm.confirm(otp);
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleOtpChange}
        value={otp}
      />

      <Button title="Verify OTP" onPress={handleVerifyOtp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
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
