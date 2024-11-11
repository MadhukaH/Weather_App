import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://i.postimg.cc/VLKtWf1y/pexels-pixabay-531756.jpg' }}
      style={styles.background}>
        
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.postimg.cc/ryJSd1pj/pexels-enginakyurt-1486861.jpg' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#8A8A8A"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#8A8A8A"
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupButton}>Sign Up</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  logo: {
    width: 170,
    height: 170,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#90EE90',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
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
  loginButton: {
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
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#6C6C6C',
    fontSize: 16,
    marginVertical: 12,
    textDecorationLine: 'underline',
  },
  socialIcons: {
    flexDirection: 'row',
    marginVertical: 25,
    justifyContent: 'space-between',
    width: '40%',
  },
  socialButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    elevation: 3,
    alignItems: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    color: '#6C6C6C',
    fontSize: 16,
  },
  signupButton: {
    color: '#9370DB',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});