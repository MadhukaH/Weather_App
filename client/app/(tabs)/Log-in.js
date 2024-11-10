import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.postimg.cc/ryJSd1pj/pexels-enginakyurt-1486861.jpg' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder='Email'
        style={styles.input}
        placeholderTextColor='#8A8A8A'
      />
      <TextInput
        placeholder='Password'
        secureTextEntry
        style={styles.input}
        placeholderTextColor='#8A8A8A'
      />
      <TouchableOpacity style={styles.LoginButton}>
        <Text style={styles.LoginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>forgot Password</Text>
      </TouchableOpacity>

      <View style={styles.socialIcons}>

        <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="#EA4335" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name='facebook' size={24} color='#3b5998' />
        </TouchableOpacity>

      </View>
      
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have account?</Text>
        <TouchableOpacity>
            <Text style={styles.signupButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      
    },

  });
  