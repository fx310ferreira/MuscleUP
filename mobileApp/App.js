import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Train from './src/views/Train';
import Home from './src/views/Home';
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

function App() {

  const [fontsLoaded] = useFonts({
    'Circular Std': require('./assets/fonts/circular-std.ttf'),
  });

  return fontsLoaded ? (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Train"
        screenOptions={{
          headerShown: false
        }}
        >
        <Stack.Screen name="Train" component={Train} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (<Text>Loading...</Text>);
}

export default App;
