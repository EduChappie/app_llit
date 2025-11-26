import {
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_700Bold,
  useFonts,
} from "@expo-google-fonts/outfit";
import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";

const QUESTIONS = [
  {
    id: 1,

    correctAnswer: "opcaoA",
    videoUrl: require("@/assets/raul_assets/ola_libras_video.mp4"),
    options: [
      { id: "opcaoA", text: "Olá!" },
      { id: "opcaoB", text: "Meu nome é..." },
      { id: "opcaoC", text: "Como você está?" },
      { id: "opcaoD", text: "Prazer!" },
    ],
  },
  {
    id: 2,

    correctAnswer: "opcaoD",
    videoUrl: require("@/assets/raul_assets/MeuNomeE_libras_video.mp4"),
    options: [
      { id: "opcaoA", text: "Eu não entendi" },
      { id: "opcaoB", text: "Prazer!" },
      { id: "opcaoC", text: "Olá!" },
      { id: "opcaoD", text: "Meu nome é..." },
    ],
  },
  {
    id: 3,

    correctAnswer: "opcaoB",
    videoUrl: require("@/assets/raul_assets/prazerEmConhecelo_libras_video.mp4"),
    options: [
      { id: "opcaoA", text: "Obrigado!" },
      { id: "opcaoB", text: "Prazer em conhecê-lo" },
      { id: "opcaoC", text: "Como você está?" },
      { id: "opcaoD", text: "Até logo!" },
    ],
  },
];
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
    position: "absolute",
    left: 0,
    bottom: 5,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  questionCard: {
    marginTop: 50,
    width: 405,
    height: 229, 
    borderRadius: 15,
    backgroundColor: "#000000",
    marginBottom: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    alignSelf: "center", // Centraliza o card na tela
  },
  videoPlayer: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
  },
  quizCounterText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
    color: "#00254d",
    textAlign: "center",
    marginBottom: 5,
  },
  questionText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 20,
    color: "#00254d",
    textAlign: "center",
    marginTop: 10,
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionButtonTouchable: { width: "48%", marginBottom: 15 },
  optionButtonBase: {
    width: "100%",
    height: 75,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
  },
  optionButtonWhite: { backgroundColor: "#FFFFFF", borderColor: "transparent" },
  optionButtonSelected: {
    backgroundColor: "#FFFFFF",
    borderColor: "#1E90FF",
    borderWidth: 3,
  },
  optionButtonCorrect: {
    backgroundColor: "#29DBDF",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    shadowColor: "#0A4189",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  optionButtonIncorrect: {
    backgroundColor: "#DF2929",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    shadowColor: "#CB0000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
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
    textAlign: "center",
  },
  optionText: {
    color: "#FFFFFF",
    fontFamily: "Outfit_300Light",
    fontSize: 16,
    zIndex: 3,
  },
  optionTextDark: {
    color: "#01748C",
    fontFamily: "Outfit_300Light",
    fontSize: 16,
    zIndex: 3,
  },

  bottomBar: { width: "100%", alignItems: "center", marginTop: 30 },
  nextButton: { width: 333, height: 58, marginTop: 70 },
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
// --- FIM DOS ESTILOS ---

export default function QuizScreen() {
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  let [fontsLoaded] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // --- FUNÇÕES DE LÓGICA ---
  const handleSelectAnswer = (id) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswerId(id);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswerId && !isAnswerSubmitted) return;

    if (!isAnswerSubmitted) {
      setIsAnswerSubmitted(true);
      const isCorrect = selectedAnswerId === currentQuestion.correctAnswer;
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
    } else {
      const nextIndex = currentQuestionIndex + 1;

      if (nextIndex < QUESTIONS.length) {
        setCurrentQuestionIndex(nextIndex);
        setSelectedAnswerId(null);
        setIsAnswerSubmitted(false);
      } else {
        router.push({
          pathname: "/main/CompletionScreen",
          params: { score: score, total: QUESTIONS.length },
        });
      }
    }
  };

  // 3. Lógica de Estilo Dinâmico (Mudar as Cores)
  const getCardStyle = (id) => {
    const isSelected = id === selectedAnswerId;
    const isCorrect = id === currentQuestion.correctAnswer;

    if (!isAnswerSubmitted) {
      return isSelected
        ? styles.optionButtonSelected
        : styles.optionButtonWhite;
    } else {
      if (isCorrect) return styles.optionButtonCorrect;
      if (isSelected && !isCorrect) return styles.optionButtonIncorrect;
      if (isCorrect) return styles.optionButtonCorrect;
      return styles.optionButtonWhite;
    }
  };

  const getTextStyle = (id) => {
    const isSelected = id === selectedAnswerId;
    const isCorrect = id === currentQuestion.correctAnswer;

    if (!isAnswerSubmitted) {
      return styles.optionTextDark;
    } else {
      if (isCorrect || (isSelected && !isCorrect)) return styles.optionText;
      return styles.optionTextDark;
    }
  };

  // O que vai escrito no botão de rodapé
  let nextButtonText = "Enviar resposta";
  if (isAnswerSubmitted) {
    nextButtonText =
      currentQuestionIndex === QUESTIONS.length - 1 ? "Concluir" : "Prosseguir";
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

      <SafeAreaView style={styles.safeArea}>
        {/* Bloco de Cabeçalho */}
        <LinearGradient
          colors={["#09A7F5", "#0673DF"]}
          style={styles.headerBlock}
        >
          {/* --- Botão Voltar --- */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={28} color="white" />
          </TouchableOpacity>
        </LinearGradient>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* 3. Card VÍDEO (Pergunta) */}
          <View style={styles.questionCard}>
            <Video
              // --- CORREÇÃO DO VÍDEO TRAVADO ---
              key={currentQuestion.id} // Isso força o vídeo a recarregar quando a pergunta muda
              // ---------------------------------
              source={currentQuestion.videoUrl}
              style={styles.videoPlayer}
              shouldPlay={true}
              // --- CORREÇÃO DO VÍDEO CORTADO ---
              resizeMode={ResizeMode.CONTAIN} // Usa CONTAIN para mostrar o vídeo inteiro
              // ---------------------------------
              isLooping
              useNativeControls={false}
            />
            
          </View>

          <Text style={styles.questionText}>{currentQuestion.question}</Text>

          {/* 4. Opções de Resposta */}
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={styles.optionButtonTouchable}
                onPress={() => handleSelectAnswer(option.id)}
                disabled={isAnswerSubmitted}
              >
                <View
                  style={[styles.optionButtonBase, getCardStyle(option.id)]}
                >
                  <Text style={getTextStyle(option.id)}>{option.text}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* 5. Botão de Ação */}
          <View style={styles.bottomBar}>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleSubmitAnswer}
              disabled={!selectedAnswerId && !isAnswerSubmitted}
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
                <Text style={styles.nextButtonText}>{nextButtonText}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
