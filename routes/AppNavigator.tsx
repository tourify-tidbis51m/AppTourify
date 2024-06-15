import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                />
                <Stack.Screen 
                    name="Register" 
                    component={RegisterScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

