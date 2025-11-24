import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
//Para o botão de voltar
import {
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_700Bold,
  useFonts,
} from "@expo-google-fonts/outfit";
import { Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import { useState } from "react";

// carregamento foto llit
import llia from "../../assets/home/llit_mascote.png";

//DADOS REAIS DO QUIZ
const QUESTIONS = [
  {
    id: 1,
    question: "Qual o sinal de LIBRAS para 'Olá'?",
    correctAnswer: "opcaoA",
    videoUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    options: [
      { id: "opcaoA", text: "Olá!" },
      { id: "opcaoB", text: "Meu nome é..." },
      { id: "opcaoC", text: "Como você está?" },
      { id: "opcaoD", text: "Prazer!" },
    ],
  },
  {
    id: 2,
    question: "Qual o sinal de LIBRAS para 'Meu nome é...'?",
    correctAnswer: "opcaoD",
    videoUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    options: [
      { id: "opcaoA", text: "Eu não entendi" },
      { id: "opcaoB", text: "Prazer!" },
      { id: "opcaoC", text: "Olá!" },
      { id: "opcaoD", text: "Meu nome é..." },
    ],
  },
  {
    id: 3,
    question: "Qual o sinal de LIBRAS para 'Prazer!'?",
    correctAnswer: "opcaoB",
    videoUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    options: [
      { id: "opcaoA", text: "Obrigado!" },
      { id: "opcaoB", text: "Prazer!" },
      { id: "opcaoC", text: "Como você está?" },
      { id: "opcaoD", text: "Até logo!" },
    ],
  },
];
// FIM DOS DADOS

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
    marginTop: 70,
    width: 380,
    height: 312,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginBottom: 30,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
  },
  videoPlayer: {
    width: "100%",
    height: 200,
    marginTop: 10,
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
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 19,
    elevation: 10,
  },
  optionButtonIncorrect: {
    backgroundColor: "#DF2929",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    shadowColor: "#CB0000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 19,
    elevation: 10,
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
  nextButtonText: { color: "#FFFFFF", fontFamily: "Outfit_700Bold", zIndex: 2 },
});

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
          pathname: "./CompletionScreen",
          params: { score: score, total: QUESTIONS.length },
        });
      }
    }
  };

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
          {/* O Botão Voltar  */}
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
              source={{ uri: currentQuestion.videoUrl }}
              style={styles.videoPlayer}
              shouldPlay={true}
              resizeMode="contain"
              isLooping
            />
            
          </View>

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
