import {
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_700Bold,
  useFonts,
} from "@expo-google-fonts/outfit";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";

import ShareModal from "../../components/raul_components/ShareModal";

export default function HomeScreen() {
  // --- 3. INICIAR O ROUTER ---
  const router = useRouter();

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  let [fontsLoaded] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#0565D9", "#0AB6FC", "#0565D9"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={{ flex: 1 }}>
          {/* --- CABEÇALHO --- */}
          <View style={styles.header}>
            {/* --- 4.  router.back() --- */}
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Detalhes da atividade</Text>
            {/* --- Botão de compartilhar  */}
            <TouchableOpacity onPress={openModal}>
              <Ionicons name="share-social-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* --- Seção do Avatar e Título --- */}
          <View style={styles.titleSection}>
            <View style={styles.avatarCircle}>
              <LinearGradient
                colors={["rgba(0,0,0,0.25)", "transparent"]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.1 }}
                style={styles.innerShadowGradient}
              />
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Iniciante</Text>
            </View>
            <Text style={styles.title}>Masterizando as Conversas Diárias</Text>
          </View>

          {/* --- Bloco Escuro --- */}
          <LinearGradient
            colors={["#004196", "#00054D"]}
            start={{ x: 0.75, y: 0 }}
            end={{ x: 0.25, y: 1 }}
            style={styles.contentContainer}
          >
            {/* --- Seção dos 3 Cards--- */}
            <View style={styles.statsContainer}>
              {/* Card 1 */}
              <View
                style={[
                  styles.statCardBase,
                  {
                    backgroundColor: "#2859C3",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  },
                ]}
              >
                <Image
                  source={require("@/assets/raul_assets/Icone_livro_card1.png")}
                  style={styles.cardIcon}
                />
                <Text style={styles.statNumber}>01</Text>
                <Text style={styles.statLabel}>Atividades</Text>
              </View>
              {/* Card 2 */}
              <View
                style={[
                  styles.statCardBase,
                  {
                    backgroundColor: "#2888C3",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  },
                ]}
              >
                <Image
                  source={require("@/assets/raul_assets/icone_check_card2.png")}
                  style={styles.cardIcon}
                />
                <Text style={styles.statNumber}>03</Text>
                <Text style={styles.statLabel}>Quizes</Text>
              </View>
              {/* Card 3 */}
              <View
                style={[
                  styles.statCardBase,
                  {
                    backgroundColor: "#1C2B6B",
                    borderColor: "rgba(125, 151, 255, 0.2)",
                  },
                ]}
              >
                <Image
                  source={require("@/assets/raul_assets/icone_hora_card3.png")}
                  style={styles.cardIcon}
                />
                <Text style={styles.statNumber}>06</Text>
                <Text style={styles.statLabel}>Minutos</Text>
              </View>
            </View>

            {/* --- Texto de Descrição --- */}
            <Text style={styles.descriptionText}>
              Melhore a sua habilidade de comunicação diária com atividades
              práticas e quizes interativos. Masterize frases comuns e melhore a
              pronúncia
            </Text>

            {/* --- Título "Atividades" --- */}
            <Text style={styles.sectionTitle}>Atividades</Text>

            {/* --- Card da Atividade  --- */}
            <TouchableOpacity style={styles.activityCard}>
              <View style={styles.activityLeft}>
                <Image
                  source={require("@/assets/raul_assets/icone_bandeira.png")}
                  style={styles.activityIcon}
                />
                <View>
                  <Text style={styles.activityText}>
                    Boas vindas e introdução
                  </Text>
                  <Text style={styles.activityDuration}>6 min 14 seg</Text>
                </View>
              </View>
              <View style={styles.activityCheckmark}>
                <Image
                  source={require("@/assets/raul_assets/icone_concluido.png")}
                  style={styles.checkmarkIcon}
                />
              </View>
            </TouchableOpacity>

            {/* --- Botões do Rodapé  --- */}
            <View style={styles.footerButtonContainer}>
              <TouchableOpacity style={styles.bookmarkButton}>
                <Image
                  source={require("@/assets/raul_assets/icone_salvar.png")}
                  style={styles.bookmarkIcon}
                />
              </TouchableOpacity>
              {/* --- 5. MUDADO PARA router.push() --- */}
              <TouchableOpacity
                style={styles.startButton}
                onPress={() => router.push("./ActivityScreen")}
              >
                <LinearGradient
                  colors={["#FFBE0B", "#FB7907"]}
                  style={styles.startButtonGradient}
                >
                  <Text style={styles.startButtonText}>Começar tarefa</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>

      <ShareModal visible={isModalVisible} onClose={closeModal} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: { color: "white", fontSize: 16, fontFamily: "Outfit_700Bold" },
  titleSection: {
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  avatarCircle: {
    width: 148,
    height: 148,
    borderRadius: 74,
    backgroundColor: "#f0f0f0",
    marginBottom: 20,
    overflow: "hidden",
  },
  innerShadowGradient: { width: "100%", height: "100%" },
  tag: {
    backgroundColor: "#ffc107",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  tagText: { color: "#FFFFFF", fontFamily: "Outfit_700Bold", fontSize: 12 },
  title: {
    color: "white",
    fontSize: 24,
    fontFamily: "Outfit_400Regular",
    textAlign: "center",
    maxWidth: 208,
  },
  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    paddingTop: 24,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  statCardBase: {
    width: 116,
    height: 142,
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    alignItems: "flex-start",
  },
  cardIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginBottom: 10,
  },
  statNumber: {
    color: "white",
    fontSize: 27,
    fontFamily: "Outfit_400Regular",
    marginTop: 10,
  },
  statLabel: {
    color: "white",
    fontSize: 12,
    fontFamily: "Outfit_300Light",
    marginTop: 8,
  },
  descriptionText: {
    color: "#D5DCFF",
    fontSize: 16,
    lineHeight: 16 * 1.25,
    marginBottom: 30,
    fontFamily: "Outfit_300Light",
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontFamily: "Outfit_400Regular",
    marginBottom: 20,
  },
  activityCard: {
    backgroundColor: "#223078",
    borderRadius: 20,
    height: 65,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  activityLeft: { flexDirection: "row", alignItems: "center" },
  activityIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 15,
  },
  activityText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Outfit_400Regular",
  },
  activityDuration: {
    color: "#D5DCFF",
    fontSize: 14,
    fontFamily: "Outfit_300Light",
  },
  activityCheckmark: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmarkIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  footerButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  bookmarkButton: {
    width: 46,
    height: 46,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  bookmarkIcon: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  startButton: { flex: 1, height: 46 },
  startButtonGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 37,
    justifyContent: "center",
    alignItems: "center",
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Outfit_700Bold",
  },
});
