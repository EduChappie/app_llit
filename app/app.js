// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Index from "./index";

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

const linking = {
  prefixes: ["http://localhost:8081", "exp://localhost:8081"],
  config: {
    screens: {
      Index: "",
      Home: "Home",
      Activity: "Activity",
      Quiz: "Quiz",
      Completion: "Completion",
    },
  },
};

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
    <NavigationContainer linking={linking}>

      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
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
