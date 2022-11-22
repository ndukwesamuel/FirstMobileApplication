// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Header from "./components/Header";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
