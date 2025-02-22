// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    // El usuario ya ha iniciado sesión, redirige a la pantalla principal
                    navigation.replace('Main');
                } else {
                    // El usuario no ha iniciado sesión, redirige a la pantalla de inicio de sesión
                    navigation.replace('Login');
                }
            } catch (error) {
                console.error('Error checking login:', error);
                navigation.replace('Login'); // Redirige a Login en caso de error
            }
        };

        // Simula una carga de 2 segundos antes de verificar el inicio de sesión
        setTimeout(checkLogin, 2000);
    }, [navigation, setTimeout]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tigritos App</Text>
            <ActivityIndicator size="large" color="#007AFF" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default SplashScreen;