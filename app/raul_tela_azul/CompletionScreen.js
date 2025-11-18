import {
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_700Bold,
  useFonts,
} from "@expo-google-fonts/outfit";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CompletionScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const score = parseInt(params.score || 0);
  const total = parseInt(params.total || 3);

  let [fontsLoaded] = useFonts({
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const result = (() => {
    if (score === total) {
      return {
        title: "Parabéns!",
        message:
          "Você completou sua primeira conversa básica em LIBRAS! Continue praticando para dominar novas formas de se comunicar.",
        colors: styles.successColors,
        buttonText: "Maravilha!",
      }; // 3/3
    }
    if (score === 2 && total === 3) {
      return {
        title: "Muito bem!",
        message:
          "Ficamos felizes pelo seu desempenho. Mas não se esqueça, a prática leva a perfeição!",
        colors: styles.successColors,
        buttonText: "Maravilha!",
      }; // 2/3
    }
    if (score === 1 && total === 3) {
      return {
        title: "É isso aí!",
        message:
          "Ficamos felizes pelo seu desempenho. Mas não se esqueça, a prática leva a perfeição!",
        colors: styles.successColors,
        buttonText: "Maravilha!",
      }; // 1/3
    }
    return {
      title: "Não foi dessa vez :(",
      message:
        "Não se desmotive! Continue treinando as suas habilidades em LIBRAS para dominar de maneira simples e divertida.",
      colors: styles.failureColors,
      buttonText: "Voltar ao início",
    }; // 0/3 (ou qualquer outro)
  })();

  const isFailureScreen = score === 0;

  return (
    <LinearGradient colors={result.colors} style={styles.container}>
      {isFailureScreen ? (
        <LinearGradient
          colors={["transparent", "#620000"]}
          locations={[0.4, 1.0]}
          style={StyleSheet.absoluteFill}
        />
      ) : (
        <LinearGradient
          colors={["transparent", "#0024BB"]}
          locations={[0.4, 1.0]}
          style={StyleSheet.absoluteFill}
        />
      )}

      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.medalContainer}>
            <Image
              source={require("@/assets/raul_assets/hexa.png")}
              style={styles.hexagonImage}
            />
            <Image
              source={require("@/assets/raul_assets/medalha_prata.png")}
              style={styles.medalImage}
            />
          </View>

          {/* 4.Barra de Progresso*/}
          <View style={styles.scoreBarContainer}>
            <View style={styles.progressBarWrapper}>
              <View
                style={[
                  styles.progressBarTrack,
                  score === 0
                    ? styles.progressBarTrackFailure
                    : styles.progressBarTrackSuccess,
                ]}
              >
                {/*vermelho se score for 0 */}
                {score === 0 && <View style={styles.progressIndicatorRed} />}

                <View
                  style={[
                    styles.progressBarFill,
                    { width: `${(score / total) * 100}%` },
                    score === 0 && { backgroundColor: "transparent" },
                  ]}
                />
                {/* Score textual*/}
                <Text
                  style={styles.scoreTextInsideBar}
                >{`${score}/${total} acertos`}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.title}>{result.title}</Text>
          <Text style={styles.subtitle}>{result.message}</Text>

          <View style={styles.bottomBar}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.replace("/")}
            >
              <LinearGradient
                colors={["#FFBE0B", "#FB7907"]}
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
                <Text style={styles.actionButtonText}>{result.buttonText}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  successColors: ["#0565D9", "#0AB6FC", "#0565D9"],
  failureColors: ["#E40000", "#ac0606ff", "#980a0aff"],

  container: {
    flex: 1,
    position: "relative",
  },
  safeArea: { flex: 1, backgroundColor: "transparent" },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingBottom: 40,
  },

  // BARRA DE SCORE
  scoreBarContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  progressBarWrapper: {
    width: 229,
    height: 19,
    borderRadius: 21,
    overflow: "hidden",
    position: "relative",
    borderWidth: 0.7,
    borderColor: "rgba(255,255,255,0.24)",
  },
  progressBarTrack: {
    width: "100%",
    height: "100%",
    borderRadius: 21,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarTrackSuccess: {
    backgroundColor: "#003C81",
  },
  progressBarTrackFailure: {
    backgroundColor: "#810000",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#FFBE0B",
    borderRadius: 21,
    position: "absolute",
    top: 0,
    left: 0,
  },
  progressIndicatorRed: {
    width: 15,
    height: 19,
    borderRadius: 10,
    backgroundColor: "#FF0000",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  scoreTextInsideBar: {
    fontFamily: "Outfit_400Regular",
    fontSize: 14,
    color: "white",
    zIndex: 11,
  },
  // FIM

  // ESTILOS
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
  bottomBar: { width: "100%", alignItems: "center", marginTop: 20 },
  actionButton: { width: 333, height: 58 },
  actionButtonGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 37,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  actionButtonText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
    color: "#FFFFFF",
    zIndex: 2,
  },
  // ESTILOS DA MEDALHA
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
  buttonInnerShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});
