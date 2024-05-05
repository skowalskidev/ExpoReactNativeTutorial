import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@/screens/Home';
import ProfileScreen from '@/screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gallery from '@/screens/Gallery';
import Box from '@/screens/Box';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Gallery" component={Gallery} />
                <Stack.Screen name="Box" component={Box} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
