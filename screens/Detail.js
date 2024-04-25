import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

const Detail = () => {
  // Function to handle sending the email
  const sendEmail = () => {
    const email = 'support@eventwithfriends.com';
    const subject = 'Event With Friends Inquiry';
    const body = '';
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(url)
      .catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}> 
      <Button
        title="Contact Us"
        onPress={sendEmail}
        color="#1e90ff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default Detail;
