import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Detail from './screens/Detail';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Detail />} />
        </Routes>
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100vw', // Ensure full viewport width
    height: '100vh', // Ensure full viewport height
    backgroundColor: '#c6e2eb',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0, // Remove default margins
    padding: 0, // Remove default padding
  },
});
