import {
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_700Bold,
  useFonts,
} from "@expo-google-fonts/outfit";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ShareModal from "../../components/raul_components/ShareModal";

export default function HomeScreen() {
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
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Detalhes da atividade</Text>
            <TouchableOpacity onPress={openModal}>
              <Ionicons name="share-social-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.titleSection}>
            <View style={styles.avatarCircle}>
              <Image
                source={require("@/assets/raul_assets/foto_perfil.png")}
                style={styles.avatarImage}
              />
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Iniciante</Text>
            </View>
            <Text style={styles.title}>Masterizando as Conversas Diárias</Text>
          </View>

          <LinearGradient
            colors={["#004196", "#00054D"]}
            start={{ x: 0.75, y: 0 }}
            end={{ x: 0.25, y: 1 }}
            style={styles.contentContainer}
          >
            <View style={styles.statsContainer}>
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

            <Text style={styles.descriptionText}>
              Melhore a sua habilidade de comunicação diária com atividades
              práticas e quizes interativos. Masterize frases comuns e melhore a
              pronúncia
            </Text>

            <Text style={styles.sectionTitle}>Atividades</Text>

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

            <View style={{ flex: 1 }} />

            <View style={styles.footerButtonContainer}>
              <TouchableOpacity style={styles.bookmarkButton}>
                <Image
                  source={require("@/assets/raul_assets/icone_salvar.png")}
                  style={styles.bookmarkIcon}
                />
              </TouchableOpacity>
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
        </View>
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
    marginBottom: 10,
  },
  headerTitle: { color: "white", fontSize: 16, fontFamily: "Outfit_700Bold" },
  titleSection: {
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },

  avatarCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 15,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
  },
  avatarImage: { width: "100%", height: "100%", resizeMode: "cover" },
  tag: {
    backgroundColor: "#ffc107",
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 15,
    marginBottom: 10,
  },
  tagText: { color: "#FFFFFF", fontFamily: "Outfit_700Bold", fontSize: 12 },
  title: {
    color: "white",
    fontSize: 22,
    fontFamily: "Outfit_400Regular",
    textAlign: "center",
    maxWidth: 250,
  },

  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statCardBase: {
    width: 110,
    height: 120,
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cardIcon: { width: 22, height: 22, resizeMode: "contain", marginBottom: 8 },
  statNumber: {
    color: "white",
    fontSize: 24,
    fontFamily: "Outfit_400Regular",
    marginTop: 5,
  },
  statLabel: {
    color: "white",
    fontSize: 11,
    fontFamily: "Outfit_300Light",
    marginTop: 4,
  },

  descriptionText: {
    color: "#D5DCFF",
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 20,
    fontFamily: "Outfit_300Light",
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "Outfit_400Regular",
    marginBottom: 15,
  },

  activityCard: {
    backgroundColor: "#223078",
    borderRadius: 15,
    height: 60,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  activityLeft: { flexDirection: "row", alignItems: "center" },
  activityIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginRight: 12,
  },
  activityText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Outfit_400Regular",
  },
  activityDuration: {
    color: "#D5DCFF",
    fontSize: 12,
    fontFamily: "Outfit_300Light",
  },
  activityCheckmark: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmarkIcon: { width: "100%", height: "100%", resizeMode: "contain" },

  footerButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 45,
  },
  bookmarkButton: {
    width: 46,
    height: 46,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  bookmarkIcon: { width: "80%", height: "80%", resizeMode: "contain" },
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
