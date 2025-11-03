import { router } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

// --- ÁREA DE EDIÇÃO DOS AVATARES ---
const AVATARES = [
  { id: '5', type: 'image', value: require('../assets/images/bixo1.png') },
  { id: '6', type: 'image', value: require('../assets/images/bixo2.png') },
  { id: '7', type: 'image', value: require('../assets/images/bixo3.png') },
  { id: '8', type: 'image', value: require('../assets/images/bixa2.png') },
];

const CreateUserScreen = () => {
  const [nome, setNome] = useState('');
  const [avatarSelecionado, setAvatarSelecionado] = useState(AVATARES[0].id); 

  const renderAvatar = (avatar) => {
    if (avatar.type === 'image') {
      return <Image source={avatar.value} style={styles.avatarImage} />;
    }
    return <View style={[styles.avatarImage, { backgroundColor: avatar.value }]} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* --- BOTÃO VOLTAR --- */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>{"< Voltar"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={() => router.push('/(tabs)')}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>

      {/* --- BARRA DE PROGRESSO --- */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>
      <View style={styles.progressLabels}>
        <Text style={[styles.progressLabel, styles.progressLabelActive]}>Avatar</Text>
        <Text style={styles.progressLabel}>Modo</Text>
        <Text style={styles.progressLabel}>Confirmação</Text>
      </View>

      {/* --- IMAGEM CENTRAL --- */}
      <Image 
        source={require('../assets/images/BIXO.png')} 
        style={styles.mascote}
      />

      {/* --- TEXTOS --- */}
      <Text style={styles.title}>Vamos criar o seu usuário</Text>
      <Text style={styles.description}>
        Escreva o seu nome no campo abaixo! Não se preocupe, você poderá mudar suas informações no campo de perfil!
      </Text>

      {/* --- INPUT DE NOME --- */}
      <TextInput
        style={styles.input}
        placeholder="_____"
        placeholderTextColor="#E0E0E0"
        value={nome}
        onChangeText={setNome}
        autoCapitalize="sentences" 
      />

      {/* --- SELEÇÃO DE AVATAR --- */}
      <Text style={styles.avatarTitle}>Personalize o seu perfil!</Text>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        style={styles.scrollView}
        contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 20 }} 
        snapToInterval={110} 
        decelerationRate="fast" 
      >
        {AVATARES.map((avatar, index) => {
          const isSelected = avatarSelecionado === avatar.id;
          return (
            <TouchableOpacity 
              key={avatar.id} 
              style={[
                styles.avatarContainer, 
                isSelected && styles.avatarSelecionado
              ]}
              onPress={() => setAvatarSelecionado(avatar.id)}
            >
              {renderAvatar(avatar)}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* --- BOTÃO PROSSEGUIR --- */}
      <TouchableOpacity 
        style={styles.proceedButton} 
        onPress={() => router.push('/accountCreated')} 
      >
        <Text style={styles.proceedButtonText}>Prosseguir</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8', 
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#555',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#555',
  },
  progressBarContainer: {
    width: '90%',
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginTop: 10,
  },
  progressBar: {
    width: '33%', 
    height: '100%',
    backgroundColor: '#FFA500', 
    borderRadius: 5,
  },
  progressLabels: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  progressLabel: {
    fontSize: 12,
    color: '#AAA',
  },
  progressLabelActive: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
  mascote: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 10,
  },
  input: {
    width: '80%', 
    height: 60, 
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 25,
    backgroundColor: '#fff',
    color: '#333333',
  },
  avatarTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 10,
  },
  scrollView: {
    maxHeight: 120, 
    width: '100%',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40, 
    marginHorizontal: 15, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  avatarSelecionado: {
    borderColor: '#FFA500',
    borderWidth: 4,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  proceedButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 18,
    width: '90%',
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute', 
    bottom: 40,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateUserScreen;