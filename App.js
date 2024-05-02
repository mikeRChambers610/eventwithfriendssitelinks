// App.js
import React, { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Detail from './screens/Detail';
import NavBar from './navigation/NavBar'; // Update the path as necessary

export default function App() {

  const [data, setData] = useState(null);


  return (
    <Router>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Detail />} />
          <Route path="/events" element={<Detail />} />
        </Routes>
      </View>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100vw', // Ensure full viewport width
    height: '100vh', // Ensure full viewport height
    backgroundColor: '#c6e2eb',
    alignItems: 'center',
    justifyContent: 'flex-start', // Adjusted to place items correctly
    margin: 0, // Remove default margins
    padding: 0, // Remove default padding
  },
});
