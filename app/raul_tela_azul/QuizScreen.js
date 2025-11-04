import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// --- 1. IMPORTAR O ROUTER ---
import {
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_700Bold,
  useFonts,
} from "@expo-google-fonts/outfit";
import { useRouter } from "expo-router";

export default function QuizScreen() {
  // --- 3. INICIAR O ROUTER ---
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
        />

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* 3. Card Branco da Pergunta */}
          <View style={styles.questionCard}></View>

          {/* 4. Opções de Resposta */}
          <View style={styles.optionsContainer}>
            {/* Opção 1 */}
            <TouchableOpacity style={styles.optionButtonTouchable}>
              <View style={styles.optionButtonBlue}>
                {/* Sombra Interna de Cima */}
                <LinearGradient
                  colors={["#00A3CB", "transparent"]}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 0.3 }}
                  style={styles.innerShadow}
                />
                {/* Brilho Interno de Baixo */}
                <LinearGradient
                  colors={["transparent", "rgba(255,255,255,0.25)"]}
                  start={{ x: 0.5, y: 0.7 }}
                  end={{ x: 0.5, y: 1 }}
                  style={styles.innerShadow}
                />
                {/* Fundo Principal */}
                <LinearGradient
                  colors={["#29DBDF", "#07BEF8"]}
                  style={styles.cardBackground}
                />
                {/* Texto */}
                <Text style={styles.optionText}>Texto 1</Text>
              </View>
            </TouchableOpacity>

            {/* Opção 2 */}
            <TouchableOpacity style={styles.optionButtonTouchable}>
              <View style={[styles.optionButtonBase, styles.optionButtonWhite]}>
                <Text style={[styles.optionTextBase, styles.optionTextDark]}>
                  Texto 1
                </Text>
              </View>
            </TouchableOpacity>

            {/* Opção 3 */}
            <TouchableOpacity style={styles.optionButtonTouchable}>
              <View style={[styles.optionButtonBase, styles.optionButtonWhite]}>
                <Text style={[styles.optionTextBase, styles.optionTextDark]}>
                  Texto 1
                </Text>
              </View>
            </TouchableOpacity>

            {/* Opção 4  */}
            <TouchableOpacity style={styles.optionButtonTouchable}>
              <View style={[styles.optionButtonBase, styles.optionButtonWhite]}>
                <Text style={[styles.optionTextBase, styles.optionTextDark]}>
                  Texto 1
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* 5. Botão "Enviar resposta" */}
          <View style={styles.bottomBar}>
            {/* --- 4.router.push() --- */}
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => router.push("./CompletionScreen")}
            >
              <LinearGradient
                colors={["#FFBE0B", "#FB7907"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.nextButtonGradient}
              >
                {/* ... (gradientes internos do botão) ... */}
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
                <Text style={styles.nextButtonText}>Enviar resposta</Text>
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
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  questionCard: {
    marginTop: 70,
    width: 380,
    height: 229,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginBottom: 30,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontFamily: "Outfit_400Regular",
    fontSize: 16,
    color: "#00254d",
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionButtonTouchable: {
    width: "48%",
    marginBottom: 15,
  },
  optionButtonBase: {
    width: "100%",
    height: 75,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  optionButtonBlue: {
    width: "100%",
    height: 75,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.36)",
    shadowColor: "#0A4189",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 19,
    elevation: 10,
  },
  optionButtonWhite: {
    width: "100%",
    height: 75,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",

    backgroundColor: "#FFFFFF",
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
  optionTextBase: {
    fontFamily: "Outfit_300Light",
    fontSize: 16,
    zIndex: 3,
  },
  optionText: {
    fontFamily: "Outfit_300Light",
    fontSize: 16,
    zIndex: 3,

    color: "#FFFFFF",
  },
  optionTextDark: {
    fontFamily: "Outfit_300Light",
    fontSize: 16,
    zIndex: 3,

    color: "#01748C",
  },
  bottomBar: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  nextButton: {
    width: 333,
    height: 58,
    marginTop: 70,
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
