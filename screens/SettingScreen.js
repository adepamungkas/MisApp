import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>

      </View>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
