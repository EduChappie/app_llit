// app/raul_tela_azul/_layout.js

import { Stack } from "expo-router";

export default function RaulLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false }}
      // <--- NOVO: Diz ao navegador para começar em HomeScreen.js
      initialRouteName="HomeScreen"
    />
  );
}
