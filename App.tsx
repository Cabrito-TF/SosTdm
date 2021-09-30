import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppStack from './src/routes/AppStack';

import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-rfk2ss57.us.auth0.com',
  clientId: 'i5RX5jnxVzUHXxWu3ASAfAeWinjACfAF',
});

export default function App() {
  return (
    <>
        <AppStack />
        <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
