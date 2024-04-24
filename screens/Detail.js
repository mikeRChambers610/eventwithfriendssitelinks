import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform, Linking } from 'react-native';

const Detail = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  // Function to handle sending the email
  const sendEmail = () => {
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(url)
      .catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setSubject}
        value={subject}
        placeholder="Subject"
      />
      <TextInput
        style={[styles.input, styles.inputMultiline]}
        onChangeText={setBody}
        value={body}
        placeholder="Your message"
        multiline
        numberOfLines={4}
      />
      <Button
        title="Send Email"
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
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  inputMultiline: {
    height: 100,
    textAlignVertical: 'top',
  }
});

export default Detail;
