import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Linking
} from 'react-native';
import { Image } from 'expo-image';

function Home() {
  const screenWidth = Dimensions.get('window').width; // Moved screenWidth here

  // Sample data for images using direct require
  const imageData = [
    { id: '1', uri: require('../assets/image1.png'), title: 'Chat Screen' },
    { id: '2', uri: require('../assets/image2.png'), title: 'Home Screen' },
    { id: '4', uri: require('../assets/image4.png'), title: 'Events Screen' },
    { id: '5', uri: require('../assets/image5.png'), title: 'Events Screen' }, 
    { id: '6', uri: require('../assets/image6.png'), title: 'Events Screen' }, 
    { id: '7', uri: require('../assets/image7.png'), title: 'Events Screen' },  
  ];

  return ( 
    <View style={styles.container}>
      <ScrollView>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
          marginBottom: 10,
        }}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to Event with Friends!</Text>
            <Text style={styles.subtitle}>Discover and share events with your friends.</Text>
            <TouchableOpacity
              style={styles.linkStyle}
              onPress={() => Linking.openURL('https://linke.to/eventwithfriends')}
            >
              <Text style={styles.buttonText}>Download the App Free</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            data={imageData}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',  
    paddingTop: 20,
    paddingHorizontal: 10,  
  }, 
  textContainer: {
    alignSelf: 'center',  
    textAlign: 'center',  // Center text horizontally
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',  // Center text horizontally
  },
  subtitle: {
    fontSize: 16,
    color: '#808080',
    marginBottom: 20,
    textAlign: 'center',  // Center text horizontally
  },
  linkStyle: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }, 
  imageContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 600,
    borderRadius: 10,
    marginBottom: 25,
  },
});

export default Home;
