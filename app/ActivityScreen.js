import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_700Bold,
  useFonts,
} from "@expo-google-fonts/outfit";
import { useRouter } from "expo-router";

export default function ActivityScreen() {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
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
        {/* Bloco de Cabeçalho */}
        <LinearGradient
          colors={["#09A7F5", "#0673DF"]}
          style={styles.headerBlock}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={28} color="white" />
          </TouchableOpacity>
        </LinearGradient>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.cardCyan}>
            <LinearGradient
              colors={["#00A3CB", "transparent"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 0.3 }}
              style={styles.innerShadow}
            />
            <LinearGradient
              colors={["transparent", "rgba(255,255,255,0.25)"]}
              start={{ x: 0.5, y: 0.7 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.innerShadow}
            />
            <LinearGradient
              colors={["#29DBDF", "#07BEF8"]}
              style={styles.cardBackground}
            />
          </View>

          <View style={styles.cardWhite} />

          {/* Botão "Próximo passo"  */}
          <View style={styles.bottomBar}>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => router.push("./QuizScreen")}
            >
              <LinearGradient
                colors={["#FFBE0B", "#FB7907"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.nextButtonGradient}
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
                <Text style={styles.nextButtonText}>Próximo passo</Text>
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
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "transparent",
  },
  headerBlock: {
    height: 105,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.41)",
    shadowColor: "#0F67BA",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,

    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  backButton: {
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  cardCyan: {
    marginTop: 70,
    width: 380,
    height: 312,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.36)",
    marginBottom: 20,
    overflow: "hidden",
  },
  cardBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  innerShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  cardWhite: {
    width: 379,
    height: 229,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  bottomBar: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  nextButton: {
    width: 333,
    height: 58,
  },
  nextButtonGradient: {
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
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Outfit_700Bold",
    zIndex: 2,
  },
});
