import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Button, SafeAreaView, View, BackHandler} from 'react-native';
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
const Logout = ({navigation}) => {
  async function handleLogout() {
    await auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      });
  }

  // useFocusEffect get called each time when screen comes in focus
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        alert('Your detail is already saved');
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
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    alignItems: 'center',
  },
  // title: {
  //   padding: 20,
  // },
});
export default Logout;
