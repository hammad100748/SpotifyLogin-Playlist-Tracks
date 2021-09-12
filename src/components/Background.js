import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Background = ({title, onBackPress, children}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          padding: '5%',
          alignItems: 'center',
        }}>
        {onBackPress && (
          <TouchableOpacity onPress={onBackPress}>
            <Text style={{color: 'white', fontSize: 32}}>{'<'}</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: '88%',
          borderRadius: 25,
          padding: 12,
        }}>
        {children}
      </View>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black', justifyContent: 'center'},
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    marginLeft: 6
  },
});
