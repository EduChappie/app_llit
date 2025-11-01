// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import ActivityScreen from "./ActivityScreen";
import QuizScreen from "./QuizScreen";
import CompletionScreen from "./CompletionScreen";

import {
  useFonts,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_700Bold,
} from "@expo-google-fonts/outfit";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* A sua tela principal. O 'headerShown: false' esconde o cabeçalho DUPLO */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Activity"
          component={ActivityScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Completion"
          component={CompletionScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
