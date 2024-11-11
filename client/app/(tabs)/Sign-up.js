import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SignUpScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://i.postimg.cc/VLKtWf1y/pexels-pixabay-531756.jpg' }}
      style={styles.background}>
    
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.postimg.cc/ryJSd1pj/pexels-enginakyurt-1486861.jpg' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          placeholder="Name"
          style={styles.input}
          placeholderTextColor="#8A8A8A"
        />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          placeholderTextColor="#8A8A8A"
        />
        <TextInput
          placeholder="Password (Up to 6 Characters)"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#8A8A8A"
        />
        <TextInput
          placeholder="Re-enter Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#8A8A8A"
        />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 170,
    height: 170,
    borderRadius: 100,
    marginBottom: 14,
    marginTop: 17,
    borderColor: '#90EE90',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    width: '100%',
    backgroundColor: '#E6E6FA',
    borderRadius: 15,
    padding: 15,
    marginVertical: 12,
    color: '#000',
    elevation: 4,
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#9370DB',
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialIcons: {
    flexDirection: 'row',
    marginVertical: 25,
    justifyContent: 'space-between',
    width: '50%',
  },
  socialButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    elevation: 3,
    alignItems: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  loginText: {
    color: '#6C6C6C',
    fontSize: 16,
  },
  loginButton: {
    color: '#9370DB',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});