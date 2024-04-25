import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Event with Friends!</Text>
      <Text style={styles.subtitle}>Discover and share events with your friends.</Text>
      <TouchableOpacity
        style={styles.linkStyle}
        onPress={() => Linking.openURL('https://linke.to/eventwithfriends')}
      >
        <Text style={styles.buttonText}>Download the App Free</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#808080',
    marginBottom: 20,
  },
  linkStyle: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
});

export default Home;
