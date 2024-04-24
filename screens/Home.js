import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom'; // Import Link

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Event with Friends!</Text>
      <Text style={styles.subtitle}>Discover and share events with your friends.</Text>
      <Link to="/details" style={styles.linkStyle}> {/* Use Link here */}
        <Text style={styles.button}>Go to Details</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', // Use full width of the parent container
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Add padding if needed inside the container
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
    color: 'white',
    textDecoration: 'none'
  },
  button: {
    color: 'white',
    textAlign: 'center'
  }
});

export default Home;
