import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_700Bold,
} from "@expo-google-fonts/outfit";

export default function CompletionScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0565D9", "#0AB6FC", "#0565D9"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={StyleSheet.absoluteFill}
      />

      <LinearGradient
        colors={["transparent", "#0024BB"]}
        locations={[0.4, 1.0]}
        style={StyleSheet.absoluteFill}
      />

      {/* 2. O CONTEÚDO */}
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* --- 3. ÍCONE DA MEDALHA --- */}
          <View style={styles.medalContainer}>
            {/* Imagem 1: O Hexágono */}
            <Image
              source={require("./assets/hexa.png")}
              style={styles.hexagonImage}
            />

            {/* Imagem 2: A Medalha Prata */}
            <Image
              source={require("./assets/medalha_prata.png")}
              style={styles.medalImage}
            />
          </View>

          {/* 4. Texto "Parabéns!"*/}
          <Text style={styles.title}>Parabéns!</Text>

          {/* 5. Texto Subtítulo*/}
          <Text style={styles.subtitle}>
            Agora você está preparado para realizar contas básicas de soma
          </Text>

          {/* 6. Botão "Maravilha!"*/}
          <View style={styles.bottomBar}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate("Home")} // Volta para a Home
            >
              <LinearGradient
                colors={["#FFBE0B", "#FB7907"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.actionButtonGradient}
              >
                <LinearGradient
                  colors={["transparent", "rgba(255,255,255,0.35)"]}
                  start={{ x: 0.5, y: 0.6 }}
                  end={{ x: 0.5, y: 1 }}
                  style={styles.buttonInnerShadow}
                />
                <LinearGradient
                  colors={["rgba(255,255,255,0.35)", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.5, y: 0.5 }}
                  style={styles.buttonInnerShadow}
                />
                <Text style={styles.actionButtonText}>Maravilha!</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, backgroundColor: "transparent" },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "transparent",
  },

  // --- ESTILOS DA MEDALHA (Com Imagens) ---
  medalContainer: {
    width: 198,
    height: 198,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  hexagonImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },
  medalImage: {
    top: 9,
    width: 130,
    height: 160,
    resizeMode: "contain",
    position: "absolute",
  },

  title: {
    fontFamily: "Outfit_400Regular",
    fontSize: 40,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontFamily: "Outfit_200ExtraLight",
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    maxWidth: 323,
    lineHeight: 18 * 1.25,
    marginBottom: 40,
  },
  bottomBar: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  actionButton: {
    width: 333,
    height: 58,
  },
  actionButtonGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 37,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  buttonInnerShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Outfit_700Bold",
    zIndex: 2,
  },
});
