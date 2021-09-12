import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="white" />
      <Text style={{color: 'white'}}>Getting Recommended Playlists</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
