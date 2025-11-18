import {
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_700Bold,
  useFonts,
} from "@expo-google-fonts/outfit";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ShareModal({ visible, onClose }) {
  let [fontsLoaded] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <BlurView intensity={80} tint="dark" style={StyleSheet.absoluteFill}>
        <View style={styles.centeredView}>
          <View style={styles.modalContentContainer}>
            {/* Card 1  */}
            <View style={styles.card1}>
              <Text style={styles.card1Text}>Suas atividades</Text>
            </View>

            {/*Card 2*/}
            <LinearGradient
              colors={["#FFC72C", "#FF9F00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.card2}
            >
              <Text style={styles.shareTitle}>Compartilhar?</Text>
              <Text style={styles.shareSubtitle}>
                Compartilhe com os seus amigos e familiares
              </Text>

              {/*COMPARTILHAMENTO*/}
              <View style={styles.shareButtonsContainer}>
                {/* WhatsApp */}
                <TouchableOpacity style={styles.iconButtonWrapper}>
                  <Image
                    source={require("@/assets/raul_assets/icone_zap_share.png")}
                    style={styles.socialIcon}
                  />
                </TouchableOpacity>
                {/* Instagram */}
                <TouchableOpacity style={styles.iconButtonWrapper}>
                  <Image
                    source={require("@/assets/raul_assets/icone_instagram_share.png")}
                    style={styles.socialIcon}
                  />
                </TouchableOpacity>
                {/* TikTok */}
                <TouchableOpacity style={styles.iconButtonWrapper}>
                  <Image
                    source={require("@/assets/raul_assets/icone_tiktok_share.png")}
                    style={styles.socialIcon}
                  />
                </TouchableOpacity>
                {/* Facebook */}
                <TouchableOpacity style={styles.iconButtonWrapper}>
                  <Image
                    source={require("@/assets/raul_assets/icone_facebook_share.png")}
                    style={styles.socialIcon}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>

            <Image
              source={require("@/assets/raul_assets/pentagono.png")}
              style={styles.pentagonImage}
            />

            {/*Botão Voltar*/}
            <TouchableOpacity style={styles.backButton} onPress={onClose}>
              <LinearGradient
                colors={["#FFBE0B", "#FB7907"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.backButtonGradient}
              >
                <Text style={styles.backButtonText}>Voltar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}

//  ESTILOS
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContentContainer: {
    alignItems: "center",
    position: "relative",
    width: 314,
  },
  card1: {
    width: "100%",
    height: 321,
    borderRadius: 50,
    backgroundColor: "#A87C03",
    paddingTop: 16,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card1Text: {
    fontFamily: "Outfit_400Regular",
    fontSize: 14,
    color: "#DBA717",
    opacity: 1,
    marginBottom: 15,
  },
  card2: {
    width: 294,
    minHeight: 192,
    borderRadius: 40,
    padding: 20,
    paddingTop: 65,
    alignItems: "center",
    position: "absolute",
    top: 90,
    zIndex: 2,
  },
  pentagonImage: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    position: "absolute",
    top: 50,
    zIndex: 3,
  },
  shareTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 3,
  },
  shareSubtitle: {
    fontFamily: "Outfit_400Regular",
    fontSize: 14,
    color: "#A28021",
    textAlign: "center",
    marginBottom: 10,
    maxWidth: "90%",
  },
  shareButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 0,
  },

  socialIcon: {
    width: 71,
    height: 71,
    resizeMode: "contain",
    marginTop: 20,
    marginLeft: 25,
  },
  iconButtonWrapper: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  circleButton: {
    width: 41,
    height: 41,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    width: 333,
    height: 58,
    marginTop: 20,
  },
  backButtonGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 37,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Outfit_700Bold",
  },
});
