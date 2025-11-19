// App.js (Versão Final e Corrigida)

import {
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_700Bold,
  useFonts,
} from "@expo-google-fonts/outfit";
import { Slot } from "expo-router"; // <-- NOVO: Importamos o Slot
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00254D",
  },
});

export default function App() {
  let [fontsLoaded] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    // Retorna uma tela de carregamento simples enquanto as fontes carregam
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: "white", fontFamily: "Outfit_400Regular" }}>
          Carregando Fontes...
        </Text>
      </View>
    );
  }

  // A SOLUÇÃO FINAL: Retornamos <Slot />, que diz ao Expo Router para
  // renderizar o conteúdo da rota inicial (index.tsx do seu colega).
  return <Slot />;
}
