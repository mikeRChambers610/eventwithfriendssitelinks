import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation(); // Get the current location
  const isActive = (path) => location.pathname === path; // Function to check if the path is active

  return (
    <View style={styles.navBar}>
      <Image source={require('../assets/officialappicon.png')} style={styles.icon} />
      <Link to="/" style={isActive('/') ? styles.activeLinkStyle : styles.linkStyle}>
        <Text>Home</Text>
      </Link>
      <Link to="/details" style={isActive('/details') ? styles.activeLinkStyle : styles.linkStyle}>
        <Text>Contact</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center', // Ensure items in the navbar are vertically aligned
    justifyContent: 'flex-start', // Align items to the left
    paddingVertical: 10,
    paddingHorizontal: 20, // Padding on the sides to ensure items aren’t too close to the edge
    width: '100%',
    backgroundColor: '#e4f1fa', // Slightly lighter blue than the original
  },
  linkStyle: {
    padding: 10,
    marginRight: 20, // Space between items
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  activeLinkStyle: {
    padding: 10,
    marginRight: 20,
    color: '#0288D1', // Highlight color for active link
    fontSize: 18,
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  icon: {
    width: 65, // Set the width of the icon
    height: 65, // Set the height of the icon
    marginRight: 20, // Space between the icon and the text links
  }
});

export default NavBar;
