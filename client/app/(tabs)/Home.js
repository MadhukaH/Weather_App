import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch, Alert } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function WeatherApp() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleSwitch = () => setDarkMode(previousMode => !previousMode);

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Log Out",
          onPress: () => console.log("Logged out")
        }
      ]
    );
  };

  const styles = darkMode ? darkStyles : lightStyles;

  return (
    <ScrollView 
      contentContainerStyle={styles.container} 
      showsVerticalScrollIndicator={true}
    >
      {/* Current Weather Section */}
      <View style={styles.topSection}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/partly-cloudy-day--v1.png' }}
          style={styles.weatherIcon}
        />
        <View style={styles.weatherInfo}>
          <Text style={styles.temperature}>35°C | °F</Text>
          <Text style={styles.weatherDetails}>Precipitation: 0%</Text>
          <Text style={styles.weatherDetails}>Humidity: 64%</Text>
          <Text style={styles.weatherDetails}>Wind: 24 km/h</Text>
        </View>
      </View>

      {/* Dark Mode Toggle Switch */}
      <View style={styles.switchContainer}>
        <Text style={styles.modeText}>{darkMode ? "Dark Mode" : "Light Mode"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={darkMode}
        />
      </View>

      {/* Settings and Search Bar */}
      <View style={styles.searchSection}>
        <TouchableOpacity style={styles.settingsButton}>
          <FontAwesome name="user" size={30} color="#555" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#555"
        />
      </View>

      {/* Real-Time Update Section */}
      <View style={styles.realTimeSection}>
        <Text style={styles.sectionTitle}>Real Time Update</Text>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/sun.png' }}
          style={styles.weatherIconSmall}
        />
        <Text style={styles.realTimeTemp}>35°C</Text>
        <Text style={styles.realTimeDetails}>Precipitation: 0% | Humidity: 64% | Wind: 24 km/h</Text>
      </View>

      {/* Forecasting Section */}
      <View style={styles.forecastSection}>
        <Text style={styles.sectionTitle}>Forecasting</Text>
        <View style={styles.forecastDays}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
            <View key={day} style={styles.forecastDay}>
              <Text style={styles.forecastText}>{day}</Text>
              <Text style={styles.forecastTemp}>30° | 25°</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Climate Info Section */}
      <View style={styles.climateInfoSection}>
        <Text style={styles.sectionTitle}>Climate Info</Text>
        <View style={styles.climateData}>
          <Text style={styles.climateText}>Avg High: 32°C</Text>
          <Text style={styles.climateText}>Avg Low: 24°C</Text>
        </View>
      </View>

      {/* Alerts Section */}
      <View style={styles.alertSection}>
        <Text style={styles.sectionTitle}>Alerts</Text>
        <View style={styles.mapsContainer}>
          <Image
            source={{ uri: 'https://i.postimg.cc/NfFtSypb/Screenshot-2024-11-11-154118.png' }}
            style={styles.map}
          />
          <Image
            source={{ uri: 'https://i.postimg.cc/Hx0s2VTH/Screenshot-2024-11-11-155739.png' }}
            style={styles.map}
          />
        </View>
      </View>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Light Mode Styles
const lightStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E6F7FF',
    padding: 16,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B3E5FC',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  weatherInfo: {
    flex: 1,
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  weatherDetails: {
    fontSize: 14,
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  modeText: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingsButton: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#A5D6A7',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  realTimeSection: {
    backgroundColor: '#FFCC80',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  weatherIconSmall: {
    width: 30,
    height: 30,
  },
  realTimeTemp: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 8,
  },
  realTimeDetails: {
    fontSize: 14,
    color: '#333',
  },
  forecastSection: {
    backgroundColor: '#BBDEFB',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  forecastDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  forecastDay: {
    alignItems: 'center',
  },
  forecastText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  forecastTemp: {
    fontSize: 14,
    color: '#333',
  },
  climateInfoSection: {
    backgroundColor: '#C8E6C9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  climateData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  climateText: {
    fontSize: 16,
    color: '#333',
  },
  alertSection: {
    backgroundColor: '#EF9A9A',
    borderRadius: 10,
    padding: 16,
  },
  mapsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  map: {
    width: '49%',
    height: 300,
    borderRadius: 25,
  },
  logoutButton: {
    backgroundColor: '#9370DB',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

// Dark Mode Styles
const darkStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#333',
    padding: 16,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  weatherInfo: {
    flex: 1,
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  weatherDetails: {
    fontSize: 14,
    color: '#FFF',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  modeText: {
    fontSize: 16,
    marginRight: 10,
    color: '#FFF',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingsButton: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#555',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#FFF',
  },
  realTimeSection: {
    backgroundColor: '#FF7043',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFF',
  },
  weatherIconSmall: {
    width: 30,
    height: 30,
  },
  realTimeTemp: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginVertical: 8,
  },
  realTimeDetails: {
    fontSize: 14,
    color: '#FFF',
  },
  forecastSection: {
    backgroundColor: '#FF5722',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  forecastDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  forecastDay: {
    alignItems: 'center',
  },
  forecastText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  forecastTemp: {
    fontSize: 14,
    color: '#FFF',
  },
  climateInfoSection: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  climateData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  climateText: {
    fontSize: 16,
    color: '#FFF',
  },
  alertSection: {
    backgroundColor: '#FF7043',
    borderRadius: 10,
    padding: 16,
  },
  mapsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  map: {
    width: '48%',
    height: 300,
    borderRadius: 25,
  },
  logoutButton: {
    backgroundColor: '#9370DB',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});